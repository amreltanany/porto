import { useState, useEffect, useCallback, useRef } from 'react';

interface UseFullpageScrollOptions {
  totalSections: number;
  transitionDuration?: number;
}

interface UseFullpageScrollReturn {
  currentSection: number;
  isTransitioning: boolean;
  goToSection: (index: number) => void;
  nextSection: () => void;
  prevSection: () => void;
}

export function useFullpageScroll({
  totalSections,
  transitionDuration = 900,
}: UseFullpageScrollOptions): UseFullpageScrollReturn {
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartY = useRef<number | null>(null);
  const lastScrollTime = useRef(0);
  const sectionRef = useRef(0);

  const goToSection = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(totalSections - 1, index));
      if (clamped === sectionRef.current || isTransitioning) return;

      sectionRef.current = clamped;
      setIsTransitioning(true);
      setCurrentSection(clamped);

      window.setTimeout(() => {
        setIsTransitioning(false);
      }, transitionDuration);
    },
    [totalSections, isTransitioning, transitionDuration],
  );

  const nextSection = useCallback(() => {
    goToSection(sectionRef.current + 1);
  }, [goToSection]);

  const prevSection = useCallback(() => {
    goToSection(sectionRef.current - 1);
  }, [goToSection]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (isTransitioning || now - lastScrollTime.current < transitionDuration) {
        return;
      }

      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(delta) < 8) return;

      lastScrollTime.current = now;
      if (delta > 0) {
        nextSection();
      } else {
        prevSection();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
          e.preventDefault();
          nextSection();
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          prevSection();
          break;
        case 'Home':
          e.preventDefault();
          goToSection(0);
          break;
        case 'End':
          e.preventDefault();
          goToSection(totalSections - 1);
          break;
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartY.current === null || isTransitioning) return;
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - touchEndY;

      if (Math.abs(diff) < 40) return;
      touchStartY.current = null;

      if (diff > 0) {
        nextSection();
      } else {
        prevSection();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isTransitioning, nextSection, prevSection, goToSection, totalSections, transitionDuration]);

  return {
    currentSection,
    isTransitioning,
    goToSection,
    nextSection,
    prevSection,
  };
}
