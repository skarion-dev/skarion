"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useScrollContainer } from "../Common/ScrollContainerContext";

interface ITestimonial {
  name: string;
  text: string;
  avatar: string;
}

const testimonials: ITestimonial[] = [
  {
    name: "Lauren Layre",
    text: "I've loved digging into advanced prototyping, micro-interactions...",
    avatar: "/skarion.png",
  },
  {
    name: "Tanvi Rakshe",
    text: "Experience with Memorisely has been wonderful and engaging...",
    avatar: "/skarion.png",
  },
  {
    name: "Bobby Shaw",
    text: "I've loved digging into advanced prototyping, micro-interactions...",
    avatar: "/skarion.png",
  },
  {
    name: "Arnold Wei",
    text: "Memorisely’s UX/UI bootcamp gave me the tools to feel confident...",
    avatar: "/skarion.png",
  },
  {
    name: "Hadria",
    text: "It was very nice to be in a learning space with people from all over...",
    avatar: "/skarion.png",
  },
  {
    name: "Neer Chaudhury",
    text: "I've loved digging into advanced prototyping, micro-interactions...",
    avatar: "/skarion.png",
  },
  {
    name: "Mariam Gagnidze",
    text: "The Bootcamp mirrors real-life work scenarios with diverse teachers...",
    avatar: "/skarion.png",
  },
  {
    name: "Esther Plaatsman",
    text: "I've loved digging into advanced prototyping, micro-interactions...",
    avatar: "/skarion.png",
  },
  {
    name: "Steffan Morris Hernandez",
    text: "I've loved digging into advanced prototyping, micro-interactions...",
    avatar: "/skarion.png",
  },
];

export default function Testimonials() {
  const container = useRef(null);
  const scrollContainerRef = useScrollContainer();

  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-500, 700]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-1000, 900]);

  return (
    <div className="w-full bg-[#ffffff] py-10 px-12 h-[100vh] overflow-hidden">
      <div ref={container} className="flex gap-6 overflow-hidden">
        <Column
          testimonials={[
            testimonials[0],
            testimonials[1],
            testimonials[2],
            testimonials[3],
            testimonials[4],
            testimonials[5],
            testimonials[0],
            testimonials[1],
            testimonials[2],
          ]}
          y={y1}
          className="w-full sm:w-1/2 lg:w-1/3 "
        />
        <Column
          testimonials={[
            testimonials[0],
            testimonials[1],
            testimonials[2],
            testimonials[3],
            testimonials[4],
            testimonials[5],
            testimonials[0],
            testimonials[1],
            testimonials[2],
          ]}
          y={y3}
          className="hidden sm:flex sm:w-1/2 lg:w-1/3 "
        />
        <Column
          testimonials={[
            testimonials[0],
            testimonials[1],
            testimonials[2],
            testimonials[3],
            testimonials[4],
            testimonials[5],
            testimonials[0],
            testimonials[1],
            testimonials[2],
          ]}
          y={y2}
          className="hidden lg:flex lg:w-1/3 "
        />
      </div>
    </div>
  );
}

const Column = ({
  testimonials,
  y,
  className = "",
}: {
  testimonials: ITestimonial[];
  y: MotionValue<number>;
  className?: string;
}) => {
  return (
    <motion.div style={{ y }} className={`flex flex-col ${className}`}>
      {testimonials.map((item, i) => {
        return (
          <div
            key={i}
            className={`break-inside-avoid mb-6 border border-gray-300 rounded-xl p-5 flex flex-col will-change-transform transform-gpu`}
          >
            <p className="text-[16px] font-[400]">{item.text}</p>
          </div>
        );
      })}
    </motion.div>
  );
};
