import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react"; // play icon

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Refs for each audio element
  const audioRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // Play audio by index
  const handlePlay = (index) => {
    audioRefs.forEach((ref, i) => {
      if (i !== index && ref.current) ref.current.pause();
    });
    const audio = audioRefs[index].current;
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const features = [
    {
      title: "Tulu Language",
      description:
        "Listen to a short greeting in Tulu, one of the oldest Dravidian languages of the region.",
      audio: "/audio/Tulu.ogg",
      link: "https://www.languageshome.com/New/english-tulu/",
    },
    {
      title: "Kannada Language",
      description:
        "Hear the beauty of Kannada — the official language of Karnataka.",
      audio: "/audio/kannada.ogg",
      link: "https://www.languageshome.com/New/english-kannada/",
    },
    {
      title: "Konkani Language",
      description:
        "Experience the melody of Konkani, spoken widely in Mangalore’s Catholic and GSB communities.",
      audio: "/audio/konkani.ogg",
      link: "https://www.languageshome.com/New/english-konkani/",
    },
    {
      title: "Beary Language",
      description:
        "Discover Beary Bashe, a unique blend of Tulu and Malayalam influences from the coastal Muslim community.",
      audio: "/audio/Beary.ogg",
      link: "https://en.wikipedia.org/wiki/Beary_language",
    },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-br from-ocean-blue/5 to-coconut-green/5"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient mb-6"
          >
            About This Project
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-ocean-blue to-coconut-green mx-auto mb-8"
          ></motion.div>
        </motion.div>

        {/* Intro Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-ocean-blue mb-6">
              Celebrating Coastal Karnataka
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              "Experience India: Udupi & Mangalore" is a digital journey through
              one of India's most culturally rich and naturally diverse regions.
              This project aims to showcase the unique blend of ancient
              traditions, architectural marvels, and breathtaking natural beauty
              that makes coastal Karnataka a must-visit destination.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From the spiritual significance of the Udupi Krishna Temple to the
              pristine beaches of Malpe and Panambur, from the vibrant Yakshagana
              performances to the aromatic Mangalorean cuisine, every aspect of
              this region tells a story of cultural richness and natural
              splendor.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-ocean-blue text-white rounded-full text-sm font-medium">
                Cultural Heritage
              </span>
              <span className="px-4 py-2 bg-coconut-green text-white rounded-full text-sm font-medium">
                Natural Beauty
              </span>
              <span className="px-4 py-2 bg-golden-sand text-white rounded-full text-sm font-medium">
                Authentic Experience
              </span>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center items-center"
          >
            <div className="w-[420px] h-[420px] md:w-[460px] md:h-[460px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <img
                src="/images/Koti.webp"
                alt="Udupi Beach"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Decorative Circles */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-golden-sand/30 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/30 rounded-full animate-pulse delay-1000"></div>
          </motion.div>
        </motion.div>

        {/* Features Section with Audio + Hyperlinks */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="text-center group"
            >
              <div
                className="w-20 h-20 bg-gradient-to-br from-ocean-blue to-coconut-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                onClick={() => handlePlay(index)}
              >
                <Play className="w-8 h-8 text-white" />
                <audio ref={audioRefs[index]} src={feature.audio}></audio>
              </div>
              <h4 className="text-xl font-serif font-semibold text-ocean-blue mb-3">
                <a
                  href={feature.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-coconut-green transition-all duration-200"
                >
                  {feature.title}
                </a>
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-ocean-blue to-coconut-green rounded-3xl p-8 md:p-12 text-white text-center shadow-xl"
          >
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Our Mission
            </h3>
            <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-8">
              To preserve and promote the rich cultural heritage and natural
              beauty of Udupi and Mangalore, inspiring travelers to explore these
              hidden gems of India and experience the authentic charm of coastal
              Karnataka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("culture")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-white text-ocean-blue font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                Start Exploring
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("gallery")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-ocean-blue transition-all duration-300"
              >
                View Gallery
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
