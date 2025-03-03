// src/components/Hero/index.tsx
'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!heroSectionRef.current || !videoRef.current || !contentRef.current)
      return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroSectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: true,
        pinSpacing: false,
        // Removed markers for production
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    tl.addLabel('start');
    tl.to(videoRef.current, { opacity: 0, ease: 'power1.in' }, 'start+=0');
    tl.to(
      contentRef.current,
      { opacity: 0, y: -128, ease: 'power2.out', duration: 0.3 },
      'start+=0'
    );
    tl.addLabel('end');
  });

  return (
    <section
      className="relative w-full h-screen overflow-hidden z-4 bg-blue transform-style-preserve-3d"
      ref={heroSectionRef}
    >
      <div className="w-full h-full">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover opacity-100 will-change-opacity"
          ref={videoRef}
          preload="auto"
        >
          <source src="/videos/applevid.mp4" type="video/mp4" />
        </video>

        <div
          className="relative z-5 h-full flex flex-col items-start justify-center px-[3.5rem] opacity-100 will-change-transform"
          ref={contentRef}
        >
          <h1 className="mb-[0.7rem] will-change-transform text-h1">
            All Apple Originals. <br />
            Only on Apple TV+.
          </h1>

          <button className="btn-primary mb-[0.7rem]">Stream Now</button>

          <p className="opacity-90 text-h4">Watch on the 📺 app.</p>
        </div>
      </div>
    </section>
  );
}
