import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Globe, MessageSquare, Download, Terminal } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-32 bg-slate-900/30" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-24">
          <div>
            <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black text-white leading-none uppercase tracking-tighter mb-12">
              Strategic<br/><span className="text-cyan-500">Inquiry.</span>
            </h2>
            <p className="text-2xl text-slate-400 leading-relaxed font-medium mb-12">
              Looking for a consultant with deep Microsoft roots or to discuss the future of Entra ID? Establish contact below.
            </p>
            
            <div className="space-y-4">
              <a href="#" className="flex items-center justify-between p-6 bg-slate-950 border border-slate-900 hover:border-cyan-500 transition-colors group">
                <div className="flex items-center gap-4">
                  <Linkedin className="w-5 h-5 text-cyan-500" />
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-white">LinkedIn Network</span>
                </div>
                <div className="h-px w-12 bg-slate-900 group-hover:bg-cyan-500 transition-all"></div>
              </a>
              <a href="mailto:contact@iamconsultant.com" className="flex items-center justify-between p-6 bg-slate-950 border border-slate-900 hover:border-cyan-500 transition-colors group">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-cyan-500" />
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-white">Direct HQ</span>
                </div>
                <div className="h-px w-12 bg-slate-900 group-hover:bg-cyan-500 transition-all"></div>
              </a>
            </div>
          </div>

          <div className="p-12 bg-slate-950 border border-slate-900 relative">
             <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
               <Terminal className="w-64 h-64 text-cyan-500" />
             </div>
             
             <h3 className="text-xs font-black uppercase tracking-[0.5em] text-slate-500 mb-10">Send Direct Secure Transmission</h3>
             <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-2 gap-8">
                 <div className="space-y-4">
                   <label className="text-[10px] uppercase font-black text-slate-600 tracking-[0.3em]">Full Name</label>
                   <input type="text" className="w-full bg-slate-950 border-b border-slate-800 py-2 text-sm focus:border-cyan-500 outline-none transition-colors font-medium placeholder:text-slate-800" placeholder="John Doe" />
                 </div>
                 <div className="space-y-4">
                   <label className="text-[10px] uppercase font-black text-slate-600 tracking-[0.3em]">Org Level</label>
                   <input type="text" className="w-full bg-slate-950 border-b border-slate-800 py-2 text-sm focus:border-cyan-500 outline-none transition-colors font-medium placeholder:text-slate-800" placeholder="Enterprise" />
                 </div>
               </div>
               <div className="space-y-4">
                 <label className="text-[10px] uppercase font-black text-slate-600 tracking-[0.3em]">Objective</label>
                 <select className="w-full bg-slate-950 border-b border-slate-800 py-2 text-sm focus:border-cyan-500 outline-none transition-colors font-medium appearance-none">
                   <option>IAM Strategy & Architecture</option>
                   <option>Career Opportunities</option>
                   <option>Technical Consultation</option>
                   <option>Zero Trust Roadmap</option>
                 </select>
               </div>
               <div className="space-y-4">
                 <label className="text-[10px] uppercase font-black text-slate-600 tracking-[0.3em]">Transmission Body</label>
                 <textarea rows={4} className="w-full bg-slate-950 border border-slate-800 p-4 text-sm focus:border-cyan-500 outline-none transition-colors font-medium resize-none placeholder:text-slate-800" placeholder="State your mission..." />
               </div>
               <button className="w-full py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black uppercase tracking-[0.4em] text-xs transition-all shadow-2xl shadow-cyan-500/20">
                 Commit Sequence
               </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const Shield = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
  </svg>
);
