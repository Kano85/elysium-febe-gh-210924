'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const USP_KEYS = [
  'usp.optimize_tax',
  'usp.help_do_it_right',
  'usp.tax_doubts',
  // 'usp.client_goals',
];

export default function USP() {
  const itemsRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    itemsRef.current.forEach((el) => {
      if (!el) return;

      const enterAnim = gsap.fromTo(
        el,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power4.out',
          paused: true,
          // overwrite: true,
        }
      );

      ScrollTrigger.create({
        trigger: el,
        start: 'top bottom',
        onEnter: () => enterAnim.play(),
        onLeaveBack: () => enterAnim.reverse(),
        // markers: true,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="flex flex-col h-full justify-start gap-12 lg:px-24 md:gap-16 md:px-16 md:py-32 overflow-hidden px-8 py-24 relative z-6">
      {USP_KEYS.map((key, index) => {
        const isRightAligned = index === 2 || index === 4;
        return (
          <p
            key={key}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            style={{
              fontWeight: 400,
            }}
            className={`text-[1.9rem] whitespace-pre-line max-w-[85%] md:max-w-[80%] md:my-6 my-4 relative tracking-wide z-2 ${
              isRightAligned ? 'self-end text-right' : 'self-start text-left'
            }`}
          >
            {t(key)}
          </p>
        );
      })}
    </div>
  );
}
