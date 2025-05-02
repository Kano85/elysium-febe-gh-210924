"use client";
import {
  motion,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

const ScaleAnimation = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  // const smoothProgress = useSpring(scrollYProgress, {
  //   duration:0.6,
  //   bounce:0.2,
  //   visualDuration:0.6
  // });
  const isLgUp = useIsLgUp();

  const scale = useTransform(
    scrollYProgress,
    isLgUp ? [0, 0.7, 1] : [0, 0.5, 1],
    isLgUp ? [1, 20, 35] : [1, 15, 20]
  );
  const y = useTransform(scrollYProgress, [0, 0.1], ["0%", "-400%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });
  return (
    <section ref={containerRef} className="w-full overflow-clip ">
      <motion.h6 style={{y,opacity}} className="relative top-[50vh] text-white z-50 left-[calc(50%+75px)] lg:left-[calc(50%+150px)] text-[clamp(0.4875rem,_-0.0011rem_+_2.0845vw,_1.875rem)]">
        of returning <br /> custommers
      </motion.h6>
      
      <motion.div
        style={{ scale }}
        className="sticky origin-[70%_center] top-0 h-screen pointer-events-none"
      >
        <h2 className="absolute text-transparent bg-clip-text bg-gradient-to-b from-[#A78952] to-[#DFC383] text-[250px] sm:text-[400px] md:text-[500px] lg:text-[625px] font-fragmentSerif top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          90
          <span className="text-3xl align-middle lg:text-9xl  text-transparent bg-clip-text bg-gradient-to-b from-[#A78952] to-[#DFC383] absolute top-1/2 translate-y-1/2">
            %
          </span>
        </h2>
      </motion.div>
      <div className="w-full">
        <Cards />
      </div>
    </section>
  );
};

export default ScaleAnimation;

const Cards = () => {
  return (
    <div className="flex flex-col text-sm md:text-base lg:text-lg items-center justify-center">
      <div className="card">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-[#A78952] to-[#DFC383] font-fragmentSerif leading-[1] text-[clamp(4rem,_2.1074rem_+_8.0751vw,_9.375rem)] ">
          &#60;48H
        </h2>
        <p className="leading-[2.37rem] mt-[1.62rem] text-[clamp(1.125rem,_0.8609rem_+_1.1268vw,_1.875rem)] ">
          Respuesta en menos de 48 h. <br />
          ¡Tu tiempo importa!
        </p>
      </div>

      <div className="card mt-[4rem] lg:mt-[8.125rem]">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-[#A78952] to-[#DFC383] font-fragmentSerif text-[clamp(4rem,_2.1074rem_+_8.0751vw,_9.375rem)]  leading-[1]">
          +15
        </h2>
        <p className="leading-[2.37rem] mt-[1.62rem] text-[clamp(1.125rem,_0.8609rem_+_1.1268vw,_1.875rem)] ">
          15 años de experiencia en <br />
          fiscalidad internacional y <br />
          estrategia.
        </p>
      </div>

      <div className="card mt-[4rem] lg:mt-[8.125rem]">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-[#A78952] to-[#DFC383] font-fragmentSerif text-[clamp(4rem,_2.1074rem_+_8.0751vw,_9.375rem)]  leading-[1]">
          +120
        </h2>
        <p className="text-[clamp(1.125rem,_0.8609rem_+_1.1268vw,_1.875rem)] leading-[2.37rem] mt-[1.62rem]">
          traslados de residencia <br />
          gestionados con éxito.
        </p>
      </div>
    </div>
  );
};




function useIsLgUp() {
  const [isLgUp, setIsLgUp] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsLgUp(mediaQuery.matches);
    update(); // Initial check
    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  return isLgUp;
}

// "use client";
// import {
//   motion,
//   useTransform,
//   useSpring,
//   useScroll,
//   useMotionValueEvent,
// } from "motion/react";
// import { useRef } from "react";

// const ScaleAnimation = () => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });
//   // const smoothProgress = useSpring(scrollYProgress, {
//   //   duration:0.6,
//   //   bounce:0.2,
//   //   visualDuration:0.6
//   // });

//   const scale = useTransform(scrollYProgress, [0, 0.7, 1], [1, 20, 35]);
//   const y = useTransform(scrollYProgress, [0, 0.1], ["0%", "-400%"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

//   useMotionValueEvent(scrollYProgress, "change", (latest) => {
//     console.log(latest);
//   });
//   return (
//     <section ref={containerRef} className="h-[300vh] w-full overflow-clip ">
//       <motion.h6 style={{y,opacity}} className="relative top-[50vh] text-white z-50 left-[calc(50%+150px)]">
//         of returning <br /> custommers
//       </motion.h6>
      
//       <motion.div
//         style={{ scale }}
//         className="sticky origin-[70%_center] top-0 h-screen pointer-events-none"
//       >
//         <h2 className="absolute text-transparent bg-clip-text bg-gradient-to-b from-[#A78952] to-[#DFC383] text-[625px] font-fragmentSerif top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//           90
//           <span className="text-9xl  text-transparent bg-clip-text bg-gradient-to-b from-[#A78952] to-[#DFC383] absolute top-1/2 translate-y-1/2">
//             %
//           </span>
//         </h2>
//       </motion.div>
//       <div className=" w-full">
//         <Cards />
//       </div>
//     </section>
//   );
// };

// export default ScaleAnimation;

// const Cards = () => {
//   return (
//     <div className="flex flex-col text-sm md:text-base lg:text-lg items-center justify-center">
//       <div className="card">
//         <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-[#A78952] to-[#DFC383] font-fragmentSerif text-[7rem] lg:text-[9.37rem] leading-[1]">
//           &#60;48H
//         </h2>
//         <p className="text-[1.875rem] leading-[2.37rem] mt-[1.62rem]">
//           Respuesta en menos de 48 h. <br />
//           ¡Tu tiempo importa!
//         </p>
//       </div>

//       <div className="card mt-[8.125rem]">
//         <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-[#A78952] to-[#DFC383] font-fragmentSerif text-[7rem] lg:text-[9.37rem] leading-[1]">
//           +15
//         </h2>
//         <p className="text-[1.875rem] leading-[2.37rem] mt-[1.62rem]">
//           15 años de experiencia en <br />
//           fiscalidad internacional y <br />
//           estrategia.
//         </p>
//       </div>

//       <div className="card mt-[8.125rem]">
//         <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-[#A78952] to-[#DFC383] font-fragmentSerif text-[7rem] lg:text-[9.37rem] leading-[1]">
//           +120
//         </h2>
//         <p className="text-[1.875rem] leading-[2.37rem] mt-[1.62rem]">
//           traslados de residencia <br />
//           gestionados con éxito.
//         </p>
//       </div>
//     </div>
//   );
// };

// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import { motion, useTransform, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
// import { AnimatedText } from "./AnimatedText";

// const ScaleAnimation = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//   });

//   const scale = useTransform(
//     smoothProgress,
//     isMobile ? [0.1, 0.5,0.5,0.5] : [0.2,0.5, 0.6,0.8],
//     [1,6, 7,15]
//   );
// useMotionValueEvent(scrollYProgress, "change", (latest) => {
//   console.log(latest);

// })
//   const innerTextOpacity = useTransform(smoothProgress, [0.1, 0.2], [1, 0]);
//   const y = useTransform(smoothProgress, [0.1, 0.2], ["0%", "-400%"]);

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.matchMedia("(max-width: 768px)").matches);
//     };

//     checkScreenSize();

//     window.addEventListener("resize", checkScreenSize);

//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);
//   return (
//     <section className="bg-transparent text-white overflow-clip">
//       <div ref={containerRef} className="w-full h-[400vh] relative ">
//         <div className="absolute top-1/4 -translate-y-1/4 left-0  w-full flex items-center pl-8">
//           <motion.div
//             style={{ scale }}
//             className="flex origin-[60%_40%] items-center justify-center bg-transparent text-[200px] sm:text-[350px]  lg:text-[500px]  text-white font-fragmentSerif  text-transparent bg-clip-text bg-gradient-to-b from-[#A78952] to-[#DFC383]"
//           >
//             <h2 className=" text-transparent bg-clip-text bg-gradient-to-b from-[#A78952] to-[#DFC383]">
//               9
//             </h2>
//             <h2 className="relative  text-transparent bg-clip-text bg-gradient-to-b from-[#A78952] to-[#DFC383]">
//               0
//               <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
//                 <motion.p
//                   style={{
//                     y,
//                     opacity: innerTextOpacity,
//                   }}
//                   className="text-[8px] text-white sm:text-xs md:text-sm lg:text-lg  underline underline-offset-4 font-bold text-nowrap"
//                 >
//                   Of Returning <br />
//                   Customer
//                 </motion.p>
//               </div>
//             </h2>
//             <h2 className="relative text-transparent text-[9.1rem] translate-y-1/2 ">
//               %
//               <span className="absolute left-0 bottom-[30%]  pb-5 md:pb-10  translate-y-1/2 font-serif text-6xl sm:text-8xl md:text-[110px] lg:text-[130px] text-transparent bg-clip-text bg-gradient-to-b from-[#A78952] to-[#DFC383] invisible">
//                 %
//               </span>
//             </h2>
//           </motion.div>
//         </div>

//         <div className="absolute top-[200vh] pt-[200px]  md:pt:[140px] lg:pt-[200px] w-full ">
//           <div className="flex flex-col text-sm md:text-base lg:text-lg items-center justify-center">
//             <div className="card">
//               <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-[#A78952] to-[#DFC383] font-fragmentSerif text-[7rem] lg:text-[9.37rem] leading-[1]">
//                 &#60;48H
//               </h2>
//               <p className="text-[1.875rem] leading-[2.37rem] mt-[1.62rem]">
//                 Respuesta en menos de 48 h. <br />
//                 ¡Tu tiempo importa!
//               </p>
//             </div>
//             <div className="card mt-[8.125rem]">
//               <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-[#A78952] to-[#DFC383] font-fragmentSerif text-[7rem] lg:text-[9.37rem] leading-[1]">
//                 +15
//               </h2>
//               <p className="text-[1.875rem] leading-[2.37rem] mt-[1.62rem]">
//                 15 años de experiencia en <br />
//                 fiscalidad internacional y <br />
//                 estrategia.
//               </p>
//             </div>
//             <div className="card mt-[8.125rem]">
//               <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-[#A78952] to-[#DFC383] font-fragmentSerif text-[7rem] lg:text-[9.37rem] leading-[1]">
//                 +120{" "}
//               </h2>
//               <p className="text-[1.875rem] leading-[2.37rem] mt-[1.62rem]">
//               traslados de residencia <br />gestionados con éxito.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ScaleAnimation;
