import React from 'react';

export const AmbientBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* 1. Warm Ivory / Cream Architectural Base Grid */}
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.18] transition-opacity duration-700"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '36px 36px',
          color: 'rgba(133, 138, 101, 0.28)', // muted olive dots
        }}
      />

      {/* 2. Organic Abstract Shapes (Marimba-inspired subtle background flora & starburst geometry) */}
      {/* Abstract Starburst Asterisk Geometry top-right */}
      <div className="absolute -top-16 -right-16 w-80 h-80 opacity-[0.06] dark:opacity-[0.04] text-[#263B2D] dark:text-[#D9D2E8] animate-spin-slow">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 L53 38 L91 18 L64 47 L100 50 L64 53 L91 82 L53 62 L50 100 L47 62 L9 82 L36 53 L0 50 L36 47 L9 18 L47 38 Z" />
        </svg>
      </div>

      {/* Organic Curved Pebble Blob mid-left */}
      <div className="absolute top-[42%] -left-20 w-96 h-96 opacity-[0.05] dark:opacity-[0.03] text-[#858A65] dark:text-[#D9D2E8] animate-pulse-organic">
        <svg viewBox="0 0 200 200" fill="currentColor">
          <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,87.7,-0.7C85.4,14.8,78.2,29.6,69.5,43C60.8,56.4,50.6,68.4,37.5,75.3C24.4,82.2,8.4,84,-7.1,82.1C-22.6,80.2,-37.6,74.6,-50.1,65.8C-62.6,57,-72.6,45,-78.9,31.3C-85.2,17.6,-87.8,2.2,-84.9,-12.3C-82,-26.8,-73.6,-40.4,-62.4,-49.6C-51.2,-58.8,-37.2,-63.6,-23.4,-71C-9.6,-78.4,4,-88.4,18.2,-87.8C32.4,-87.2,47.2,-76,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      {/* 3. Luminous Floating Chromatic Ambient Orbs (Exact Palette: Soft Lavender, Forest Green, Muted Olive, Cream) */}
      {/* Orb A: Soft Lavender Glow Upper Center */}
      <div className="absolute -top-[12%] left-[20%] w-[640px] h-[640px] rounded-full bg-gradient-to-br from-[#D9D2E8]/25 via-[#D9D2E8]/10 to-transparent blur-[140px] dark:from-[#D9D2E8]/12 dark:to-transparent animate-orb-slow" />

      {/* Orb B: Muted Olive / Warm Cream Glow Center-Right */}
      <div className="absolute top-[32%] -right-[8%] w-[680px] h-[680px] rounded-full bg-gradient-to-bl from-[#858A65]/15 via-[#EDE9DC]/20 to-transparent blur-[150px] dark:from-[#858A65]/12 dark:to-transparent animate-orb-reverse" />

      {/* Orb C: Deep Forest Green Atmospheric Basin Mid-Left */}
      <div className="absolute top-[68%] -left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#263B2D]/12 via-[#858A65]/10 to-transparent blur-[140px] dark:from-[#263B2D]/20 dark:to-transparent animate-orb-slow" />

      {/* Orb D: Soft Lavender / Ivory Bottom */}
      <div className="absolute bottom-[3%] right-[15%] w-[560px] h-[560px] rounded-full bg-gradient-to-t from-[#D9D2E8]/20 via-[#EDE9DC]/10 to-transparent blur-[130px] dark:from-[#D9D2E8]/10 dark:to-transparent animate-orb-reverse" />

      {/* 4. Fine Organic Editorial Noise Layer */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.026] dark:opacity-[0.038] mix-blend-overlay pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="marimba-editorial-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#marimba-editorial-noise)" />
      </svg>
    </div>
  );
};
