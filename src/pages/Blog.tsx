import React, { useState } from 'react';
import { motion } from 'motion/react';
import { blogPosts } from '../data/blogPosts';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Filter } from 'lucide-react';
import { cn } from '../lib/utils';

export default function BlogPage() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))];

  const filteredPosts = filter === 'All' 
    ? blogPosts 
    : blogPosts.filter(p => p.category === filter);

  return (
    <div className="pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h1 className="text-[clamp(3.5rem,10vw,6rem)] leading-[0.85] font-black tracking-tighter uppercase mb-12 text-white">
            Identity<br/><span className="text-cyan-500">Journal.</span>
          </h1>
          <p className="text-2xl text-slate-400 leading-relaxed max-w-2xl font-medium">
            Strategic perspectives on modern IAM, legacy modernization, and the evolution of the Microsoft ecosystem.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-6 mb-16 border-b border-slate-900 pb-8">
          <div className="flex items-center gap-2 text-slate-500 mr-4">
            <Filter className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">Filter By</span>
          </div>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all",
                filter === cat 
                  ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20" 
                  : "bg-slate-900 text-slate-500 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {filteredPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-[10px] tracking-[0.3em] font-mono text-cyan-500 uppercase">{post.date} // {post.category}</div>
                    <div className="h-px flex-1 bg-slate-900 group-hover:bg-cyan-500/30 transition-colors"></div>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-6 group-hover:text-cyan-400 transition-colors uppercase leading-tight tracking-tight">
                    {post.title}
                  </h3>
                  <p className="text-lg text-slate-400 mb-8 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white group-hover:text-cyan-400 transition-colors">
                  <span className="underline underline-offset-8">Read Perspective</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
