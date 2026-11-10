import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { X, ArrowRight, CheckCircle2, BookOpen, ExternalLink, Download, Layers, Sparkles, ChevronRight, ChevronLeft, Eye } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedEra, setSelectedEra] = useState(0);

  // ESC key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setActiveImageIdx(0);
      setSelectedEra(0);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const gallery = project.galleryImages && project.galleryImages.length > 0
    ? project.galleryImages
    : [project.coverImage];

  const captions = project.galleryCaptions || [];

  const vrEras = [
    {
      num: '01',
      name: 'Mind Before Screens',
      period: '1838 — 1960',
      milestone: 'Wheatstone Stereoscope, Sensorama & Telesphere Mask',
      summary: 'Before digital screens existed, scientists and artists manipulated stereoscopic lenses and sensory cinema to trick human perception into feeling 3D depth.',
    },
    {
      num: '02',
      name: 'Creating Virtual Worlds',
      period: '1968 — 1989',
      milestone: 'Sword of Damocles, VPL DataGlove & NASA VIEW',
      summary: 'Ivan Sutherland’s wireframe head-mount and NASA’s data gloves allowed users for the first time to move through computer-generated space using real body gestures.',
    },
    {
      num: '03',
      name: 'Emerging Realities',
      period: '1990 — 1999',
      milestone: 'Virtuality Arcades & Virtual Fixtures AR',
      summary: 'Commercial 3D headsets entered gaming arcades while military research overlaid digital graphics onto real-world equipment to assist assembly precision.',
    },
    {
      num: '04',
      name: 'The Touch Era',
      period: '2012 — 2016',
      milestone: 'Google Glass, Oculus Rift DK1 & Google Cardboard',
      summary: 'Smartphones and affordable optics democratized virtual reality, shifting immersion from heavy laboratory machinery into everyday consumer devices.',
    },
    {
      num: '05',
      name: 'Spatial Perception',
      period: '2016 — 2022',
      milestone: 'Microsoft HoloLens, Pokémon GO & Apple ARKit',
      summary: 'Computer vision, LiDAR, and surface mapping allowed digital holograms to stay anchored to physical floors, tables, and city landmarks in real time.',
    },
    {
      num: '06',
      name: 'Spatial Computing & AI',
      period: '2023 — 2026',
      milestone: 'Apple Vision Pro, Meta Quest & Ray-Ban Meta AI',
      summary: 'High-resolution eye tracking, natural hand gestures, and context-aware multimodal AI merge digital interfaces seamlessly into the spaces we live in.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#242520]/80 backdrop-blur-md flex justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#F5F2E9] dark:bg-[#181916] text-[#242520] dark:text-[#EDE9DC] rounded-3xl border border-[#858A65]/30 dark:border-[#858A65]/25 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-[#F5F2E9]/95 dark:bg-[#181916]/95 backdrop-blur-md border-b border-[#858A65]/20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#858A65] dark:text-[#A2A882] truncate">
            <span className="font-semibold text-[#242520] dark:text-[#EDE9DC]">{project.title}</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {project.figmaUrl && (
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#263B2D] hover:bg-[#1E201C] text-[#F5F2E9] text-xs font-medium transition-colors shadow-xs"
              >
                <Sparkles size={13} className="text-[#D9D2E8]" />
                <span>Open Figma Slides</span>
                <ExternalLink size={11} />
              </a>
            )}

            {project.pdfUrl && (
              <a
                href={project.pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#242520] hover:bg-black text-[#F5F2E9] text-xs font-medium transition-colors shadow-xs border border-white/20"
              >
                <BookOpen size={13} className="text-[#D9D2E8]" />
                <span>Open Full PDF</span>
                <ExternalLink size={11} />
              </a>
            )}

            <button
              onClick={onClose}
              aria-label="Close case study"
              className="p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-[#858A65] hover:text-[#242520] dark:hover:text-[#EDE9DC] transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto px-6 sm:px-10 py-8 space-y-12">
          {/* Hero Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
              <span>{project.kicker}</span>
              {project.team && (
                <>
                  <span>·</span>
                  <span className="text-stone-500 dark:text-stone-400">{project.team}</span>
                </>
              )}
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 dark:text-stone-50 leading-[1.12]">
              {project.caseStudy.heroTagline}
            </h1>

            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-light">
              {project.caseStudy.executiveSummary}
            </p>
          </div>

          {/* Project Meta Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-stone-100/80 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800 text-xs">
            <div>
              <span className="font-mono text-stone-400 dark:text-stone-500 block mb-1 uppercase tracking-wider">
                Role & By
              </span>
              <strong className="font-medium text-stone-900 dark:text-stone-100 text-sm block truncate">
                {project.role}
              </strong>
            </div>
            <div>
              <span className="font-mono text-stone-400 dark:text-stone-500 block mb-1 uppercase tracking-wider">
                Timeline
              </span>
              <strong className="font-medium text-stone-900 dark:text-stone-100 text-sm block">
                {project.duration}
              </strong>
            </div>
            <div>
              <span className="font-mono text-stone-400 dark:text-stone-500 block mb-1 uppercase tracking-wider">
                Institution / Context
              </span>
              <span className="text-stone-700 dark:text-stone-300 block truncate">
                {project.publicationDetails || project.caseStudy.clientContext}
              </span>
            </div>
            <div>
              <span className="font-mono text-stone-400 dark:text-stone-500 block mb-1 uppercase tracking-wider">
                Tools & Methods
              </span>
              <span className="text-stone-700 dark:text-stone-300 block truncate">
                {project.tools.slice(0, 3).join(', ')}
              </span>
            </div>
          </div>

          {/* Publication Gallery & Page Spreads Viewer */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold block">
                  Document Artifacts
                </span>
                <h3 className="font-serif text-2xl font-medium text-stone-900 dark:text-stone-50">
                  Publication Pages & Visual Spreads
                </h3>
              </div>
              {project.pdfUrl && (
                <a
                  href={project.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>Download Original PDF</span>
                  <Download size={13} />
                </a>
              )}
            </div>

            {/* Featured Active Page View */}
            <div className="overflow-hidden rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-950 flex flex-col items-center justify-center relative group isolate">
              <div className="w-full flex items-center justify-center p-4 sm:p-6 bg-stone-950/95 relative min-h-[300px]">
                <img
                  src={gallery[activeImageIdx]}
                  alt={captions[activeImageIdx] || project.title}
                  className="max-h-[55vh] sm:max-h-[580px] w-auto max-w-full object-contain rounded-lg shadow-2xl block select-none"
                />

                {/* Left/Right Page Flip Controls */}
                {gallery.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveImageIdx((prev) => (prev > 0 ? prev - 1 : gallery.length - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm transition-all duration-200 cursor-pointer shadow-md hover:scale-110 active:scale-95"
                      aria-label="Previous spread"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={() => setActiveImageIdx((prev) => (prev < gallery.length - 1 ? prev + 1 : 0))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm transition-all duration-200 cursor-pointer shadow-md hover:scale-110 active:scale-95"
                      aria-label="Next spread"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}
              </div>

              {/* Caption Bar */}
              <div className="w-full p-4 bg-stone-900 text-stone-200 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-stone-800 text-purple-300 font-mono text-[11px] tabular-nums">
                    Spread {activeImageIdx + 1} / {gallery.length}
                  </span>
                  <span className="font-medium text-stone-100">
                    {captions[activeImageIdx] || project.title}
                  </span>
                </div>
                <div className="text-[11px] text-stone-400 font-mono">
                  Original Publication Asset
                </div>
              </div>
            </div>

            {/* Thumbnails Navigator */}
            {gallery.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-2 pt-2">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`relative aspect-[3/4] rounded-lg overflow-hidden border-2 transition-all ${
                      activeImageIdx === idx
                        ? 'border-blue-600 scale-105 shadow-md'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Interactive Feature: 6 Eras of Immersion Navigator (for Beyond Reality) */}
          {project.id === 'beyond-reality-vr-ar' && (
            <div className="p-6 sm:p-8 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/80 dark:border-purple-800/60 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-purple-700 dark:text-purple-300 font-semibold mb-1">
                  <Sparkles size={13} />
                  <span>Interactive Research Matrix</span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-stone-900 dark:text-stone-50">
                  The Six Eras of Immersion (1838 — 2026)
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400">
                  Select an era below to explore the core interaction models synthesized in the publication.
                </p>
              </div>

              {/* Era Selector Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                {vrEras.map((era, idx) => (
                  <button
                    key={era.num}
                    onClick={() => setSelectedEra(idx)}
                    className={`p-2.5 rounded-xl text-left border transition-all ${
                      selectedEra === idx
                        ? 'bg-purple-600 text-white border-purple-600 shadow-sm font-semibold'
                        : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-800 hover:border-purple-300'
                    }`}
                  >
                    <div className="text-[10px] font-mono opacity-80">Era {era.num}</div>
                    <div className="text-xs font-medium truncate mt-0.5">{era.name}</div>
                  </button>
                ))}
              </div>

              {/* Active Era Details Card */}
              <div className="p-5 rounded-xl bg-white dark:bg-stone-900/90 border border-purple-200/60 dark:border-purple-900/50 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                  <span className="font-mono text-purple-600 dark:text-purple-400 font-bold">
                    Era {vrEras[selectedEra].num} · {vrEras[selectedEra].name}
                  </span>
                  <span className="font-mono text-stone-400 dark:text-stone-500">
                    {vrEras[selectedEra].period}
                  </span>
                </div>
                <div className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                  Milestones: {vrEras[selectedEra].milestone}
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {vrEras[selectedEra].summary}
                </p>
              </div>
            </div>
          )}

          {/* Section 01: Research & Insights */}
          <div className="space-y-4 pt-4 border-t border-stone-200 dark:border-stone-800">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
              Research & Framing
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 dark:text-stone-50">
              {project.caseStudy.researchAndInsights.title}
            </h2>
            <div className="text-sm font-medium text-stone-500 dark:text-stone-400">
              {project.caseStudy.researchAndInsights.subtitle}
            </div>
            <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed">
              {project.caseStudy.researchAndInsights.content}
            </p>

            {project.caseStudy.researchAndInsights.keyInsights && (
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.caseStudy.researchAndInsights.keyInsights.map((insight, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-stone-100/60 dark:bg-stone-900/40 border border-stone-200/70 dark:border-stone-800 text-xs text-stone-700 dark:text-stone-300 leading-relaxed flex items-start gap-2"
                  >
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{insight}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section 02: Computational & Conceptual Synthesis */}
          <div className="space-y-4 pt-4 border-t border-stone-200 dark:border-stone-800">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
              Design Architecture
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 dark:text-stone-50">
              {project.caseStudy.computationalSynthesis.title}
            </h2>
            <div className="text-sm font-medium text-stone-500 dark:text-stone-400">
              {project.caseStudy.computationalSynthesis.subtitle}
            </div>
            <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed">
              {project.caseStudy.computationalSynthesis.content}
            </p>
          </div>

          {/* Section 03: Solution & Visual Craft */}
          <div className="space-y-4 pt-4 border-t border-stone-200 dark:border-stone-800">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
              Execution & Layout
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 dark:text-stone-50">
              {project.caseStudy.solutionAndCraft.title}
            </h2>
            <div className="text-sm font-medium text-stone-500 dark:text-stone-400">
              {project.caseStudy.solutionAndCraft.subtitle}
            </div>
            <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed">
              {project.caseStudy.solutionAndCraft.content}
            </p>
          </div>

          {/* Section 04: Academic Outcomes & Next Steps */}
          <div className="space-y-4 pt-4 border-t border-stone-200 dark:border-stone-800">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
              Impact & Academic Outcomes
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 dark:text-stone-50">
              {project.caseStudy.outcomesAndLearnings.title}
            </h2>
            <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed">
              {project.caseStudy.outcomesAndLearnings.content}
            </p>

            {project.impactMetrics && (
              <div className="grid grid-cols-3 gap-3 pt-2">
                {project.impactMetrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-center"
                  >
                    <div className="text-xl sm:text-2xl font-serif font-bold text-blue-600 dark:text-blue-400">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-stone-500 dark:text-stone-400 font-mono mt-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-stone-100 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
          <span>Aqsa Javed · Woxsen University School of Arts & Design</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-medium hover:bg-stone-800 transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
