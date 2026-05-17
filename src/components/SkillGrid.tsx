import React from 'react';
import { motion } from 'motion/react';
import { Shield, Database, Cloud } from 'lucide-react';
import { skills } from '../data/skills';

export function SkillGrid() {
  const categories = [
    { id: 'IAM', label: 'IAM Consultant Focus', icon: Shield },
    { id: 'Microsoft Core', label: 'Core Infrastructure', icon: Database },
    { id: 'Cloud & Security', label: 'Cloud Strategy', icon: Cloud },
  ];

  return (
    <section className="py-32 bg-slate-900/30 border-y border-slate-900" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-8">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-white leading-[0.9] uppercase tracking-tighter mb-8">
              Technical DNA // <br/><span className="text-cyan-500">Mastery Matrix.</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-xl font-medium">A balanced portfolio of legacy stability and modern security agility.</p>
          </div>
          <div className="col-span-12 md:col-span-4 flex justify-end">
            <div className="text-[10px] tracking-[0.4em] font-mono text-cyan-500 uppercase flex items-center gap-4">
              <span className="h-2 w-2 rounded-full bg-cyan-500"></span> Expert Verification
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-slate-800 border border-slate-800 overflow-hidden rounded-xl">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-12 bg-slate-950"
            >
              <div className="flex items-center gap-4 mb-10">
                <cat.icon className="w-5 h-5 text-cyan-500" />
                <h3 className="font-black text-white uppercase tracking-widest text-xs">{cat.label}</h3>
              </div>

              <div className="space-y-10">
                {skills.filter(s => s.category === cat.id).map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-3">
                      <span className="text-slate-300 font-mono tracking-tighter">{skill.name}</span>
                      <span className="text-cyan-500">{skill.level}%</span>
                    </div>
                    <div className="h-0.5 bg-slate-900 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full bg-cyan-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
