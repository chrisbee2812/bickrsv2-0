import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';

export function IAMAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    { role: 'assistant', text: "Hello! I'm Chris's IAM AI Consultant Assistant. I can tell you about his 30 years of Microsoft expertise or his transition into IAM. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: userMsg,
          history: messages.map(m => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.text }]
          }))
        })
      });
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', text: data.text }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', text: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-none shadow-2xl transition-all hover:scale-105 z-50 flex items-center justify-center border-l-4 border-slate-950"
        id="ai-assistant-toggle"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-137.5 bg-slate-950 border border-slate-900 rounded-none shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            <div className="p-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></div>
                <span className="font-mono text-[10px] uppercase font-black tracking-[0.3em] text-white">Assistant Protocol</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.03),transparent)]">
              {messages.map((msg, i) => (
                <div key={i} className={cn("flex flex-col", msg.role === 'user' ? "items-end" : "items-start")}>
                  <div className={cn("text-[8px] uppercase font-black mb-2 tracking-widest", msg.role === 'user' ? "text-slate-600" : "text-cyan-500")}>
                    {msg.role === 'user' ? "Origin" : "Assistant"}
                  </div>
                  <div className={cn("px-4 py-3 text-sm leading-relaxed", 
                    msg.role === 'user' ? "bg-slate-900 text-slate-300 border-r-2 border-slate-700" : "bg-slate-900 border-l-2 border-cyan-500 text-slate-200")}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-3 text-slate-600 font-mono text-[10px] uppercase tracking-widest">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-cyan-500 animate-bounce"></div>
                    <div className="w-1 h-1 bg-cyan-500 animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1 h-1 bg-cyan-500 animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                  Processing...
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-950 border-t border-slate-900 flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Secure Transmission..."
                className="flex-1 bg-slate-950 border-b border-slate-900 px-2 py-3 text-xs focus:outline-none focus:border-cyan-500 transition-colors uppercase font-black tracking-widest text-white placeholder:text-slate-800"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="p-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 disabled:opacity-50 transition-colors"
                id="send-ai-message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
