// src/components/SmoothScrollLayout.tsx
'use client';

import { useRef, useEffect } from 'react'; // Import useEffect
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

// Register plugins once
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function SmoothScrollLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null); // Ref for the wrapper
  const contentRef = useRef<HTMLDivElement>(null); // Ref for the content
  const smoother = useRef<ScrollSmoother>();
  const pathname = usePathname();

  useGSAP(() => {
    // Ensure refs are current before creating ScrollSmoother
    if (wrapperRef.current && contentRef.current) {
      smoother.current = ScrollSmoother.create({
        wrapper: wrapperRef.current, // Specify the wrapper element
        content: contentRef.current, // Specify the content element
        smooth: 2.5,
        effects: true,
        normalizeScroll: true,
        ignoreMobileResize: true,
      });
    }

    return () => {
      if (smoother.current) {
        smoother.current.kill();
      }
    };
  }, [pathname]); // Dependencies: pathname.

  // ScrollSmoother often requires body overflow to be hidden
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow; // Reset on unmount
    };
  }, []);

  return (
    <div
      id="smooth-wrapper"
      ref={wrapperRef} // Assign ref
      className="relative overflow-hidden w-full h-full"
    >
      <div
        id="smooth-content"
        ref={contentRef} // Assign ref
        className="will-change-transform"
      >
        {children}
      </div>
    </div>
  );
}
