"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleTouchStart = () => {
      setIsMobile(true);
    };

    const handleMouseEnter = () => {
      document.removeEventListener("mouseenter", handleMouseEnter);
      setIsMobile(false);
    };

    const addHoverListeners = () => {
      const hoverElements = document.querySelectorAll("a, button, .hover-effect");
      
      hoverElements.forEach((element) => {
        element.addEventListener("mouseenter", () => setIsHovering(true));
        element.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    // Check if we're on a mobile device
    if ('ontouchstart' in window) {
      setIsMobile(true);
      document.addEventListener("mouseenter", handleMouseEnter);
    }

    if (!isMobile) {
      document.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchstart", handleTouchStart);
      
      // Add the hover effect after a short delay to ensure all elements are loaded
      const timeout = setTimeout(() => {
        addHoverListeners();
      }, 1000);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchstart", handleTouchStart);
        clearTimeout(timeout);
        
        const hoverElements = document.querySelectorAll("a, button, .hover-effect");
        hoverElements.forEach((element) => {
          element.removeEventListener("mouseenter", () => setIsHovering(true));
          element.removeEventListener("mouseleave", () => setIsHovering(false));
        });
      };
    }
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div 
      className={`cursor ${isHovering ? 'hover' : ''}`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px` 
      }}
    />
  );
} 