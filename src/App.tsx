import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  // Prevent flash of unstyled content
  useEffect(() => {
    document.body.style.backgroundColor = '#050508';
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen"
        style={{ backgroundColor: '#050508' }}
      >
        {/* Particle background */}
        <ParticleBackground />

        {/* Main content */}
        <div className="relative" style={{ zIndex: 2 }}>
          <Navbar />
          <main>
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Stats />
            <Contact />
          </main>
          <Footer />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;

