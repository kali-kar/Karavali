import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const NatureEcology = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const beaches = [
    {
      name: "Malpe Beach",
      description: "A pristine beach with golden sands and clear blue waters, perfect for relaxation and water sports.",
      features: ["Water Sports", "St. Mary's Island", "Sunset Views", "Beach Shacks"],
      icon: "/images/Malpe.jpg"
    },
    {
      name: "Panambur Beach",
      description: "One of the most popular beaches in Mangalore with modern facilities and beautiful coastline.",
      features: ["Port Views", "Beach Activities", "Food Stalls", "Parking"],
      icon: "/images/Panambur.jpg"
    },
    {
      name: "Tannirbavi Beach",
      description: "A serene beach known for its peaceful atmosphere and beautiful sunset views.",
      features: ["Peaceful Environment", "Sunset Photography", "Nature Walks", "Local Cuisine"],
      icon: "/images/Tannirbhavi.jpg"
    }
  ];

  const forests = [
    {
      name: "Kudremukh National Park",
      description: "A UNESCO World Heritage Site known for its rich biodiversity and stunning landscapes.",
      features: ["Wildlife Spotting", "Trekking Trails", "Waterfalls", "Bird Watching"],
      icon: "/images/kudremukh.jpg"
    },
    {
      name: "Someshwara Wildlife Sanctuary",
      description: "Home to diverse flora and fauna, offering excellent opportunities for nature photography.",
      features: ["Wildlife Safari", "Nature Photography", "Guided Tours", "Bird Sanctuary"],
      icon: "/images/someshwara.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="nature" ref={ref} className="section-padding bg-gradient-to-br from-coconut-green/5 to-ocean-blue/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y }}
          className="absolute top-20 right-10 w-64 h-64 bg-coconut-green/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          className="absolute bottom-20 left-10 w-48 h-48 bg-ocean-blue/10 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient mb-6"
          >
            Nature & Ecology
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-coconut-green to-ocean-blue mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover the breathtaking natural beauty of coastal Karnataka, from pristine beaches 
            to lush forests teeming with wildlife.
          </motion.p>
        </motion.div>

        {/* Beaches Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-serif font-bold text-ocean-blue text-center mb-12"
          >
            Pristine Beaches
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beaches.map((beach, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Image above text */}
                <div className="h-56 w-full overflow-hidden">
                  <img 
                    src={beach.icon} 
                    alt={beach.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h4 className="text-2xl font-serif font-semibold text-ocean-blue mb-3">
                    {beach.name}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{beach.description}</p>
                  <ul className="space-y-2">
                    {beach.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-ocean-blue rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Forests Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-serif font-bold text-coconut-green text-center mb-12"
          >
            Lush Forests
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {forests.map((forest, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Image above text */}
                <div className="h-64 w-full overflow-hidden">
                  <img 
                    src={forest.icon} 
                    alt={forest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h4 className="text-2xl font-serif font-semibold text-coconut-green mb-3">
                    {forest.name}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{forest.description}</p>
                  <ul className="space-y-2">
                    {forest.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-coconut-green rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NatureEcology;
