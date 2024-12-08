"use client"
import React, { useState, useEffect, useRef } from 'react';
import { FiUser, FiShoppingCart, FiSearch, FiHeart } from 'react-icons/fi';

import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: { target: any; }) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-[#FBEBB5] shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        
          <div className="text-lg font-bold text-gray-800"></div>
         

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8">
        <Link href="/">
          <span className="text-gray-700 hover:text-black font-medium cursor-pointer">
            Home
          </span>
        </Link>
        <Link href="/shop">
          <span className="text-gray-700 hover:text-black font-medium cursor-pointer">
            Shop
          </span>
        </Link>
        <Link href="#about">
          <span className="text-gray-700 hover:text-black font-medium cursor-pointer">
            About
          </span>
        </Link>
        <Link href="/contact">
          <span className="text-gray-700 hover:text-black font-medium cursor-pointer">
            Contact
          </span>
        </Link>
      </nav>
          {/* Icons */}
          <div className="flex items-center gap-2 space-x-4">
          <Link href="/login">
            
            <FiUser  />
            
          </Link>
            <FiSearch  />
            <FiHeart  />
            <FiShoppingCart  />
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav
            ref={menuRef}
            className="md:hidden mt-4 bg-white shadow-lg rounded-lg"
          >
            <a
              href="#home"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black font-medium"
            >
              Home
            </a>
            <a
              href="/shop"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black font-medium"
            >
              Shop
            </a>
            <a
              href="#about"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black font-medium"
            >
              About
            </a>
            <a
              href="/contact"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black font-medium"
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
