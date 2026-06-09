import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle, Code2, Heart } from 'lucide-react';

const links = [
  { href: '#about', label: 'Sobre' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projetos' },
  { href: '#contact', label: 'Contato' },
];

const socials = [
  { icon: Github, href: 'https://github.com/augusto-romano', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/augusto-romano-880823234/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:augusto290704@gmail.com', label: 'Email' },
  { icon: MessageCircle, href: 'https://wa.me/5543996889920', label: 'WhatsApp' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="font-bold text-sm text-white">Augusto Romano Segantini</div>
              <div className="text-xs" style={{ color: '#475569' }}>Engenheiro de Software</div>
            </div>
          </motion.div>

          {/* Nav links */}
          <nav className="flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 hover:bg-white/[0.05]"
                style={{ color: '#475569' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#94a3b8')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#475569')}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors duration-200"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  color: '#475569',
                }}
                title={label}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#94a3b8')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#475569')}
              >
                <Icon className="w-3.5 h-3.5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
          <p className="text-xs flex items-center gap-1" style={{ color: '#334155' }}>
            © {new Date().getFullYear()} Augusto Romano Segantini. Todos os direitos reservados.
          </p>
          <p className="text-xs flex items-center gap-1" style={{ color: '#334155' }}>
            Feito com <Heart className="w-3 h-3 text-red-500/60" /> usando React + Vite + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
