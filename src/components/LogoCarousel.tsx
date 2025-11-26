// 'use client'

// import { animate, motion, useMotionValue } from "framer-motion";
// import Image from "next/image";
// import { useEffect } from "react";
// import useMeasure from "react-use/lib/useMeasure";

// const logos = [
//     "/skarion.png",
//     "/skarion.png",
//     "/skarion.png",
//     "/skarion.png",
//     "/skarion.png",
//     "/skarion.png",
// ];

// export default function LogoCarousel() {
//   let [ref, { width }]: any = useMeasure();
//   const xTranslation = useMotionValue(0);

//   useEffect(() => {
//     let controls;
//     let finalPosition = -width + 8;

//     controls = animate(xTranslation, [0, finalPosition], {
//       duration: 10,
//       ease: "linear",
//       repeat: Infinity,
//       repeatType: "loop",
//       repeatDelay: 0.0,

//     });

//     return () => controls.stop();
//   }, [xTranslation, width]);

//   return (
//     <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-white before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-l after:from-white after:to-transparetent-['']">
//         <motion.div
//             className="flex gap-8 width-max-c[...logos, ...onten]t"
//             ref={ref}
//             style={{ x: xTranslation }}
//         >
//             {[...logos, ...logos].map((item, idx) => (
//                 <Image key={idx} src={item} alt={`go-${idx}`} width={60} height={60} />
//             ))}
//             {[...logos, ...logos].map((item, idx) => (
//                 <Image key={idx} src={item} alt={`go-${idx}`} width={60} height={60} />
//             ))}
//         </motion.div>
//     </div>
//   );
// }
