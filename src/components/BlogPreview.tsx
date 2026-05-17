import React from 'react';
import { motion } from 'motion/react';
import { blogPosts } from '../data/blogPosts';
import { BlogPost } from '../types';
import { ArrowRight, Calendar } from 'lucide-react';

export function BlogPreview({ onSelect }: { onSelect: (post: BlogPost) => void }) {
  return (
    <section className="py-32" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-white leading-none uppercase tracking-tighter mb-8">
            Expert Opinions // <br/><span className="text-cyan-500">Recent Pens.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl font-medium">Deep dives into the technical friction points of modern identity management.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => onSelect(post)}
              className="group cursor-pointer flex flex-col justify-between"
            >
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-[10px] tracking-[0.3em] font-mono text-slate-500 uppercase">{post.date} // {post.category}</div>
                  <div className="h-px flex-1 bg-slate-900 group-hover:bg-cyan-500/30 transition-colors"></div>
                </div>
                <h3 className="text-3xl font-black text-white mb-6 group-hover:text-cyan-400 transition-colors uppercase leading-tight tracking-tight px-0">
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
