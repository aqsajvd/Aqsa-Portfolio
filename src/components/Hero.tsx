import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowDown,
  FileText,
  MessageCircle,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  MapPin,
  Clock,
  ChevronRight,
  Compass,
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { CaseStudyModal } from './CaseStudyModal';

interface HeroProps {
  onOpenResume: () => void;
}

const DISCIPLINES = [
  {
    title: 'RAAHI In-Cabin Assistive AI Companion',
    tag: 'Product Design & HCI',
    color: 'text-[#263B2D] dark:text-[#D9D2E8] bg-[#EDE9DC] dark:bg-[#263B2D]/40',
  },
  {
    title: '53-Page Spatial VR/AR Immersion Publication',
    tag: 'Spatial HCI & Editorial',
    color: 'text-[#263B2D] dark:text-[#D9D2E8] bg-[#D9D2E8]/40 dark:bg-[#D9D2E8]/20',
  },
  {
    title: 'Swiss Typographic Hierarchy & Grid Systems',
    tag: 'Visual Identity',
    color: 'text-[#858A65] dark:text-[#A2A882] bg-[#EDE9DC] dark:bg-[#242520]',
  },
  {
    title: 'Cognitive Ergonomics & Multimodal Telemetry',
    tag: 'Design Research',
    color: 'text-[#263B2D] dark:text-[#D9D2E8] bg-[#D9D2E8]/30 dark:bg-[#263B2D]/30',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const featuredProjects = PROJECTS.slice(0, 4);
  const currentProject = featuredProjects[activePreviewIndex] || featuredProjects[0];

  // Auto-cycle kinetic research disciplines
  useEffect(() => {
    const interval = setInterval(() => {
      setDisciplineIndex((prev) => (prev + 1) % DISCIPLINES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // Annotation text tailored to active project
  const getAnnotation = (id: string) => {
    switch (id) {
      case 'raahi-driver-drowsiness':
        return 'AI Companion · Woxsen';
      case 'beyond-reality-vr-ar':
        return 'Spatial Computing · 53 Pages';
      case 'hanging-garden-magazine':
        return 'Editorial Travel · Bloom';
      case 'ferrari-f40-poster':
        return 'Swiss Telemetry · Graphic';
      default:
        return 'Selected Work · Woxsen';
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-[#858A65]/20 dark:border-[#2C3E32]">
      {/* 1. Marimba-inspired Soft Luminous Gradients & Translucent Shapes */}
      <div className="absolute top-12 left-1/3 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-tr from-[#D9D2E8]/25 via-[#EDE9DC]/35 to-[#858A65]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-36 right-0 w-[420px] h-[420px] bg-gradient-to-bl from-[#263B2D]/8 via-[#858A65]/10 to-transparent rounded-full blur-[110px] pointer-events-none" />

      {/* Subtle Marimba Starburst Geometry in Background */}
      <div className="absolute top-16 right-8 w-32 h-32 opacity-[0.05] dark:opacity-[0.04] text-[#263B2D] dark:text-[#D9D2E8] pointer-events-none select-none animate-spin-slow hidden md:block">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 L53 38 L91 18 L64 47 L100 50 L64 53 L91 82 L53 62 L50 100 L47 62 L9 82 L36 53 L0 50 L36 47 L9 18 L47 38 Z" />
        </svg>
      </div>

      {/* Main Centered Editorial Container (Max Width: 1380px) */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Top Status & Academic Track Meta Strip */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 sm:mb-10 border-b border-[#858A65]/20 dark:border-[#2C3E32] text-xs font-mono"
        >
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#263B2D]/8 dark:bg-[#D9D2E8]/10 text-[#263B2D] dark:text-[#D9D2E8] border border-[#263B2D]/15 dark:border-[#D9D2E8]/20 font-medium text-[11px] tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#263B2D] dark:bg-[#D9D2E8] animate-pulse" />
              <span>Available for Research & Product Roles</span>
            </span>

            <span className="inline-flex items-center gap-1.5 text-[#858A65] dark:text-[#A2A882] text-[11px]">
              <MapPin size={11} className="text-[#263B2D] dark:text-[#D9D2E8]" />
              <span>Hyderabad · Kamkole, India</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-[#858A65] dark:text-[#A2A882] text-[11px]">
            <Clock size={11} />
            <span>IST (UTC+5:30)</span>
            <span className="opacity-35">/</span>
            <span className="text-[#242520] dark:text-[#EDE9DC] font-medium">Woxsen University</span>
          </div>
        </motion.div>

        {/* 2-Column Balanced Editorial Grid (Desktop: 56% Left / 44% Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[56%_44%] gap-10 sm:gap-12 xl:gap-16 items-center">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Editorial Voice, Headline & Identity (56%) */}
          {/* ========================================================= */}
          <div className="space-y-5 sm:space-y-6 lg:space-y-7">
            {/* Academic Track Kicker */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] sm:text-xs font-mono uppercase text-[#263B2D] dark:text-[#D9D2E8] font-semibold"
            >
              <span>M.Des Candidate</span>
              <span className="text-[#858A65]/50">/</span>
              <span>School of Arts & Design, Woxsen</span>
              <span className="text-[#858A65]/50">/</span>
              <span className="text-[#858A65] dark:text-[#A2A882] font-normal">BITS Pilani Alumna</span>
            </motion.div>

            {/* Editorial Headline: Instrument Serif with calibrated sizing & intentional line breaks */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-1"
            >
              <h1
                aria-label="Where computational logic meets human perception."
                className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4.15rem] font-normal tracking-tight text-[#242520] dark:text-[#EDE9DC] leading-[1.08] text-balance"
              >
                <span className="block">
                  Where computational{' '}
                  <span className="italic font-serif text-[#263B2D] dark:text-[#A8D5BA] font-normal selection:text-[#F5F2E9]">
                    logic
                  </span>
                </span>
                <span className="block mt-1 sm:mt-1.5">
                  meets human{' '}
                  <span className="italic font-serif text-[#263B2D] dark:text-[#A8D5BA] font-normal selection:text-[#F5F2E9]">
                    perception.
                  </span>
                </span>
              </h1>
            </motion.div>

            {/* Kinetic Focus & Specialization Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-mono text-[#858A65] dark:text-[#A2A882]"
            >
              <span className="uppercase tracking-widest text-[11px] text-[#858A65] dark:text-[#A2A882] shrink-0 font-medium">
                Focus:
              </span>
              <div className="relative h-7 overflow-hidden flex items-center min-w-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={disciplineIndex}
                    initial={{ y: 14, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -14, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="flex items-center gap-2 min-w-0"
                  >
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium tracking-wide uppercase border border-[#858A65]/20 shrink-0 ${DISCIPLINES[disciplineIndex].color}`}
                    >
                      {DISCIPLINES[disciplineIndex].tag}
                    </span>
                    <span className="text-[#242520] dark:text-[#EDE9DC] font-medium text-xs sm:text-sm truncate">
                      {DISCIPLINES[disciplineIndex].title}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Short Personal Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-base sm:text-lg text-[#242520]/85 dark:text-[#EDE9DC]/85 leading-relaxed font-light max-w-xl text-balance"
            >
              I am <strong className="font-semibold text-[#242520] dark:text-[#EDE9DC]">Aqsa Javed</strong>, a multidisciplinary designer synthesizing research into assistive in-cabin AI companions, spatial interactions, and Swiss editorial publication systems. Alumna of <strong className="font-medium text-[#242520] dark:text-[#EDE9DC]">BITS Pilani</strong> (BSc CS) and Master of Design researcher at <strong className="font-medium text-[#242520] dark:text-[#EDE9DC]">Woxsen University</strong>.
            </motion.p>

            {/* Tactile Project Highlight Chips (Interactive: Clicking updates preview card) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.5 }}
              className="pt-1 flex flex-wrap items-center gap-2 select-none"
            >
              {[
                {
                  id: 0,
                  label: '✦ In-Cabin Assistive AI (RAAHI)',
                  color: 'bg-[#263B2D]/8 dark:bg-[#263B2D]/25 text-[#263B2D] dark:text-[#D9D2E8] border-[#263B2D]/20',
                },
                {
                  id: 1,
                  label: '✦ 53-Page Spatial VR/AR Publication',
                  color: 'bg-[#D9D2E8]/35 dark:bg-[#D9D2E8]/15 text-[#242520] dark:text-[#D9D2E8] border-[#D9D2E8]/60',
                },
                {
                  id: 2,
                  label: '✦ Editorial Travel Magazine (Bloom)',
                  color: 'bg-[#EDE9DC] dark:bg-[#242520] text-[#242520] dark:text-[#EDE9DC] border-[#858A65]/30',
                },
                {
                  id: 3,
                  label: '✦ Swiss Kinetic Poster (Ferrari F40)',
                  color: 'bg-[#858A65]/12 dark:bg-[#858A65]/20 text-[#242520] dark:text-[#EDE9DC] border-[#858A65]/25',
                },
              ].map((badge) => (
                <button
                  key={badge.id}
                  onClick={() => setActivePreviewIndex(badge.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all duration-200 cursor-pointer text-left ${
                    badge.color
                  } ${
                    activePreviewIndex === badge.id
                      ? 'ring-2 ring-[#263B2D]/40 dark:ring-[#D9D2E8]/40 shadow-xs'
                      : 'hover:border-[#263B2D]/40 hover:-translate-y-0.5'
                  }`}
                >
                  {badge.label}
                </button>
              ))}
            </motion.div>

            {/* CTA Hierarchy: Primary, Secondary & CV Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              {/* Primary CTA */}
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F5F2E9] bg-[#263B2D] hover:bg-[#1E2E23] dark:bg-[#D9D2E8] dark:text-[#181916] dark:hover:bg-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
              >
                <span>Explore Selected Work</span>
                <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform duration-200" />
              </a>

              {/* Secondary CTA */}
              <a
                href={PERSONAL_INFO.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4.5 sm:px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#263B2D] dark:text-[#D9D2E8] bg-[#EDE9DC]/90 dark:bg-[#242520] hover:bg-[#E4DFCE] border border-[#858A65]/35 dark:border-[#2C3E32] rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle size={15} className="text-[#263B2D] dark:text-[#D9D2E8]" />
                <span>WhatsApp Contact</span>
              </a>

              {/* Additional CTA */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-4.5 py-3.5 text-xs font-medium text-[#242520] dark:text-[#EDE9DC] hover:text-[#263B2D] bg-transparent hover:bg-[#EDE9DC]/60 dark:hover:bg-[#242520]/80 border border-[#858A65]/30 dark:border-[#2C3E32] rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <FileText size={14} />
                <span>Curriculum Vitae</span>
              </button>
            </motion.div>

            {/* Social Channels Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-4 border-t border-[#858A65]/20 dark:border-[#2C3E32] flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-[#858A65] dark:text-[#A2A882]"
            >
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#263B2D] dark:hover:text-[#EDE9DC] inline-flex items-center gap-1 transition-colors"
              >
                <span>github.com/aqsajvd</span>
                <ArrowUpRight size={11} className="opacity-70" />
              </a>
              <span className="hidden sm:inline">·</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#263B2D] dark:hover:text-[#EDE9DC] inline-flex items-center gap-1 transition-colors"
              >
                <span>linkedin.com/in/aqsa-javed89</span>
                <ArrowUpRight size={11} className="opacity-70" />
              </a>
              <span className="hidden sm:inline">·</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-[#263B2D] dark:hover:text-[#EDE9DC] inline-flex items-center gap-1 transition-colors"
              >
                <span>{PERSONAL_INFO.email}</span>
                <ArrowUpRight size={11} className="opacity-70" />
              </a>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Featured Project Showcase Card (44%)      */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-4 lg:mt-0"
          >
            {/* Ambient Lighting behind Card */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#D9D2E8]/35 via-[#858A65]/15 to-[#263B2D]/15 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

            {/* Floating Editorial Annotation: Dynamic Project Focus Tag */}
            <div className="absolute -top-3.5 left-4 sm:left-5 bg-[#F5F2E9] dark:bg-[#1C1D18] px-3 sm:px-3.5 py-1 rounded-md border border-[#858A65]/35 dark:border-[#2C3E32] shadow-xs flex items-center gap-1.5 sm:gap-2 z-20 text-[10px] font-mono uppercase tracking-wider text-[#263B2D] dark:text-[#D9D2E8] select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#263B2D] dark:bg-[#D9D2E8]" />
              <span className="font-semibold">{getAnnotation(currentProject.id)}</span>
            </div>

            {/* Floating Editorial Annotation: Academic Scholar Tag */}
            <div className="absolute -bottom-3 right-4 sm:right-5 bg-[#F5F2E9] dark:bg-[#1C1D18] px-3 sm:px-3.5 py-1 rounded-md border border-[#858A65]/35 dark:border-[#2C3E32] shadow-xs flex items-center gap-1.5 z-20 text-[10px] font-mono uppercase tracking-wider text-[#858A65] dark:text-[#A2A882] select-none">
              <Compass size={11} className="text-[#263B2D] dark:text-[#D9D2E8]" />
              <span className="font-medium">M.Des Scholar · Woxsen</span>
            </div>

            {/* Showcase Card Shell */}
            <div className="rounded-2xl bg-[#EDE9DC]/80 dark:bg-[#1E201B]/90 border border-[#858A65]/25 dark:border-[#2C3E32] shadow-[0_16px_40px_rgba(38,59,45,0.06)] dark:shadow-none overflow-hidden transition-all duration-300">
              {/* Card Meta Header */}
              <div className="px-4 sm:px-5 py-3 border-b border-[#858A65]/20 dark:border-[#2C3E32] flex items-center justify-between text-[11px] sm:text-xs font-mono">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#263B2D] dark:bg-[#D9D2E8] shrink-0" />
                  <span className="font-semibold text-[#263B2D] dark:text-[#D9D2E8] tracking-wide truncate">
                    {currentProject.category}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[#858A65] dark:text-[#A2A882] shrink-0">
                  <span>{currentProject.year}</span>
                  <span className="opacity-35">/</span>
                  <span className="font-mono text-[#242520] dark:text-[#EDE9DC] font-medium">
                    0{activePreviewIndex + 1} of 0{featuredProjects.length}
                  </span>
                </div>
              </div>

              {/* Refined Image Showcase Stage: Adaptive & Fully Visible (No Cropping/Cutoff) */}
              <div 
                onClick={() => setModalProject(currentProject)}
                className="relative w-full h-[260px] sm:h-[320px] md:h-[360px] overflow-hidden bg-[#E7E2D4]/50 dark:bg-[#141512] flex items-center justify-center p-3 sm:p-5 isolate group select-none cursor-pointer"
                title="Click to view full case study"
              >
                {/* Soft ambient color wash behind artwork matching project tones */}
                <div
                  key={`ambient-${currentProject.id}`}
                  className="absolute inset-0 bg-cover bg-center blur-2xl opacity-25 dark:opacity-30 scale-125 pointer-events-none transition-all duration-700"
                  style={{ backgroundImage: `url(${currentProject.coverImage})` }}
                />

                {/* Subtle hairline edge frame */}
                <div className="absolute inset-0 border-b border-[#858A65]/15 dark:border-[#2C3E32] pointer-events-none z-10" />

                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentProject.id}
                    src={currentProject.coverImage}
                    alt={currentProject.title}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="relative z-10 max-h-full max-w-full w-auto h-auto object-contain rounded-lg shadow-sm group-hover:scale-[1.02] group-hover:shadow-md transition-all duration-500 ease-out"
                  />
                </AnimatePresence>

                {/* Quick Hint Overlay on Hover */}
                <div className="absolute bottom-2.5 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm text-white text-[10px] font-mono">
                  <span>Enlarge</span>
                  <ExternalLink size={10} />
                </div>
              </div>

              {/* Project Title, Description & Action Buttons */}
              <div className="p-4 sm:p-5 lg:p-6 space-y-3.5 sm:space-y-4">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#242520] dark:text-[#EDE9DC] leading-snug">
                    {currentProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#242520]/75 dark:text-[#EDE9DC]/75 line-clamp-2 mt-1.5 font-light leading-relaxed">
                    {currentProject.shortDescription}
                  </p>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <button
                    onClick={() => setModalProject(currentProject)}
                    className="px-4 py-2 rounded-lg bg-[#263B2D] hover:bg-[#1E2E23] text-[#F5F2E9] dark:bg-[#D9D2E8] dark:text-[#181916] dark:hover:bg-white text-xs font-medium inline-flex items-center gap-1.5 transition-all shadow-2xs hover:shadow-xs cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ChevronRight size={13} />
                  </button>

                  {currentProject.figmaUrl && (
                    <a
                      href={currentProject.figmaUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-2 rounded-lg bg-[#F5F2E9] dark:bg-[#242520] hover:bg-white dark:hover:bg-[#2A2B25] text-[#263B2D] dark:text-[#D9D2E8] border border-[#858A65]/30 dark:border-[#2C3E32] text-xs font-mono inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Sparkles size={12} className="text-[#263B2D] dark:text-[#D9D2E8]" />
                      <span>Figma Slides</span>
                      <ExternalLink size={11} className="opacity-70" />
                    </a>
                  )}
                </div>
              </div>

              {/* Interactive Project Selector Tabs */}
              <div className="p-1.5 sm:p-2 bg-[#EDE9DC]/90 dark:bg-[#242520] border-t border-[#858A65]/20 dark:border-[#2C3E32] grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-1.5">
                {featuredProjects.map((proj, idx) => (
                  <button
                    key={proj.id}
                    onClick={() => setActivePreviewIndex(idx)}
                    className={`py-2 px-2 sm:px-2.5 rounded-lg text-[10.5px] sm:text-[11px] font-mono transition-all duration-200 text-left truncate cursor-pointer ${
                      activePreviewIndex === idx
                        ? 'bg-[#263B2D] text-[#F5F2E9] dark:bg-[#D9D2E8] dark:text-[#181916] font-semibold shadow-2xs'
                        : 'bg-[#F5F2E9]/80 dark:bg-[#1C1D18] text-[#242520] dark:text-[#EDE9DC] hover:text-[#263B2D] hover:bg-white'
                    }`}
                  >
                    <span className="opacity-65 mr-1">0{idx + 1}</span>
                    <span>
                      {proj.id === 'raahi-driver-drowsiness'
                        ? 'RAAHI AI'
                        : proj.id === 'beyond-reality-vr-ar'
                        ? 'VR/AR'
                        : proj.id === 'hanging-garden-magazine'
                        ? 'Bloom'
                        : 'Ferrari'}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4-Column Refined Editorial Metric Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 sm:mt-18 pt-8 border-t border-[#858A65]/20 dark:border-[#2C3E32] grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        >
          {[
            {
              value: 'RAAHI AI',
              label: 'Driver Drowsiness Safety Companion',
              color: 'text-[#263B2D] dark:text-[#D9D2E8]',
              badge: 'Woxsen Innovation',
            },
            {
              value: '53 Pages',
              label: 'VR/AR Immersion Publication',
              color: 'text-[#263B2D] dark:text-[#D9D2E8]',
              badge: '188-Year Synthesis',
            },
            {
              value: "M.Des '26",
              label: 'School of Arts & Design, Woxsen',
              color: 'text-[#858A65] dark:text-[#A2A882]',
              badge: 'Product Design',
            },
            {
              value: 'BSc CS',
              label: 'BITS Pilani Alumna',
              color: 'text-[#263B2D] dark:text-[#D9D2E8]',
              badge: 'Computational Theory',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-6 rounded-xl bg-[#EDE9DC]/60 dark:bg-[#242520]/50 border border-[#858A65]/20 dark:border-[#2C3E32] shadow-2xs hover:border-[#263B2D]/40 transition-all duration-200 cursor-default flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#858A65] dark:text-[#A2A882] block mb-1">
                  {item.badge}
                </span>
                <div className={`text-xl sm:text-2xl md:text-3xl font-serif font-medium ${item.color}`}>
                  {item.value}
                </div>
              </div>
              <div className="text-xs font-medium text-[#242520]/75 dark:text-[#EDE9DC]/75 mt-2">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Case Study Modal */}
      {modalProject && (
        <CaseStudyModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </section>
  );
};
