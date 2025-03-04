'use client';

import { useRef, useEffect } from 'react';
import { Observer } from 'gsap/Observer';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import horizontalLoop from '@/components/Marquee/horizontalLoop';
import { testimonialData } from '@/components/Testimonials';
import SingleTestimonial from '../Testimonials/SingleTestimonial';

gsap.registerPlugin(Observer, useGSAP);

// Create duplicate data to have at least 10 items (5 per row)
const createDuplicatedData = () => {
  let duplicated = [...testimonialData];
  while (duplicated.length < 10) {
    duplicated = [...duplicated, ...testimonialData];
  }
  return duplicated;
};

export default function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marquee1Ref = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);
  const loops = useRef<{ marquee1: any; marquee2: any }>({
    marquee1: null,
    marquee2: null,
  });

  const duplicatedData = createDuplicatedData();

  // Initialize or reinitialize marquee animations
  const initMarquees = () => {
    const baseSpeed = 1;

    if (marquee1Ref.current) {
      if (loops.current.marquee1) loops.current.marquee1.kill();

      loops.current.marquee1 = horizontalLoop(marquee1Ref.current.children, {
        repeat: -1,
        speed: baseSpeed,
        paddingRight: 120,
      });
    }

    if (marquee2Ref.current) {
      if (loops.current.marquee2) loops.current.marquee2.kill();

      loops.current.marquee2 = horizontalLoop(marquee2Ref.current.children, {
        repeat: -1,
        speed: baseSpeed * 0.8,
        paddingRight: 120,
        reversed: true,
      });
    }
  };

  // Handle resize events
  useEffect(() => {
    const handleResize = () => {
      setTimeout(initMarquees, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useGSAP(
    () => {
      const speedMultiplier = 2;

      document.fonts.ready.then(() => {
        // Initialize marquees first
        setTimeout(() => {
          initMarquees();

          // Only set up the observer AFTER marquees are initialized
          let animation: gsap.core.Timeline;
          Observer.create({
            target: window,
            type: 'wheel',
            onChangeY: (self) => {
              // Check if marquees exist before animating them
              if (!loops.current.marquee1 || !loops.current.marquee2) return;

              animation?.kill();
              const direction = self.deltaY > 0 ? 1 : -1;

              animation = gsap
                .timeline()
                .to([loops.current.marquee1, loops.current.marquee2], {
                  timeScale: speedMultiplier * direction,
                  duration: 0.25,
                  overwrite: true,
                })
                .to([loops.current.marquee1, loops.current.marquee2], {
                  timeScale: 1 * direction,
                  duration: 1,
                });
            },
          });
        }, 100);
      });

      return () => {
        if (loops.current.marquee1) loops.current.marquee1.kill();
        if (loops.current.marquee2) loops.current.marquee2.kill();
      };
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col gap-12 overflow-hidden p-8 sm:p-6"
      id="next-section"
    >
      {/* First Marquee Row - 5 items per row */}
      <div
        ref={marquee1Ref}
        className="flex gap-3 sm:gap-4 w-full overflow-visible will-change-transform"
      >
        {duplicatedData.slice(0, 5).map((testimonial, i) => (
          <div
            key={`t1-${i}`}
            className="testimonialContainer flex-shrink-0 w-[calc(100%/2-8px)] sm:w-[calc(100%/3-12px)] md:w-[calc(100%/5-16px)]"
          >
            <SingleTestimonial testimonial={testimonial} />
          </div>
        ))}
        {duplicatedData.slice(0, 5).map((testimonial, i) => (
          <div
            key={`t1-dup-${i}`}
            className="testimonialContainer flex-shrink-0 w-[calc(100%/2-8px)] sm:w-[calc(100%/3-12px)] md:w-[calc(100%/5-16px)]"
          >
            <SingleTestimonial testimonial={testimonial} />
          </div>
        ))}
      </div>

      {/* Second Marquee Row (Reversed) - 5 items per row */}
      <div
        ref={marquee2Ref}
        className="flex gap-3 sm:gap-4 w-full overflow-visible will-change-transform"
      >
        {duplicatedData
          .slice(5, 10)
          .reverse()
          .map((testimonial, i) => (
            <div
              key={`t2-${i}`}
              className="testimonialContainer flex-shrink-0 w-[calc(100%/2-8px)] sm:w-[calc(100%/3-12px)] md:w-[calc(100%/5-16px)]"
            >
              <SingleTestimonial testimonial={testimonial} />
            </div>
          ))}
        {duplicatedData
          .slice(5, 10)
          .reverse()
          .map((testimonial, i) => (
            <div
              key={`t2-dup-${i}`}
              className="testimonialContainer flex-shrink-0 w-[calc(100%/2-8px)] sm:w-[calc(100%/3-12px)] md:w-[calc(100%/5-16px)]"
            >
              <SingleTestimonial testimonial={testimonial} />
            </div>
          ))}
      </div>
    </div>
  );
}
