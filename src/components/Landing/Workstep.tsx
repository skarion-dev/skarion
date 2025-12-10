"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Timeline() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll(".timeline-item")) as HTMLElement[];
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
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="relative max-w-6xl mx-auto my-24">
      <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gray-300" />
      <div className="timeline-item left-container flex items-center space-x-8 p-4 relative w-1/2 transition-all duration-700 ease-out opacity-0 translate-y-6">
        <Image
          src="/adb.png"
          alt="Event Image"
          width={40}
          height={40}
          className="rounded-full absolute right-[-20px] top-8 z-10"
        />
        <div className="text-box bg-black bg-opacity-80 p-5 rounded-lg shadow-lg">
          <h2 className="font-semibold text-lg text-white">Skarion Bootcamp Launch</h2>
          <small className="block text-sm text-white opacity-80 mb-4">January 1, 2023</small>
          <p className="text-white opacity-90">
            Skarion successfully launched its first bootcamp, offering comprehensive training in OSP fiber optics and AutoCAD, aimed at helping underserved communities gain new skills and career opportunities.
          </p>
          <span className="left-container-arrow absolute top-5 right-[-25px] w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-black rotate-[180deg]"></span>
        </div>
      </div>

      <div className="timeline-item right-container flex items-center space-x-8 p-4 relative w-1/2 transition-all duration-700 ease-out opacity-0 translate-y-6 ml-auto">
        <Image
          src="/american-products.png"
          alt="Event Image"
          width={40}
          height={40}
          className="rounded-full absolute left-[-20px] top-8 z-10"
        />
        <div className="text-box bg-black bg-opacity-80 p-5 rounded-lg shadow-lg">
          <h2 className="font-semibold text-lg text-white">Partnership with American Products</h2>
          <small className="block text-sm text-white opacity-80 mb-4">February 15, 2023</small>
          <p className="text-white opacity-90">
            Skarion entered a strategic partnership with American Products to provide real-world training equipment for our students, enhancing their learning experience.
          </p>
          <span className="right-container-arrow absolute top-5 left-[-15px] w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-black rotate-[180deg]"></span>
        </div>
      </div>

      <div className="timeline-item left-container flex items-center space-x-8 p-4 relative w-1/2 transition-all duration-700 ease-out opacity-0 translate-y-6">
        <Image
          src="/aspire.png"
          alt="Event Image"
          width={40}
          height={40}
          className="rounded-full absolute right-[-20px] top-8 z-10"
        />
        <div className="text-box bg-black bg-opacity-80 p-5 rounded-lg shadow-lg">
          <h2 className="font-semibold text-lg text-white">Skarion OSP Program Certification</h2>
          <small className="block text-sm text-white opacity-80 mb-4">March 10, 2023</small>
          <p className="text-white opacity-90">
            Graduates from Skarion's OSP program received their industry-recognized certification, which boosted their employability in the rapidly growing fiber optics sector.
          </p>
          <span className="left-container-arrow absolute top-5 right-[-15px] w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-black rotate-[180deg]"></span>
        </div>
      </div>

      <div className="timeline-item right-container flex items-center space-x-8 p-4 relative w-1/2 transition-all duration-700 ease-out opacity-0 translate-y-6 ml-auto">
        <Image
          src="/benton.png"
          alt="Event Image"
          width={40}
          height={40}
          className="rounded-full absolute left-[-20px] top-8 z-10"
        />
        <div className="text-box bg-black bg-opacity-80 p-5 rounded-lg shadow-lg">
          <h2 className="font-semibold text-lg text-white">International Expansion in Bangladesh</h2>
          <small className="block text-sm text-white opacity-80 mb-4">May 5, 2023</small>
          <p className="text-white opacity-90">
            Skarion expanded its bootcamp program to Bangladesh, aiming to bridge the skills gap in the telecom sector and provide career opportunities for underrepresented populations.
          </p>
          <span className="right-container-arrow absolute top-5 left-[-15px] w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-black rotate-[180deg]"></span>
        </div>
      </div>

      <div className="timeline-item left-container flex items-center space-x-8 p-4 relative w-1/2 transition-all duration-700 ease-out opacity-0 translate-y-6">
        <Image
          src="/charles.png"
          alt="Event Image"
          width={40}
          height={40}
          className="rounded-full absolute right-[-20px] top-8 z-10"
        />
        <div className="text-box bg-black bg-opacity-80 p-5 rounded-lg shadow-lg">
          <h2 className="font-semibold text-lg text-white">Skarion’s Job Placement Program</h2>
          <small className="block text-sm text-white opacity-80 mb-4">July 1, 2023</small>
          <p className="text-white opacity-90">
            Skarion’s job placement program successfully placed 80% of its graduates in telecom and engineering roles, with strong industry partnerships ensuring high-quality placements.
          </p>
          <span className="left-container-arrow absolute top-5 right-[-15px] w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-black rotate-[180deg]"></span>
        </div>
      </div>
    </div>
  );
}
