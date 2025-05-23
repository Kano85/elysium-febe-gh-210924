// Anim.jsx
import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

export const AnimatedText = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 0.4], ['100%', '0%']);
  const y2 = useTransform(scrollYProgress, [0, 0.5], ['100%', '0%']);

  return (
    <>
      <div
        ref={containerRef}
        className="relative h-[50vh] w-full flex items-center justify-center"
      >
        <div className="flex flex-col gap-4 text-6xl sm:text-8xl lg:text-9xl">
          <div className="overflow-hidden">
            <motion.h3 style={{ y: y1 }} className="">
              48HOURS
            </motion.h3>
          </div>
          <div className="overflow-hidden">
            <motion.h3 style={{ y: y2 }} className="">
              +15
            </motion.h3>
          </div>
        </div>
      </div>
    </>
  );
};
