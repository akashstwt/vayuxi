"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Simple parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const opacity = Math.max(1 - scrollY / 700, 0.2);
        heroRef.current.style.opacity = opacity.toString();
        heroRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 px-8 bg-[#0a1421]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-[#0a1421] z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div ref={heroRef} className="text-white max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Work Smarter with VAYUXI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Streamline your operations and boost productivity with our powerful ERP software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors duration-300"
              >
                Explore Features <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            <div className="mt-8 inline-block">
              <span className="inline-flex items-center bg-blue-900/30 px-4 py-2 rounded-full text-blue-300 text-sm">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Join before launch and get 30% off
              </span>
            </div>
          </div>
          
          <div className="relative hidden lg:flex justify-center items-center">
            <Image
              src="/hero.png"
              alt="Hero"
              width={325}
              height={300}
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}