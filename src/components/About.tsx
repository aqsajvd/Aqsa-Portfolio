import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, BookOpen, Palette, Layout, ExternalLink, MessageCircle, GraduationCap, Award, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA } from '../data/portfolioData';

interface AboutProps {
  selectedSkillId?: string | null;
  onSelectSkill?: (skillId: string | null) => void;
}

export const About: React.FC<AboutProps> = ({ selectedSkillId, onSelectSkill }) => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="py-24 sm:py-32 border-b border-[#858A65]/25 dark:border-[#858A65]/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & Values (7 cols) with subtle right vertical rule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 space-y-8 lg:pr-10 lg:border-r lg:border-[#858A65]/25"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9D2E8] dark:bg-[#D9D2E8]/20 border border-[#858A65]/30 text-xs font-mono uppercase tracking-wider text-[#242520] dark:text-[#EDE9DC] font-semibold mb-3">
                <Sparkles size={12} className="text-[#263B2D] dark:text-[#D9D2E8]" />
                <span>04 / Biography & Thesis</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-[#242520] dark:text-[#EDE9DC] leading-[0.95]">
                Synthesizing research, <span className="italic font-light text-[#263B2D] dark:text-[#D9D2E8]">spatial design</span> & editorial craft.
              </h2>
            </div>

            <div className="space-y-4 text-[#242520]/80 dark:text-[#EDE9DC]/80 text-base sm:text-lg leading-relaxed font-sans font-light">
              <p>
                I am <strong className="text-[#242520] dark:text-[#EDE9DC] font-medium">Aqsa Javed</strong>, a multidisciplinary designer pursuing my <strong className="text-[#242520] dark:text-[#EDE9DC] font-medium">Master of Design (M.Des) in Product Design Innovation at Woxsen University</strong>, Hyderabad, backed by an academic foundation in <strong className="text-[#242520] dark:text-[#EDE9DC] font-medium">BSc Computer Science from BITS Pilani</strong>.
              </p>
              <p>
                My work interrogates the convergence of human sensory perception, spatial interaction models, and publication typography. At Woxsen University, I co-authored and designed the 53-page research publication <span className="font-semibold text-[#263B2D] dark:text-[#D9D2E8] underline decoration-[#858A65]/40 underline-offset-4">"Beyond Reality: The Evolution of VR and AR"</span>, synthesizing 188 years of spatial display history across six defining eras.
              </p>
              <p>
                Whether curating tranquil landscape publications like <span className="font-semibold text-[#263B2D] dark:text-[#D9D2E8]">"Hanging Garden: Bloom"</span>, developing in-cabin assistive AI like <span className="font-semibold text-[#263B2D] dark:text-[#D9D2E8]">RAAHI</span>, or crafting high-contrast Swiss typographic posters like the <span className="font-semibold text-[#263B2D] dark:text-[#D9D2E8]">Ferrari F40</span> study, I prioritize typographic hierarchy, spatial rhythm, and communicative clarity.
              </p>
            </div>

            {/* Core Pillars with Marimba Styling */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-[#EDE9DC]/70 dark:bg-[#1E201C]/80 border border-[#858A65]/30 dark:border-[#858A65]/20 shadow-xs hover:border-[#263B2D] dark:hover:border-[#D9D2E8] hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group cursor-default">
                <div className="w-9 h-9 rounded-xl bg-[#263B2D] text-[#F5F2E9] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-2xs">
                  <BookOpen size={16} />
                </div>
                <div className="font-semibold text-[#242520] dark:text-[#EDE9DC] text-sm mb-1 group-hover:text-[#263B2D] dark:group-hover:text-[#D9D2E8] transition-colors">
                  Editorial Architecture
                </div>
                <p className="text-xs text-[#858A65] dark:text-[#A2A882] leading-relaxed font-light">
                  Publication layout, multi-spread pacing, colophon craft & print-ready precision.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#EDE9DC]/70 dark:bg-[#1E201C]/80 border border-[#858A65]/30 dark:border-[#858A65]/20 shadow-xs hover:border-[#263B2D] dark:hover:border-[#D9D2E8] hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group cursor-default">
                <div className="w-9 h-9 rounded-xl bg-[#858A65] text-[#F5F2E9] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-2xs">
                  <Layout size={16} />
                </div>
                <div className="font-semibold text-[#242520] dark:text-[#EDE9DC] text-sm mb-1 group-hover:text-[#263B2D] dark:group-hover:text-[#D9D2E8] transition-colors">
                  Spatial Interaction
                </div>
                <p className="text-xs text-[#858A65] dark:text-[#A2A882] leading-relaxed font-light">
                  Deep HCI analysis of gestures, degrees of freedom (DoF), and in-cabin vision models.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#EDE9DC]/70 dark:bg-[#1E201C]/80 border border-[#858A65]/30 dark:border-[#858A65]/20 shadow-xs hover:border-[#263B2D] dark:hover:border-[#D9D2E8] hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group cursor-default">
                <div className="w-9 h-9 rounded-xl bg-[#242520] text-[#D9D2E8] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-2xs">
                  <Palette size={16} />
                </div>
                <div className="font-semibold text-[#242520] dark:text-[#EDE9DC] text-sm mb-1 group-hover:text-[#263B2D] dark:group-hover:text-[#D9D2E8] transition-colors">
                  Swiss Typography
                </div>
                <p className="text-xs text-[#858A65] dark:text-[#A2A882] leading-relaxed font-light">
                  Strict baseline grids, kinetic repetition, and rigorous chromatic contrast control.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Academic & Practice Card with Authentic Portrait (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-[#EDE9DC]/90 dark:bg-[#1E201C]/90 border border-[#858A65]/30 dark:border-[#858A65]/20 shadow-xl hover:shadow-2xl hover:border-[#263B2D] dark:hover:border-[#D9D2E8] transition-all duration-300 space-y-6">
              {/* Authentic Editorial Portrait Card */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="relative group shrink-0">
                  <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#858A65]/30 dark:border-[#858A65]/40 shadow-md bg-[#242520] isolate">
                    <img
                      src={PERSONAL_INFO.portraitImage}
                      alt="Aqsa Javed — Product & Editorial Designer"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out select-none"
                    />
                  </div>
                  {/* Active Research Indicator Pill */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#263B2D] text-[#F5F2E9] text-[10px] font-mono px-2.5 py-0.5 rounded-full shadow-xs whitespace-nowrap uppercase tracking-wider flex items-center gap-1.5 border border-[#D9D2E8]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>M.Des '26</span>
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-1">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <h3 className="font-serif text-2xl font-normal text-[#242520] dark:text-[#EDE9DC]">
                      Aqsa Javed
                    </h3>
                  </div>
                  <p className="text-xs text-[#263B2D] dark:text-[#D9D2E8] font-semibold">
                    Product & Editorial Designer · M.Des Candidate
                  </p>
                  <p className="text-xs text-[#858A65] dark:text-[#A2A882] font-mono">
                    Woxsen University, School of Arts & Design
                  </p>
                  <p className="text-[11px] text-[#858A65] dark:text-[#A2A882] font-mono pt-1">
                    BITS Pilani (BSc CS) Alumna
                  </p>
                </div>
              </div>

              {/* Verified Metrics Counter */}
              <div className="grid grid-cols-2 gap-3 py-4 border-y border-[#858A65]/20 text-xs">
                <div className="p-3.5 rounded-2xl bg-[#F5F2E9] dark:bg-[#242520] border border-[#858A65]/20">
                  <span className="text-xs text-[#858A65] dark:text-[#A2A882] block font-mono">Major Publication</span>
                  <strong className="text-base font-semibold text-[#263B2D] dark:text-[#D9D2E8]">53 Pages VR/AR</strong>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#F5F2E9] dark:bg-[#242520] border border-[#858A65]/20">
                  <span className="text-xs text-[#858A65] dark:text-[#A2A882] block font-mono">Postgrad Program</span>
                  <strong className="text-base font-semibold text-[#242520] dark:text-[#EDE9DC]">M.Des Woxsen</strong>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#F5F2E9] dark:bg-[#242520] border border-[#858A65]/20">
                  <span className="text-xs text-[#858A65] dark:text-[#A2A882] block font-mono">Undergrad Degree</span>
                  <strong className="text-base font-semibold text-[#263B2D] dark:text-[#D9D2E8]">BSc BITS Pilani</strong>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#F5F2E9] dark:bg-[#242520] border border-[#858A65]/20">
                  <span className="text-xs text-[#858A65] dark:text-[#A2A882] block font-mono">Design Track</span>
                  <strong className="text-base font-semibold text-[#242520] dark:text-[#EDE9DC]">HCI & Editorial</strong>
                </div>
              </div>

              {/* Interactive Design Matrix */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#858A65] dark:text-[#A2A882] block font-semibold">
                    Interactive Competency Tags
                  </span>
                  <span className="text-[10px] font-mono text-[#263B2D] dark:text-[#D9D2E8]">
                    Click to filter works
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-1.5">
                  {SKILLS_DATA.map((skill) => {
                    const isSelected = selectedSkillId === skill.id;

                    return (
                      <button
                        key={skill.id}
                        onClick={() => {
                          if (onSelectSkill) {
                            onSelectSkill(isSelected ? null : skill.id);
                          }
                        }}
                        className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-[#263B2D] text-[#F5F2E9] font-semibold shadow-xs scale-105 ring-1 ring-[#D9D2E8]'
                            : 'bg-[#F5F2E9] dark:bg-[#242520] text-[#242520] dark:text-[#EDE9DC] border border-[#858A65]/20 hover:border-[#263B2D] hover:text-[#263B2D]'
                        }`}
                      >
                        {skill.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons with Marimba Style */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <a
                  href={`https://wa.me/${PERSONAL_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#263B2D] hover:bg-[#1E201C] text-[#F5F2E9] font-medium text-xs text-center transition-all duration-200 hover:-translate-y-0.5 active:scale-95 inline-flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp Desk</span>
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-4 rounded-xl border border-[#858A65]/30 hover:border-[#263B2D] bg-[#F5F2E9] dark:bg-[#242520] text-[#242520] dark:text-[#EDE9DC] font-medium text-xs transition-all duration-200 hover:-translate-y-0.5 active:scale-95 inline-flex items-center gap-1.5"
                >
                  <span>GitHub</span>
                  <ExternalLink size={12} />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-4 rounded-xl border border-[#858A65]/30 hover:border-[#263B2D] bg-[#F5F2E9] dark:bg-[#242520] text-[#242520] dark:text-[#EDE9DC] font-medium text-xs transition-all duration-200 hover:-translate-y-0.5 active:scale-95 inline-flex items-center gap-1.5"
                >
                  <span>LinkedIn</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

