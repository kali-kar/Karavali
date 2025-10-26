import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Culture & Heritage', href: '#culture' },
    { name: 'Festivals & Food', href: '#festivals' },
    { name: 'Nature & Ecology', href: '#nature' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: '📘', href: '#' },
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'YouTube', icon: '📺', href: '#' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-ocean-blue to-ocean-blue-light text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                {/* ✅ Updated Logo Image */}
                <img
                  src="/images/logo.png" // replace this with your logo path
                  alt="Experience India Logo"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-serif font-bold">Experience India</h3>
                  <p className="text-white/80 text-sm">Udupi & Mangalore</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-6 max-w-md">
                Discover the rich cultural heritage and natural beauty of coastal Karnataka. 
                Experience authentic traditions, pristine beaches, and vibrant festivals that 
                define the unique charm of Udupi and Mangalore.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                  >
                    <span className="text-lg">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-serif font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/80 hover:text-golden-sand transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-serif font-semibold mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-golden-sand text-lg">📍</span>
                  <div>
                    <p className="text-white/80 text-sm">
                      Udupi & Mangalore<br />
                      Karnataka, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-golden-sand text-lg">📧</span>
                  <div>
                    <p className="text-white/80 text-sm">
                      info@experienceindia.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-golden-sand text-lg">🌐</span>
                  <div>
                    <p className="text-white/80 text-sm">
                      www.experienceindia.com
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="py-8 border-t border-white/20"
        >
          <div className="text-center mb-8">
            <h4 className="text-2xl font-serif font-semibold mb-2">Stay Updated</h4>
            <p className="text-white/80">Get the latest updates about cultural events and travel tips</p>
          </div>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-golden-sand"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-golden-sand to-golden-sand/80 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="py-6 border-t border-white/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} Experience India: Udupi & Mangalore. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-golden-sand transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-golden-sand transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-golden-sand transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-golden-sand to-coconut-green rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-40"
      >
        <span className="text-white text-xl">↑</span>
      </motion.button>
    </footer>
  );
};

export default Footer;
