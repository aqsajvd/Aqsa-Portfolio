import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, SKILLS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import { ArrowUpRight, BookOpen, Sparkles, X, Check, Compass, Layers } from 'lucide-react';

interface ProjectsProps {
  highlightedSkillId?: string | null;
  onSelectSkill?: (skillId: string | null) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ highlightedSkillId, onSelectSkill }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter categories matching her real projects
  const categories = ['All', 'Product Design', 'Spatial Design', 'Editorial', 'Visual Identity', 'Research'];

  const activeSkill = SKILLS_DATA.find((s) => s.id === highlightedSkillId) || null;

  // Filter projects by both category tab and highlighted skill if active
  const filteredProjects = PROJECTS.filter((p) => {
    const matchesCategory =
      selectedCategory === 'All' || (p.disciplines && p.disciplines.includes(selectedCategory));
    return matchesCategory;
  });

  return (
    <motion.section
      id="work"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="py-24 sm:py-32 border-b border-[#858A65]/25 dark:border-[#858A65]/20 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-[#858A65]/25 dark:border-[#858A65]/20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#263B2D] dark:text-[#D9D2E8] font-bold">
                01 / Portfolio
              </span>
              <span className="text-[#858A65]">·</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#D9D2E8] text-[#242520] text-[10px] font-mono font-medium">
                4 Primary Works
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#242520] dark:text-[#EDE9DC] leading-[0.95]">
              Selected <span className="italic font-light text-[#263B2D] dark:text-[#D9D2E8]">Publications</span> & Systems
            </h2>
            <p className="text-sm sm:text-base text-[#242520]/75 dark:text-[#EDE9DC]/75 mt-3 max-w-xl leading-relaxed font-sans font-light">
              Authored spatial research publications, editorial travel magazines, in-cabin assistive AI, and Swiss typographic systems.
            </p>
          </div>

          {/* Segmented Filter Controls - Marimba Style */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#EDE9DC] dark:bg-[#1E201C] border border-[#858A65]/30 dark:border-[#858A65]/20 self-start lg:self-auto shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-3.5 py-1.5 rounded-xl text-xs transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#263B2D] text-[#F5F2E9] shadow-sm font-semibold scale-100'
                    : 'text-[#242520]/70 dark:text-[#EDE9DC]/70 hover:text-[#242520] dark:hover:text-[#EDE9DC] hover:bg-white/60 dark:hover:bg-white/10'
                }`}
              >
                {cat === 'All' ? 'All Archive' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Active Skill Highlight Notification Strip */}
        <AnimatePresence>
          {activeSkill && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              className="mb-10 p-4 px-6 rounded-2xl bg-[#D9D2E8]/40 dark:bg-[#263B2D]/40 border border-[#858A65]/40 flex items-center justify-between gap-4 text-xs shadow-xs"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#263B2D] dark:bg-[#D9D2E8] animate-ping shrink-0" />
                <span className="text-[#242520] dark:text-[#EDE9DC]">
                  Filtering projects primarily powered by:{' '}
                  <strong className="text-[#263B2D] dark:text-[#D9D2E8] font-bold font-mono uppercase">{activeSkill.name}</strong>
                </span>
              </div>
              {onSelectSkill && (
                <button
                  onClick={() => onSelectSkill(null)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#263B2D] text-[#F5F2E9] hover:bg-[#1E201C] transition-colors font-medium text-[11px] cursor-pointer"
                >
                  <X size={12} />
                  <span>Clear Filter</span>
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Asymmetrical Editorial Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isMatchedBySkill = activeSkill
                ? activeSkill.projectIds.includes(project.id)
                : false;
              const isDimmed = activeSkill && !isMatchedBySkill;

              // Asymmetric grid spans for editorial cadence:
              // Index 0: 7 cols (Featured Lead: RAAHI Driver Drowsiness)
              // Index 1: 5 cols (Editorial Research: Beyond Reality)
              // Index 2: 5 cols (Editorial Magazine: Hanging Garden)
              // Index 3: 7 cols (Ferrari F40 Kinetic Study)
              const colSpanClass =
                idx === 0
                  ? 'md:col-span-7'
                  : idx === 1
                  ? 'md:col-span-5'
                  : idx === 2
                  ? 'md:col-span-5'
                  : 'md:col-span-7';

              return (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  animate={{
                    opacity: isDimmed ? 0.35 : 1,
                    y: 0,
                    scale: isMatchedBySkill ? 1.02 : 1,
                  }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setSelectedProject(project)}
                  className={`group cursor-pointer flex flex-col justify-between bg-[#EDE9DC]/70 dark:bg-[#1E201C]/80 border rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 relative shadow-xs hover:shadow-2xl hover:shadow-[#263B2D]/10 ${colSpanClass} ${
                    isMatchedBySkill
                      ? 'border-[#263B2D] dark:border-[#D9D2E8] ring-2 ring-[#263B2D]/40'
                      : 'border-[#858A65]/30 dark:border-[#858A65]/25 hover:border-[#263B2D] dark:hover:border-[#D9D2E8]'
                  }`}
                >
                  {/* Strict Overflow Protection for Cover Frame */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full overflow-hidden bg-[#242520] flex items-center justify-center isolate">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-center max-w-full max-h-full block group-hover:scale-105 transition-transform duration-700 ease-out select-none"
                      loading="lazy"
                    />

                    {/* Editorial Grain Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#242520]/80 via-transparent to-[#242520]/20 opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

                    {/* Quiet Unboxed Editorial Corner Meta */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#F5F2E9] bg-[#242520]/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-mono text-[#EDE9DC]/80 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
                        {project.year}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 flex items-center gap-1.5">
                      {project.figmaUrl && (
                        <div className="bg-[#263B2D]/90 backdrop-blur-md text-[#F5F2E9] px-2.5 py-1 rounded-full text-[10px] font-mono flex items-center gap-1 shadow-sm border border-emerald-400/30">
                          <Sparkles size={11} className="text-[#D9D2E8]" />
                          <span>Figma Slides</span>
                        </div>
                      )}
                      {project.pdfUrl && (
                        <div className="bg-[#242520]/90 backdrop-blur-md text-[#F5F2E9] px-2.5 py-1 rounded-full text-[10px] font-mono flex items-center gap-1 shadow-sm border border-white/20">
                          <BookOpen size={11} className="text-[#D9D2E8]" />
                          <span>PDF Reader</span>
                        </div>
                      )}
                    </div>

                    {/* Highlighted by Skill Badge overlay */}
                    {isMatchedBySkill && activeSkill && (
                      <div className="absolute bottom-4 left-4 right-4 bg-[#263B2D]/95 backdrop-blur-md text-[#F5F2E9] py-2 px-3.5 rounded-xl text-[11px] font-semibold shadow-lg flex items-center justify-between animate-in fade-in border border-[#D9D2E8]/40">
                        <span className="flex items-center gap-1.5 truncate">
                          <Check size={13} className="text-[#D9D2E8] shrink-0" />
                          <span>Utilizes: {activeSkill.name}</span>
                        </span>
                        <span className="font-mono text-[10px] uppercase text-[#D9D2E8] tracking-wider">Primary Track</span>
                      </div>
                    )}
                  </div>

                  {/* Content Details */}
                  <div className="p-7 sm:p-8 flex flex-col justify-between flex-1 space-y-5">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-[#858A65] dark:text-[#A2A882] font-mono">
                        <span className="uppercase tracking-wider">Case 0{idx + 1}</span>
                        <span className="truncate max-w-[200px]">{project.role}</span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#242520] dark:text-[#EDE9DC] group-hover:text-[#263B2D] dark:group-hover:text-[#D9D2E8] transition-colors duration-200 line-clamp-2 leading-tight">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#242520]/75 dark:text-[#EDE9DC]/75 line-clamp-3 leading-relaxed font-sans font-light">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Disciplines Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.disciplines?.slice(0, 3).map((d) => (
                        <span
                          key={d}
                          className="px-2.5 py-0.5 rounded-full bg-[#F5F2E9] dark:bg-[#242520] text-[#242520]/80 dark:text-[#EDE9DC]/80 text-[10px] font-mono border border-[#858A65]/20"
                        >
                          {d}
                        </span>
                      ))}
                    </div>

                    {/* Footer with key metric & CTA */}
                    <div className="pt-4 border-t border-[#858A65]/20 dark:border-[#858A65]/20 flex items-center justify-between">
                      <div className="text-xs">
                        <span className="font-bold text-[#263B2D] dark:text-[#D9D2E8] font-mono tabular-nums">
                          {project.impactMetrics[0].value}
                        </span>
                        <span className="text-[#858A65] dark:text-[#A2A882] ml-1.5 font-normal">
                          {project.impactMetrics[0].label}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#263B2D] dark:text-[#D9D2E8] group-hover:translate-x-1 transition-all duration-200">
                        <span>Explore Dossier</span>
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </motion.section>
  );
};

