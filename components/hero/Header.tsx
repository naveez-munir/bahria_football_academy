"use client";

import { navItems } from '@/data/navBarData';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-black py-3' 
          : 'bg-transparent py-5'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Yellow highlight line */}
      <motion.div 
        className="absolute bottom-0 left-0 h-0.5 bg-yellow-500"
        initial={{ width: "0%" }}
        animate={{ width: scrolled ? "100%" : "0%" }}
        transition={{ duration: 0.8 }}
      />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Animated logo */}
            <div className="relative">
              <div className="w-10 h-10 rounded-full border-2 border-yellow-500 flex items-center justify-center p-1">
                <motion.div 
                  className="w-full h-full rounded-full"
                  style={{ 
                    background: "linear-gradient(135deg, #EAB308 0%, #FCD34D 100%)" 
                  }}
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </div>
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-bold text-xs"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.15 // slightly offset for effect
                }}
              >
                SP
              </motion.div>
            </div>
            
            <h1 className="text-white font-bold text-xl">
              <span className="text-yellow-500">Soccer</span>Pro
            </h1>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <motion.button
                    className="text-white relative px-2 py-1"
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ color: "#EAB308" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Animated dot indicator */}
                    {hoveredItem === item.id && (
                      <motion.span
                        className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-500 rounded-full"
                        layoutId="navDot"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                    <span className="relative z-10 font-medium tracking-wide">
                      {item.name}
                    </span>
                  </motion.button>
                </motion.li>
              ))}
              
              {/* Action button */}
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <motion.button
                  className="bg-yellow-500 text-black px-5 py-1.5 rounded-full font-medium text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                >
                  Join Now
                </motion.button>
              </motion.li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className={`absolute inset-0 rounded-full ${isOpen ? 'bg-yellow-500' : 'border-2 border-yellow-500'}`}
              animate={{ 
                rotate: isOpen ? 90 : 0,
                scale: isOpen ? 1 : [1, 1.1, 1],
              }}
              transition={{ 
                rotate: { duration: 0.4 },
                scale: { 
                  duration: 2, 
                  repeat: isOpen ? 0 : Infinity,
                  repeatType: "reverse" 
                }
              }}
            />
            <div className="relative z-10 flex flex-col items-center justify-center gap-1.5">
              <motion.span 
                className={`block h-0.5 w-5 rounded-full ${isOpen ? 'bg-black' : 'bg-white'}`}
                animate={{ 
                  rotate: isOpen ? 45 : 0,
                  translateY: isOpen ? 2 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className={`block h-0.5 w-3 rounded-full ${isOpen ? 'bg-black' : 'bg-yellow-500'}`}
                animate={{ 
                  opacity: isOpen ? 0 : 1,
                  width: isOpen ? 0 : 3
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className={`block h-0.5 w-5 rounded-full ${isOpen ? 'bg-black' : 'bg-white'}`}
                animate={{ 
                  rotate: isOpen ? -45 : 0,
                  translateY: isOpen ? -2 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu - Full Screen with Animation */}
      <motion.div
        className="fixed inset-0 z-40 flex items-center justify-center"
        style={{ 
          pointerEvents: isOpen ? "auto" : "none",
          background: isOpen ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0)" 
        }}
        initial={false}
        animate={{
          backdropFilter: isOpen ? "blur(10px)" : "blur(0px)",
          WebkitBackdropFilter: isOpen ? "blur(10px)" : "blur(0px)" // For Safari
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Close button - appears in the top right */}
        <motion.button
          className="absolute top-5 right-5 z-50 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg"
          onClick={() => setIsOpen(false)}
          initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            scale: isOpen ? 1 : 0.5,
            rotate: isOpen ? 0 : -90
          }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-black"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </motion.button>

        <div className="w-full max-w-md p-6">
          {/* Animated circle elements (purely decorative) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-20 h-20 rounded-full bg-yellow-500/10"
                initial={{ 
                  x: `${Math.random() * 100}%`, 
                  y: `${Math.random() * 100}%`,
                  scale: 0
                }}
                animate={{ 
                  scale: isOpen ? [0, 1.5, 1] : 0,
                  opacity: isOpen ? [0, 0.2, 0.1] : 0
                }}
                transition={{ 
                  delay: 0.1 * i,
                  duration: 1.5
                }}
                style={{
                  left: `${Math.random() * 80}%`,
                  top: `${Math.random() * 80}%`
                }}
              />
            ))}
          </div>

          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: isOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >

            <ul className="space-y-6">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ 
                    x: isOpen ? 0 : -20,
                    opacity: isOpen ? 1 : 0
                  }}
                  transition={{ delay: 0.1 + (index * 0.1) }}
                >
                  <motion.div
                    className="flex items-center space-x-3"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.id)}
                  >
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-yellow-500"
                      animate={{ 
                        scale: [1, 1.5, 1],
                      }}
                      transition={{ 
                        duration: 1.5,
                        delay: 0.2 * index,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                    <span className="text-white text-2xl font-bold">{item.name}</span>
                  </motion.div>
                </motion.li>
              ))}
              
              <motion.li
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: isOpen ? 0 : 20,
                  opacity: isOpen ? 1 : 0
                }}
                transition={{ delay: 0.5 }}
                className="pt-6"
              >
                <motion.button
                  className="w-full bg-yellow-500 text-black font-bold py-3 px-8 rounded-md"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection('contact')}
                >
                  Connect with Us
                </motion.button>
              </motion.li>
            </ul>
          </motion.nav>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
