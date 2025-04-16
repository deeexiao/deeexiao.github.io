"use client";

import GlyphNav from '@/components/GlyphNav';
import FooterSection from '@/components/FooterSection';
import { usePathname } from 'next/navigation';

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isMemoryProject = pathname === '/projects/memory';
  
  return (
    <div className="min-h-screen flex flex-col relative">
      <GlyphNav />
      <main className="flex-grow z-10 relative mt-24">
        <div className={isMemoryProject ? 'bg-black' : 'bg-white'}>
          {children}
        </div>
      </main>
      <FooterSection />
    </div>
  );
} 