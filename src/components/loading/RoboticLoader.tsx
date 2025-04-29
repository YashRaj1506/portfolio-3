"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Background particle component
const Particle = ({ index }: { index: number }) => {
  const size = Math.random() * 3 + 1;
  const initialX = Math.random() * 100;
  const initialY = Math.random() * 100;
  const duration = Math.random() * 10 + 10;
  
  return (
    <motion.div
      className="absolute rounded-full bg-blue-500/30"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${initialX}%`,
        top: `${initialY}%`,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.2, 0.8, 0.2],
      }}
      transition={{
        repeat: Infinity,
        duration: duration,
        ease: "linear",
      }}
    />
  );
};

// Circuit line component
const CircuitLine = ({ index }: { index: number }) => {
  const width = Math.random() * 100 + 50;
  const height = 1;
  const initialX = Math.random() * 100;
  const initialY = Math.random() * 100;
  const delay = Math.random() * 2;
  
  return (
    <motion.div
      className="absolute bg-cyan-500/20"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        left: `${initialX}%`,
        top: `${initialY}%`,
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{
        delay: delay,
        duration: 1.5,
        ease: "easeInOut"
      }}
    />
  );
};

// Digital counter component
const DigitalCounter = ({ progress }: { progress: number }) => {
  return (
    <div className="text-cyan-500 font-mono text-xl">
      {Math.floor(progress).toString().padStart(3, '0')}%
    </div>
  );
};

// Main loader component
export default function RoboticLoader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 50); // 5 seconds total (50ms * 100)
    
    return () => clearInterval(timer);
  }, []);

  // Particles and circuit lines
  const particles = Array.from({ length: 50 }, (_, i) => <Particle key={`particle-${i}`} index={i} />);
  const circuitLines = Array.from({ length: 15 }, (_, i) => <CircuitLine key={`circuit-${i}`} index={i} />);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black">
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden">
        {particles}
        {circuitLines}
      </div>
      
      {/* Main loader */}
      <div className="relative z-10 flex flex-col items-center space-y-4">
        <motion.div 
          className="w-[300px] h-2 bg-gray-800 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ 
              duration: 0.3, 
              ease: "easeOut"
            }}
          />
        </motion.div>
        
        <DigitalCounter progress={progress} />
        
        <motion.div 
          className="text-white text-sm font-mono"
          animate={{ 
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
        >
          SYSTEM LOADING...
        </motion.div>
      </div>
    </div>
  );
} 