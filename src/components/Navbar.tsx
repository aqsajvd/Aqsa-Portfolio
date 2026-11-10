import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun, Menu, X, FileText, MessageCircle, Sparkles, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = ['work', 'skills', 'services', 'about', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (window.scrollY < 200) setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const whatsappNumber = PERSONAL_INFO.whatsapp.replace(/[^0-9]/g, '');

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none transition-all duration-300 py-3 sm:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Floating Frosted Glass Capsule Island */}
        <div
          className={`pointer-events-auto mx-auto rounded-2xl sm:rounded-full transition-all duration-300 border ${
            scrolled
              ? 'bg-white/85 dark:bg-[#121215]/85 backdrop-blur-xl border-stone-200/90 dark:border-stone-800/90 shadow-xl shadow-stone-900/5 px-4 sm:px-6 py-2.5 max-w-4xl'
              : 'bg-white/70 dark:bg-stone-900/70 backdrop-blur-lg border-stone-200/70 dark:border-stone-800/70 shadow-md shadow-stone-900/3 px-4 sm:px-6 py-3 max-w-5xl'
          } flex items-center justify-between gap-4`}
        >
          {/* Brand Identity: Portrait Avatar + Live Beacon + Name */}
          <a
            href="#"
            className="flex items-center gap-3 group shrink-0"
            aria-label="Aqsa Javed portfolio home"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-stone-200 dark:border-stone-700/80 shrink-0 shadow-2xs group-hover:scale-105 group-hover:border-purple-500 transition-all duration-200 isolate">
              <img
                src={PERSONAL_INFO.portraitImage}
                alt="Aqsa Javed"
                className="w-full h-full object-cover object-top select-none"
              />
              {/* Pulsing Live Beacon */}
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-stone-900" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-lg sm:text-xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="hidden lg:inline-block w-1.5 h-1.5 rounded-full bg-purple-500" />
              </div>
              <span className="text-[10px] font-mono text-stone-500 dark:text-stone-400 uppercase tracking-widest hidden sm:block -mt-0.5">
                M.Des Scholar · Woxsen
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Modern Pill Indicator */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-stone-100/70 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/50 text-xs font-medium">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer select-none ${
                    isActive
                      ? 'text-stone-900 dark:text-stone-50 font-semibold bg-white dark:bg-stone-900 shadow-2xs'
                      : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-white/50 dark:hover:bg-stone-800/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Affordances & Theme Switcher */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Direct WhatsApp Quick Chat Pill */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100/80 border border-emerald-200 dark:border-emerald-800/60 transition-all hover:scale-105 active:scale-95 shadow-2xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
              <span>Let's Talk</span>
            </a>

            {/* Curriculum Vitae Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white rounded-full transition-all duration-200 shadow-xs hover:-translate-y-0.5 active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <FileText size={12} className="hidden sm:inline-block" />
              <span>CV</span>
            </button>

            {/* Dark Mode Switcher */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className="p-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 border border-transparent hover:border-stone-200 dark:hover:border-stone-700 transition-all duration-200 cursor-pointer active:rotate-180"
            >
              {darkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="md:hidden p-2 text-stone-700 dark:text-stone-200 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Frosted Glass Card */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-auto md:hidden mt-2 mx-auto max-w-sm rounded-2xl bg-white/95 dark:bg-[#121215]/95 backdrop-blur-xl border border-stone-200/90 dark:border-stone-800/90 p-5 space-y-4 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-3 border-b border-stone-100 dark:border-stone-800">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500">
                  Navigation
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available</span>
                </span>
              </div>

              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800/70 transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={13} className="text-stone-400" />
                  </a>
                ))}
              </nav>

              <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex gap-2">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold text-center inline-flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-xs font-semibold text-center inline-flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <FileText size={14} />
                  <span>Curriculum Vitae</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
