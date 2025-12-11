"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Timeline() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll(".timeline-item")) as HTMLElement[];
    const line = root.querySelector(".timeline-line__progress") as HTMLElement;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("opacity-100", "translate-y-0");
            el.classList.remove("opacity-0", "translate-y-6");
          }
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((el) => observer.observe(el));

    // Animate the line as items come into view
    const lineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = items.indexOf(entry.target as HTMLElement);
            const progress = ((idx + 1) / items.length) * 100;
            line.style.height = `${progress}%`;
            line.style.transition = "height 0.7s ease-out";
          }
        });
      },
      { threshold: 0.5 }
    );
    items.forEach((el) => lineObserver.observe(el));

    return () => {
      observer.disconnect();
      lineObserver.disconnect();
    };
  }, []);

  return (
    <div ref={rootRef} className="relative max-w-6xl mx-auto my-24">
      {/* Vertical line with animated progress */}
      <div className="timeline-line absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform -translate-x-1/2">
        <div className="timeline-line__progress w-full bg-indigo-600 h-0" />
      </div>

      <div className="timeline-item left-container flex items-center space-x-8 p-4 relative w-1/2 transition-all duration-700 ease-out opacity-0 translate-y-6">
        <div className="text-box bg-indigo-500 bg-opacity-80 p-5 rounded-lg shadow-lg">
          <h2 className="font-bold text-lg text-black">Skarion Bootcamp Launch</h2>
          <small className="block text-sm text-black opacity-80 mb-4">January 1, 2023</small>
          <p className="text-black opacity-90">
            Skarion successfully launched its first bootcamp, offering comprehensive training in OSP fiber optics and AutoCAD, aimed at helping underserved communities gain new skills and career opportunities.
          </p>
          <span className="left-container-arrow absolute top-5 right-[-25px] w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-black rotate-[180deg]"></span>
        </div>
      </div>

      <div className="timeline-item right-container flex items-center space-x-8 p-4 relative w-1/2 transition-all duration-700 ease-out opacity-0 translate-y-6 ml-auto">
        <div className="text-box bg-[#ff686b] bg-opacity-80 p-5 rounded-lg shadow-lg">
          <h2 className="font-semibold text-lg text-black">Partnership with American Products</h2>
          <small className="block text-sm text-black opacity-80 mb-4">February 15, 2023</small>
          <p className="text-black opacity-90">
            Skarion entered a strategic partnership with American Products to provide real-world training equipment for our students, enhancing their learning experience.
          </p>
          <span className="right-container-arrow absolute top-5 left-[-15px] w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-black rotate-[180deg]"></span>
        </div>
      </div>

      <div className="timeline-item left-container flex items-center space-x-8 p-4 relative w-1/2 transition-all duration-700 ease-out opacity-0 translate-y-6">
        <div className="text-box bg-indigo-500 bg-opacity-80 p-5 rounded-lg shadow-lg">
          <h2 className="font-semibold text-lg text-black">Skarion OSP Program Certification</h2>
          <small className="block text-sm text-black opacity-80 mb-4">March 10, 2023</small>
          <p className="text-black opacity-90">
            Graduates from Skarion's OSP program received their industry-recognized certification, which boosted their employability in the rapidly growing fiber optics sector.
          </p>
          <span className="left-container-arrow absolute top-5 right-[-15px] w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-black rotate-[180deg]"></span>
        </div>
      </div>

      <div className="timeline-item right-container flex items-center space-x-8 p-4 relative w-1/2 transition-all duration-700 ease-out opacity-0 translate-y-6 ml-auto">
        <div className="text-box bg-[#ff686b] bg-opacity-80 p-5 rounded-lg shadow-lg">
          <h2 className="font-semibold text-lg text-black">International Expansion in Bangladesh</h2>
          <small className="block text-sm text-black opacity-80 mb-4">May 5, 2023</small>
          <p className="text-black opacity-90">
            Skarion expanded its bootcamp program to Bangladesh, aiming to bridge the skills gap in the telecom sector and provide career opportunities for underrepresented populations.
          </p>
          <span className="right-container-arrow absolute top-5 left-[-15px] w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-black rotate-[180deg]"></span>
        </div>
      </div>

      <div className="timeline-item left-container flex items-center space-x-8 p-4 relative w-1/2 transition-all duration-700 ease-out opacity-0 translate-y-6">
        <div className="text-box bg-indigo-500 bg-opacity-50 p-5 rounded-lg shadow-lg">
          <h2 className="font-semibold text-lg text-black">Skarion’s Job Placement Program</h2>
          <small className="block text-sm text-black opacity-80 mb-4">July 1, 2023</small>
          <p className="text-black opacity-90">
            Skarion’s job placement program successfully placed 80% of its graduates in telecom and engineering roles, with strong industry partnerships ensuring high-quality placements.
          </p>
          <span className="left-container-arrow absolute top-5 right-[-15px] w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-black rotate-[180deg]"></span>
        </div>
      </div>
    </div>
  );
}
