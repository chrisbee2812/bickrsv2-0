import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Gemini API Setup
  const ai = new GoogleGenAI({ 
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // API Route for AI Assistant
  app.post("/api/assistant", async (req, res) => {
    try {
      const { message, history } = req.body;
      
      const chat = ai.models.generateContent({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: `You are the AI Assistant for Chris Bicknell, a highly experienced Microsoft Infrastructure Expert transitioning into an IAM (Identity and Access Management) Consultant role. 
          Your primary goal is to represent Chris's 30+ years of expertise in Active Directory, Exchange, Azure, and M365.
          You should help visitors understand Chris's transition into IAM, his deep technical knowledge, and why he is a top strategy candidate for IAM roles.
          Be professional, technical, and confident. 
          If asked about his experience, mention Chris's 30-year legacy with Microsoft products.
          If asked about IAM, talk about his expertise in Entra ID (formerly Azure AD), Identity Governance, Conditional Access, and Zero Trust architectures.`,
        },
        contents: [
          ...(history || []),
          { role: "user", parts: [{ text: message }] }
        ]
      });

      const response = await chat;
      res.json({ text: response.text });
    } catch (error) {
      console.error("Assistant Error:", error);
      res.status(500).json({ error: "Failed to get AI response" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
