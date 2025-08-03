'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SimpleNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const handleRegister = () => {
    router.push('/registration');
  };
  const handleMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md shadow-md">
        <div className="text-2xl font-bold text-gray-800">Logo</div>
        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
          <Link href="/mission" className="text-gray-700 hover:text-blue-600 font-medium">Mission</Link>
          <Link href="/gallery" className="text-gray-700 hover:text-blue-600 font-medium">Gallery</Link>
        </div>
        <button
          className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          onClick={handleRegister}
        >
          Register
        </button>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            id="menu-btn"
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
            onClick={handleMenuToggle}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile menu (hidden by default, can be toggled with JS if needed) */}
      <div
        className={`md:hidden px-6 py-2 bg-white/90 shadow transition-all duration-300 ${mobileMenuOpen ? 'block' : 'hidden'}`}
        id="mobile-menu"
      >
        <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Home</Link>
        <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">About</Link>
        <Link href="/mission" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Mission</Link>
        <Link href="/gallery" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Gallery</Link>
        <button
          className="w-full mt-2 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </>
  );
};

export default SimpleNavbar;
