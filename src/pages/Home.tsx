import React from 'react';
import { Hero } from '../components/Hero';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { SkillGrid } from '../components/SkillGrid';
import { BlogPreview } from '../components/BlogPreview';
import { Contact } from '../components/Contact';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Shortened Highlights */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-end mb-12">
             <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">Legacy // <span className="text-cyan-500">Highlight.</span></h2>
             <Link to="/experience" className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500 flex items-center gap-2 hover:gap-4 transition-all">
                Full Timeline <ArrowRight className="w-4 h-4" />
             </Link>
           </div>
           {/* We can re-use the ExperienceTimeline but maybe with a 'limit' prop if we modify it, 
               or just show a simplified version here. For now, let's keep it simple. */}
           <div className="p-10 bg-slate-900/50 border border-slate-800 rounded-xl">
             <div className="text-cyan-500 text-xs font-mono mb-4 uppercase tracking-[0.4em]">Current Status // 2024 - Present</div>
             <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-4">Independent IAM Architect</h3>
             <p className="text-slate-400 max-w-2xl leading-relaxed">Transitioning 30 years of Microsoft core expertise into modern Entra ID governance and Zero Trust architectures.</p>
           </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
             <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">Mastery // <span className="text-cyan-500">Core.</span></h2>
             <Link to="/skills" className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500 flex items-center gap-2 hover:gap-4 transition-all">
                Full Skillset <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="p-8 bg-slate-950 border border-slate-900">
               <div className="text-cyan-500 font-black uppercase tracking-widest text-[10px] mb-4 text-center">Identity</div>
               <div className="text-2xl font-black text-white text-center uppercase tracking-tight italic">Entra ID</div>
             </div>
             <div className="p-8 bg-slate-950 border border-slate-900">
               <div className="text-cyan-500 font-black uppercase tracking-widest text-[10px] mb-4 text-center">Core DNA</div>
               <div className="text-2xl font-black text-white text-center uppercase tracking-tight italic">Active Directory</div>
             </div>
             <div className="p-8 bg-slate-950 border border-slate-900">
               <div className="text-cyan-500 font-black uppercase tracking-widest text-[10px] mb-4 text-center">Framework</div>
               <div className="text-2xl font-black text-white text-center uppercase tracking-tight italic">Zero Trust</div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
             <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">Ink // <span className="text-cyan-500">Perspectives.</span></h2>
             <Link to="/blog" className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500 flex items-center gap-2 hover:gap-4 transition-all">
                Full Journal <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
          {/* Mockup highlight of 1 blog post */}
          <div className="group cursor-pointer">
             <div className="text-[10px] tracking-[0.3em] font-mono text-slate-500 uppercase mb-4">Latest Publication // May 2026</div>
             <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none mb-6 group-hover:text-cyan-400 transition-colors">From Active Directory to Entra ID: The Identity Evolution</h3>
             <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">Reflecting on 30 years of AD and why the shift to Entra ID is more than just a name change—it's a paradigm shift in security.</p>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
