'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function GSAPWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined' || initialized.current) return;

    // Dynamically import GSAP and plugins
    const initializeGSAP = async () => {
      try {
        const gsap = (await import('gsap')).default;
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        const { ScrollSmoother } = await import('gsap/ScrollSmoother');

        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        // Small delay to ensure DOM is ready
        setTimeout(() => {
          try {
            const smoother = ScrollSmoother.create({
              smooth: 0.9,
              effects: true,
              normalizeScroll: true,
              ignoreMobileResize: true,
            });

            initialized.current = true;

            // Store smoother instance for cleanup
            return () => {
              smoother.kill();
            };
          } catch (error) {
            console.error('ScrollSmoother creation error:', error);
          }
        }, 100);
      } catch (error) {
        console.error('GSAP import error:', error);
      }
    };

    initializeGSAP();
  }, [pathname]);

  return <>{children}</>;
}
