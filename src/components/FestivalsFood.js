import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FestivalsFood = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const festivals = [
  {
    name: "Paryaya",
    description: "The grand biannual ceremony where the head priest of Udupi Sri Krishna Matha changes hands.",
    period: "Every Two Years (January)",
    icon: "/images/paryaya.jpg",
    highlights: ["Temple Procession", "Religious Rituals", "Devotee Gatherings"]
  },
  {
    name: "Mangalore Dasara",
    description: "A 10-day festival celebrated with grandeur at Kudroli Gokarnath Temple, symbolizing devotion and culture.",
    period: "September - October",
    icon: "/images/Dasara.jpg",
    highlights: ["Processions", "Lighting Decorations", "Cultural Programs"]
  },
  {
    name: "Attur Feast",
    description: "The famous feast at St. Lawrence Shrine in Attur-Karkala, celebrated by people of all faiths.",
    period: "January",
    icon: "/images/attur.jpg",
    highlights: ["Religious Procession", "Community Meals", "Pilgrim Gathering"]
  },
  ];

  const foodItems = [
  {
    name: "Patrode",
    description: "Steamed colocasia leaves layered with spiced rice batter — a beloved coastal delicacy.",
    ingredients: ["Colocasia Leaves", "Rice", "Coconut", "Spices"],
    icon: "/images/patra.jpg"
  },
  {
    name: "Kotte Idli",
    description: "Soft idlis steamed in jackfruit leaf cups, giving a unique aroma and flavor.",
    ingredients: ["Rice", "Urad Dal", "Jackfruit Leaves", "Salt"],
    icon: "/images/kotaidli.jpg"
  },
  {
    name: "Neer Dosa",
    description: "Soft, lacy rice crepes served with coconut chutney or chicken curry.",
    ingredients: ["Rice", "Coconut", "Water", "Salt"],
    icon: "/images/neerdosa.jpg"
  },
  {
    name: "Kori Rotti",
    description: "Crispy rice wafers served with flavorful Mangalorean chicken curry.",
    ingredients: ["Rice Flour", "Chicken", "Coconut", "Spices"],
    icon: "/images/korirotti.jpg"
  },
  {
    name: "Mangalore Buns",
    description: "Sweet, fluffy banana bread puris — a perfect tea-time snack from Mangalore.",
    ingredients: ["Banana", "Flour", "Sugar", "Yogurt"],
    icon: "/images/buns.jpeg"
  },
  {
    name: "Mangalore Fish Curry",
    description: "Aromatic coconut-based curry with tangy tamarind and fresh coastal fish.",
    ingredients: ["Fish", "Coconut", "Red Chilies", "Tamarind"],
    icon: "/images/manglorefishcurry.avif"
  }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="festivals" className="section-padding bg-white">
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
            Festivals & Food
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-golden-sand to-coconut-green mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the vibrant celebrations and savor the authentic flavors that define 
            the cultural identity of Udupi and Mangalore.
          </motion.p>
        </motion.div>

        {/* Festivals Section */}
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
            Celebrations & Traditions
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {festivals.map((festival, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="group bg-gradient-to-br from-golden-sand/10 to-coconut-green/10 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={festival.icon}
                  alt={festival.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <h4 className="text-2xl font-serif font-semibold text-ocean-blue mb-3">
                    {festival.name}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {festival.description}
                  </p>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-golden-sand text-white text-sm font-medium rounded-full">
                      {festival.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {festival.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-coconut-green rounded-full mr-3"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Food Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-serif font-bold text-ocean-blue text-center mb-12"
          >
            Culinary Delights
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodItems.map((food, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <img
                  src={food.icon}
                  alt={food.name}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <h4 className="text-xl font-serif font-semibold text-ocean-blue mb-2">
                    {food.name}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {food.description}
                  </p>
                  <div className="space-y-1">
                    {food.ingredients.map((ingredient, i) => (
                      <span
                        key={i}
                        className="inline-block px-2 py-1 bg-coconut-green/10 text-coconut-green text-xs font-medium rounded-full mr-2 mb-1"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-golden-sand to-coconut-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FestivalsFood;
