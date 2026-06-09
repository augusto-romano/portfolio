import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedSection from './ui/AnimatedSection';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
  gradient: string;
  delay: number;
}

const stats: Stat[] = [
  {
    value: 15,
    suffix: '+',
    label: 'Projetos Concluídos',
    description: 'Sistemas, APIs e aplicações entregues com qualidade',
    gradient: 'from-blue-500 to-blue-400',
    delay: 0,
  },
  {
    value: 20,
    suffix: '+',
    label: 'Tecnologias',
    description: 'Stack diversificada cobrindo frontend, backend e DevOps',
    gradient: 'from-violet-500 to-violet-400',
    delay: 0.15,
  },
  {
    value: 4,
    suffix: ' anos',
    label: 'Estudando Programação',
    description: 'Dedicação constante ao aprendizado e evolução técnica',
    gradient: 'from-cyan-500 to-cyan-400',
    delay: 0.3,
  },
];

function AnimatedCounter({ value, suffix, gradient }: { value: number; suffix: string; gradient: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="flex items-end gap-0.5">
      <span
        className={`text-5xl md:text-6xl font-black bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
      >
        {count}
      </span>
      <span
        className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${gradient} bg-clip-text text-transparent pb-1`}
      >
        {suffix}
      </span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Divider lines */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)' }}
      />

      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(99,102,241,1), transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="section-label mb-4 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            Números
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mt-4">
            Resultados que <span className="gradient-text">falam por si</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: stat.delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="relative p-8 rounded-2xl text-center overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Background glow */}
              <div
                className={`absolute inset-0 opacity-[0.04] bg-gradient-to-br ${stat.gradient}`}
              />

              <div className="relative z-10">
                <div className="flex justify-center mb-3">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    gradient={stat.gradient}
                  />
                </div>
                <h3 className="font-bold text-base text-white mb-2">{stat.label}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
