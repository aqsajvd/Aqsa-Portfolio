import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS_DATA, PROJECTS } from '../data/portfolioData';
import { SkillItem, Project } from '../types';
import { Sparkles, Layers, ArrowUpRight, Check, X, BookOpen, Compass } from 'lucide-react';
import { CaseStudyModal } from './CaseStudyModal';

interface SkillsSectionProps {
  selectedSkillId: string | null;
  onSelectSkill: (skillId: string | null) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ selectedSkillId, onSelectSkill }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Spatial Design & HCI', 'Publication & Print', 'Visual & Graphic Systems', 'Software & Production'];

  const filteredSkills = activeCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === activeCategory);

  const activeSkill = SKILLS_DATA.find((s) => s.id === selectedSkillId) || null;

  // Matched projects for the active skill
  const matchedProjects = activeSkill
    ? PROJECTS.filter((p) => activeSkill.projectIds.includes(p.id))
    : [];

  const handleTagClick = (skillId: string) => {
    if (selectedSkillId === skillId) {
      onSelectSkill(null); // toggle off
    } else {
      onSelectSkill(skillId);
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="py-24 sm:py-32 border-b border-[#858A65]/25 dark:border-[#858A65]/20 relative overflow-hidden bg-[#EDE9DC]/35 dark:bg-[#1E201C]/40"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 pb-8 border-b border-[#858A65]/25 dark:border-[#858A65]/20"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9D2E8] dark:bg-[#D9D2E8]/20 border border-[#858A65]/30 text-xs font-mono uppercase tracking-wider text-[#242520] dark:text-[#EDE9DC] font-semibold mb-3">
              <Sparkles size={12} className="text-[#263B2D] dark:text-[#D9D2E8]" />
              <span>02 / Interactive Taxonomy</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-[#242520] dark:text-[#EDE9DC] leading-[0.95]">
              Competencies & <span className="italic font-light text-[#263B2D] dark:text-[#D9D2E8]">Artefact</span> Mapping
            </h2>
            <p className="text-sm sm:text-base text-[#242520]/75 dark:text-[#EDE9DC]/75 mt-3 max-w-xl leading-relaxed font-sans font-light">
              Click any skill badge below to dynamically highlight and inspect the exact design publications, prototypes, and research artefacts where that competency was deployed.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#EDE9DC] dark:bg-[#1E201C] border border-[#858A65]/30 dark:border-[#858A65]/20 self-start lg:self-auto shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#263B2D] text-[#F5F2E9] font-semibold shadow-xs'
                    : 'text-[#242520]/70 dark:text-[#EDE9DC]/70 hover:text-[#242520] dark:hover:text-[#EDE9DC] hover:bg-white/60 dark:hover:bg-white/10'
                }`}
              >
                {cat === 'All' ? 'All Skills' : cat.split(' ')[0]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Interactive Skills Tags Grid - Marimba Tactile Stickers */}
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2.5">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkillId === skill.id;
              const projectCount = skill.projectIds.length;

              return (
                <button
                  key={skill.id}
                  onClick={() => handleTagClick(skill.id)}
                  className={`group relative inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs font-medium transition-all duration-200 cursor-pointer border whitespace-nowrap shrink-0 shadow-2xs ${
                    isSelected
                      ? 'bg-[#263B2D] text-[#F5F2E9] border-[#263B2D] shadow-md shadow-[#263B2D]/25 scale-[1.03]'
                      : 'bg-[#EDE9DC]/80 dark:bg-[#1E201C]/80 text-[#242520] dark:text-[#EDE9DC] border-[#858A65]/30 dark:border-[#858A65]/25 hover:border-[#263B2D] dark:hover:border-[#D9D2E8] hover:-translate-y-0.5 hover:bg-white'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full transition-transform ${isSelected ? 'bg-[#D9D2E8] scale-125' : 'bg-[#858A65] group-hover:bg-[#263B2D]'}`} />
                  <span className="font-semibold tracking-wide">{skill.name}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-mono tabular-nums ${
                      isSelected
                        ? 'bg-[#1E201C] text-[#D9D2E8]'
                        : 'bg-[#F5F2E9] dark:bg-[#242520] text-[#858A65] dark:text-[#A2A882] group-hover:text-[#263B2D]'
                    }`}
                  >
                    {projectCount} {projectCount === 1 ? 'work' : 'works'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Clear Filter Prompt if selected */}
          {selectedSkillId && (
            <div className="flex items-center justify-between pt-2 text-xs">
              <span className="text-[#858A65] dark:text-[#A2A882] flex items-center gap-2">
                <span>Active Filter:</span>
                <strong className="text-[#263B2D] dark:text-[#D9D2E8] font-bold font-mono uppercase">{activeSkill?.name}</strong>
              </span>
              <button
                onClick={() => onSelectSkill(null)}
                className="text-xs text-[#242520]/75 dark:text-[#EDE9DC]/75 hover:text-[#263B2D] dark:hover:text-[#D9D2E8] inline-flex items-center gap-1 underline cursor-pointer"
              >
                <X size={12} />
                <span>Reset selection</span>
              </button>
            </div>
          )}
        </div>

        {/* Dynamic Highlighted Projects Showcase Card */}
        <AnimatePresence mode="wait">
          {activeSkill && (
            <motion.div
              key={activeSkill.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="mt-12 p-7 sm:p-10 rounded-3xl bg-[#EDE9DC]/90 dark:bg-[#1E201C]/90 border-2 border-[#263B2D] dark:border-[#D9D2E8] shadow-2xl space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#858A65]/25">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-[#263B2D] dark:text-[#D9D2E8] font-bold mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#263B2D] dark:bg-[#D9D2E8]" />
                    <span>Skill Manifestation</span>
                  </div>
                  <h3 className="font-serif text-3xl font-normal text-[#242520] dark:text-[#EDE9DC] flex items-center gap-3">
                    <span>{activeSkill.name}</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-[#D9D2E8] text-[#242520] font-mono font-normal">
                      {activeSkill.category}
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#242520]/80 dark:text-[#EDE9DC]/80 mt-1.5 max-w-2xl font-light">
                    {activeSkill.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
                  <button
                    onClick={scrollToProjects}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#263B2D] text-[#F5F2E9] hover:bg-[#1E201C] text-xs font-semibold transition-all shadow-xs cursor-pointer"
                  >
                    <span>View in Gallery</span>
                    <ArrowUpRight size={13} />
                  </button>
                  <button
                    onClick={() => onSelectSkill(null)}
                    className="p-2 rounded-xl hover:bg-black/10 dark:hover:bg-white/10 text-[#858A65] hover:text-[#242520] dark:hover:text-[#EDE9DC] transition-colors cursor-pointer"
                    aria-label="Close highlight"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Matched Projects Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {matchedProjects.map((proj) => (
                  <div
                    key={proj.id}
                    onClick={() => setModalProject(proj)}
                    className="group cursor-pointer rounded-2xl p-4 bg-[#F5F2E9] dark:bg-[#242520] border border-[#858A65]/30 hover:border-[#263B2D] dark:hover:border-[#D9D2E8] hover:shadow-xl transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between space-y-4"
                  >
                    <div className="flex gap-3.5 items-center">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#242520] shrink-0 border border-[#858A65]/25">
                        <img
                          src={proj.coverImage}
                          alt={proj.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#263B2D] dark:text-[#D9D2E8] font-bold block">
                          {proj.year} · {proj.category}
                        </span>
                        <h4 className="font-serif text-lg font-normal text-[#242520] dark:text-[#EDE9DC] truncate group-hover:text-[#263B2D] dark:group-hover:text-[#D9D2E8] transition-colors">
                          {proj.title}
                        </h4>
                        <p className="text-[11px] text-[#858A65] dark:text-[#A2A882] line-clamp-1 font-mono">
                          {proj.role}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#858A65]/20 flex items-center justify-between text-xs">
                      <span className="text-[11px] font-semibold text-[#263B2D] dark:text-[#D9D2E8] font-mono">
                        {proj.impactMetrics[0].value} {proj.impactMetrics[0].label}
                      </span>
                      <span className="text-[11px] font-semibold text-[#263B2D] dark:text-[#D9D2E8] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        <span>Read Case</span>
                        <ArrowUpRight size={12} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Case Study Modal for direct triggers */}
      <CaseStudyModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </motion.section>
  );
};

