"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-secondary">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-accent text-sm">© {new Date().getFullYear()} Di Xiao. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="mailto:deee.xiao@gmail.com" className="text-accent hover:text-primary">
              Email
            </Link>
            <Link href="https://linkedin.com/in/dixiao" className="text-accent hover:text-primary">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 