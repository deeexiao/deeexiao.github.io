'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import OtherProjects from '@/components/OtherProjects';

const images = [
  {
    src: "https://assets.super.so/6244086a-9ee6-4203-a5e5-ab642b8c0f25/images/16de4981-502e-46eb-a22e-d2970a3d1b72/IMG_5551.jpg",
    alt: "Food image 1"
  },
  {
    src: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/4fded49a-e42a-4104-987a-5d336d75c562/IMG_5562/w=1200,quality=90,fit=scale-down",
    alt: "Food image 2"
  },
  {
    src: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/12e70826-0810-4af7-bc23-cd317b2695e3/IMG_5587/w=1200,quality=90,fit=scale-down",
    alt: "Food image 3"
  },
  {
    src: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/fd23a391-6152-4964-a763-fe939211c517/IMG_5590/w=1200,quality=90,fit=scale-down",
    alt: "Food image 4"
  },
  {
    src: "https://assets.super.so/6244086a-9ee6-4203-a5e5-ab642b8c0f25/images/4196ca27-761e-4843-aa7e-44dfd647b60e/IMG_5563.jpg",
    alt: "Food image 5"
  }
];

export default function CookingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      {/* Project header */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 mb-12"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Cooking Journey</h1>
          <p className="text-xl text-gray-700 mb-8">
            A collection of my culinary adventures and food creations
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="skill-tag bg-gray-200 text-gray-800">Cooking</span>
            <span className="skill-tag bg-gray-200 text-gray-800">Food Photography</span>
            <span className="skill-tag bg-gray-200 text-gray-800">Culinary Arts</span>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700">
              Welcome to my cooking section! Here you can explore my culinary adventures and food creations. I enjoy experimenting with different ingredients and techniques to create delicious meals.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              <span className="text-accent font-medium">Kind reminder:</span> Don't scroll down when you are hungry. 😊
            </p>
          </div>
        </div>
      </motion.div>
        
      {/* Carousel section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto px-4 mb-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full max-w-5xl mx-auto">
            {/* Carousel container */}
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-lg bg-white">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: index === currentIndex ? 1 : 0,
                    x: `${(index - currentIndex) * 100}%`
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </motion.div>
              ))}
            </div>

            {/* Navigation buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-all"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-all"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-accent scale-125' : 'bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Conclusion */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="container mx-auto px-4 mt-8 mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Cooking Journey Conclusion</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700">
              Cooking is not just about preparing food; it's a creative process that allows me to express myself and bring joy to others. Through my culinary adventures, I've learned that the best dishes come from a combination of quality ingredients, careful technique, and a lot of love. I hope these images inspire you to explore your own cooking journey!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Other Projects Section */}
      <OtherProjects currentProjectId="cooking" isDarkMode={false} />
    </>
  );
}