"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import SimpleWelcome from "@/components/SimpleWelcome";

// Dynamically import components to avoid server-side rendering issues with animations
const RoboticLoader = dynamic(() => import('@/components/loading/RoboticLoader'), { ssr: false });

// Time window in milliseconds to consider as internal navigation (5 seconds)
const INTERNAL_NAVIGATION_WINDOW = 5000;

export default function Home() {
  // Default to loading state, will be updated by client-side logic
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark component as mounted on client
    setMounted(true);
    
    // This entire code runs only on the client side
    const checkNavigation = () => {
      try {
        // Check if sessionStorage is available
        const testKey = 'test_storage_' + Math.random();
        sessionStorage.setItem(testKey, '1');
        sessionStorage.removeItem(testKey);
        
        // Get the current time
        const currentTime = new Date().getTime();
        
        // Keys for session storage
        const visitedKey = 'portfolioVisited';
        const navTimestampKey = 'lastNavigationTime';
        
        // Check if this is the first visit overall
        const hasVisitedBefore = sessionStorage.getItem(visitedKey);
        
        // If first visit ever, set visited flag and show loader
        if (!hasVisitedBefore) {
          sessionStorage.setItem(visitedKey, 'true');
          return true; // Show loader
        }
        
        // Get the last navigation timestamp
        const lastNavTimestamp = sessionStorage.getItem(navTimestampKey);
        
        // If no timestamp exists or it's been longer than our window, show loader
        if (!lastNavTimestamp) {
          // Set current timestamp and show loader (likely a refresh)
          sessionStorage.setItem(navTimestampKey, currentTime.toString());
          return true;
        }
        
        // Check if the navigation happened within our time window
        const timeDiff = currentTime - parseInt(lastNavTimestamp);
        
        // Update timestamp for future navigations
        sessionStorage.setItem(navTimestampKey, currentTime.toString());
        
        // If navigation was recent (within our window), skip loader
        if (timeDiff < INTERNAL_NAVIGATION_WINDOW) {
          return false; // Skip loader - this was internal navigation
        }
        
        // Otherwise show loader (likely a refresh or direct navigation)
        return true;
      } catch (e) {
        // If any errors with sessionStorage, default to showing loader but log it
        console.warn("Error accessing sessionStorage - navigation animations may be affected:", e);
        return true;
      }
    };
    
    // Shorter loader time to avoid potential frustration
    const LOADER_TIMEOUT = 4000;
    
    // Determine if we should show the loader
    if (!checkNavigation()) {
      // Skip loader for internal navigation
      setLoading(false);
    } else {
      // Show loader with timeout
      const timer = setTimeout(() => {
        setLoading(false);
      }, LOADER_TIMEOUT);
      
      return () => clearTimeout(timer);
    }
    
    // Add a safety timeout to ensure we don't get stuck in loading state
    const safetyTimer = setTimeout(() => {
      setLoading(false);
    }, 8000); // 8 seconds max loading time as a safety
    
    return () => clearTimeout(safetyTimer);
  }, []);

  // During hydration, show a minimal loading placeholder instead of nothing
  if (!mounted) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // After hydration, render either loader or main content
  return (
    <main>
      {loading ? <RoboticLoader /> : <SimpleWelcome />}
    </main>
  );
}
