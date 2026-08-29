import { motion } from 'framer-motion';
import { Section, Reveal, Stagger, StaggerItem } from '@/components/ui/Section';

const stack = [
  { name: 'React', category: 'Frontend', icon: '⚛' },
  { name: 'Next.js', category: 'Framework', icon: '▲' },
  { name: 'TypeScript', category: 'Language', icon: 'TS' },
  { name: 'C#', category: 'Language', icon: 'C#' },
  { name: 'ASP.NET Core', category: 'Backend', icon: '.NET' },
  { name: 'Node.js', category: 'Runtime', icon: '⬢' },
  { name: 'Tailwind CSS', category: 'Styling', icon: '~' },
  { name: 'Framer Motion', category: 'Animation', icon: '〰' },
  { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
  { name: 'Docker', category: 'DevOps', icon: '🐳' },
  { name: 'AWS', category: 'Cloud', icon: '☁' },
  { name: 'Figma', category: 'Design', icon: '✦' },
];

const services = [
  {
    title: 'Web Development',
    desc: 'Production-grade web apps with modern frameworks, optimized for speed, SEO, and scale.',
  },
  {
    title: 'UI / UX Design',
    desc: 'Interface design and prototyping grounded in usability research and motion principles.',
  },
  {
    title: 'Creative Engineering',
    desc: 'Interactive 3D, data viz, and generative motion that pushes the browser to its edge.',
  },
  {
    title: 'Systems Architecture',
    desc: 'API design, cloud infrastructure, and performance strategy for resilient products.',
  },
];

export function StackSection() {
  return (
    <Section id="stack" className="bg-ink-900">
      <div className="relative z-10 w-full max-w-6xl px-6 sm:px-10">
        <Reveal>
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-xs tracking-[0.3em] uppercase text-accent-400 font-medium">
              03 — Capabilities
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-3 tracking-ultra">
              Services & Stack
            </h2>
          </div>
        </Reveal>

        {/* Services row */}
        <Stagger stagger={0.1} delay={0.2}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-14">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="group h-full p-5 rounded-xl border border-neutral-800/60 bg-neutral-900/30 hover:bg-neutral-900/60 hover:border-accent-500/30 transition-all duration-500">
                  <h3 className="font-display font-semibold text-base text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </Stagger>

        {/* Tech grid */}
        <Stagger stagger={0.05} delay={0.3}>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {stack.map((tech) => (
              <StaggerItem key={tech.name}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group flex flex-col items-center justify-center gap-2 p-4 sm:p-5 rounded-xl border border-neutral-800/60 bg-gradient-to-b from-neutral-900/40 to-transparent hover:border-accent-500/40 transition-colors duration-500 cursor-default"
                >
                  <span className="text-2xl sm:text-3xl font-display font-bold text-neutral-700 group-hover:text-accent-400 transition-colors duration-500">
                    {tech.icon}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                  <span className="text-[10px] text-neutral-600 tracking-wide uppercase">
                    {tech.category}
                  </span>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </div>
    </Section>
  );
}
