import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle, Send, CheckCircle, ArrowRight } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const contactLinks = [
  {
    icon: Github,
    label: 'GitHub',
    value: '@augusto-romano',
    href: 'https://github.com/augusto-romano',
    color: '#e2e8f0',
    bg: 'rgba(226,232,240,0.06)',
    border: 'rgba(226,232,240,0.12)',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'in/augusto-romano-880823234',
    href: 'https://www.linkedin.com/in/augusto-romano-880823234/',
    color: '#60a5fa',
    bg: 'rgba(96,165,250,0.06)',
    border: 'rgba(96,165,250,0.15)',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'augusto290704@gmail.com',
    href: 'mailto:augusto290704@gmail.com',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.06)',
    border: 'rgba(167,139,250,0.15)',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+55 (43) 9 9688-9920',
    href: 'https://wa.me/5543996889920',
    color: '#4ade80',
    bg: 'rgba(74,222,128,0.06)',
    border: 'rgba(74,222,128,0.15)',
  },
];

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm font-medium text-white placeholder-slate-600 outline-none transition-all duration-300`;
  const inputStyle = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.07)',
  };
  const inputFocusStyle = {
    borderColor: 'rgba(99,102,241,0.4)',
    boxShadow: '0 0 0 3px rgba(99,102,241,0.08)',
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* BG glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,1), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="section-label mb-6 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Contato
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mt-4">
            Vamos <span className="gradient-text">trabalhar juntos</span>
          </h2>
          <p className="text-base mt-4 max-w-md mx-auto" style={{ color: '#64748b' }}>
            Estou aberto a oportunidades, parcerias e projetos desafiadores. Entre em contato!
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — Contact links */}
          <AnimatedSection direction="left">
            <div className="space-y-4 mb-8">
              {contactLinks.map(({ icon: Icon, label, value, href, color, bg, border }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 6, scale: 1.01 }}
                  className="flex items-center gap-4 p-4 rounded-2xl group"
                  style={{ background: bg, border: `1px solid ${border}`, transition: 'all 0.3s ease' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                  >
                    <Icon className="w-4 h-4" style={{ color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: '#475569' }}>
                      {label}
                    </div>
                    <div className="text-sm font-medium truncate" style={{ color }}>
                      {value}
                    </div>
                  </div>
                  <ArrowRight
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0"
                    style={{ color }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Availability badge */}
            <div
              className="p-5 rounded-2xl"
              style={{
                background: 'rgba(16,185,129,0.05)',
                border: '1px solid rgba(16,185,129,0.15)',
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-semibold text-sm text-green-400">Disponível para contratação</span>
              </div>
              <p className="text-sm" style={{ color: '#64748b' }}>
                Atualmente aberto a propostas de emprego CLT, PJ ou freelance. Respondo em até 24h.
              </p>
            </div>
          </AnimatedSection>

          {/* Right — Form */}
          <AnimatedSection direction="right">
            <div
              className="p-6 md:p-8 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center gap-4"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}
                    >
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-white mb-2">Mensagem enviada!</h3>
                      <p className="text-sm" style={{ color: '#64748b' }}>
                        Obrigado pelo contato. Responderei em breve.
                      </p>
                    </div>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                      className="btn-outline text-sm mt-2"
                    >
                      Enviar nova mensagem
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <h3 className="font-bold text-lg text-white mb-6">Envie uma mensagem</h3>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: '#475569' }}>
                          Nome
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Seu nome"
                          required
                          className={inputClass}
                          style={inputStyle}
                          onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
                          onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: '#475569' }}>
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          required
                          className={inputClass}
                          style={inputStyle}
                          onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
                          onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: '#475569' }}>
                        Assunto
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Sobre o que você quer falar?"
                        required
                        className={inputClass}
                        style={inputStyle}
                        onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
                        onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: '#475569' }}>
                        Mensagem
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Descreva sua oportunidade ou projeto..."
                        required
                        rows={5}
                        className={inputClass}
                        style={{ ...inputStyle, resize: 'none' }}
                        onFocus={(e) => Object.assign(e.currentTarget.style, { ...inputStyle, ...inputFocusStyle })}
                        onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: loading ? 1 : 1.02 }}
                      whileTap={{ scale: loading ? 1 : 0.98 }}
                      className="w-full btn-primary justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Enviar Mensagem
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
