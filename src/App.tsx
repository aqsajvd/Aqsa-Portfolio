import React, { useState, useEffect } from 'react';
import { ReadingProgress } from './components/ReadingProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { SkillsSection } from './components/SkillsSection';
import { Services } from './components/Services';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { EditorialDivider } from './components/EditorialDivider';
import { AmbientBackground } from './components/AmbientBackground';
import { EditorialMarquee } from './components/EditorialMarquee';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedSkillId, setSelectedSkillId] = useState<string | null>(null);

  // Sync dark class with documentElement
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#F5F2E9] dark:bg-[#181916] text-[#242520] dark:text-[#EDE9DC] transition-colors duration-300 relative selection:bg-[#263B2D] selection:text-[#F5F2E9]">
      {/* Full-Website Ambient Layered Background (Architectural dot grid + floating chromatic orbs) */}
      <AmbientBackground />

      {/* Slim Reading Progress Indicator */}
      <ReadingProgress />

      {/* Clean Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content (Elevated above ambient background) */}
      <main className="relative z-10">
        {/* 1. Hero: Visual introduction with kinetic masked title & live discipline cycler */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* Continuous Kinetic Editorial Marquee Ribbon */}
        <EditorialMarquee />

        {/* Editorial Divider: 01 // SELECTED WORK */}
        <EditorialDivider label="Selected Work" number="01" />

        {/* 2. Selected Work: Filterable gallery with dynamic skill highlights */}
        <Projects
          highlightedSkillId={selectedSkillId}
          onSelectSkill={setSelectedSkillId}
        />

        {/* Editorial Divider: 02 // CAPABILITIES & TOOLS */}
        <EditorialDivider label="Capabilities & Tools" number="02" />

        {/* 3. Skills Matrix: Interactive tags that highlight specific projects */}
        <SkillsSection
          selectedSkillId={selectedSkillId}
          onSelectSkill={setSelectedSkillId}
        />

        {/* Editorial Divider: 03 // SERVICES & PRACTICE */}
        <EditorialDivider label="Services & Practice" number="03" />

        {/* 4. Services: Capabilities & deliverables */}
        <Services />

        {/* Editorial Divider: 04 // DESIGN NARRATIVE */}
        <EditorialDivider label="Design Narrative" number="04" />

        {/* 5. About: Story, verified credentials, and linked competencies */}
        <About
          selectedSkillId={selectedSkillId}
          onSelectSkill={setSelectedSkillId}
        />

        {/* Editorial Divider: 05 // PEER REVIEWS */}
        <EditorialDivider label="Peer Reviews" number="05" />

        {/* 6. Client / Academic Testimonials */}
        <Testimonials />

        {/* Editorial Divider: 06 // ACADEMIC BACKGROUND */}
        <EditorialDivider label="Academic Background" number="06" />

        {/* 7. Education: MDes & BSc Computer Science background */}
        <Education />

        {/* Editorial Divider: 07 // INQUIRIES & CONNECT */}
        <EditorialDivider label="Inquiries & Connect" number="07" />

        {/* 8. Contact: Direct message form, WhatsApp chat, and LinkedIn */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
