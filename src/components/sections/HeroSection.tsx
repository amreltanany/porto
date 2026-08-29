import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Section, Reveal } from '@/components/ui/Section';

export function HeroSection() {
  return (
    <Section id="hero" className="bg-ink-900 bg-mesh">
      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent-500/10 blur-[120px]"
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-sage-500/8 blur-[100px]"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-5xl">
        <Reveal delay={0.1}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-700/60 bg-neutral-900/40 backdrop-blur-sm text-xs sm:text-sm text-neutral-300 tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-500" />
            </span>
            Available for select projects — 2026
          </span>
        </Reveal>

        <Reveal delay={0.25} y={40}>
          <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] tracking-mega text-white mt-8 text-balance">
            Crafting
            <br />
            <span className="bg-gradient-to-r from-accent-300 via-accent-500 to-accent-400 bg-clip-text text-transparent">
              digital experiences
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.45}>
          <p className="mt-8 text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed text-balance">
            A multidisciplinary developer & designer building immersive interfaces
            where engineering precision meets refined visual storytelling.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('scroll-to', { detail: { index: 3 } }));
              }}
              className="group relative px-8 py-3.5 rounded-full bg-white text-ink-900 font-medium text-sm tracking-wide overflow-hidden transition-transform hover:scale-[1.03] active:scale-95"
            >
              <span className="relative z-10">View Selected Work</span>
            </button>
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('scroll-to', { detail: { index: 4 } }));
              }}
              className="px-8 py-3.5 rounded-full border border-neutral-700 text-neutral-200 font-medium text-sm tracking-wide hover:bg-neutral-800/60 transition-colors"
            >
              Let's Connect
            </button>
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4" strokeWidth={1.5} />
      </motion.div>
    </Section>
  );
}
