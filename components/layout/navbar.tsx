"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1421]/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl">
              VAYUXI ERP
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-blue-300 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-white hover:text-blue-300 transition-colors">
                About Us
              </Link>
              <Link href="#features" className="text-white hover:text-blue-300 transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-white hover:text-blue-300 transition-colors">
                Pricing
              </Link>
              <Link href="#reviews" className="text-white hover:text-blue-300 transition-colors">
                Reviews
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Link 
              href="#contact" 
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-300 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0a1421] border-b border-white/10">
            <Link 
              href="/" 
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-900/50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="#about" 
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-900/50"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="#features" 
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-900/50"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#pricing" 
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-900/50"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="#reviews" 
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-900/50"
              onClick={() => setIsOpen(false)}
            >
              Reviews
            </Link>
            <Link 
              href="#contact" 
              className="text-white block px-3 py-2 rounded-md text-base font-medium bg-blue-600 hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}