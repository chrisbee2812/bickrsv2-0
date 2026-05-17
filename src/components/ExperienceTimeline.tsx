import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Calendar, Briefcase, Globe } from 'lucide-react';
import { experiences } from '../data/experience';
import { cn } from '../lib/utils';

export function ExperienceTimeline() {
  return (
    <section className="py-32 bg-slate-950" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black text-white leading-none uppercase tracking-tighter mb-8">
              A 30-Year<br/><span className="text-cyan-500">Trajectory.</span>
            </h2>
            <p className="text-xl text-slate-400 font-medium">Tracing the technical DNA from on-premises legacy stability to cloud-first agility.</p>
          </div>
          <div className="text-[10px] tracking-[0.4em] font-mono text-slate-600 uppercase">Scroll Timeline // Identity Evolution</div>
        </div>

        <div className="relative space-y-24">
          <div className="absolute left-0 md:left-[50%] top-0 bottom-0 w-px bg-slate-900 -translate-x-1/2 hidden md:block" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "relative flex flex-col md:flex-row items-stretch gap-12 group",
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              )}
            >
              <div className="w-full md:w-1/2">
                <div className="p-10 bg-slate-900/50 border border-slate-800 group-hover:border-cyan-500/30 transition-all rounded-xl relative">
                  <div className="absolute -top-4 left-6 px-4 py-1 bg-slate-950 border border-slate-800 text-[10px] font-black uppercase tracking-widest text-cyan-500">
                    {exp.period}
                  </div>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <span className={cn(
                      "px-2 py-0.5 text-[10px] font-black uppercase tracking-tighter border",
                      exp.type === 'IAM' ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-500" :
                      exp.type === 'Hybrid' ? "bg-slate-800 border-slate-700 text-slate-300" :
                      "bg-slate-900 border-slate-800 text-slate-500"
                    )}>
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="text-3xl font-black text-white mb-2 font-display uppercase tracking-tight">{exp.title}</h3>
                  <div className="text-slate-400 font-mono text-xs uppercase tracking-widest mb-6">
                    {exp.company}
                  </div>
                  
                  <p className="text-slate-400 leading-relaxed mb-8 font-medium">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-slate-950 text-slate-500 text-[10px] font-mono uppercase tracking-tighter border border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:flex w-1/2 items-center justify-center">
                <div className="h-48 w-48 rounded-full bg-slate-950 border-2 border-slate-900 flex items-center justify-center relative overflow-hidden group-hover:border-cyan-500/30 transition-all duration-500 shadow-2xl shadow-black/50">
                  <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="text-slate-900 font-black text-8xl tracking-tighter italic select-none transition-colors duration-500 group-hover:text-slate-800">
                    0{i + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
