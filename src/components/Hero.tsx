import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Download, ExternalLink, MessageCircle } from 'lucide-react';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/augusto-romano', color: 'hover:text-white' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/augusto-romano-880823234/', color: 'hover:text-blue-400' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/5543996889920', color: 'hover:text-green-400' },
  { icon: Mail, label: 'Email', href: 'mailto:augusto290704@gmail.com', color: 'hover:text-violet-400' },
];

const floatingBadges = [
  { label: 'React', color: '#61dafb', bg: 'rgba(97,218,251,0.08)', border: 'rgba(97,218,251,0.15)' },
  { label: 'Node.js', color: '#68a063', bg: 'rgba(104,160,99,0.08)', border: 'rgba(104,160,99,0.15)' },
  { label: 'TypeScript', color: '#3178c6', bg: 'rgba(49,120,198,0.08)', border: 'rgba(49,120,198,0.15)' },
  { label: 'PostgreSQL', color: '#336791', bg: 'rgba(51,103,145,0.08)', border: 'rgba(51,103,145,0.15)' },
  { label: 'C#', color: '#2496ed', bg: 'rgba(36,150,237,0.08)', border: 'rgba(36,150,237,0.15)' },
];

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        <div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }}
        />
        <div
          className="absolute top-1/3 -right-40 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }}
        />
        <div
          className="absolute -bottom-40 left-1/3 w-72 h-72 rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Label */}
            <motion.div
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="mb-8"
            >
              <span className="section-label">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Disponível para oportunidades
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-4"
            >
              <span className="text-white">Augusto</span>
              <br />
              <span className="gradient-text">Romano</span>
               <br />
              <span className="gradient-text">Segantini</span>
            </motion.h1>

            {/* Title */}
            <motion.div
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="mb-6"
            >
              <span
                className="font-mono text-base font-medium px-3 py-1.5 rounded-lg"
                style={{
                  background: 'rgba(99,102,241,0.08)',
                  border: '1px solid rgba(99,102,241,0.2)',
                  color: '#a78bfa',
                }}
              >
                {'<'} Engenheiro de Software {'>'}
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-base md:text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: '#94a3b8' }}
            >
              Desenvolvedor full-stack apaixonado por criar experiências digitais elegantes e de alta performance.
              Especializado em arquiteturas modernas, APIs robustas e interfaces que impressionam.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={4}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3 mb-10"
            >
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary"
              >
                <ExternalLink className="w-4 h-4" />
                Ver Projetos
              </motion.button>
              <motion.a
                href="/curriculo-augusto-segantini.pdf"
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline"
              >
                <Download className="w-4 h-4" />
                Download Currículo
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div
              custom={5}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-1"
            >
              {socialLinks.map(({ icon: Icon, label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 flex items-center justify-center rounded-xl glass text-white/40 ${color} transition-all duration-200`}
                  title={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right — Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-8 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 0%, rgba(99,102,241,0.4) 30%, transparent 60%, rgba(6,182,212,0.4) 90%, transparent 100%)',
                  borderRadius: '999px',
                  padding: '1px',
                }}
              />

              {/* Outer glow ring */}
              <div
                className="absolute -inset-4 rounded-full opacity-30"
                style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.4), transparent 70%)' }}
              />

              {/* Avatar container */}
              <div
                className="relative w-72 h-72 rounded-full overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1), rgba(6,182,212,0.1))',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 0 60px rgba(99,102,241,0.2), 0 0 120px rgba(99,102,241,0.05)',
                }}
              >
                {/* Abstract avatar face/silhouette */}
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-0">
                  {/* Body silhouette */}
                  <div
                    className="w-full h-1/2 rounded-t-full opacity-40"
                    style={{
                      background: 'linear-gradient(to top, rgba(99,102,241,0.5), transparent)',
                    }}
                  />
                </div>

                {/* Head silhouette */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2">
                  <div
                    className="w-28 h-28 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, rgba(120,130,200,0.5), rgba(80,80,160,0.3))',
                      boxShadow: '0 0 30px rgba(99,102,241,0.3)',
                    }}
                  />
                </div>

                {/* Initials overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-7xl font-black tracking-tighter"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(167,139,250,0.8))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: 'none',
                    }}
                  >
                    AS
                  </span>
                </div>

                {/* Shimmer overlay */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: 'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)',
                  }}
                />
              </div>

              {/* Floating badges */}
              {floatingBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.4,
                  }}
                  className="absolute px-3 py-1.5 rounded-lg text-xs font-semibold"
                  style={{
                    background: badge.bg,
                    border: `1px solid ${badge.border}`,
                    color: badge.color,
                    backdropFilter: 'blur(10px)',
                    ...[
                      { top: '-10px', right: '-20px' },
                      { top: '40px', left: '-30px' },
                      { bottom: '60px', right: '-35px' },
                      { bottom: '20px', left: '-25px' },
                      { top: '50%', right: '-50px' },
                    ][i],
                  }}
                >
                  {badge.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
