import React from 'react';
import { motion } from 'motion/react';
import { Layout, Code, Globe, ShoppingBag, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout size={22} className="text-[#263B2D] dark:text-[#D9D2E8]" />,
  Code: <Code size={22} className="text-[#858A65] dark:text-[#D9D2E8]" />,
  Globe: <Globe size={22} className="text-[#263B2D] dark:text-[#D9D2E8]" />,
  ShoppingBag: <ShoppingBag size={22} className="text-[#858A65] dark:text-[#D9D2E8]" />,
};

export const Services: React.FC = () => {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="py-24 sm:py-32 border-b border-[#858A65]/25 dark:border-[#858A65]/20 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-[#858A65]/25 dark:border-[#858A65]/20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#263B2D] dark:text-[#D9D2E8] font-bold">
                03 / Capabilities
              </span>
              <span className="text-[#858A65]">·</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#D9D2E8] text-[#242520] text-[10px] font-mono font-medium">
                Research & Craft
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-[#242520] dark:text-[#EDE9DC] leading-[0.95]">
              Design <span className="italic font-light text-[#263B2D] dark:text-[#D9D2E8]">Services</span> & Disciplines
            </h2>
            <p className="text-sm sm:text-base text-[#242520]/75 dark:text-[#EDE9DC]/75 mt-3 max-w-xl leading-relaxed font-sans font-light">
              Research-backed publication design, spatial interaction models, in-cabin assistive AI, and typographic identity systems.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#263B2D] hover:bg-[#1E201C] text-[#F5F2E9] text-xs font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shrink-0 self-start lg:self-auto shadow-md cursor-pointer"
          >
            <span>Start a Conversation</span>
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* 4 Clean Editorial Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((service, idx) => (
            <div
              key={service.title}
              className="p-8 sm:p-10 rounded-3xl bg-[#EDE9DC]/70 dark:bg-[#1E201C]/80 border border-[#858A65]/30 dark:border-[#858A65]/25 hover:border-[#263B2D] dark:hover:border-[#D9D2E8] shadow-xs hover:shadow-2xl hover:shadow-[#263B2D]/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between space-y-6 group cursor-default"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5F2E9] dark:bg-[#242520] border border-[#858A65]/25 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-2xs">
                    {iconMap[service.icon] || <Layout size={22} />}
                  </div>
                  {/* Clean unboxed index number */}
                  <span className="font-mono text-xs text-[#858A65] dark:text-[#A2A882] tracking-wider uppercase">
                    Track 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#242520] dark:text-[#EDE9DC] group-hover:text-[#263B2D] dark:group-hover:text-[#D9D2E8] transition-colors duration-200">
                  {service.title}
                </h3>

                <p className="text-sm text-[#242520]/75 dark:text-[#EDE9DC]/75 leading-relaxed font-sans font-light">
                  {service.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-5 border-t border-[#858A65]/20 dark:border-[#858A65]/20 space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#858A65] dark:text-[#A2A882] block font-semibold">
                  Core Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-[#242520]/85 dark:text-[#EDE9DC]/85 transition-colors group-hover:text-[#242520] dark:group-hover:text-[#EDE9DC] font-normal">
                      <CheckCircle2 size={13} className="text-[#263B2D] dark:text-[#D9D2E8] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

