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
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 px-3 md:px-8 bg-[#0a1421]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-[#0a1421] z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div ref={heroRef} className="text-white max-w-md">
            <div className="mb-8 inline-block">
              <span className="inline-flex items-center bg-blue-900/30 px-4 py-2 rounded-full text-blue-300 text-sm">
              <span className="h-2.5 w-2.5 animate-glow rounded-full mr-4 bg-green-600"></span>
                Join before launch and get 30% off
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              Work Smarter<span className="text-gray-300"> with VAYUXI</span>
            </h1>
            <p className="text-xl md:text-xl text-gray-300 mb-8">
              Streamline your operations and boost <br /> productivity with our powerful ERP software.
            </p>
            <div className="flex flex-col w-full sm:flex-row gap-4">
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center py-3 w-1/2 border border-white hover:border-transparent text-base font-normal rounded-md text-white hover:bg-[#2563EB] transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center py-3 w-1/2 hover:border-transparent text-base font-normal rounded-md text-white/50 hover:bg-[#2563EB] transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Features <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
          
          <div className="relative hidden mt-10 lg:flex justify-center items-center">
            <Image
              src="/hero.svg"
              alt="Hero"
              width={800}
              height={800}
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}