"use client";

import { useEffect, useState } from 'react';
import GlyphNav from '@/components/GlyphNav';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import InterestsSection from '@/components/InterestsSection';
import FooterSection from '@/components/FooterSection';
import LoadingScreen from '@/components/LoadingScreen';
import FluidBackground from '@/components/FluidBackground';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const hasShownLoading = window.sessionStorage.getItem('hasShownLoading');
      
      if (!hasShownLoading) {
        const timer = setTimeout(() => {
          setIsLoading(false);
          window.sessionStorage.setItem('hasShownLoading', 'true');
        }, 2500);
        return () => clearTimeout(timer);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      // 如果 sessionStorage 不可用，也确保页面能正常显示
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background fluid-background relative">
      <FluidBackground />
      <GlyphNav />
      <main className="flex-grow z-10 relative">
        <HeroSection />
        <div className="w-full h-px bg-white/10 relative mx-[-50vw] left-[50%] right-[50%] mt-32 mb-8"></div>
        <AboutSection />
        <div className="w-full h-px bg-white/10 relative mx-[-50vw] left-[50%] right-[50%] mt-32 mb-8"></div>
        <ProjectsSection />
        <div className="w-full h-px bg-white/10 relative mx-[-50vw] left-[50%] right-[50%] mt-32 mb-8"></div>
        <EducationSection />
        <div className="w-full h-px bg-white/10 relative mx-[-50vw] left-[50%] right-[50%] mt-32 mb-8"></div>
        <InterestsSection />
        <div className="w-full h-px bg-white/10 relative mx-[-50vw] left-[50%] right-[50%] mt-32 mb-8"></div>
      </main>
      <FooterSection />
    </div>
  );
}
