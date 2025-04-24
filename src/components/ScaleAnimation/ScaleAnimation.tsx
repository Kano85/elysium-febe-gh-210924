import React, { useRef, useEffect, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { AnimatedText } from "./AnimatedText";

const ScaleAnimation = () => {
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const scale = useTransform(
    smoothProgress, 
    isMobile ? [0.1, 0.5] : [0.2, 1], 
    [1, 20]
  );

  const innerTextOpacity = useTransform(smoothProgress, [0.1, 0.2], [1, 0]);
  const y = useTransform(smoothProgress, [0.1, 0.2], ["0%", "-400%"]);
  const x = useTransform(smoothProgress, [0.1, 0.2], ["15%", "0%"]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <section className="bg-transparent text-white">
      <div
        ref={containerRef}
        className="w-full h-[200vh] relative overflow-hidden"
      >
        <div className="absolute top-1/4 -translate-y-1/4 left-0  w-full flex items-center justify-center">
          <motion.div
            style={{ scale, x }}
            className="flex items-center justify-center bg-transparent text-[200px] sm:text-[350px]  lg:text-[500px]  text-white"
          >
            <h2>9</h2>
            <h2 className="relative ">
              0
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                <motion.p
                  style={{
                    y,
                    opacity: innerTextOpacity,
                  }}
                  className="text-[8px] sm:text-xs md:text-sm lg:text-lg  underline underline-offset-4 font-bold text-nowrap"
                >
                  Of Returning <br />
                  Customer
                </motion.p>
              </div>
            </h2>
            <h2 className="relative text-transparent max-w-[110px] sm:max-w-[190px] lg:max-w-[270px] overflow-hidden  ">
              %
              <span className="absolute left-0 bottom-[30%]   translate-y-1/2 font-serif text-6xl sm:text-8xl md:text-[110px] lg:text-[130px]  text-white">
                %
              </span>
            </h2>
          </motion.div>
        </div>

        <div className="absolute top-[100vh] pt-[200px]  md:pt:[140px] lg:pt-[200px] w-full ">
          <div className="flex flex-col text-sm md:text-base lg:text-lg items-center justify-center">
            <span className="pt-2 ">Over 1500 Projects Completed</span>
            <AnimatedText />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScaleAnimation;

