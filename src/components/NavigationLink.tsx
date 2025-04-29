"use client";

import Link from 'next/link';
import { ReactNode } from 'react';

type NavigationLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

// This component extends the Next.js Link component to set a navigation timestamp
// This helps determine when the user is navigating between pages internally
export default function NavigationLink({ 
  href, 
  children, 
  className = "", 
  onClick,
  ...props 
}: NavigationLinkProps) {
  
  const handleClick = () => {
    // Set the navigation timestamp in sessionStorage
    if (typeof window !== 'undefined') {
      try {
        const currentTime = new Date().getTime();
        sessionStorage.setItem('lastNavigationTime', currentTime.toString());
      } catch (e) {
        console.error("Failed to set navigation timestamp:", e);
      }
    }
    
    // Call the original onClick handler if provided
    if (onClick) onClick();
  };
  
  return (
    <Link 
      href={href} 
      className={className} 
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
} 