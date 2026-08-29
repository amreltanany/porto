import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { Section, Reveal } from '@/components/ui/Section';

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  gradient: string;
  liveUrl: string;
  codeUrl: string;
}

const projects: Project[] = [
  {
    id: 'lumen',
    title: 'Lumen Analytics',
    category: 'SaaS Platform',
    year: '2025',
    description:
      'A real-time data visualization suite handling millions of events per minute, with a custom charting engine built from scratch.',
    tags: ['React', 'WebGL', 'D3', 'Node'],
    gradient: 'from-accent-500/30 via-accent-700/10 to-transparent',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 'atlas',
    title: 'Atlas Commerce',
    category: 'E-commerce',
    year: '2024',
    description:
      'Headless commerce platform with a 3D product configurator, achieving sub-second page loads across 14 markets.',
    tags: ['Next.js', 'Three.js', 'Stripe', 'Vercel'],
    gradient: 'from-sage-500/25 via-sage-600/10 to-transparent',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 'echo',
    title: 'Echo Studio',
    category: 'Creative Tool',
    year: '2024',
    description:
      'Browser-based audio production suite with Web Audio synthesis, collaborative sessions, and a node-based signal chain editor.',
    tags: ['WebAudio', 'WebRTC', 'TypeScript', 'WASM'],
    gradient: 'from-purple-500/25 via-purple-700/10 to-transparent',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 'drift',
    title: 'Drift Maps',
    category: 'Mobile App',
    year: '2023',
    description:
      'Offline-first navigation app with vector tile rendering and turn-by-turn routing running entirely on-device.',
    tags: ['React Native', 'MapLibre', 'SQLite', 'Rust'],
    gradient: 'from-blue-500/25 via-blue-700/10 to-transparent',
    liveUrl: '#',
    codeUrl: '#',
  },
];

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  return (
    <Section id="projects" className="bg-ink-950">
      <div className="relative z-10 w-full max-w-7xl px-6 sm:px-10 h-full flex flex-col justify-center py-20">
        <Reveal>
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-accent-400 font-medium">
                02 — Selected Work
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-3 tracking-ultra">
                Featured Projects
              </h2>
            </div>
            <span className="hidden sm:block text-sm text-neutral-500 tabular-nums">
              {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-center">
          {/* Project list */}
          <div className="flex flex-col gap-2">
            {projects.map((project, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={project.id}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => setActiveIndex(i)}
                  className={`group text-left p-4 sm:p-5 rounded-xl border transition-all duration-500 ${
                    isActive
                      ? 'border-accent-500/40 bg-neutral-900/60'
                      : 'border-neutral-800/40 hover:border-neutral-700/60 bg-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-display text-sm tabular-nums transition-colors ${
                          isActive ? 'text-accent-400' : 'text-neutral-600'
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <div>
                        <h3
                          className={`font-display font-semibold text-lg sm:text-xl transition-colors ${
                            isActive ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'
                          }`}
                        >
                          {project.title}
                        </h3>
                        <span className="text-xs text-neutral-500">
                          {project.category} — {project.year}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      className={`w-5 h-5 transition-all duration-500 ${
                        isActive
                          ? 'text-accent-400 opacity-100 translate-x-0'
                          : 'text-neutral-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active project preview */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-2xl overflow-hidden border border-neutral-800/80 bg-neutral-900/40"
              >
                {/* Gradient preview */}
                <div className={`relative aspect-[16/10] bg-gradient-to-br ${active.gradient} bg-neutral-900`}>
                  <div className="absolute inset-0 bg-mesh opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display font-bold text-6xl sm:text-7xl text-white/10 tracking-mega">
                      {active.title}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-8">
                  <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                    {active.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {active.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-800/80 text-neutral-300 border border-neutral-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-6">
                    <a
                      href={active.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-ink-900 text-sm font-medium hover:scale-[1.03] transition-transform"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={active.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-700 text-neutral-200 text-sm font-medium hover:bg-neutral-800/60 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  );
}
