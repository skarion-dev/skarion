import CourseCards from "@/components/CourseCards";

export default function Courses() {
  return (
    <div id="courses" className="w-full bg-[#ffffff] mb-15 mt-8 sm:px-12 px-6 max-w-[1440px] mx-auto">
      <p className="text-[#122461] text-[11px] sm:text-[12px] font-[600] uppercase tracking-widest mb-3">
        SKILL DEVELOPMENT
      </p>
      <p className="text-[#000000] text-[32px] sm:text-[48px] leading-[1.15] text-left mb-3 font-[700]">
        Focused courses that close real hiring gaps.
      </p>
      <p className="text-gray-600 text-[15px] sm:text-[16px] font-[300] mb-8 sm:mb-12 max-w-2xl leading-relaxed">
        Courses are one part of the process — used when a specific skill gap
        stands between you and the role. Our flagship is Outside Plant
        Engineering.
      </p>
      <CourseCards />
    </div>
  );
}
