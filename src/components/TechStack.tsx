import { motion } from 'framer-motion';
import {
  SiReact, SiVuedotjs, SiTypescript, SiVite, SiTailwindcss, SiMui, SiAxios,
  SiNodedotjs, SiExpress, SiDotnet, SiFlask, SiPython, SiJsonwebtokens, SiPostman,
  SiPostgresql, SiMysql, SiPrisma, SiPandas,
  SiFlutter, SiDart,
  SiTensorflow, SiKeras, SiOpencv, SiScikitlearn,
  SiHtml5, SiWhatsapp,
} from 'react-icons/si';
import {  Bot, Workflow, } from 'lucide-react';
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
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
      { name: 'Vite', icon: SiVite, color: '#646cff' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' },
      { name: 'Material UI', icon: SiMui, color: '#007fff' },
      { name: 'Axios', icon: SiAxios, color: '#5a29e4' },
      
    ],
  },
  {
    label: 'Backend',
    color: '#68a063',
    gradient: 'from-green-400/10 to-emerald-400/10',
    border: 'rgba(52,211,153,0.15)',
    techs: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#68a063' },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
      { name: 'ASP.NET Core', icon: SiDotnet, color: '#512bd4' },
      { name: 'Flask', icon: SiFlask, color: '#ffffff' },
      { name: 'REST API', icon: SiPostman, color: '#ff6c37' },
      { name: 'JWT', icon: SiJsonwebtokens, color: '#ffffff' },
    ],
  },
  {
    label: 'Banco de Dados',
    color: '#336791',
    gradient: 'from-violet-400/10 to-purple-400/10',
    border: 'rgba(139,92,246,0.15)',
    techs: [
      { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'Prisma ORM', icon: SiPrisma, color: '#2d3748' },
      { name: 'Entity Framework', icon: SiDotnet, color: '#512bd4' },
      { name: 'Pandas', icon: SiPandas, color: '#150458' },
    ],
  },
  {
    label: 'Mobile',
    color: '#02569b',
    gradient: 'from-cyan-400/10 to-blue-400/10',
    border: 'rgba(6,182,212,0.15)',
    techs: [
      { name: 'Flutter', icon: SiFlutter, color: '#02569b' },
      { name: 'Dart', icon: SiDart, color: '#0175c2' },
      
    ],
  },
  {
    label: 'AI & Machine Learning',
    color: '#ff6f00',
    gradient: 'from-orange-400/10 to-red-400/10',
    border: 'rgba(251,146,60,0.15)',
    techs: [
      { name: 'Python', icon: SiPython, color: '#3776ab' },
      { name: 'TensorFlow', icon: SiTensorflow, color: '#ff6f00' },
      { name: 'Keras', icon: SiKeras, color: '#d00000' },
      { name: 'MobileNetV2', icon: Bot, color: '#8b5cf6' },
      { name: 'Machine Learning', icon: SiScikitlearn, color: '#f89939' },
      { name: 'Computer Vision', icon: SiOpencv, color: '#5c3ee8' },
    ],
  },
  {
    label: 'Automação',
    color: '#8b5cf6',
    gradient: 'from-purple-400/10 to-pink-400/10',
    border: 'rgba(168,85,247,0.15)',
    techs: [
      { name: 'Web Scraping', icon: Workflow, color: '#a855f7' },
      { name: 'Requests', icon: SiPython, color: '#3776ab' },
      { name: 'BeautifulSoup', icon: SiPython, color: '#3776ab' },
      { name: 'HTML Parsing', icon: SiHtml5, color: '#e34f26' },
      
    ],
  },
  {
    label: 'Integrações',
    color: '#25d366',
    gradient: 'from-green-400/10 to-emerald-400/10',
    border: 'rgba(34,197,94,0.15)',
    techs: [
      { name: 'WhatsApp Web JS', icon: SiWhatsapp, color: '#25d366' },
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
            <span className="gradient-text">ja utilizei</span>
          </h2>
          <p className="text-base mt-4 max-w-lg mx-auto" style={{ color: '#64748b' }}>
            Tecnologias modernas que uso para construir produtos de alto nível.
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
