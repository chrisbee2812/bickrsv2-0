import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { IAMAssistant } from './components/IAMAssistant';
import Home from './pages/Home';
import ExperiencePage from './pages/Experience';
import SkillsPage from './pages/Skills';
import BlogPage from './pages/Blog';
import ContactPage from './pages/Contact';
import BlogPostDetail from './pages/BlogPostDetail';
import { Shield, Linkedin, Mail } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Footer() {
  return (
    <footer className="py-20 border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <div className="flex items-center gap-6 mb-6">
              <span className="font-display font-black text-xl tracking-tighter text-white uppercase italic">Chris Bicknell</span>
              <div className="h-px w-12 bg-slate-900"></div>
              <span className="font-display font-black text-xl tracking-tighter text-white uppercase italic">Identity<span className="text-cyan-500">First</span></span>
            </div>
            <p className="text-slate-600 text-xs uppercase font-black tracking-widest max-w-sm">
              Securing the enterprise frontier through three decades of infrastructure legacy.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="p-4 bg-slate-950 border border-slate-900 text-slate-500 hover:text-cyan-500 hover:border-cyan-500 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-4 bg-slate-950 border border-slate-900 text-slate-500 hover:text-cyan-500 hover:border-cyan-500 transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-mono text-slate-800 uppercase tracking-[0.5em]">
          <div>Protocol // IAM-CONSULTANT-V1</div>
          <div>© 2026 IDENTITY FIRST. ALL RIGHTS RESERVED.</div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-950 selection:bg-cyan-500/30 font-sans flex flex-col">
        <Navbar />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
        <IAMAssistant />
      </div>
    </BrowserRouter>
  );
}

