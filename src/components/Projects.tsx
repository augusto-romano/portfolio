import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import AnimatedSection, { staggerContainer, staggerItem } from './ui/AnimatedSection';

interface Project {
  title: string;
  description: string;
  longDesc: string;
  techs: string[];
  gradient: string;
  accent: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

const projects: Project[] = [
{
  title: 'Green Eye',
  description: 'Sistema inteligente de identificação de pragas agrícolas com Inteligência Artificial',
  longDesc:
    'Projeto de Trabalho de Conclusão de Curso desenvolvido para auxiliar produtores rurais na identificação precoce de pragas agrícolas através de Visão Computacional e Inteligência Artificial. O sistema permite o envio de imagens para análise automática, retornando a praga identificada, nível de confiança da predição, orientações de prevenção e combate, além de manter um histórico completo das análises realizadas. O modelo de IA foi treinado com TensorFlow e Keras utilizando MobileNetV2 e técnicas de Transfer Learning, sendo capaz de reconhecer 15 classes de pragas agrícolas reais. A plataforma conta ainda com autenticação de usuários, recuperação de senha via WhatsApp e interface responsiva para acesso em diferentes dispositivos.',
  techs: [
    'Python',
    'TensorFlow',
    'Keras',
    'MobileNetV2',
    'Computer Vision',
    'Machine Learning',
    'Node.js',
    'Express.js',
    'MySQL',
    'React',
    'TypeScript',
    'Vite',
    'WhatsApp Web JS'
  ],
  gradient: 'from-green-600/20 via-lime-500/10 to-transparent',
  accent: '#22c55e',
  github: '',
},

{
  title: 'TransUni',
  description: 'Plataforma fullstack para gestão de benefícios de transporte universitário',
  longDesc:
    'Sistema web desenvolvido para digitalizar e otimizar o gerenciamento de programas de transporte universitário. A plataforma possui fluxos completos para estudantes e administradores, incluindo cadastro, validação de documentos, aprovação de solicitações, gestão de pagamentos, renovação de benefícios, geração de carteirinhas digitais, dashboards analíticos e relatórios em PDF. O projeto foi construído utilizando arquitetura limpa, autenticação JWT e boas práticas de desenvolvimento fullstack, proporcionando escalabilidade, segurança e manutenção simplificada.',
  techs: [
    'ASP.NET Core',
    'C#',
    'Entity Framework Core',
    'PostgreSQL',
    'JWT',
    'React',
    'Vite',
    'Tailwind CSS',
    'Recharts',
    'Axios'
  ],
  gradient: 'from-indigo-600/20 via-violet-500/10 to-transparent',
  accent: '#6366f1',
  github: 'https://github.com/augusto-romano/trans-uni',
},

  {
  title: 'Consulta de Operadoras de Saúde',
  description: 'Plataforma para pesquisa e visualização de dados de operadoras de saúde brasileiras',
  longDesc:
    'Aplicação full stack desenvolvida para consulta de operadoras de saúde a partir de dados públicos. O backend utiliza Python e Flask para processar informações provenientes de arquivos CSV, disponibilizando os dados através de uma API RESTful. O frontend, desenvolvido com Vue.js, oferece uma interface moderna, responsiva e intuitiva para pesquisa por Razão Social ou Nome Fantasia, exibição de resultados em tabela ordenável e visualização detalhada das informações das operadoras.',
  techs: [
    'Python',
    'Flask',
    'Pandas',
    'Unidecode',
    'Vue.js',
    'Axios',
    'REST API'
  ],
  gradient: 'from-blue-600/20 via-sky-500/10 to-transparent',
  accent: '#3b82f6',
  github: 'https://github.com/augusto-romano/consulta_api_operadoras_project',
},
  
  {
  title: 'Sistema de Controle de Estoque',
  description: 'Plataforma fullstack para gestão de produtos e movimentações de estoque',
  longDesc:
    'Sistema web desenvolvido para o processo seletivo do Senai – Soluções Digitais, focado no gerenciamento eficiente de estoque. A aplicação permite cadastro, edição, exclusão e consulta de produtos, além do controle completo de entradas e saídas com validações de quantidade. Conta com histórico detalhado de movimentações, feedback visual das operações, tratamento robusto de erros, validações em frontend e backend e arquitetura escalável para futuras evoluções.',
  techs: [
    'Node.js',
    'TypeScript',
    'Express.js',
    'Prisma ORM',
    'PostgreSQL',
    'React',
    'Material UI',
    'Axios'
  ],
  gradient: 'from-emerald-600/20 via-green-500/10 to-transparent',
  accent: '#10b981',
  github: 'https://github.com/augusto-romano/sistema-controle-estoque',
},
  {
  title: 'Automação de Web Scraping ANS',
  description: 'Extração automatizada de documentos PDF diretamente do portal da ANS',
  longDesc:
    'Projeto desenvolvido em Python para automatizar a coleta de documentos públicos no portal da Agência Nacional de Saúde Suplementar (ANS). O script realiza a navegação na página, identifica arquivos PDF específicos relacionados ao Rol de Procedimentos, extrai os links necessários e efetua o download automático para armazenamento local. A solução foi construída com foco em eficiência, automação e confiabilidade na obtenção de dados públicos.',
  techs: [
    'Python',
    'Requests',
    'BeautifulSoup',
    'Web Scraping',
    'HTML Parsing',
    'Automação'
  ],
  gradient: 'from-orange-600/20 via-amber-500/10 to-transparent',
  accent: '#f59e0b',
  github: 'https://github.com/augusto-romano/web_scraping_project',
},

{
  title: 'App de Fichas para Ecocardiograma',
  description: 'Aplicativo mobile para digitalização e automação de exames cardiológicos',
  longDesc:
    'Aplicativo desenvolvido em Flutter em parceria com o Instituto Cardiológico de Ourinhos (SP) para otimizar o processo de criação de fichas de exame de ecocardiograma. A solução substitui procedimentos manuais por um fluxo digital mais eficiente, proporcionando maior agilidade, organização e precisão no registro de informações clínicas. O projeto foi desenvolvido com foco na usabilidade dos profissionais de saúde e na confiabilidade dos dados coletados.',
  techs: [
    'Flutter',
    'Dart',
    'Mobile Development',
    'UI/UX',
    'Healthcare Technology'
  ],
  gradient: 'from-rose-600/20 via-pink-500/10 to-transparent',
  accent: '#ec4899',
  github: '',
},

];

function TechBadge({ tech, accent }: { tech: string; accent: string }) {
  return (
    <span
      className="px-2.5 py-1 rounded-lg text-xs font-semibold"
      style={{
        background: `${accent}12`,
        border: `1px solid ${accent}25`,
        color: `${accent}dd`,
      }}
    >
      {tech}
    </span>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        backdropFilter: 'blur(20px)',
      }}
    >
      {/* Card image/gradient header */}
      <div
        className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.gradient}`}
        style={{
          borderBottom: '1px solid rgba(255,255,255,0.04)',
        }}
      >
        {/* Abstract pattern */}
        <div className="absolute inset-0">
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          />
          {/* Glow center */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-3xl opacity-30"
            style={{ background: project.accent }}
          />
          {/* Project number */}
          <div
            className="absolute top-4 right-4 font-mono text-5xl font-black opacity-10"
            style={{ color: project.accent }}
          >
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>

        {/* Hover reveal overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center gap-3"
          style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
        >
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
              }}
            >
              <Github className="w-4 h-4" />
              GitHub
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
              style={{
                background: project.accent,
                border: `1px solid ${project.accent}`,
                color: 'white',
              }}
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Card content */}
      <div className="flex flex-col flex-1 p-5">
        {project.featured && (
          <span
            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold mb-3 w-fit"
            style={{
              background: `${project.accent}12`,
              border: `1px solid ${project.accent}30`,
              color: project.accent,
            }}
          >
            <span className="w-1 h-1 rounded-full bg-current" />
            Destaque
          </span>
        )}

        <h3 className="font-bold text-base text-white mb-2 leading-snug group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-sm mb-3 leading-relaxed" style={{ color: '#64748b' }}>
          {project.description}
        </p>
        <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: '#475569' }}>
          {project.longDesc}
        </p>

        {/* Techs */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techs.map((tech) => (
            <TechBadge key={tech} tech={tech} accent={project.accent} />
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium transition-colors"
              style={{ color: '#64748b' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#e2e8f0')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#64748b')}
            >
              <Github className="w-3.5 h-3.5" />
              Código
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium transition-colors ml-auto"
              style={{ color: project.accent }}
            >
              Ver Demo
              <ArrowRight className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="section-label mb-6 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Projetos
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mt-4">
            O que já{' '}
            <span className="gradient-text">construí</span>
          </h2>
          <p className="text-base mt-4 max-w-lg mx-auto" style={{ color: '#64748b' }}>
            Projetos reais que demonstram domínio técnico, boas práticas e atenção aos detalhes.
          </p>
        </AnimatedSection>

        {/* Projects grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 gap-5"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </motion.div>

        {/* CTA */}
        <AnimatedSection className="text-center mt-12" delay={0.3}>
          <motion.a
            href="https://github.com/augusto-romano"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-outline inline-flex"
          >
            <Github className="w-4 h-4" />
            Ver todos os projetos no GitHub
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
