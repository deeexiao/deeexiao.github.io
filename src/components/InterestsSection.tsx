"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Interest {
  id: string;
  title: string;
  imagePlaceholder: string;
  imageUrl: string;
  link: string;
  description: string;
}

const interests: Interest[] = [
  {
    id: "songwriting",
    title: "🎵 Songwriting",
    imagePlaceholder: "Music Image Placeholder",
    imageUrl: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/5ea805b8-2a39-4275-8e47-6737cbe35fd6/IMG_6299_2/w=640,quality=90,fit=scale-down",
    link: "https://music.163.com/#/artist/album?id=34618349",
    description: "Creating melodies and lyrics that tell stories"
  },
  {
    id: "cooking",
    title: "🍨 Cooking",
    imagePlaceholder: "Cooking Image Placeholder",
    imageUrl: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/61c5cc42-d216-437f-9552-5e647d99d34f/IMG_0263/w=640,quality=90,fit=scale-down",
    link: "/cooking",
    description: "Exploring flavors and creating culinary experiences"
  },
  {
    id: "traveling",
    title: "✈️ Travelling",
    imagePlaceholder: "Travel Image Placeholder",
    imageUrl: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/668725fc-657a-4ced-97ef-e255eb9334f0/IMG_6458/w=640,quality=90,fit=scale-down",
    link: "https://m.mafengwo.cn/user/profile/weng?uid=78173157&mfw_chid=5944&oth_chid_data=88cf04b9-6a72-4dd0-b7f5-af119b970a9a",
    description: "Discovering new places and cultures"
  },
];

function InterestCard({ interest }: { interest: Interest }) {
  const isExternalLink = interest.link.startsWith('http');

  if (isExternalLink) {
    return (
      <div className="relative z-30" style={{ cursor: 'pointer' }}>
        <a 
          href={interest.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'block', position: 'relative', zIndex: 30, pointerEvents: 'auto' }}
        >
          <motion.div
            whileHover={{ scale: 1.005, boxShadow: '0 0 30px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.995 }}
            className="relative overflow-hidden rounded-2xl bg-secondary transition-all duration-300 hover:shadow-xl h-full"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={interest.imageUrl}
                alt={interest.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">{interest.title}</h3>
            </div>
          </motion.div>
        </a>
      </div>
    );
  }

  return (
    <div className="relative z-30" style={{ cursor: 'pointer' }}>
      <Link href={interest.link} legacyBehavior>
        <a style={{ display: 'block', position: 'relative', zIndex: 30, pointerEvents: 'auto' }}>
          <motion.div
            whileHover={{ scale: 1.005, boxShadow: '0 0 30px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.995 }}
            className="relative overflow-hidden rounded-2xl bg-secondary transition-all duration-300 hover:shadow-xl h-full"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={interest.imageUrl}
                alt={interest.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">{interest.title}</h3>
            </div>
          </motion.div>
        </a>
      </Link>
    </div>
  );
}

export default function InterestsSection() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="interests" className="py-0 pt-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="pb-0 mb-0"
        >
          <h2 className="heading-lg gradient-text mb-12">Personal Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interests.map((interest) => (
              <InterestCard key={interest.id} interest={interest} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 