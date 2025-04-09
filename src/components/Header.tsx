"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-6 border-b border-secondary">
      <div className="container flex items-center justify-between">
        <div>
          <Link href="/" className="text-xl font-bold hover:no-underline">
            Di&apos;s Portfolio
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="/#about" className="hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/#projects" className="hover:text-primary transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/#experience" className="hover:text-primary transition-colors">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/#education" className="hover:text-primary transition-colors">
                Education
              </Link>
            </li>
            <li>
              <Link href="/#interests" className="hover:text-primary transition-colors">
                Interests
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 container">
          <nav>
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="/#about" className="block hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="block hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="block hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/#education" className="block hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Education
                </Link>
              </li>
              <li>
                <Link href="/#interests" className="block hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Interests
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
} 