import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="py-24 sm:py-32 border-b border-[#858A65]/25 dark:border-[#858A65]/20 bg-[#EDE9DC]/35 dark:bg-[#1E201C]/40 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#263B2D] dark:text-[#D9D2E8] font-bold">
              06 / Critique
            </span>
            <span className="text-[#858A65]">·</span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#D9D2E8] text-[#242520] text-[10px] font-mono font-medium">
              Peer Evaluations
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-[#242520] dark:text-[#EDE9DC] leading-[0.95]">
            Endorsements & <span className="italic font-light text-[#263B2D] dark:text-[#D9D2E8]">Faculty</span> Critique
          </h2>
          <p className="text-sm sm:text-base text-[#242520]/75 dark:text-[#EDE9DC]/75 mt-3 leading-relaxed font-sans font-light">
            Assessments from publication peer evaluations, editorial critiques, and academic faculty at Woxsen University and BITS Pilani.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#EDE9DC]/70 dark:bg-[#1E201C]/80 border border-[#858A65]/30 dark:border-[#858A65]/25 shadow-xs hover:border-[#263B2D] dark:hover:border-[#D9D2E8] hover:shadow-2xl hover:shadow-[#263B2D]/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between space-y-6 cursor-default group"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#858A65] dark:text-[#D9D2E8]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xs">✦</span>
                  ))}
                </div>

                <p className="font-serif text-xl sm:text-2xl text-[#242520] dark:text-[#EDE9DC] leading-snug italic font-normal">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-5 border-t border-[#858A65]/20 flex items-center justify-between">
                <div>
                  <strong className="text-sm font-semibold text-[#242520] dark:text-[#EDE9DC] block group-hover:text-[#263B2D] dark:group-hover:text-[#D9D2E8] transition-colors">
                    {t.author}
                  </strong>
                  <span className="text-xs text-[#858A65] dark:text-[#A2A882] font-mono">
                    {t.role} · {t.company}
                  </span>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#263B2D] text-[#F5F2E9] flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs">
                  <Quote size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

