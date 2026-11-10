import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const EditorialMarquee: React.FC = () => {
  const marqueeItems = [
    { text: 'RAAHI — Driver Drowsiness Detection & AI Companion', type: 'bold' },
    { text: '53-Page VR/AR Research Publication', type: 'serif-italic' },
    { text: 'Swiss Typography & Grid Architecture', type: 'bold' },
    { text: 'School of Arts & Design · Woxsen University', type: 'mono' },
    { text: 'BSc Computer Science · BITS Pilani', type: 'mono' },
    { text: 'Cognitive Ergonomics & Multimodal HCI', type: 'bold' },
    { text: 'Editorial Publication Architecture & Binding', type: 'serif-italic' },
    { text: 'Kinetic Visual Identity & Poster Systems', type: 'bold' },
  ];

  return (
    <div
      aria-label="Editorial disciplines ticker"
      className="w-full relative overflow-hidden py-4 sm:py-5 bg-[#263B2D] text-[#F5F2E9] dark:bg-[#1C281F] dark:text-[#EDE9DC] border-y border-[#384F3F] dark:border-[#2C3E32] select-none shadow-md group"
    >
      {/* Edge Blur Vignette for Smooth Infinite Entrance/Exit */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#263B2D] dark:from-[#1C281F] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#263B2D] dark:from-[#1C281F] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track (Repeated 2x for Seamless 50% Infinite Loop) */}
      <div className="animate-marquee flex items-center gap-10">
        {[0, 1].map((setIndex) => (
          <div
            key={setIndex}
            className="flex items-center gap-10 shrink-0 tracking-wide text-xs sm:text-sm"
          >
            {marqueeItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-10 group/item hover:text-[#D9D2E8] transition-colors"
              >
                {item.type === 'serif-italic' ? (
                  <span className="font-serif italic text-base sm:text-lg text-[#D9D2E8]">
                    {item.text}
                  </span>
                ) : item.type === 'mono' ? (
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#D9D2E8]/80">
                    {item.text}
                  </span>
                ) : (
                  <span className="font-sans font-semibold uppercase tracking-wider text-[#F5F2E9]">
                    {item.text}
                  </span>
                )}

                {/* Starburst Asterisk Separator */}
                <span className="text-[#D9D2E8]/70 inline-flex items-center">
                  {idx % 2 === 0 ? (
                    <Sparkles size={13} className="animate-pulse" />
                  ) : (
                    <ArrowUpRight size={14} className="opacity-75 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-transform" />
                  )}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
