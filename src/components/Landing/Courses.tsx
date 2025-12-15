import CourseCards from "@/components/CourseCards";

export default function Courses() {
    return (
        <div className="w-full bg-[#ffffff] py-10 sm:px-12 px-6 mt-auto">
            <div className="text-[#000000] text-[42px] lg:text-[64px] leading-[1.2] text-left mb-12">
                Our Offered Programs
            </div>
            <CourseCards/>
        </div>
    );
}
