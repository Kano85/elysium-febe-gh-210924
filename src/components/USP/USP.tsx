// src/components/USP/USP.tsx
'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const USP_ITEMS: string[] = [
  'Consultoría fiscal global — 15+ años de experiencia',
  'Soluciones integrales — Reubicación y planificación fiscal',
  'Respuestas rápidas — Menos de 48 horas',
  'Soporte personalizado — Atención directa con expertos',
];

export default function USP() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'center 100%',
        end: 'bottom 70%',
        scrub: true,
        toggleActions: 'play none none reverse',
        markers: false, // Disabled markers for production
      },
    });

    itemsRef.current.forEach((item, index) => {
      if (!item) return;

      // Y Position animation
      tl.fromTo(
        item,
        { y: 100 },
        {
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
        },
        index === 0 ? '>' : '+=0.15'
      );

      // Opacity animation (starts at same time but lasts longer)
      tl.fromTo(
        item,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: 'power1.inOut',
        },
        '<' // Start at same time as position animation
      );
    });
  });

  return (
    <div
      className="relative z-6 py-24 px-8 md:py-32 md:px-16 lg:px-24 h-full flex flex-col items-center justify-center gap-12 md:gap-16 overflow-hidden"
      ref={containerRef}
    >
      {USP_ITEMS.map((text, index) => {
        const [mainText, subText] = text.split(' — ');

        return (
          <p
            key={index}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            className="relative z-2 text-center font-serif my-4 md:my-6 max-w-[85%] md:max-w-[80%] tracking-wide text-light"
          >
            <span className="text-h3 md:text-h2 font-bold block mb-3">
              {mainText}
            </span>
            <span className="text-h5 md:text-h4 font-light opacity-90 leading-snug">
              {subText}
            </span>
          </p>
        );
      })}
    </div>
  );
}
