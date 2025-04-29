import { Inter } from 'next/font/google';

// Since we don't have the actual CalSans font, we'll use Inter as a fallback
export const calsans = Inter({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-calsans',
}); 