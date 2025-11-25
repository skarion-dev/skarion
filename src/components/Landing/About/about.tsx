import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="w-full bg-[#ffffff] py-10 px-12">
      <div className="flex flex-row items-start justify-between space-x-8 pt-12">
        <div className="flex flex-col gap-6 w-[50%]">
          <div className="text-[#000000] text-[64px] w-[80%] leading-[1.3] text-left">
            Collaborate to Build The Innovative Tech Ecosystem
          </div>
          <div className="text-[#787777] text-[18px] w-[80%] font-[500] pt-4 text-left">
            Skarion helps individuals gain the skills and experience needed to secure high-demand jobs through specialized, hands-on training.
          </div>

          <div className="group mt-6 flex items-center gap-4 rounded-2xl bg-slate-100 px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-18 w-12 items-center justify-center rounded-full bg-[#122461] text-white shadow-md transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 3 24 24" className="h-8 w-8" aria-hidden="true">
                <path d="M9 17.5c4.5 0 8.5-3.2 8.5-5.5S13.5 6.5 9 6.5 0.5 9.7 0.5 12 4.5 17.5 9 17.5Z" fill="currentColor" transform="translate(3 3)" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Fund With Expert Strategies</h3>
              <p className="text-sm text-gray-500">Lorem ipsum is simply dummy text.</p>
            </div>
          </div>

          <div className="group mt-4 flex items-center gap-4 rounded-2xl bg-slate-100 px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-18 w-12 items-center justify-center rounded-full bg-[#ff686b] text-white shadow-md transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true">
                <path d="M10 8v8l6-4z" fill="currentColor" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Focusing On Revenue</h3>
              <p className="text-sm text-gray-500">Lorem ipsum is simply dummy text.</p>
            </div>
          </div>
        </div>
         <div className="relative h-[725px] w-full lg:w-[800px] overflow-hidden rounded-3xl bg-slate-200 shadow-xl transition-transform duration-500 hover:-translate-y-1 hover:shadow-2xl">
              <Image
                src="/team_image.jpg" 
                alt="Team of professionals"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 600px, 100vw" // Adjust for wider screens
              />
            </div>

        <div className="flex flex-col h-full justify-between gap-6 w-[35%]">
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold text-gray-900">
              Collaboration is the Key
              <br />
              of Success
            </h3>
            <p className="text-m text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo.</p>

            <Link href="/about" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#122461] px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#0d1b4b] hover:shadow-lg hover:-translate-y-0.5">
              More About Us
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="relative mt-4 h-[490px] w-full overflow-hidden rounded-3xl bg-slate-200 shadow-lg transition-transform duration-500 hover:-translate-y-1 hover:shadow-2xl">
            <Image src="/team.jpg" alt="Colleagues working together" fill className="object-cover" sizes="(min-width: 1024px) 400px, 100vw" />
          </div>
        </div>
      </div>
    </div>
  );
}
