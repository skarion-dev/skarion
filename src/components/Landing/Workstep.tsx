'use client'
import Image from 'next/image';
import { useTransform, useScroll, motion } from 'framer-motion';
import { useRef } from 'react';

export const projects = [
  {
    title: "Step 1 — Consultation",
    description: "Begin with a personalized assessment to understand your background, goals, and the best path into OSP engineering.",
    src: "/step1.jpg",
    link: "/course/outside-plant-engineering",
    color: "#1a5244ff"
  },
  {
    title: "Step 2 — Enroll & Learn",
    description: "Join an industry-aligned bootcamp with live classes, structured modules, and real telecom workflows.",
    src: "/step2.jpg",
    link: "/course/outside-plant-engineering",
    color: "#3372a5ff"
  },
  {
    title: "Step 3 — Build Experience",
    description: "Develop a project portfolio through simulated OSP design projects, AutoCAD tasks, and real-world scenarios.",
    src: "/step3.jpg",
    link: "/course/outside-plant-engineering",
    color: "#c9af6aff"
  },
  {
    title: "Step 4 — Career Support",
    description: "Get resume grooming, LinkedIn optimization, mock interviews, and job search guidance tailored to telecom roles.",
    src: "/step4.jpg",
    link: "/course/outside-plant-engineering",
    color: "#c96a6aff"
  },
  {
    title: "Step 5 — Get Hired & Pay Later",
    description: "Secure a job through Skarion’s placement support and pay the bulk of your program fee only after you’re hired.",
    src: "/step5.jpg",
    link: "/course/outside-plant-engineering",
    color: "#bdbdbdff"
  }
]

interface CardProps {
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  i: number;
}

const Card = ({ title, description, src, url, color, i }: CardProps) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    axis: 'x',
    offset: ['start end', 'start start']
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky sm:top-10 top-20 sm:px-12 px-6 my-10">
      <div
        className="flex flex-col relative h-[600px] w-[1100px] rounded-xl p-12 opacity-100"
        style={{ backgroundColor: color, transform: `translateY(calc(-5vh + ${i * 25}px))` }}
      >
        <h2 className="text-center text-[36px] sm:text-[48px] font-semibold text-black">{title}</h2>
        <div className="flex flex-col lg:flex-row h-full mt-6 sm:mt-8 md:mt-10 lg:mt-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          <div className="w-full lg:w-2/5 relative lg:top-10">
            <p className="text-[18px] sm:text-[24px] text-black first-letter:text-4xl first-letter:font-title">{description}</p>
            <span className="flex items-center gap-2 mt-5">
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm underline cursor-pointer text-black ">
                See more
              </a>
              <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black" />
              </svg>
            </span>
          </div>

          <div className="relative w-full lg:w-3/5 h-full  rounded-xl overflow-hidden">
            <motion.div
              className="w-full h-full"
              style={{ scale: imageScale }}
            >
              <Image
                fill
                src={`${src}`}
                alt={title}
                className="object-cover"
                sizes="(max-width: 1000px) 100vw, 600px"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Timeline() {
  return (
    <div className="relative ">
      {projects.map((p, i) => (
        <Card
          key={p.title}
          title={p.title}
          description={p.description}
          src={p.src}
          url={p.link}
          color={p.color}
          i={i}
        />
      ))}
    </div>
  );
}