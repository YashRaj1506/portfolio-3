"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Navbar variants for animation
  const navbarVariants = {
    expanded: {
      width: "700px",
      height: "4rem",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(59, 130, 246, 0.2)"
    },
    collapsed: {
      width: "600px",
      height: "3.5rem",
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(59, 130, 246, 0.3)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)"
    }
  };

  // Logo text variants
  const logoVariants = {
    expanded: { fontSize: "1.2rem" },
    collapsed: { fontSize: "1rem" }
  };
  
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex items-center justify-center">
      <motion.nav 
        className="rounded-full flex items-center justify-between px-6"
        initial="expanded"
        animate={scrolled ? "collapsed" : "expanded"}
        variants={navbarVariants}
        transition={{ 
          duration: 0.3,
          ease: "easeInOut" 
        }}
      >
        {/* Logo / Left Section */}
        <motion.div 
          className="flex items-center"
          variants={logoVariants}
        >
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-7 h-7 bg-white rounded-md flex items-center justify-center">
              <span className="text-black font-bold text-sm">Y</span>
            </div>
            <span className="font-bold text-white text-sm sm:text-base">Yash</span>
          </Link>
        </motion.div>
        
        {/* Desktop Menu / Middle Section */}
        <div className="hidden md:flex items-center justify-center flex-1 px-6">
          <div className="flex items-center space-x-6 mx-auto">
            <Link 
              href="/experience" 
              className="text-white text-sm font-medium hover:text-blue-400 transition-colors"
            >
              Experience
            </Link>
            {['Projects', 'Blog'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-white text-sm font-medium hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        
        {/* Buttons / Right Section */}
        <div className="hidden md:flex items-center">
          <Link 
            href="/tech-stack" 
            className="bg-white text-black text-sm font-medium px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors"
          >
            Tech Stack
          </Link>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div 
          className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-black/90 backdrop-blur-md border border-blue-900/30 rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col py-4 px-6">
            <Link 
              href="/experience" 
              className="text-gray-300 hover:text-blue-400 transition-colors py-2 text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </Link>
            {['Projects', 'Blog'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-blue-400 transition-colors py-2 text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex flex-col space-y-3 mt-4 pt-4 border-t border-gray-800">
              <Link 
                href="/tech-stack" 
                className="bg-white text-black font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition-colors text-center text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Tech Stack
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
} 