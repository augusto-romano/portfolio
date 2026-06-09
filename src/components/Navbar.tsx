import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { label: 'Sobre', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 glass border-b border-white/[0.06]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-sm tracking-tight text-white/90 group-hover:text-white transition-colors">
              AS<span className="gradient-text">.</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-white/60 hover:text-white/90 hover:bg-white/[0.05] transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
            <motion.button
              onClick={() => handleNavClick('#contact')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="ml-3 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(99,102,241,0.2))',
                border: '1px solid rgba(99,102,241,0.3)',
                color: '#a5b4fc',
              }}
            >
              Contratar
            </motion.button>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg glass text-white/70 hover:text-white transition-colors"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-4 right-4 z-40 rounded-2xl glass-md border border-white/[0.08] p-4 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/[0.05] transition-all duration-200 block"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              onClick={() => handleNavClick('#contact')}
              className="mt-2 w-full px-4 py-3 rounded-xl text-sm font-semibold btn-primary justify-center"
            >
              Contratar
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
