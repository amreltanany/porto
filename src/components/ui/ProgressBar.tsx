import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentSection: number;
  totalSections: number;
}

export function ProgressBar({ currentSection, totalSections }: ProgressBarProps) {
  const progress = ((currentSection + 1) / totalSections) * 100;

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-neutral-800/60 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-accent-500 to-accent-300"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* Scroll percentage */}
      <div className="fixed bottom-6 left-5 sm:left-8 z-50 flex items-baseline gap-1 font-display">
        <motion.span
          key={currentSection}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl font-semibold text-white tabular-nums"
        >
          {String(currentSection + 1).padStart(2, '0')}
        </motion.span>
        <span className="text-xs sm:text-sm text-neutral-500 tabular-nums">
          / {String(totalSections).padStart(2, '0')}
        </span>
      </div>
    </>
  );
}
