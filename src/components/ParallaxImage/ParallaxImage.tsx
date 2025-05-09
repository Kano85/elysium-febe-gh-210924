'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ParallaxImage: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const imageWrapper = useRef<HTMLDivElement>(null); // Ref for the div wrapping the Image

  useGSAP(
    () => {
      if (container.current && imageWrapper.current) {
        gsap.fromTo(
          // Changed from gsap.to to gsap.fromTo
          imageWrapper.current,
          { yPercent: -10 }, // "from" state: initial position
          {
            yPercent: 10, // "to" state: target end position
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
      {/* Text content from MainParallax - consider if this should be here or removed/customized for ParallaxImage */}
      <div className="relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between"></div>
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <div
          ref={imageWrapper}
          className="relative w-full h-full"
          style={{ willChange: 'transform' }}
        >
          <Image
            src="/images/about/aboutus4.png"
            fill
            alt="Parallax background"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ParallaxImage;
