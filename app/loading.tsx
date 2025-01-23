"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress - faster intervals
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 20;
      });
    }, 100);

    // Hide loading screen after animation
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="flex flex-col items-center space-y-6 p-8 rounded-2xl">
        {/* Logo and Brand Name Container */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="relative">
            <div className="absolute inset-0 animate-ping bg-blue-100 rounded-full opacity-20" />
            <Image
              src="/logo.svg"
              alt="Outhad AI Logo"
              width={60}
              height={60}
              className="relative animate-pulse"
              priority
            />
          </div>

          {/* Brand Name with Superscript */}
          <div className="flex items-start">
            <span className="text-4xl font-medium text-gray-800 tracking-wide font-spaceGrotesk animate-pulse inline-flex items-baseline">
              OUTHAD AI
              <sup className="ml-1 text-2xl font-medium text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full font-spaceGrotesk">
                DEV
              </sup>
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        {/* <div className="w-64">
          <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 text-center text-sm text-gray-500 font-spaceGrotesk">
            {progress}%
          </div>
        </div> */}
      </div>
    </div>
  );
} 