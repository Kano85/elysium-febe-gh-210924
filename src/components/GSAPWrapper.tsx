// src/components/GSAPWrapper.tsx
'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

export default function GSAPWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    try {
      ScrollSmoother.create({
        smooth: 0.9,
        effects: true,
        normalizeScroll: true,
        ignoreMobileResize: true,
      });
    } catch (error) {
      console.error('ScrollSmoother error:', error);
    }
  }, [pathname]);

  return <>{children}</>;
}
