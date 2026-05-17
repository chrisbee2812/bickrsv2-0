import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUp } from 'lucide-react';
import remarkGfm from 'remark-gfm';

export default function BlogPostDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-40 pb-32 text-center">
        <h1 className="text-4xl font-black text-white uppercase italic">Protocol Error // <span className="text-cyan-500">Post Not Found.</span></h1>
        <Link to="/blog" className="mt-8 inline-block text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500 underline">Return to Index</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-40 pb-32 max-w-4xl mx-auto px-4"
    >
      <Link
        to="/blog"
        className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500 mb-16 hover:gap-6 transition-all group"
      >
        <ArrowLeft className="w-4 h-4" />
        Return to Journal Index
      </Link>

      <div className="flex items-center gap-6 mb-8">
        <div className="text-[10px] tracking-[0.4em] font-mono text-slate-500 uppercase">{post.date}</div>
        <div className="h-px w-12 bg-slate-900"></div>
        <div className="text-[10px] tracking-[0.4em] font-mono text-cyan-500 uppercase">{post.category}</div>
      </div>
      
      <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-black text-white mb-16 leading-[0.9] uppercase tracking-tighter">
        {post.title}
      </h1>
      
      <div className="markdown-body blog-post prose prose-invert prose-cyan max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

      <div className="mt-24 pt-12 border-t border-slate-900 flex justify-between items-center">
        <Link
          to="/blog"
          className="px-10 py-5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-black uppercase tracking-[0.4em] transition-all flex items-center gap-4"
        >
          <ArrowUp className="w-4 h-4" />
          Back to Journal
        </Link>
        <div className="text-[10px] font-mono text-slate-800 uppercase tracking-widest hidden md:block">EOF // END OF FILE</div>
      </div>
    </motion.div>
  );
}
