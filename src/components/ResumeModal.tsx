import React, { useEffect, useState } from 'react';
import { X, Download, Copy, Check, FileText, ExternalLink, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + '#resume');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#242520]/80 backdrop-blur-md flex justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#F5F2E9] dark:bg-[#181916] text-[#242520] dark:text-[#EDE9DC] rounded-3xl border border-[#858A65]/30 dark:border-[#858A65]/25 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Top Control Bar */}
        <div className="px-6 py-4 bg-[#EDE9DC] dark:bg-[#1E201C] border-b border-[#858A65]/25 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono text-[#858A65] dark:text-[#A2A882]">
            <FileText size={15} />
            <span>Curriculum Vitae · Aqsa Javed</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-[#F5F2E9] dark:bg-[#242520] border border-[#858A65]/30 hover:border-[#263B2D] text-[#242520] dark:text-[#EDE9DC] transition-colors"
            >
              {copied ? <Check size={13} className="text-[#263B2D]" /> : <Copy size={13} />}
              <span>{copied ? 'Link Copied' : 'Share'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium rounded-full bg-[#263B2D] text-[#F5F2E9] hover:bg-[#1E201C] transition-colors shadow-xs"
            >
              <Download size={13} />
              <span>Save / Print PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close resume"
              className="p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-[#858A65] hover:text-[#242520] dark:hover:text-[#EDE9DC] transition-colors ml-1"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Resume Document Canvas */}
        <div className="overflow-y-auto p-8 sm:p-12 space-y-10 text-sm">
          {/* Header with Authentic Scholar Portrait */}
          <div className="border-b border-[#E6DFD5] dark:border-[#2A2A2E] pb-8 flex flex-col sm:flex-row items-start justify-between gap-6">
            <div className="space-y-3 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h1 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#1C1917] dark:text-[#F5F5F4]">
                  Aqsa Javed
                </h1>
                <div className="text-xs font-mono text-[#78716C] dark:text-[#A8A29E]">
                  {PERSONAL_INFO.email} · {PERSONAL_INFO.universityEmail}
                </div>
              </div>
              <div className="font-medium text-base text-purple-600 dark:text-purple-400">
                Product & Editorial Designer · HCI & Spatial Interaction Researcher
              </div>
              <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#A8A29E] leading-relaxed max-w-2xl font-light">
                Master of Design (M.Des) candidate in Product Design Innovation at Woxsen University with a BSc in Computer Science from BITS Pilani. Specializing in spatial interaction research, editorial publication design, and Swiss typographic systems.
              </p>
            </div>

            <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden border border-[#D5CEC4] dark:border-[#383840] shadow-xs shrink-0 bg-[#EFE9DF] dark:bg-[#202024] isolate">
              <img
                src={PERSONAL_INFO.portraitImage}
                alt="Aqsa Javed"
                className="w-full h-full object-cover object-top select-none"
              />
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#78716C] dark:text-[#A8A29E] border-b border-[#E6DFD5] dark:border-[#2A2A2E] pb-1">
              Education
            </div>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-serif text-base font-medium text-[#1C1917] dark:text-[#F5F5F4]">
                    Master of Design (M.Des) — Product Design Innovation
                  </h3>
                  <span className="font-mono text-xs text-[#78716C] dark:text-[#A8A29E]">2024 — 2026</span>
                </div>
                <div className="text-xs font-medium text-purple-600 dark:text-purple-400">
                  School of Arts & Design, Woxsen University, Hyderabad (Batch 2026-2028)
                </div>
                <ul className="mt-2 text-xs text-[#57534E] dark:text-[#A8A29E] list-disc list-inside space-y-1">
                  <li>Focus: Spatial Computing, HCI, Cognitive Ergonomics, Editorial Book & Publication Design.</li>
                  <li>Co-authored and designed 53-page publication: "Beyond Reality — Evolution of VR & AR".</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-serif text-base font-medium text-[#1C1917] dark:text-[#F5F5F4]">
                    Bachelor of Science (BSc) in Computer Science
                  </h3>
                  <span className="font-mono text-xs text-[#78716C] dark:text-[#A8A29E]">2019 — 2023</span>
                </div>
                <div className="text-xs font-medium text-stone-600 dark:text-stone-400">
                  BITS Pilani (Birla Institute of Technology and Science) · Academic Distinction
                </div>
                <ul className="mt-2 text-xs text-[#57534E] dark:text-[#A8A29E] list-disc list-inside space-y-1">
                  <li>Coursework: Human-Computer Interaction (HCI), Software Systems, Algorithms, Computer Graphics.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Featured Case Studies & Publications */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#78716C] dark:text-[#A8A29E] border-b border-[#E6DFD5] dark:border-[#2A2A2E] pb-1">
              Featured Publications & Design Work
            </div>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between items-baseline">
                  <strong className="text-sm font-medium text-[#1C1917] dark:text-[#F5F5F4]">
                    RAAHI — Driver Drowsiness Detection App & AI Companion
                  </strong>
                  <span className="font-mono text-xs text-[#78716C] dark:text-[#A8A29E]">2026</span>
                </div>
                <p className="text-xs text-[#57534E] dark:text-[#A8A29E] mt-1 leading-relaxed">
                  In-cabin ADAS safety companion app and presentation deck designed at Woxsen University. Features the 3D mascot RAAHI, real-time eye blink and fatigue monitoring telemetry, and non-intrusive progressive alerting to prevent highway micro-sleep accidents.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <strong className="text-sm font-medium text-[#1C1917] dark:text-[#F5F5F4]">
                    Beyond Reality: The Evolution of VR & AR (53-Page Research Publication)
                  </strong>
                  <span className="font-mono text-xs text-[#78716C] dark:text-[#A8A29E]">2026</span>
                </div>
                <p className="text-xs text-[#57534E] dark:text-[#A8A29E] mt-1 leading-relaxed">
                  Authored & designed by Pamu Lowkya, Jeslyn Sijo, and Aqsa Javed at Woxsen University. Synthesized 188 years of spatial display and interaction history across six eras—from the 1838 Wheatstone Stereoscope and 1950s Sensorama to Apple Vision Pro and Spatial AI.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <strong className="text-sm font-medium text-[#1C1917] dark:text-[#F5F5F4]">
                    Hanging Garden: Bloom (Editorial Travel Magazine)
                  </strong>
                  <span className="font-mono text-xs text-[#78716C] dark:text-[#A8A29E]">2025</span>
                </div>
                <p className="text-xs text-[#57534E] dark:text-[#A8A29E] mt-1 leading-relaxed">
                  Solo editorial publication exploring mindful travel, cascading illuminated waterfalls, and botanical curation at the Hanging Gardens. Designed with harmonious Cormorant Garamond typography and a curated pink spring palette.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <strong className="text-sm font-medium text-[#1C1917] dark:text-[#F5F5F4]">
                    Ferrari F40 Kinetic Typographic Poster
                  </strong>
                  <span className="font-mono text-xs text-[#78716C] dark:text-[#A8A29E]">2024</span>
                </div>
                <p className="text-xs text-[#57534E] dark:text-[#A8A29E] mt-1 leading-relaxed">
                  Automotive graphic design study utilizing rhythmic typographic repetition, pure Ferrari Corsa red (#D40000), and precise Swiss telemetry data layout (V8, 2936cc, 441 BHP, 324 km/h).
                </p>
              </div>
            </div>
          </div>

          {/* Competencies */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#78716C] dark:text-[#A8A29E] border-b border-[#E6DFD5] dark:border-[#2A2A2E] pb-1">
              Design Competencies & Tools
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="font-medium text-[#1C1917] dark:text-[#F5F5F4] block mb-1">
                  Publication & Visual Design
                </span>
                <p className="text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
                  Adobe InDesign, Illustrator, Photoshop, Typography Monographs, Swiss Grid Systems, Visual Hierarchy, Book Pacing & Print Production.
                </p>
              </div>
              <div>
                <span className="font-medium text-[#1C1917] dark:text-[#F5F5F4] block mb-1">
                  HCI, Systems & Product
                </span>
                <p className="text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
                  Spatial Interaction Models, Cognitive Task Analysis, Figma, Design Systems, React, Web Standards, User Testing.
                </p>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-4 border-t border-[#E6DFD5] dark:border-[#2A2A2E] flex justify-between items-center text-xs text-[#78716C] dark:text-[#A8A29E] font-mono">
            <span>LinkedIn: linkedin.com/in/aqsa-javed89</span>
            <span>University: Woxsen University, Hyderabad</span>
          </div>
        </div>
      </div>
    </div>
  );
};
