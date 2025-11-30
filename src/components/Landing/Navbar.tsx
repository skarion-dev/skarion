'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('info@skarion.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  return (
    <nav className="fixed bg-transparent top-5 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 bg-[#122461] opacity-90 text-white rounded-full shadow-2xl ring-1 ring-black/10 px-6">
        
          <div className="flex-shrink-0">
            <a href="#" className="inline-flex items-center justify-center group">
              <span className="inline-flex items-center justify-center size-10 rounded-full bg-white shadow transition-transform duration-900 ease-in-out group-hover:rotate-[360deg] will-change-transform">
                <Image src="/skarion.png" alt="Skarion" width={24} height={24} />
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-6 flex items-center space-x-8">
                <a
                    href="#home"
                    className="group grid px-3 py-2 rounded-md text-m font-medium transition-colors duration-300 overflow-hidden"
                >
                    <span className="row-start-1 col-start-1 transition-transform duration-300 group-hover:-translate-y-10">Home</span>
                    <span className="row-start-1 col-start-1 translate-y-10 transition-transform duration-300 group-hover:translate-y-0">Home</span>
                </a>
                <a
                    href="#about"
                    className="group grid px-3 py-2 rounded-md text-m font-medium transition-colors duration-300 overflow-hidden"
                >
                    <span className="row-start-1 col-start-1 transition-transform duration-300 group-hover:-translate-y-10">About</span>
                    <span className="row-start-1 col-start-1 translate-y-10 transition-transform duration-300 group-hover:translate-y-0">About</span>
                </a>
                <a
                    href="#services"
                    className="group grid px-3 py-2 rounded-md text-m font-medium transition-colors duration-300 overflow-hidden"
                >
                    <span className="row-start-1 col-start-1 transition-transform duration-300 group-hover:-translate-y-10">Prices</span>
                    <span className="row-start-1 col-start-1 translate-y-10 transition-transform duration-300 group-hover:translate-y-0">Prices</span>
                </a>
                <a
                    href="#projects"
                    className="group grid px-3 py-2 rounded-md text-m font-medium transition-colors duration-300 overflow-hidden"
                >
                    <span className="row-start-1 col-start-1 transition-transform duration-300 group-hover:-translate-y-10">Projects</span>
                    <span className="row-start-1 col-start-1 translate-y-10 transition-transform duration-300 group-hover:translate-y-0">Projects</span>
                </a>
                <a
                    href="#contact"
                    className="group grid px-3 py-2 rounded-md text-m font-medium transition-colors duration-300 overflow-hidden"
                >
                    <span className="row-start-1 col-start-1 transition-transform duration-300 group-hover:-translate-y-10">Contact</span>
                    <span className="row-start-1 col-start-1 translate-y-10 transition-transform duration-300 group-hover:translate-y-0">Contact</span>
                </a>

              {/* Email Button */}
              <button
                onClick={copyEmail}
                className="ml-8 inline-flex items-center px-4 py-2 rounded-full bg-red-400 text-black font-medium shadow hover:shadow-md transition-all duration-200"
              >
                {copied ? 'Copied ✅' : 'info@skarion.com'}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-3 pb-4 bg-[#122461] opacity-90 border-t border-gray-200 flex flex-col items-center space-y-2">
          <a
            href="#home"
            className="inline-block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-600 hover:bg-gray-100 transition-all duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="inline-block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-600 hover:bg-gray-100 transition-all duration-300"
          >
            About
          </a>
          <a
            href="#services"
            className="inline-block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-600 hover:bg-gray-100 transition-all duration-300"
          >
            Services
          </a>
          <a
            href="#contact"
            className="inline-block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-600 hover:bg-gray-100 transition-all duration-300"
          >
            Contact
          </a>

          {/* Mobile Email Button */}
          <button
            onClick={copyEmail}
            className="px-4 py-2 rounded-full text-base font-medium bg-white text-black shadow hover:shadow-md transition-all duration-200 mt-2"
          >
            <Mail className="w-4 h-4 mr-2" />
            {copied ? 'Copied!' : 'Email'}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}
