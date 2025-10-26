import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      title: "Udupi Krishna Temple",
      description: "The famous temple with its unique architecture and spiritual significance",
      category: "Heritage",
      image: "/images/paryaya.jpg"
    },
    {
      id: 2,
      title: "Malpe Beach Sunset",
      description: "Golden sands meeting the Arabian Sea in a spectacular sunset",
      category: "Nature",
      image: "/images/Malpe.jpg"
    },
    {
      id: 3,
      title: "Yakshagana Performance",
      description: "Traditional dance-drama bringing ancient stories to life",
      category: "Culture",
      image: "/images/yakshagana.jpg"
    },
    {
      id: 4,
      title: "Mangalorean Fish Curry",
      description: "Aromatic coastal cuisine with fresh seafood and coconut",
      category: "Food",
      image: "/images/manglorefishcurry.avif"
    },
    {
      id: 5,
      title: "Kudremukh National Park",
      description: "Lush forests and diverse wildlife in the Western Ghats",
      category: "Nature",
      image: "/images/kudremukh.jpg"
    },
    {
      id: 6,
      title: "St. Aloysius Chapel",
      description: "Beautiful colonial-era church with stunning frescoes",
      category: "Heritage",
      image: "/images/alosyious.png"
    },
    {
      id: 7,
      title: "Kambala Festival",
      description: "Thrilling buffalo race showcasing agricultural heritage",
      category: "Festival",
      image: "/images/kambala.jpg"
    },
    {
      id: 8,
      title: "Panambur Beach",
      description: "Popular beach with modern facilities and beautiful coastline",
      category: "Nature",
      image: "/images/Panambur.jpg"
    },
    {
      id: 9,
      title: "Traditional Cuisine",
      description: "Authentic Mangalorean dishes with local spices and flavors",
      category: "Food",
      image: "/images/patra.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1, scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const categories = ["All", "Heritage", "Nature", "Culture", "Food", "Festival"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">

        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-5xl font-serif font-bold text-gradient mb-6">
            Gallery
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-ocean-blue to-coconut-green mx-auto mb-8" />
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore the beauty and diversity of Udupi and Mangalore through our curated collection.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map(category => (
            <motion.button
              key={category}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-ocean-blue to-coconut-green text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredImages.map(image => (
              <motion.div
                key={`${activeCategory}-${image.id}`}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                onClick={() => setSelectedImage(image)}
              >
                {/* Image on Top */}
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 text-ocean-blue text-xs font-semibold rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>

                {/* Text Content Below */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-ocean-blue mb-2 group-hover:text-coconut-green transition-colors duration-300">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {image.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
              >
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-80 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-ocean-blue text-white text-sm font-semibold rounded-full">
                      {selectedImage.category}
                    </span>
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-ocean-blue mb-3">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
