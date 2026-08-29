import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, ArrowUpRight, Github, Linkedin, Twitter, Dribbble } from 'lucide-react';
import { Section, Reveal, Stagger, StaggerItem } from '@/components/ui/Section';

const socials = [
  { name: 'GitHub', icon: Github, url: '#' },
  { name: 'LinkedIn', icon: Linkedin, url: '#' },
  { name: 'Twitter', icon: Twitter, url: '#' },
  { name: 'Dribbble', icon: Dribbble, url: '#' },
];

const EMAIL = 'hello@studionoir.dev';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <Section id="contact" className="bg-ink-950 bg-mesh">
      <div className="relative z-10 w-full max-w-5xl px-6 sm:px-10 flex flex-col items-center text-center">
        <Reveal>
          <span className="text-xs tracking-[0.3em] uppercase text-accent-400 font-medium">
            04 — Let's Connect
          </span>
        </Reveal>

        <Reveal delay={0.15}>
          <h2 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl text-white mt-6 tracking-mega text-balance">
            Let's build
            <br />
            <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
              something remarkable
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-xl text-balance">
            Have a project in mind, or just want to say hello? I'm always open
            to meaningful conversations about craft and creativity.
          </p>
        </Reveal>

        {/* Email copy button */}
        <Reveal delay={0.4}>
          <button
            onClick={handleCopy}
            className="group mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm hover:border-accent-500/40 transition-colors"
          >
            <Mail className="w-4 h-4 text-accent-400" />
            <span className="text-sm text-neutral-200 font-medium">{EMAIL}</span>
            {copied ? (
              <Check className="w-4 h-4 text-sage-500" />
            ) : (
              <Copy className="w-4 h-4 text-neutral-500 group-hover:text-neutral-300 transition-colors" />
            )}
          </button>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.5}>
          <form
            onSubmit={handleSubmit}
            className="mt-10 w-full max-w-lg flex flex-col gap-4 text-left"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-neutral-900/60 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-accent-500/50 transition-colors"
              />
              <input
                type="email"
                required
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-neutral-900/60 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-accent-500/50 transition-colors"
              />
            </div>
            <textarea
              required
              rows={3}
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-neutral-900/60 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-accent-500/50 transition-colors resize-none"
            />
            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              className="w-full py-3.5 rounded-xl bg-white text-ink-900 font-medium text-sm tracking-wide hover:bg-accent-400 transition-colors flex items-center justify-center gap-2"
            >
              {submitted ? (
                <>
                  <Check className="w-4 h-4" /> Message sent
                </>
              ) : (
                <>
                  Send Message <ArrowUpRight className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </form>
        </Reveal>

        {/* Socials */}
        <Stagger stagger={0.08} delay={0.6}>
          <div className="flex items-center gap-3 mt-10">
            {socials.map((social) => (
              <StaggerItem key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-800 text-neutral-400 hover:text-white hover:border-accent-500/40 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              </StaggerItem>
            ))}
          </div>
        </Stagger>

        <Reveal delay={0.7}>
          <p className="mt-12 text-xs text-neutral-600 tracking-wide">
            © 2026 Studio Noir — Crafted with intent.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
