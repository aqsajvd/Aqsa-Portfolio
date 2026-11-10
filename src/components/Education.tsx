import React from 'react';
import { motion } from 'motion/react';
import { EDUCATION } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="py-24 sm:py-32 border-b border-[#858A65]/25 dark:border-[#858A65]/20 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#263B2D] dark:text-[#D9D2E8] font-bold">
              05 / Pedigree
            </span>
            <span className="text-[#858A65]">·</span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#D9D2E8] text-[#242520] text-[10px] font-mono font-medium">
              Academic Background
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-[#242520] dark:text-[#EDE9DC] leading-[0.95]">
            Education & <span className="italic font-light text-[#263B2D] dark:text-[#D9D2E8]">Scholarly</span> Training
          </h2>
          <p className="text-sm sm:text-base text-[#242520]/75 dark:text-[#EDE9DC]/75 mt-3 leading-relaxed font-sans font-light">
            Rigorous dual-discipline training spanning human-centered design research, spatial systems, and computational theory.
          </p>
        </motion.div>

        {/* Clean 2-Card Grid with Marimba Hover Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#EDE9DC]/70 dark:bg-[#1E201C]/80 border border-[#858A65]/30 dark:border-[#858A65]/25 shadow-xs hover:border-[#263B2D] dark:hover:border-[#D9D2E8] hover:shadow-2xl hover:shadow-[#263B2D]/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between space-y-6 cursor-default group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#858A65] dark:text-[#A2A882] font-mono">
                  <span>{edu.period}</span>
                  <span>{edu.location}</span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-[#263B2D] text-[#F5F2E9] shrink-0 mt-0.5 group-hover:scale-110 transition-transform shadow-2xs">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#242520] dark:text-[#EDE9DC] group-hover:text-[#263B2D] dark:group-hover:text-[#D9D2E8] transition-colors">
                      {edu.degree}
                    </h3>
                    <div className="text-sm font-medium text-[#263B2D] dark:text-[#D9D2E8] mt-1 font-mono">
                      {edu.institution}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#242520]/75 dark:text-[#EDE9DC]/75 font-sans font-light leading-relaxed pt-1">
                  {edu.description}
                </p>

                {edu.highlights && (
                  <ul className="text-xs text-[#858A65] dark:text-[#A2A882] space-y-1.5 pt-2 list-none">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-[#263B2D] dark:text-[#D9D2E8] mt-0.5">✦</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Honors footer */}
              <div className="pt-4 border-t border-[#858A65]/20 flex items-center gap-2 text-xs font-medium text-[#263B2D] dark:text-[#D9D2E8]">
                <Award size={15} className="shrink-0" />
                <span>{edu.honors}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

