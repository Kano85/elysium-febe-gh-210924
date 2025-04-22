// /src/components/Marquee/Marquee.tsx
'use client';

import { useRef, useEffect } from 'react';
import { Observer } from 'gsap/Observer';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import horizontalLoop from '@/components/Marquee/horizontalLoop';
import { testimonialData } from '@/components/Testimonials';
import { Testimonial } from '@/sanity/shared-types';
import SingleTestimonial from '../Testimonials/SingleTestimonial';

gsap.registerPlugin(Observer, useGSAP);

// duplicate data until we have at least 10 items
const createDuplicatedData = (): Testimonial[] => {
  let dup = [...testimonialData];
  while (dup.length < 10) {
    dup = [...dup, ...testimonialData];
  }
  return dup;
};

export default function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const loops = useRef<{ marquee: ReturnType<typeof gsap.timeline> | null }>({
    marquee: null,
  });
  const wheelObs = useRef<ReturnType<typeof Observer.create> | null>(null);
  const resizeTimer = useRef<number>();

  const data = createDuplicatedData();

  // (Re)initialize the horizontal loop
  const initLoop = () => {
    if (!marqueeRef.current) return;
    // speed: full at <768px, slower at md+ (0.3)
    const baseSpeed = window.matchMedia('(min-width:768px)').matches ? 0.3 : 1;
    loops.current.marquee?.kill();
    loops.current.marquee = horizontalLoop(marqueeRef.current.children, {
      repeat: -1,
      speed: baseSpeed,
      paddingRight: 120,
    });
  };

  // Create the wheel‐observer for speed‐bump
  const createWheel = () => {
    wheelObs.current?.kill();
    wheelObs.current = Observer.create({
      target: window,
      type: 'wheel',
      onChangeY: ({ deltaY }) => {
        const tl = loops.current.marquee;
        if (!tl) return;
        const dir = deltaY > 0 ? 1 : -1;
        gsap
          .timeline({ overwrite: true })
          .to(tl, { timeScale: dir, duration: 0.25 })
          .to(tl, { timeScale: 0.3 * dir, duration: 1 });
      },
    });
  };

  // Debounced resize handler: kill & re-init both loop + wheel
  useEffect(() => {
    const handleResize = () => {
      window.clearTimeout(resizeTimer.current);
      resizeTimer.current = window.setTimeout(() => {
        loops.current.marquee?.kill();
        wheelObs.current?.kill();
        initLoop();
        createWheel();
      }, 200);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.clearTimeout(resizeTimer.current);
    };
  }, []);

  // On mount (and unmount) set up GSAP
  useGSAP(
    () => {
      // wait for fonts + all images inside your marquee to load
      document.fonts.ready.then(() => {
        if (!marqueeRef.current) return;
        const imgs = Array.from(
          marqueeRef.current.querySelectorAll('img')
        ) as HTMLImageElement[];
        const loads = imgs.map((img) =>
          img.complete
            ? Promise.resolve()
            : new Promise<void>((res) =>
                img.addEventListener('load', () => res(), { once: true })
              )
        );
        Promise.all(loads).then(() => {
          initLoop();
          createWheel();
        });
      });

      // cleanup on unmount
      return () => {
        loops.current.marquee?.kill();
        wheelObs.current?.kill();
      };
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col gap-6 overflow-hidden p-2 sm:p-1"
    >
      <div
        ref={marqueeRef}
        className="flex gap-6 sm:gap-4 w-full overflow-visible will-change-transform"
      >
        {data.slice(0, 4).map((t, i) => (
          <div
            key={`m1-${i}`}
            className="
              testimonialContainer
              flex-shrink-0
              basis-1/2        /* 2 cols below 640px */
              sm:basis-full    /* 1 col ≥640px */
              md:basis-1/4     /* 4 cols ≥768px */
            "
          >
            <SingleTestimonial testimonial={t} />
          </div>
        ))}

        {data.slice(0, 4).map((t, i) => (
          <div
            key={`m1-dup-${i}`}
            className="
              testimonialContainer
              flex-shrink-0
              basis-1/2
              sm:basis-full
              md:basis-1/4
            "
          >
            <SingleTestimonial testimonial={t} />
          </div>
        ))}
      </div>
    </div>
  );
}
