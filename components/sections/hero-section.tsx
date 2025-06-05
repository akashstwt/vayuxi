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
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-[#0a1421]">
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
            <div className="relative w-[280px] h-[580px] rounded-[40px] border-8 border-gray-800 shadow-2xl overflow-hidden">
              <div className="absolute top-0 w-full h-6 bg-gray-800 z-10"></div>
              <div className="h-full w-full bg-gradient-to-b from-blue-900 to-[#0a1421] p-4">
                <div className="text-white h-full flex flex-col">
                  <div className="text-xl font-bold mb-2">VAYUXI ERP</div>
                  <h2 className="text-3xl font-bold mb-4">Site Dashboard</h2>
                  <div className="bg-blue-800/30 rounded-lg p-4 mb-4">
                    <h3 className="text-lg font-medium mb-2">Today's Progress</h3>
                    <div className="flex justify-between mb-1">
                      <span>Attendance</span>
                      <span>45/50</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                      <div className="bg-blue-500 h-2 rounded-full w-[90%]"></div>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span>Tasks Completed</span>
                      <span>7/10</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                      <div className="bg-blue-500 h-2 rounded-full w-[70%]"></div>
                    </div>
                  </div>
                  <div className="bg-blue-800/30 rounded-lg p-4">
                    <h3 className="text-lg font-medium mb-2">Quick Actions</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {["Attendance", "Reports", "Expenses", "Salary", "Materials", "Summary"].map((item, i) => (
                        <div key={i} className="bg-blue-900/50 p-2 rounded-lg text-center text-xs font-medium">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -bottom-10 -right-10"></div>
            <div className="absolute -z-10 w-64 h-64 bg-blue-700/10 rounded-full blur-3xl top-10 -left-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}