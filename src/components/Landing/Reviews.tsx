"use client";

import Image from "next/image";

const reviews = [
  {
    name: "Ahmed R.",
    role: "OSP Engineer",
    avatar: "/image 1.jpg",
    stars: 5,
    title: "Landed my first engineering role!",
    date: "Jan 2025",
    text: "Skarion helped me land my first full-time role in OSP engineering within 60 days. The coaching was hands-on and exactly what I needed.",
  },
  {
    name: "Priya M.",
    role: "Fiber Network Designer",
    avatar: "/profile 1.jpg",
    stars: 5,
    title: "Best career switch I've ever made",
    date: "Feb 2025",
    text: "I switched careers from civil engineering and got placed at a top telecom firm. The resume prep and mock interviews were a game changer.",
  },
  {
    name: "James K.",
    role: "OSP Designer",
    avatar: "/image 3.jpg",
    stars: 5,
    title: "They actually deliver on their promise",
    date: "Dec 2024",
    text: "I was skeptical at first, but Skarion delivered. The pay-after-hire model shows they believe in what they teach.",
  },
  {
    name: "Fatima S.",
    role: "Telecom Engineer",
    avatar: "/profile 2.jpg",
    stars: 5,
    title: "Full-time offer in 6 weeks",
    date: "Mar 2025",
    text: "From zero experience to a full-time offer in 6 weeks. The team was incredibly supportive throughout the entire process.",
  },
  {
    name: "Carlos N.",
    role: "Outside Plant Engineer",
    avatar: "/image 1.jpg",
    stars: 5,
    title: "Structured, practical, and effective",
    date: "Nov 2024",
    text: "The training was structured and practical. I felt fully prepared for interviews and the job itself from day one.",
  },
  {
    name: "Lily T.",
    role: "Network Engineer",
    avatar: "/profile 1.jpg",
    stars: 5,
    title: "Worth every penny",
    date: "Apr 2025",
    text: "Best investment in my career. The community and mentors kept me motivated even when things felt tough.",
  },
  {
    name: "Michael O.",
    role: "Field Engineer",
    avatar: "/image 3.jpg",
    stars: 5,
    title: "More than just a course",
    date: "Jan 2025",
    text: "Skarion's program is uniquely tailored to get you hired, not just educated. Huge difference. Highly recommended.",
  },
  {
    name: "Sarah L.",
    role: "OSP Analyst",
    avatar: "/profile 2.jpg",
    stars: 5,
    title: "Support that never stopped",
    date: "Feb 2025",
    text: "The support I received was unmatched. They stayed with me through every step until I got the job offer.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-[#f5b942]">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-sm">★</span>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[320px] h-[240px] bg-white border border-gray-200 rounded-2xl p-5 mx-3 flex flex-col justify-between">
      <div>
        <p className="text-md font-semibold text-gray-900 mb-2 line-clamp-1">{review.title}</p>
        <div className="flex items-center justify-between mb-2">
          <StarRating count={review.stars} />
          <span className="text-xs text-gray-400">{review.date}</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{review.text}</p>
      </div>
      <div className="flex items-center gap-3 mt-4">
        <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
          <Image src={review.avatar} alt={review.name} fill className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{review.name}</p>
          <p className="text-xs text-gray-400">{review.role}</p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const items = [...reviews, ...reviews];
  return (
    <div className="scroller overflow-hidden relative w-full py-2" style={{ transform: "translateZ(0)" }}>
      <div
        className={`flex ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ width: "max-content", backfaceVisibility: "hidden" }}
      >
        {items.map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <div className="w-full bg-[#ffffff] py-6 sm:px-12 px-6 max-w-[1440px] mx-auto overflow-hidden">
      <h1 className="text-[#000000] text-[40px] sm:text-[64px] leading-[1.2] text-left">
        Success Stories
      </h1>
      <div className="text-sm sm:text-base md:text-lg font-[300] pt-5 text-left w-full lg:w-[50%]">
        Discover how our guidance helps driven professionals overcome hiring obstacles and step confidently into the next chapter of their careers.
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5 mb-5 mt-8">
        <div className="flex -space-x-2">
          <Image src="/image 1.jpg" alt="student" width={28} height={28} className="rounded-full aspect-square object-cover border border-[#ffffff] sm:w-[35px] sm:h-[35px]" />
          <Image src="/profile 1.jpg" alt="student" width={28} height={28} className="rounded-full aspect-square object-cover border border-[#ffffff] sm:w-[35px] sm:h-[35px]" />
          <Image src="/image 3.jpg" alt="student" width={28} height={28} className="rounded-full aspect-square object-cover border border-[#ffffff] sm:w-[35px] sm:h-[35px]" />
          <Image src="/profile 2.jpg" alt="student" width={28} height={28} className="rounded-full aspect-square object-cover border border-[#ffffff] sm:w-[35px] sm:h-[35px]" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-[2px] text-[#f5b942]">
            <span className="text-base">★</span>
            <span className="text-base">★</span>
            <span className="text-base">★</span>
            <span className="text-base">★</span>
            <span className="text-base">★</span>
            <span className="ml-[8px] text-gray-500 text-[12px] font-[600]">4.8 (30+)</span>
          </div>
          <span className="text-[12px] font-[400]">Trusted by 70+ Professionals Worldwide</span>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </div>
  );
}