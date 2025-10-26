import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CultureHeritage from './components/CultureHeritage';
import FestivalsFood from './components/FestivalsFood';
import NatureEcology from './components/NatureEcology';
import Gallery from './components/Gallery';
import About from './components/About';
import Footer from './components/Footer';
import ChatSection from './components/ChatSection';
import Chatbot from './components/Chatbot';
import ChatToggleButton from './components/ChatToggleButton';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [chatVisible, setChatVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-gradient-to-br from-ocean-blue to-coconut-green z-50 flex items-center justify-center"
          >
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="text-center">
              <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-4xl md:text-6xl font-serif text-white mb-4">Experience India</motion.h1>
              <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-xl md:text-2xl text-white/80">Udupi & Mangalore</motion.p>
              <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ delay: 0.8, duration: 1.5 }} className="h-1 bg-gradient-to-r from-golden-sand to-coconut-green mt-8 rounded-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Navbar />
          <Hero />
          <CultureHeritage />
          <FestivalsFood />
          <NatureEcology />
          <Gallery />
          <About />

          {/* New dedicated chat section (inline) */}
          <ChatSection />

          <Footer />

          {/* Floating chat toggle + floating chatbot widget */}
          <ChatToggleButton onClick={() => setChatVisible(v => !v)} ariaControls="floating-chat" />
          <Chatbot isVisible={chatVisible} inline={false} onClose={() => setChatVisible(false)} />
        </motion.div>
      )}
    </div>
  );
}

export default App;
