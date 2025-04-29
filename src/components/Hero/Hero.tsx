// src/components/Hero/Hero.tsx
'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { t } = useTranslation();

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
        pinSpacing: true,
        pinType: 'transform',
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
      className="relative w-full h-screen overflow-hidden bg-hero-dark"
      ref={heroSectionRef}
    >
      <div className="w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          ref={videoRef}
          preload="auto"
        >
          <source src="/videos/applevid.mp4" type="video/mp4" />
        </video>

        <div
          className="relative z-5 h-full flex flex-col items-start justify-center pl-8 lg:pl-24 space-y-4 opacity-100 will-change-transform"
          ref={contentRef}
        >
          <h1 className="elysium-heading-3 bg-gradient-to-b from-gold-light to-gold-dark bg-clip-text text-transparent text-left">
            {t('Building lasting')} <br />
            {t('partnerships')}
          </h1>

          <p className="elysium-body-l text-left opacity-90 max-w-[500px]">
            {t('Discover us')}
          </p>
        </div>
      </div>
    </section>
  );
}
