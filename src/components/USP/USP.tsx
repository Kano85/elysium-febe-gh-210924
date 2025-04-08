// src/components/USP/USP.tsx
'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const USP_ITEMS: string[] = [
  'Consultoría fiscal global — 15+ años de experiencia internacional en planificación fiscal estratégica',
  'Soluciones integrales — Reubicación empresarial y personal con enfoque en optimización fiscal',
  'Respuestas rápidas — Garantía de respuesta en menos de 48 horas hábiles',
  'Soporte personalizado — Atención directa con expertos en derecho fiscal internacional',
];

export default function USP() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Clear previous animations
      gsap.killTweensOf(itemsRef.current);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
          toggleActions: 'play none none reverse',
        },
      });

      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        tl.fromTo(
          item,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'powers3.out',
          },
          index * 0.15
        );
      });
    },
    { dependencies: [], scope: containerRef }
  );

  return (
    <div
      className="relative z-6 py-32 px-[6.25rem] h-full flex flex-col items-start justify-center gap-8 overflow-hidden bg-transparent"
      ref={containerRef}
    >
      <div className="w-full max-w-[49.5rem] relative z-[1]">
        {USP_ITEMS.map((text, index) => {
          const [mainText, subText] = text.split(' — ');

          return (
            <p
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className="mb-8 last:mb-0 text-background-default font-fragment opacity-0 translate-y-[100px]"
            >
              <span className="text-[1.375rem] font-semibold block mb-2">
                “{mainText}
              </span>
              <span className="text-[1.125rem] leading-[1.75rem] tracking-wide opacity-90">
                {subText}
              </span>
              {index === USP_ITEMS.length - 1 && (
                <span className="mt-6 text-[1.125rem] underline decoration-from-font block">
                  Descubre cómo nuestras estrategias pueden llevar tu negocio al
                  siguiente nivel
                </span>
              )}
            </p>
          );
        })}
      </div>
    </div>
  );
}
