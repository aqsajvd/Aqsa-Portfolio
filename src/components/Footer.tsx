import React from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappNumber = PERSONAL_INFO.whatsapp.replace(/[^0-9]/g, '');

  return (
    <footer className="py-14 bg-transparent text-[#858A65] dark:text-[#A2A882] text-xs border-t border-[#858A65]/25 dark:border-[#858A65]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <span className="font-serif text-base font-normal text-[#242520] dark:text-[#EDE9DC]">
            {PERSONAL_INFO.name}
          </span>
          <span className="hidden sm:inline text-[#858A65]">·</span>
          <span className="font-sans font-light text-[#242520]/70 dark:text-[#EDE9DC]/70">
            M.Des Candidate, Woxsen University & BSc CS, BITS Pilani
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#263B2D] dark:hover:text-[#D9D2E8] inline-flex items-center gap-1.5 transition-colors font-medium"
          >
            <MessageCircle size={13} />
            <span>WhatsApp</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#263B2D] dark:hover:text-[#D9D2E8] transition-colors font-medium"
          >
            GitHub
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#263B2D] dark:hover:text-[#D9D2E8] transition-colors font-medium"
          >
            LinkedIn
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2.5 rounded-full bg-[#EDE9DC] dark:bg-[#1E201C] text-[#242520] dark:text-[#EDE9DC] hover:bg-[#263B2D] hover:text-[#F5F2E9] border border-[#858A65]/30 transition-all duration-200 cursor-pointer shadow-2xs hover:-translate-y-0.5"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

