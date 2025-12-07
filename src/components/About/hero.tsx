import Link from 'next/link'
import LogoCarousel from "../LogoCarousel"

const logos = [
    "/benton.png",
    "/circet.png",
    "/gme.png",
    "/radd.png",
    "/westell.png",
]

export default function AboutHero() {
  return (
    <div className="w-full bg-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border p-6 bg-[#faf7f3]">
            <span className="inline-block bg-black text-white text-xs md:text-sm rounded-full px-3 py-1">About Us</span>
            <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-black">Who Are We</h1>
            <p className="mt-3 text-base text-gray-700">
              At Skarion, we’re redefining career success. Through expert-led bootcamps, one-on-one support, and a job placement model that only wins when you do, we bridge the gap between learning and earning. Whether you're just starting out or making a career switch, Skarion trains you in high-demand skills and places you where it counts without any degree or background barriers.
            </p>
          </div>
          <div className="rounded-2xl border p-6 bg-[#faf7f3]">
            <div className="flex items-start gap-4">
              <span className="text-5xl font-semibold text-black">3</span>
              <div>
                <h3 className="text-2xl font-semibold text-black">Programs</h3>
                <p className="mt-3 text-sm text-gray-700">
                  Skarion offers a growing catalog of industry-aligned programs including Fiber Optics, GIS, and AutoCAD. Each course is built with employer input and focused on skills that get you hired.
                </p>
                <Link href="#" className="mt-4 inline-block text-sm font-medium text-gray-700">See All Programs</Link>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border p-6 bg-[#faf7f3]">
            <div className="flex items-start gap-4">
              <span className="text-5xl font-semibold text-black">5</span>
              <div>
                <h3 className="text-2xl font-semibold text-black">Students</h3>
                <p className="mt-3 text-sm text-gray-700">
                  Over 5 students have trusted Skarion to launch their careers in telecom, GIS, and technical design. Our hands-on training and job-first model help learners build real skills and land real jobs.
                </p>
                <Link href="#" className="mt-4 inline-block text-sm font-medium text-gray-700">Read Success Stories</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-6 bg-[#faf7f3]">
            <span className="inline-block bg-black text-white text-xs md:text-sm rounded-full px-3 py-1">Our Vision</span>
            <h3 className="mt-3 text-3xl md:text-4xl font-semibold text-black">What Drives Us Forward</h3>
            <p className="mt-3 text-sm md:text-base text-gray-700">
              Our mission is to empower ambitious individuals with the skills, tools, and confidence to launch life changing careers. We deliver hands on, employer driven training and stay by your side until you get hired. At Skarion, success is not a promise, it is a shared outcome.
            </p>
          </div>
          <div className="rounded-2xl border p-6 bg-[#faf7f3]">
            <span className="inline-block bg-black text-white text-xs md:text-sm rounded-full px-3 py-1">Our Mission</span>
            <h3 className="mt-3 text-3xl md:text-4xl font-semibold text-black">The Future We Are Building</h3>
            <p className="mt-3 text-sm md:text-base text-gray-700">
              We envision a world where career growth is not limited by degrees, location, or past experience. Skarion is creating a launchpad for global talent starting with telecom, GIS, and design where learners transition into high growth industries with skills that matter and support that lasts.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-3 text-sm md:text-base text-gray-700 mt-20">
            <h2 className="text-3xl font-semibold text-black">Our Graduates are working with </h2>
        </div>
        <div className="flex justify-center mt-3 text-sm md:text-base text-gray-700 mt-10">
            <LogoCarousel logos={logos} />
        </div>

      </div>
    </div>
  )
}

