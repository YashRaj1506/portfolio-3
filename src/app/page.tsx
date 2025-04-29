"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import SimpleWelcome from "@/components/SimpleWelcome";

// Dynamically import components to avoid server-side rendering issues with animations
const RoboticLoader = dynamic(() => import('@/components/loading/RoboticLoader'), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false after 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {loading ? <RoboticLoader /> : <SimpleWelcome />}
    </main>
  );
}
