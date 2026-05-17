import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative pt-40 pb-20 overflow-hidden" id="home">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-cyan-500/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-6 mb-12">
            <div className="text-[10px] tracking-[0.4em] font-mono text-cyan-500 uppercase">IAM // Identity Specialist</div>
            <div className="h-px w-12 bg-slate-800"></div>
            <div className="text-[10px] tracking-[0.4em] font-mono text-slate-500 uppercase">EST. 1994</div>
          </div>
          
          <div className="flex items-center gap-6 mb-8">
            <h2 className="text-xl font-black text-cyan-500 uppercase tracking-[0.2em] italic">Chris Bicknell //</h2>
            <div className="h-px flex-1 bg-slate-800"></div>
          </div>
          
          <h1 className="text-[clamp(3.5rem,10vw,8rem)] leading-[0.85] font-black tracking-tighter uppercase mb-12 text-white">
            Securing<br/>Identity<br/><span className="text-cyan-500">at Scale.</span>
          </h1>
          
          <div className="grid grid-cols-12 gap-12 items-end">
            <div className="col-span-12 md:col-span-7">
              <p className="text-2xl text-slate-400 leading-relaxed mb-12 max-w-xl font-medium">
                Three decades of infrastructure legacy. From the first Windows NT domains to global Azure ID governance. Delivering Zero Trust architectures for the modern enterprise.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <Link
                  to="/experience"
                  className="px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black uppercase tracking-widest text-xs transition-all shadow-2xl shadow-cyan-500/20"
                >
                  Legacy Pipeline
                </Link>
                <Link
                  to="/contact"
                  className="px-10 py-5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-black uppercase tracking-widest text-xs transition-all"
                >
                  Strategic Network
                </Link>
              </div>
            </div>

            <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl backdrop-blur-sm">
                <div className="text-5xl font-black text-cyan-500 leading-none mb-2 tabular-nums tracking-tighter">30+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500">Years Experience</div>
              </div>
              <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl backdrop-blur-sm">
                <div className="text-5xl font-black text-cyan-500 leading-none mb-2 tracking-tighter">ZERO</div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500">Trust Focus</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
