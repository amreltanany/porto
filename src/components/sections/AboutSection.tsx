import { motion } from 'framer-motion';
import { Section, Reveal, Stagger, StaggerItem } from '@/components/ui/Section';

const stats = [
  { value: '8+', label: 'Years crafting' },
  { value: '60+', label: 'Projects shipped' },
  { value: '12', label: 'Awards earned' },
  { value: '∞', label: 'Cups of coffee' },
];

const skills = [
  { name: 'Frontend Engineering', level: 95 },
  { name: 'UI / Motion Design', level: 88 },
  { name: 'Systems Architecture', level: 82 },
  { name: 'Creative Direction', level: 78 },
];

export function AboutSection() {
  return (
    <Section id="about" className="bg-ink-900">
      <div className="relative z-10 w-full max-w-6xl px-6 sm:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left — copy */}
        <div className="flex flex-col">
          <Reveal>
            <span className="text-xs tracking-[0.3em] uppercase text-accent-400 font-medium">
              01 — Philosophy
            </span>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-ultra text-white mt-6 text-balance">
              Design is the
              <br />
              <span className="text-neutral-500">silent ambassador</span>
              <br />
              of your brand.
            </h2>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-8 text-base sm:text-lg text-neutral-400 leading-relaxed max-w-md">
              I believe great products live at the intersection of rigorous
              engineering and intentional aesthetics. Every pixel, every
              transition, every millisecond of latency is a design decision
              that shapes how people feel.
            </p>
          </Reveal>

          {/* Skills bars */}
          <div className="mt-10 space-y-5">
            <Stagger stagger={0.15} delay={0.4}>
              {skills.map((skill) => (
                <StaggerItem key={skill.name}>
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-sm text-neutral-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-xs text-neutral-500 tabular-nums">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-[3px] w-full bg-neutral-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent-500 to-accent-300 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>

        {/* Right — stats grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          <Stagger stagger={0.12} delay={0.3}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="group relative p-6 sm:p-8 rounded-2xl border border-neutral-800/80 bg-gradient-to-br from-neutral-900/60 to-neutral-900/20 backdrop-blur-sm hover:border-accent-500/30 transition-colors duration-500">
                  <div className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-mega group-hover:text-accent-400 transition-colors duration-500">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs sm:text-sm text-neutral-500 tracking-wide">
                    {stat.label}
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-accent-500/0 group-hover:bg-accent-500/[0.03] transition-colors duration-500" />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}
