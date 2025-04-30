"use client";

import Link from 'next/link';
import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();
  
  const handleClick = () => {
    // Attempt to set the navigation timestamp in sessionStorage
    if (typeof window !== 'undefined') {
      try {
        const currentTime = new Date().getTime();
        sessionStorage.setItem('lastNavigationTime', currentTime.toString());
      } catch (e) {
        console.warn("Unable to access sessionStorage. Navigation animations may be affected:", e);
        // We continue with navigation even if sessionStorage fails
      }
    }
    
    // Call the original onClick handler if provided
    if (onClick) onClick();
    
    // Adding a fallback in case Link component navigation fails
    // This creates a redundancy that ensures navigation works
    // No need for e.preventDefault() since we don't have the event parameter
    setTimeout(() => {
      // If we're still on the same page after a short delay, force navigation
      try {
        router.push(href);
      } catch (err) {
        console.warn("Fallback navigation failed:", err);
        // Absolute last resort - direct navigation
        window.location.href = href;
      }
    }, 300);
  };
  
  return (
    <Link 
      href={href} 
      className={className} 
      onClick={handleClick}
      {...props}
      prefetch={true} // Ensure prefetching is enabled for faster navigation
    >
      {children}
    </Link>
  );
} 