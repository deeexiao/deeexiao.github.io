"use client";

import GlyphNav from '@/components/GlyphNav';
import FooterSection from '@/components/FooterSection';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isMemoryProject = pathname === '/projects/memory';
  
  const backButton = (
    <div className={`w-full ${isMemoryProject ? 'bg-black' : 'bg-white'} py-6 mt-24`}>
      <div className="container mx-auto px-4">
        <Link 
          href="/#projects" 
          className={`flex items-center gap-2 ${
            isMemoryProject 
              ? 'text-gray-300 hover:text-white' 
              : 'text-gray-700 hover:text-gray-900'
          } transition-colors`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span>Back to Portfolio</span>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col relative">
      <GlyphNav />
      <main className="flex-grow z-10 relative">
        {backButton}
        <div className={isMemoryProject ? 'bg-black' : 'bg-white'}>
          {children}
        </div>
      </main>
      <FooterSection />
    </div>
  );
} 