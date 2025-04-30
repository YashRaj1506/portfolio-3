"use client";

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { SiPython, SiDjango, SiReact, SiFastapi, SiC, SiJavascript, 
         SiHtml5, SiGit, SiGithub, SiDocker, SiLinux, SiNginx, SiAmazon, 
         SiGraphql, SiPostgresql, SiSqlite, SiMysql } from 'react-icons/si';
import { DiJava, DiGo } from 'react-icons/di';
import { TbLetterT } from 'react-icons/tb';

// Combined list of all technologies with proper icons
const techStacks = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "Django Rest Framework", icon: SiDjango, color: "#092E20" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "Go", icon: DiGo, color: "#00ADD8" },
  { name: "C", icon: SiC, color: "#A8B9CC" },
  { name: "Java", icon: DiJava, color: "#007396" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML/CSS", icon: SiHtml5, color: "#E34F26" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "Nginx", icon: SiNginx, color: "#009639" },
  { name: "Typer", icon: TbLetterT, color: "#FF4785" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "SQLite", icon: SiSqlite, color: "#003B57" },
  { name: "SQL", icon: SiMysql, color: "#4479A1" }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function TechStack() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <div className="w-full absolute top-0">
        <Navbar />
      </div>
      
      {/* Hero Section */}
      <div className="pt-28 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center mb-6">
          <Link href="/" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <FaArrowLeft className="mr-2" />
            <span>Back to Home</span>
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 bg-clip-text text-transparent mb-4">
          Tech Stack
        </h1>
        
        {/* Tech Stack Grid */}
        <motion.div 
          className="pt-8 pb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-x-4 gap-y-8 justify-items-center">
            {techStacks.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className="flex flex-col items-center justify-start w-20 h-24"
              >
                <div className="w-14 h-14 flex items-center justify-center mb-2 bg-gray-900 rounded-xl p-3 shadow-md hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                  {tech.icon && <tech.icon size={32} color={tech.color} className="transition-transform duration-300 hover:scale-110" />}
                </div>
                <span className="text-xs text-center font-medium text-gray-300 line-clamp-2">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Code Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5 overflow-hidden z-0">
        <pre className="text-xs sm:text-sm md:text-base text-blue-500 font-mono p-4 overflow-hidden pointer-events-none">
          {`
// Code pattern background
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    
    fetchData();
  }, []);
  
  return (
    <div className="container">
      <h1>Tech Stack Explorer</h1>
      {data.map(item => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {item.name}
        </motion.div>
      ))}
    </div>
  );
}
          `}
        </pre>
      </div>
    </div>
  );
} 