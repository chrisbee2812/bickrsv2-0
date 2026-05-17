import React from 'react';
import { Shield, BookOpen, Terminal, Mail, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const links = [
    { id: 'home', label: 'Identity Frontier', path: '/', icon: Shield },
    { id: 'experience', label: '30-Year Legacy', path: '/experience', icon: Terminal },
    { id: 'skills', label: 'IAM Expertise', path: '/skills', icon: Shield },
    { id: 'blog', label: 'Technical Journal', path: '/blog', icon: BookOpen },
    { id: 'contact', label: 'Network', path: '/contact', icon: Mail },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-4 cursor-pointer shrink-0">
            <div className="hidden lg:flex flex-col text-[9px] tracking-[0.2em] font-mono text-cyan-500 uppercase leading-none gap-1">
               <span>Chris Bicknell</span>
               <span className="text-slate-500 italic">IAM Architect</span>
            </div>
            <div className="h-8 w-px bg-slate-800 hidden lg:block"></div>
            <span className="font-display font-black text-2xl tracking-tighter uppercase text-white leading-none">Identity<span className="text-cyan-500">First</span></span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map(link => (
              <Link
                key={link.id}
                to={link.path}
                className={cn(
                  "text-[10px] uppercase tracking-[0.2em] font-black transition-all hover:text-cyan-400",
                  isActive(link.path) ? "text-cyan-400 underline underline-offset-8" : "text-slate-500"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center h-full">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-400">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map(link => (
              <Link
                key={link.id}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block w-full text-left px-3 py-4 rounded-md text-sm font-black uppercase tracking-widest",
                  isActive(link.path) ? "bg-slate-800 text-cyan-400" : "text-slate-400 hover:bg-slate-800 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
