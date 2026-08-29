import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useFullpageScroll } from '@/hooks/useFullpageScroll';
import { DotNav } from '@/components/ui/DotNav';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { StackSection } from '@/components/sections/StackSection';
import { ContactSection } from '@/components/sections/ContactSection';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Work' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  const { currentSection, isTransitioning, goToSection } = useFullpageScroll({
    totalSections: sections.length,
    transitionDuration: 900,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  // Listen for custom scroll-to events from buttons inside sections
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail && typeof detail.index === 'number') {
        goToSection(detail.index);
      }
    };
    window.addEventListener('scroll-to', handler);
    return () => window.removeEventListener('scroll-to', handler);
  }, [goToSection]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-ink-900">
      {/* Fixed UI overlays */}
      <ProgressBar currentSection={currentSection} totalSections={sections.length} />
      <DotNav sections={sections} currentSection={currentSection} onDotClick={goToSection} />

      {/* Top-left brand mark */}
      <div className="fixed top-5 left-5 sm:left-8 z-50 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-accent-500" />
        <span className="font-display font-semibold text-sm tracking-wide text-white">
          Studio Noir
        </span>
      </div>

      {/* Sliding sections container */}
      <motion.div
        ref={containerRef}
        className="w-full h-full"
        animate={{ y: `-${currentSection * 100}vh` }}
        transition={{
          duration: isTransitioning ? 0.9 : 0.9,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <StackSection />
        <ContactSection />
      </motion.div>
    </div>
  );
}

export default App;
