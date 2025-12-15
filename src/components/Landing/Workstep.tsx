'use client'
import Image from 'next/image';
import { useTransform, useScroll, motion } from 'framer-motion';
import { useRef } from 'react';

export const projects = [
  {
    title: "Job‑Ready OSP Skills",
    description: "Learn fiber networks, AutoCAD layouts, and real telecom workflows so you can contribute from day one.",
    src: "/step3.jpg",
    link: "/course/outside-plant-engineering",
    color: "#1a5244ff"
  },
  {
    title: "Career Acceleration",
    description: "Resume grooming, LinkedIn optimization, mock interviews, and placement support focused on telecom roles.",
    src: "/step4.jpg",
    link: "/course/outside-plant-engineering",
    color: "#1a8a92ff"
  },
  {
    title: "Pay After Placement",
    description: "Train now and defer most of your fee until you land a role through Skarion.",
    src: "/step5.jpg",
    link: "/course/outside-plant-engineering",
    color: "#c9af6aff"
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
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <div
        className="flex flex-col relative h-[600px] w-[1100px] rounded-xl p-12 opacity-100"
        style={{ backgroundColor: color, transform: `translateY(calc(-5vh + ${i * 25}px))` }}
      >
        <h2 className="text-center text-[48px] font-semibold text-black">{title}</h2>
        <div className="flex h-full mt-12 gap-12">
          <div className="w-2/5 relative top-10">
            <p className="text-[24px] text-black first-letter:text-4xl first-letter:font-title">{description}</p>
            <span className="flex items-center gap-2 mt-5">
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm underline cursor-pointer text-black ">
                See more
              </a>
              <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black" />
              </svg>
            </span>
          </div>

          <div className="relative w-3/5 h-full rounded-xl overflow-hidden">
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
