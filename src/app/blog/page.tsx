"use client";

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import NavigationLink from '@/components/NavigationLink';
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Blog() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navbar */}
      <div className="w-full absolute top-0">
        <Navbar />
      </div>
      
      <div className="pt-28 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center mb-6">
          <NavigationLink href="/" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <FaArrowLeft className="mr-2" />
            <span>Back to Home</span>
          </NavigationLink>
        </div>
        
        {/* Coming Soon Content */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Blog Coming Soon
          </motion.h1>
          
          <motion.div
            className="relative w-32 h-32 mx-auto mb-12"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.3
            }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow" style={{ animationDuration: '10s' }}></div>
            <div className="absolute inset-2 rounded-full bg-black"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">!</div>
          </motion.div>
          
          <motion.p 
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            I'm currently working on some exciting content for the blog section. Check back soon for articles about web development, Django, Python tips, and more!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <NavigationLink 
              href="/" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
            >
              Return to Homepage
            </NavigationLink>
          </motion.div>
        </div>
      </div>
      
      {/* Code Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5 overflow-hidden z-0">
        <pre className="text-xs sm:text-sm md:text-base text-blue-500 font-mono p-4 overflow-hidden">
          {`
// Blog Component
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchPosts() {
      try {
        // Fetch blog posts from API
        const response = await fetch('/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }
    
    // fetchPosts();
    // Temporarily disabled while blog is under construction
    setLoading(false);
  }, []);
  
  return (
    <div className="blog-container">
      <h1>Latest Blog Posts</h1>
      {loading ? (
        <LoadingSpinner />
      ) : posts.length > 0 ? (
        <div className="post-grid">
          {posts.map(post => (
            <PostCard 
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.publishedAt}
              slug={post.slug}
            />
          ))}
        </div>
      ) : (
        <div className="coming-soon">
          <h2>Blog launching soon!</h2>
          <p>Check back for exciting content.</p>
        </div>
      )}
    </div>
  );
}
          `}
        </pre>
      </div>
      
      {/* Add a custom style for the spinning animation */}
      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
} 