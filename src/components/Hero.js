import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [showVideo, setShowVideo] = useState(false);

  // Delay showing video until animations complete
  useEffect(() => {
    const timer = setTimeout(() => setShowVideo(true), 2500); // delay 2.5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" ref={ref} className="relative h-screen overflow-hidden">
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        {showVideo ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/videoplayback1.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <div className="relative w-full h-full bg-gradient-to-br from-ocean-blue via-ocean-blue-light to-coconut-green">
            {/* Animated background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-20 left-10 w-32 h-32 bg-golden-sand/20 rounded-full animate-pulse"></div>
              <div className="absolute top-40 right-20 w-24 h-24 bg-coconut-green-light/30 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-white/20 rounded-full animate-pulse delay-2000"></div>
              <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-golden-sand/25 rounded-full animate-pulse delay-3000"></div>
            </div>

            {/* Overlay pattern */}
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
        )}
      </motion.div>

      {/* Overlay for video to improve contrast */}
      {showVideo && <div className="absolute inset-0 bg-black/30 z-[1]"></div>}

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex items-center justify-center text-center px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
          >
            Experience India
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-32 h-1 bg-gradient-to-r from-golden-sand to-coconut-green-light mx-auto mb-8"
          ></motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-2xl md:text-4xl lg:text-5xl font-serif text-golden-sand mb-8"
          >
            Udupi & Mangalore
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Discover the rich tapestry of coastal Karnataka, where ancient temples meet pristine beaches,
            and vibrant culture blends with breathtaking natural beauty.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document.getElementById('culture')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-4 bg-gradient-to-r from-golden-sand to-golden-sand/80 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Culture
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document.getElementById('nature')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-ocean-blue transition-all duration-300"
            >
              Discover Nature
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
