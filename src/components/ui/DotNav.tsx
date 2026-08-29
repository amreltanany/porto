import { motion } from 'framer-motion';

interface DotNavProps {
  sections: { id: string; label: string }[];
  currentSection: number;
  onDotClick: (index: number) => void;
}

export function DotNav({ sections, currentSection, onDotClick }: DotNavProps) {
  return (
    <nav className="fixed right-5 sm:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3">
      {sections.map((section, i) => {
        const active = i === currentSection;
        return (
          <button
            key={section.id}
            onClick={() => onDotClick(i)}
            className="group flex items-center gap-3"
            aria-label={`Go to ${section.label}`}
          >
            <span
              className={`text-[10px] sm:text-xs font-medium tracking-widest uppercase transition-all duration-500 ${
                active
                  ? 'opacity-100 text-white'
                  : 'opacity-0 group-hover:opacity-60 text-neutral-400'
              }`}
            >
              {section.label}
            </span>
            <span className="relative flex items-center justify-center w-3 h-3">
              <motion.span
                className="rounded-full"
                animate={{
                  width: active ? 12 : 6,
                  height: active ? 12 : 6,
                  backgroundColor: active ? '#fb923c' : '#525252',
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
              {active && (
                <motion.span
                  layoutId="dot-ring"
                  className="absolute rounded-full border border-accent-400/40"
                  style={{ width: 22, height: 22 }}
                  transition={{ duration: 0.4 }}
                />
              )}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
