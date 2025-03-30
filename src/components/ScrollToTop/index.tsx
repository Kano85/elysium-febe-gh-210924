'use client';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';

// Register plugins
gsap.registerPlugin(ScrollToPlugin, useGSAP);

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // Using useGSAP hook for context management
  const { contextSafe } = useGSAP({ scope: containerRef });

  useGSAP(
    () => {
      // Button visibility logic
      const toggleVisibility = () => {
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      window.addEventListener('scroll', toggleVisibility);

      return () => window.removeEventListener('scroll', toggleVisibility);
    },
    { scope: containerRef, dependencies: [] }
  );

  // Making the scrollToTop function context-safe
  const scrollToTop = contextSafe(() => {
    // Using GSAP's ScrollToPlugin for smooth animation
    gsap.to(window, {
      duration: 1,
      scrollTo: 0,
      ease: 'power3.out',
    });
  });

  return (
    <div ref={containerRef} className="fixed bottom-8 right-8 z-20">
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-dark"
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
        </div>
      )}
    </div>
  );
}
