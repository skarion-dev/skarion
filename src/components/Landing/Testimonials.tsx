"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useScrollContainer } from "../Common/ScrollContainerContext";

interface ITestimonial {
  name: string;
  company: string;
  text: string;
  avatar: string;
  position: string;
}

const testimonials: ITestimonial[] = [
  {
    name: "Lauren Layre",
    company: "Nasa",
    text: "I stayed consistent with small goals even when progress felt slow, and I made a point to learn from every setback instead of stopping. Over time, that steady focus helped me understand what worked and what didn’t. That persistence eventually turned into real success.",
    avatar: "/skarion.png",
    position: "OSP Engineer"
  },
  {
    name: "Tanvi Rakshe",
    company: "Tesla",
    text: "I treated every challenge as a chance to improve, asked for feedback and kept learning whenever I hit a wall. Adjusting quickly became a habit, and it helped me grow faster than I expected. With that mindset, I reached the level I always aimed for.",
    avatar: "/profile logo.jpeg",
    position: "OSP Expert"
  },
  {
    name: "Bobby Shaw",
    company: "Facebook",
    text: "I stayed consistent with small goals even when progress felt slow, and I made a point to learn from every setback instead of stopping. Over time, that steady focus helped me understand what worked and what didn’t. That persistence eventually turned into real success.",
    avatar: "/skarion.png",
    position: "Tesla Owner"
  },
  {
    name: "Arnold Wei",
    company: "Twitter",
    text: "I treated every challenge as a chance to improve, asked for feedback and kept learning whenever I hit a wall. Adjusting quickly became a habit, and it helped me grow faster than I expected. With that mindset, I reached the level I always aimed for.",
    avatar: "/profile logo.jpeg",
    position: "AutoCad Specialist"
  },
  {
    name: "Hadria",
    company: "Starlink",
    text: "I stayed consistent with small goals even when progress felt slow, and I made a point to learn from every setback instead of stopping. Over time, that steady focus helped me understand what worked and what didn’t. That persistence eventually turned into real success.",
    avatar: "/skarion.png",
    position: "Blueprint Architect"
  },
  {
    name: "Neer Chaudhury",
    company: "Amazon",
    text: "I treated every challenge as a chance to improve, asked for feedback and kept learning whenever I hit a wall. Adjusting quickly became a habit, and it helped me grow faster than I expected. With that mindset, I reached the level I always aimed for.",
    avatar: "/profile logo.jpeg",
    position: "OSP Engineer"
  },
  {
    name: "Mariam Gagnidze",
    company: "Mercedes",
    text: "I stayed consistent with small goals even when progress felt slow, and I made a point to learn from every setback instead of stopping. Over time, that steady focus helped me understand what worked and what didn’t. That persistence eventually turned into real success.",
    avatar: "/skarion.png",
    position: "OSP Engineer"
  },
  {
    name: "Esther Plaatsman",
    company: "SpaceX",
    text: "I treated every challenge as a chance to improve, asked for feedback and kept learning whenever I hit a wall. Adjusting quickly became a habit, and it helped me grow faster than I expected. With that mindset, I reached the level I always aimed for.",
    avatar: "/profile logo.jpeg",
    position: "OSP Engineer"
  },
  {
    name: "Steffan Morris Hernandez",
    company: "Huddai",
    text: "I stayed consistent with small goals even when progress felt slow, and I made a point to learn from every setback instead of stopping. Over time, that steady focus helped me understand what worked and what didn’t. That persistence eventually turned into real success.",
    avatar: "/skarion.png",
    position: "OSP Engineer"
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
  const y4 = useTransform(scrollYProgress, [0, 1], [-500, 300]);

  return (
    <div className="w-full bg-[#ffffff] py-10 px-6 md:px-12 min-h-screen overflow-hidden">
      <div ref={container} className="flex gap-6 overflow-hidden justify-center">
        <Column
          testimonials={[testimonials[0], testimonials[3], testimonials[1], testimonials[4], testimonials[2], testimonials[5], testimonials[0], testimonials[3]]}
          y={y1}
          className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
        />
        <Column
          testimonials={[testimonials[1], testimonials[4], testimonials[2], testimonials[5], testimonials[0], testimonials[3], testimonials[1], testimonials[4]]}
          y={y3}
          className="hidden sm:flex sm:w-1/2 lg:w-1/3 xl:w-1/4"
        />
        <Column
          testimonials={[testimonials[2], testimonials[5], testimonials[0], testimonials[3], testimonials[1], testimonials[4], testimonials[2], testimonials[5]]}
          y={y2}
          className="hidden lg:flex lg:w-1/3 xl:w-1/4"
        />
        <Column
          testimonials={[testimonials[2], testimonials[5], testimonials[0], testimonials[3], testimonials[1], testimonials[4], testimonials[2], testimonials[5]]}
          y={y4}
          className="hidden xl:flex xl:w-1/4"
        />
      </div>
    </div>
  );
}

const Column = ({ testimonials, y, className = "" }: { testimonials: ITestimonial[]; y: MotionValue<number>; className?: string }) => {
  return (
    <motion.div
      style={{ y }}
      className={`flex flex-col ${className}`}
    >
      {testimonials.map((item, i) => {
        return (
          <div key={i} className="mb-6 border border-gray-500 rounded-xl p-5 flex flex-col bg-[#001440] opacity-90 overflow-hidden">
            <div className="flex items-start">
              <p className="text-[20px] font-bold text-[#ff686b]">{item.company}</p>
            </div>
            <p className="mt-2 text-[16px] text-[#a8a9ad] font-[400]">{item.text}</p>
            <div className="mt-4 flex items-center gap-3">
              <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full" />
              <p className="text-[18px] text-[#c3ddf5] font-bold">
                {item.name}
                <br/>
                <p className="text-[14px] text-[#ffffff] font-[300]">{item.position}</p>
              </p>
            </div>
            
          </div>
        );
      })}
    </motion.div>
  );
};
