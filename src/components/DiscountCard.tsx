"use client";
import Link from "next/link";

export default function DiscountCard() {
  return (
    <div className="w-  max-w-full  mx-auto">
      <div className="rounded-[14px] h-full bg-gradient-to-r from-[#122461] to-black  text-white shadow-2xl">
        <div className="absolute left-[-18px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full bg-white" />
        <div className="absolute right-[-18px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full bg-black" />
        <div className="flex items-start justify-between px-6 py-5">
          <div className="flex flex-col gap-2 px-1.5 py-1">
            <span className="text-[28px] sm:text-[48px] font-[600] leading-none">Year Ending Sale</span>
            <span className="text-[14px] sm:text-[14px] text-white/80">Hurry! This limited-time offer applies to a curated selection of premium items—grab them before they’re gone!</span>
          </div>
        </div>
        <div className="flex flex-col items-end justify-end gap-1 px-5 ">
          <span className="text-[#ff686b] text-[24px] sm:text-[40px] font-[600] leading-none">60% OFF</span>
          <span className="text-[14px] sm:text-[14px] text-white/80 leading-none ">OFFER  CLOSES  SOON!</span>
        </div>
        </div>
      </div>
  );
}
