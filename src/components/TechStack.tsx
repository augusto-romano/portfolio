import { motion } from 'framer-motion';
import {
  SiReact, SiVuedotjs, SiJavascript, SiTypescript, SiHtml5, SiCss,
  SiNodedotjs, SiExpress, SiPhp, SiCodeigniter,
  SiPostgresql, SiMysql, SiSqlite,
  SiDocker, SiGit, SiGitlab,
} from 'react-icons/si';
import AnimatedSection, { staggerContainer, staggerItem } from './ui/AnimatedSection';

const categories = [
  {
    label: 'Frontend',
    color: '#61dafb',
    gradient: 'from-blue-400/10 to-cyan-400/10',
    border: 'rgba(96,165,250,0.15)',
    techs: [
      { name: 'React', icon: SiReact, color: '#61dafb' },
      { name: 'Vue.js', icon: SiVuedotjs, color: '#42d392' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
      { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS3', icon: SiCss, color: '#1572b6' },
    ],
  },
  {
    label: 'Backend',
    color: '#68a063',
    gradient: 'from-green-400/10 to-emerald-400/10',
    border: 'rgba(52,211,153,0.15)',
    techs: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#68a063' },
      { name: 'Express', icon: SiExpress, color: '#ffffff' },
      { name: 'PHP', icon: SiPhp, color: '#777bb4' },
      { name: 'CodeIgniter', icon: SiCodeigniter, color: '#ee4323' },
    ],
  },
  {
    label: 'Banco de Dados',
    color: '#336791',
    gradient: 'from-violet-400/10 to-purple-400/10',
    border: 'rgba(139,92,246,0.15)',
    techs: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
      { name: 'SQL Server', icon: SiSqlite, color: '#003b57' },
    ],
  },
  {
    label: 'DevOps',
    color: '#2496ed',
    gradient: 'from-sky-400/10 to-blue-400/10',
    border: 'rgba(56,189,248,0.15)',
    techs: [
      { name: 'Docker', icon: SiDocker, color: '#2496ed' },
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'GitLab CI/CD', icon: SiGitlab, color: '#fc6d26' },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px opacity-20"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="section-label mb-6 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Stack Tecnológica
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mt-4">
            Ferramentas que{' '}
            <span className="gradient-text">domino</span>
          </h2>
          <p className="text-base mt-4 max-w-lg mx-auto" style={{ color: '#64748b' }}>
            Tecnologias modernas e battle-tested que uso para construir produtos de alto nível.
          </p>
        </AnimatedSection>

        {/* Categories */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, catIdx) => (
            <AnimatedSection key={cat.label} delay={catIdx * 0.1}>
              <motion.div
                whileHover={{ borderColor: 'rgba(255,255,255,0.1)' }}
                className="p-6 rounded-2xl h-full"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: `1px solid ${cat.border}`,
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Category header */}
                <div className="flex items-center gap-2 mb-5">
                  <div
                    className="w-1.5 h-5 rounded-full"
                    style={{ background: cat.color, opacity: 0.8 }}
                  />
                  <h3 className="font-bold text-sm tracking-wide uppercase" style={{ color: '#94a3b8' }}>
                    {cat.label}
                  </h3>
                </div>

                {/* Tech grid */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-3 gap-3"
                >
                  {cat.techs.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <motion.div
                        key={tech.name}
                        variants={staggerItem}
                        whileHover={{ scale: 1.05, y: -3 }}
                        className="flex flex-col items-center gap-2.5 p-3.5 rounded-xl cursor-default group"
                        style={{
                          background: 'rgba(255,255,255,0.02)',
                          border: '1px solid rgba(255,255,255,0.05)',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
                          style={{
                            background: `${tech.color}10`,
                            border: `1px solid ${tech.color}25`,
                          }}
                        >
                          <Icon
                            style={{ color: tech.color, width: 18, height: 18 }}
                          />
                        </div>
                        <span
                          className="text-xs font-medium text-center leading-tight"
                          style={{ color: '#94a3b8' }}
                        >
                          {tech.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
