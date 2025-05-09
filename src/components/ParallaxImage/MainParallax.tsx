'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
// Removed import for DescriptionMainParallax

gsap.registerPlugin(ScrollTrigger, useGSAP);

const MainParallax: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const imageWrapper = useRef<HTMLDivElement>(null); // Ref for the div wrapping the Image

  useGSAP(
    () => {
      if (container.current && imageWrapper.current) {
        gsap.fromTo(
          imageWrapper.current,
          { yPercent: -10 }, // Initial position
          {
            yPercent: 10, // Target end position
            ease: 'none',
            force3D: true, // Added for potentially smoother animation
            scrollTrigger: {
              trigger: container.current,
              start: 'top bottom', // When the top of the container hits the bottom of the viewport
              end: 'bottom top', // When the bottom of the container hits the top of the viewport
              scrub: true, // Smoothly scrubs the animation
            },
          }
        );
      }
    },
    { scope: container } // Scope the GSAP context to this component
  );

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      {/* Removed DescriptionMainParallax component from here */}
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <div
          ref={imageWrapper}
          className="relative w-full h-full"
          style={{ willChange: 'transform' }}
        >
          <Image
            src="/images/about/aboutus4.png"
            fill
            alt="image"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default MainParallax;
