import React from 'react';
import { motion } from 'motion/react';
import { Shield, Database, Cloud, LockKeyhole, Repeat2 } from 'lucide-react';
import { skills } from '../data/skills';

export function SkillGrid() {
  const categories = [
    { id: 'IAM', 
      label: 'IAM Consultant Focus', 
      icon: Shield,
      subcategories: [
        { id: 'Frameworks', label: 'Frameworks & Strategies' },
        { id: 'Governance', label: 'Governance & Compliance' },
        { id: 'Authentication', label: 'Authentication & Federation' },
        { id: 'Directory', label: 'Directory Services' },
      ]
    },
    { id: 'Cloud', 
      label: 'Cloud & Infrastructure', 
      icon: Cloud,
      subcategories: [
        { id: 'Cloud', label: 'Cloud Platforms & Services' },
        { id: 'Messaging', label: 'Messaging & Collaboration' },
        { id: 'Virtualization', label: 'Virtualization & Hypervisors' },
        { id: 'Systems', label: 'Systems Administration' },
        { id: 'Endpoint Management', label: 'Endpoint Management' },
      ]
    },
    { id: 'Security', 
      label: 'Security Strategy', 
      icon: LockKeyhole,
      subcategories: [
        { id: 'Endpoint Security', label: 'Endpoint Security' },
        { id: 'Access Control', label: 'Access Control' },
        { id: 'Monitoring & Response', label: 'Monitoring & Response' },
        { id: 'Compliance', label: 'Compliance' }
      ]
    },
    { id: 'Automation', 
      label: 'Automation & Scripting', 
      icon: Repeat2,
      subcategories: [
        { id: 'Automation', label: 'Automation' },
        { id: 'Modern Web Development', label: 'Modern Web Development' }
      ]
    },
    { id: 'Migration', 
      label: 'Migration & Management', 
      icon: Database,
      subcategories: [
        { id: 'Migration', label: 'Migration' },
        { id: 'Management', label: 'Management' }
      ]
    },
  ];
  // const subcategories = [
  //   { id: 'Frameworks', label: 'Frameworks & Strategies' },
  //   { id: 'Governance', label: 'Governance & Compliance' },
  //   { id: 'Authentication', label: 'Authentication & Federation' },
  //   { id: 'Directory', label: 'Directory Services' },
  // ];

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

        <div className="bg-slate-800 border border-slate-800 overflow-hidden rounded-xl">
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

              {/* <div className="space-y-10"> */}
              <div className="grid md:grid-cols-4 gap-px border border-slate-800 overflow-hidden rounded-xl">
                {cat.subcategories.length > 0 && cat.subcategories.map(subcat => (
                  <div key={subcat.id} className="p-6 bg-slate-950">
                    <div className="flex items-center gap-4 mb-10">
                      {/* <subcat.icon className="w-5 h-5 text-cyan-500" /> */}
                      <h3 className="font-black text-white uppercase tracking-widest text-xs">{subcat.label}</h3>
                    </div>
                    {skills.filter(s => s.category === cat.id && s.subcategories.includes(subcat.id)).map(skill => (
                      <div key={skill.name}>
                        {/* <div className="flex items-center gap-4 mb-10">
                          <cat.icon className="w-5 h-5 text-cyan-500" />
                          <h3 className="font-black text-white uppercase tracking-widest text-xs">{skill.subcategories}</h3>
                        </div> */}
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
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
