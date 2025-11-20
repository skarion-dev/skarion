// src/components/Landing/About/about.tsx

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
      <div className="w-full bg-[#ffffff] py-20 px-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-2">
          <div className="grid grid-cols-1 items-center gap-10 lg:gap-15 lg:[grid-template-columns:2fr_1.4fr_1fr]">
            {/* LEFT COLUMN --------------------------------------------------- */}
            <div className="">
              <h2 className="text-4xl leading-tight font-bold text-gray-900 lg:text-5xl mb-4">
                Collaborate to
                <br />
                Build 
                <br />
                The Innovative Tech Ecosystem
              </h2>

              <p className="text-gray-500 text-base lg:text-lg max-w-xl mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </p>

              <div className="mt-3 space-y-6 lg:w-[500px]">
                {/* Card 1 */}
                <div className="group flex items-center gap-4 rounded-2xl bg-slate-100 px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-18 w-12 items-center justify-center rounded-full bg-[#122461] text-white shadow-md transition-transform duration-300 group-hover:scale-105">
                    {/* simple icon */}
                    <svg
                      viewBox="0 3 24 24"
                      className="h-8 w-8"
                      aria-hidden="true"
                    >
                      <path
                        d="M9 17.5c4.5 0 8.5-3.2 8.5-5.5S13.5 6.5 9 6.5 0.5 9.7 0.5 12 4.5 17.5 9 17.5Z"
                        fill="currentColor"
                        transform="translate(3 3)"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      Fund With Expert Strategies
                    </h3>
                    <p className="text-sm text-gray-500">
                      Lorem ipsum is simply dummy text.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group flex items-center gap-4 rounded-2xl bg-slate-100 px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-18 w-12 items-center justify-center rounded-full bg-[#ff686b] text-white shadow-md transition-transform duration-300 group-hover:scale-105">
                    {/* simple icon */}
                    <svg
                      viewBox="0 0 24 24"
                      className="h-10 w-10"
                      aria-hidden="true"
                    >
                      <path
                        d="M10 8v8l6-4z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      Focusing On Revenue
                    </h3>
                    <p className="text-sm text-gray-500">
                      Lorem ipsum is simply dummy text.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MIDDLE COLUMN – MAIN IMAGE ------------------------------------ */}
            <div className="relative h-[660px] w-full lg:w-[500px] overflow-hidden rounded-3xl bg-slate-200 shadow-xl transition-transform duration-500 hover:-translate-y-1 hover:shadow-2xl">
              <Image
                src="/team_image.jpg" 
                alt="Team of professionals"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 600px, 100vw" // Adjust for wider screens
              />
            </div>

            {/* RIGHT COLUMN -------------------------------------------------- */}
            <div className="flex flex-col h-full justify-between gap-6 lg:w-[200px]">
              <div className="space-y-4 lg:w-[280px]">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Collaboration is the Key
                  <br />
                  of Success
                </h3>
                <p className="text-m text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                  commodo.
                </p>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#122461] px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#0d1b4b] hover:shadow-lg hover:-translate-y-0.5"
                >
                  More About Us
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="relative mt-4 h-[400px] w-full lg:w-[250px] overflow-hidden rounded-3xl bg-slate-200 shadow-lg transition-transform duration-500 hover:-translate-y-1 hover:shadow-2xl">
                <Image
                  src="/team.jpg" 
                  alt="Colleagues working together"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 400px, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
