"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 150);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="w-full max-w-md px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-8 gradient-text">DI&apos;S PORTFOLIO</h1>
          
          <div className="h-1 w-full bg-secondary/30 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div 
              className="h-full"
              style={{
                background: "linear-gradient(90deg, rgba(103, 232, 249, 0.7) 0%, rgba(102, 126, 234, 0.7) 50%, rgba(167, 139, 250, 0.7) 100%)"
              }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>
          
          <p className="mt-2 text-accent text-sm">Loading... {Math.round(progress)}%</p>
        </motion.div>
      </div>
    </div>
  );
} 