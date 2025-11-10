'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false); // ✅ Close menu on link click

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={handleLinkClick}>
            <Image
              src="/logo.png"
              alt="M Ashar Enterprises Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-orange-600">M.ASHAR</div>
              <div className="text-xs text-gray-700">ENTERPRISES</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium transition">
              About
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-orange-600 font-medium transition">
              Message
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-orange-600 font-medium transition">
              Services
            </Link>
            <Link href="/fleet" className="text-gray-700 hover:text-orange-600 font-medium transition">
              Fleet
            </Link>
            <Link href="/announcements" className="text-gray-700 hover:text-orange-600 font-medium transition">
              News
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-600 font-medium transition">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden md:inline-block bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition font-medium"
          >
            Get in Touch
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block text-gray-700 hover:text-orange-600 py-2" onClick={handleLinkClick}>
              Home
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-orange-600 py-2" onClick={handleLinkClick}>
              About
            </Link>
            <Link href="/team" className="block text-gray-700 hover:text-orange-600 py-2" onClick={handleLinkClick}>
              Message
            </Link>
            <Link href="/services" className="block text-gray-700 hover:text-orange-600 py-2" onClick={handleLinkClick}>
              Services
            </Link>
            <Link href="/fleet" className="block text-gray-700 hover:text-orange-600 py-2" onClick={handleLinkClick}>
              Fleet
            </Link>
            <Link href="/announcements" className="block text-gray-700 hover:text-orange-600 py-2" onClick={handleLinkClick}>
              News
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-orange-600 py-2" onClick={handleLinkClick}>
              Contact
            </Link>
            <Link
              href="/contact"
              className="block bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition text-center mt-4"
              onClick={handleLinkClick}
            >
              Get in Touch
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
