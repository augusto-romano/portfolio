import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Target, Calendar } from 'lucide-react';
import AnimatedSection, { staggerContainer, staggerItem } from './ui/AnimatedSection';

const timeline = [
  {
    year: '2022',
    icon: GraduationCap,
    title: 'Início da Jornada',
    description: 'Comecei minha formação em Engenharia de Software, apaixonado por resolver problemas com código.',
    color: 'rgba(59,130,246,0.7)',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.2)',
  },
  {
    year: '2022',
    icon: Briefcase,
    title: 'Primeiros Projetos',
    description: 'Desenvolvi sistemas reais, APIs e aplicações full-stack, consolidando habilidades técnicas.',
    color: 'rgba(139,92,246,0.7)',
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.2)',
  },
  {
    year: '2023',
    icon: Calendar,
    title: 'Expansão Tecnológica',
    description: 'Adotei práticas modernas, elevando a qualidade do código.',
    color: 'rgba(6,182,212,0.7)',
    bg: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.2)',
  },
  {
    year: '2025',
    icon: Target,
    title: 'Formação & Mercado',
    description: 'Concluí a graduação e estou pronto para criar soluções inovadoras no mercado de tecnologia.',
    color: 'rgba(16,185,129,0.7)',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.2)',
  },
];

const traits = [
  { label: 'Clean Code', desc: 'Código legível e manutenível' },
  { label: 'Problem Solver', desc: 'Foco em soluções eficientes' },
  { label: 'Fast Learner', desc: 'Adaptação rápida a novas tecnologias' },
  { label: 'Team Player', desc: 'Colaboração e comunicação ativa' },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="section-label mb-6 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            Sobre Mim
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mt-4">
            Construindo o futuro,{' '}
            <span className="gradient-text">uma linha por vez</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Bio + Traits */}
          <div className="space-y-8">
            <AnimatedSection direction="left">
              <div
                className="p-6 rounded-2xl glass card-hover"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <p className="text-base leading-relaxed mb-4" style={{ color: '#94a3b8' }}>
                  Sou Augusto Romano Segantini, Engenheiro de Software recém-formado com sólida base técnica
                  e grande paixão por desenvolvimento de software de qualidade. Tenho experiência
                  construindo sistemas completos — do banco de dados à interface do usuário.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#94a3b8' }}>
                  Meu objetivo é contribuir em times de alta performance, entregando produtos digitais
                  que combinam performance, escalabilidade e uma experiência de usuário excepcional.
                  Acredito que código bem escrito é uma forma de arte.
                </p>
              </div>
            </AnimatedSection>

            {/* Traits */}
            <AnimatedSection direction="left" delay={0.1}>
              <h3 className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#64748b' }}>
                Diferenciais
              </h3>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-3"
              >
                {traits.map((trait) => (
                  <motion.div
                    key={trait.label}
                    variants={staggerItem}
                    className="p-4 rounded-xl glass card-hover"
                    style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <div className="font-semibold text-sm text-white mb-1">{trait.label}</div>
                    <div className="text-xs" style={{ color: '#64748b' }}>{trait.desc}</div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatedSection>

            {/* Education */}
            <AnimatedSection direction="left" delay={0.2}>
              <div
                className="p-5 rounded-2xl card-hover"
                style={{
                  background: 'rgba(99,102,241,0.05)',
                  border: '1px solid rgba(99,102,241,0.15)',
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(99,102,241,0.15)' }}
                  >
                    <GraduationCap className="w-4 h-4 text-violet-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-white">Bacharel em Engenharia de Software</div>
                    <div className="text-xs" style={{ color: '#94a3b8' }}>Concluído em 2025</div>
                  </div>
                </div>
                <p className="text-sm" style={{ color: '#64748b' }}>
                  Formação completa com foco em desenvolvimento de software, arquitetura de sistemas,
                  algoritmos e engenharia de dados.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — Timeline */}
          <AnimatedSection direction="right">
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-8" style={{ color: '#64748b' }}>
              Linha do Tempo
            </h3>
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-5 top-0 bottom-0 w-px"
                style={{ background: 'linear-gradient(to bottom, rgba(99,102,241,0.3), transparent)' }}
              />

              <div className="space-y-8">
                {timeline.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="flex gap-5"
                    >
                      {/* Icon */}
                      <div className="relative flex-shrink-0">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center relative z-10"
                          style={{ background: item.bg, border: `1px solid ${item.border}` }}
                        >
                          <Icon className="w-4 h-4" style={{ color: item.color }} />
                        </div>
                      </div>

                      {/* Content */}
                      <div
                        className="flex-1 p-4 rounded-xl card-hover mb-2"
                        style={{ background: item.bg, border: `1px solid ${item.border}` }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-sm text-white">{item.title}</span>
                          <span
                            className="text-xs font-mono font-semibold px-2 py-0.5 rounded"
                            style={{ background: 'rgba(255,255,255,0.05)', color: '#64748b' }}
                          >
                            {item.year}
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
