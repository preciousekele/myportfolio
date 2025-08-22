"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Move the conditional return after all hooks
  if (pathname?.startsWith('/project')) {
    return null;
  }

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Precious Ekele Resume.pdf';
    link.download = 'Precious Ekele Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      ref={navbarRef}
      className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#030014]/90 backdrop-blur-md z-[100] px-4 md:px-10 border-b border-[#7042f861]"
    >
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/presh.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin md:w-[70px] md:h-[70px]"
          />
          <span className="font-bold ml-[1px] hidden md:block text-gray-300 text-sm lg:text-base">
            Website Dev
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer text-sm lg:text-base hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="cursor-pointer text-sm lg:text-base hover:text-white transition-colors">
              Skills
            </a>
            <a href="#services" className="cursor-pointer text-sm lg:text-base hover:text-white transition-colors">
              Services
            </a>
            <a href="#projects" className="cursor-pointer text-sm lg:text-base hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="cursor-pointer text-sm lg:text-base hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 z-[110]"
        >
          <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop Social Icons and Resume */}
        <div className="hidden md:flex flex-row gap-5 items-center">
          
          {/* Resume Download Button */}
          <button
            onClick={handleResumeDownload}
            className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
          >
            Résumé
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16L7 11L8.4 9.6L11 12.2V4H13V12.2L15.6 9.6L17 11L12 16Z" fill="currentColor"/>
              <path d="M5 20V18H19V20H5Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-[65px] left-0 w-full bg-[#030014]/90 backdrop-blur-md border-t border-[#7042f861] transition-all duration-300 z-[100] ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col py-4 px-6 space-y-4">
          <a 
            href="#about-me" 
            className="text-gray-100 hover:text-white transition-colors py-2 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#skills" 
            className="text-gray-100 hover:text-white transition-colors py-2 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </a>
          <a 
            href="#services" 
            className="text-gray-100 hover:text-white transition-colors py-2 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#projects" 
            className="text-gray-100 hover:text-white transition-colors py-2 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="text-gray-100 hover:text-white transition-colors py-2 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Me
          </a>
          
          <div className="flex flex-col items-center pt-3">
            <div className="flex flex-row gap-5 justify-center">
            </div>
            
            {/* Mobile Resume Download Button */}
            <button
              onClick={handleResumeDownload}
              className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
            >
              Résumé
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16L7 11L8.4 9.6L11 12.2V4H13V12.2L15.6 9.6L17 11L12 16Z" fill="currentColor"/>
                <path d="M5 20V18H19V20H5Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;