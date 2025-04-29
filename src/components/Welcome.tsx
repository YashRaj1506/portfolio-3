"use client";

import { motion, useAnimation } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';

export default function Welcome() {
  // Animation controls
  const mainContentControls = useAnimation();
  const introTextControls = useAnimation();
  const [introVisible, setIntroVisible] = useState(false);
  
  // Set up animation sequence
  useEffect(() => {
    const animationSequence = async () => {
      // Start with content in the center
      await mainContentControls.start({
        opacity: 1,
        y: 0,
        transition: { 
          duration: 0.8,
          delay: 0.5,
          ease: "easeOut"
        }
      });
      
      // Wait for 3 seconds
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Move content to position below navbar
      await mainContentControls.start({
        y: "-30vh",
        transition: {
          duration: 1.2,
          ease: [0.2, 0.65, 0.3, 0.9] 
        }
      });
      
      // Wait before showing intro text
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show intro text
      setIntroVisible(true);
      introTextControls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 1.2,
          ease: "easeOut"
        }
      });
    };
    
    animationSequence();
  }, [mainContentControls, introTextControls]);
  
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10">
        {Array.from({ length: 144 }).map((_, i) => (
          <motion.div 
            key={i}
            className="border border-cyan-500/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              delay: Math.random() * 1.5,
              duration: 0.5
            }}
          />
        ))}
      </div>
      
      {/* Small floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/20"
            style={{
              width: `${Math.random() * 5 + 1}px`,
              height: `${Math.random() * 5 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 5 + 5,
              ease: "linear",
            }}
          />
        ))}
      </div>
      
      {/* Navbar - appears after animation */}
      <motion.div 
        className="w-full absolute top-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          delay: 4.2,
          duration: 0.8 
        }}
      >
        <Navbar />
      </motion.div>
      
      {/* Content Container - holds both title and intro text */}
      <div className="flex flex-col items-center justify-center w-full h-full">
        {/* Main content - centered initially and animates up */}
        <motion.div 
          className="z-10 text-center flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={mainContentControls}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 bg-clip-text text-transparent mb-6"
            animate={{ 
              backgroundPosition: ["0% center", "100% center", "0% center"]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ backgroundSize: "200% auto" }}
          >
            Hi, I'm Yash
          </motion.h1>
          
          <motion.div 
            className="text-gray-400 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Welcome to my portfolio
          </motion.div>
          
          {/* ALWAYS VISIBLE FALLBACK TEXT */}
          <div className="mt-16 bg-red-600 text-white p-4 rounded-lg font-bold">
            IF YOU CAN SEE THIS TEXT, OTHER TEXT SHOULD BE VISIBLE TOO
          </div>
        </motion.div>

        {/* Intro Text - appears in same position */}
        {introVisible && (
          <motion.div 
            className="z-20 mt-16 w-full max-w-2xl px-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={introTextControls}
          >
            <div className="space-y-6 backdrop-blur-md bg-gray-900/70 p-8 rounded-xl border-2 border-blue-500/30 shadow-xl">
              <p className="text-white leading-relaxed text-lg md:text-xl">
                Hi there, my name is <span className="font-bold text-blue-400">Yash Raj (kai)</span> - Python backend engineer, Django contributor, and an Individual member at Django Software Foundation.
              </p>
              
              <p className="text-white leading-relaxed text-base md:text-lg">
                I do system design & architecture, devops and I love open source.
              </p>
              
              <p className="text-white leading-relaxed text-base md:text-lg">
                Organizer at <span className="text-green-400 font-bold">Django India Community</span>, and a Djangonaut Space fellow.
              </p>
              
              <p className="text-white leading-relaxed text-base md:text-lg">
                I love attending and giving talks at Conferences and meetups.
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Floating Dock */}
      <motion.div 
        className="fixed bottom-10 z-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          delay: 2.5,
          ease: "easeOut"
        }}
      >
        <div className="flex items-center space-x-6 px-8 py-4 bg-gray-900/60 backdrop-blur-md rounded-full border border-gray-800">
          {/* GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
          >
            <FaGithub className="text-blue-500 text-xl" />
          </a>
          
          {/* Twitter */}
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
          >
            <FaTwitter className="text-blue-500 text-xl" />
          </a>
          
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
          >
            <FaLinkedin className="text-blue-500 text-xl" />
          </a>
          
          {/* Email */}
          <a
            href="mailto:your.email@example.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send Email"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
          >
            <MdEmail className="text-blue-500 text-xl" />
          </a>
        </div>
      </motion.div>
    </div>
  );
} 