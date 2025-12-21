"use client";
import Link from "next/link";

export default function DiscountCard() {
  return (
    <div className="relative w-full h-full rounded-xl bg-[#0b0b0b] text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(120deg, rgba(8, 8, 8, 0.8) 0px, rgba(255, 255, 255, 0.5) 30px, transparent 35px, transparent 60px)",
        }}
      />
      <div className="flex items-center justify-between gap-4 ">
        <div className="flex-1 min-w-0 px-4 py-2 ">
          <p className="block text-[64px] font-[600] tracking-wide whitespace-nowrap leading-none">BLACK FRIDAY</p>
          <p className="flex-wrap mt-1 text-[12px] text-white/70 w-[240px] hidden sm:block px-1">
            Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <Link
            href="#"
            className="mt-2 inline-flex items-center justify-center rounded bg-white px-4 py-2 text-xs font-bold text-black hover:bg-white/90"
          >
            LEARN MORE
          </Link>
        </div>
        <div className="relative h-full  overflow-visible">
          <div className="absolute right-[-22px] bottom-1/2 translate-y-1/2 w-[100px] h-[100px] rounded-full bg-[#d93636] z-0" />
          <div
            className="relative z-10 text-white px-6 py-5 min-h-[100px] flex items-center gap-4"
            style={{
              backgroundColor: "#d93636",
              clipPath:
                "polygon(0 0, calc(100% - 44px) 0, 100% 50%, calc(100% - 44px) 100%, 0 100%)",
              borderTopLeftRadius: "999px",
              borderBottomLeftRadius: "999px",
            }}
          >
            <div className="flex items-end gap-1">
              <span className="text-black text-4xl font-extrabold leading-none">30</span>
              <span className="text-black text-xl font-extrabold leading-none">%</span>
              <span className="text-black text-sm font-bold leading-none ml-1">OFF</span>
            </div>
            <div className="border-l border-white/40 pl-3">
              <span className="block text-xs font-extrabold uppercase tracking-wider">Special</span>
              <span className="block text-xs font-extrabold uppercase tracking-wider">Offers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
