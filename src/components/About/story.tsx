'use client'
import Image from 'next/image'
import Link from 'next/link'

const testimonials = [
  {
    name: 'Ryan Blake',
    role: 'GIS Intern',
    text: 'Mapped my first project confidently after finishing this bootcamp',
    avatar: '/profile 1.jpg',
  },
  {
    name: 'Javed Anwar',
    role: 'GIS Specialist',
    text: 'Lessons were practical, instructors were helpful, and learning was smooth',
    avatar: '/profile 2.jpg',
  },
  {
    name: 'Daniel Brooks',
    role: 'OSP Engineer',
    text: 'Gained complete understanding of splicing and fiber layout in weeks',
    avatar: '/profile 3.jpg',
  },
]

export default function AboutStory() {
  return (
    <section className="w-full bg-[#faf7f3] py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-black">Success Stories That Speak for Themselves</h2>
          <p className="mt-4 text-base md:text-lg text-gray-700 max-w-md">
            See how Skarion has transformed careers, one student at a time across industries, backgrounds, and borders
          </p>
          <Link href="#" className="mt-8 inline-block text-sm font-medium text-gray-600">Explore our success stories</Link>
        </div>

        <div className="space-y-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl bg-white border border-[#dbe6ff] shadow-sm p-5 flex items-center gap-4">
              <div className="shrink-0">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <p className="text-lg md:text-xl font-semibold text-black">{t.name}</p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#5b7dfc] text-white text-xs md:text-sm">{t.role}</span>
                </div>
                <p className="mt-2 text-sm md:text-base text-gray-700">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

