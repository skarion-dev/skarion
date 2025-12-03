import CourseCards from "@/components/CourseCards";

export default function Courses() {
    return (
        <div className="w-full bg-[#ffffff] py-10 px-12">
            <div className="text-[#000000] text-[64px] leading-[1.2] text-left mb-12">
                Our Offered Courses
            </div>
            <CourseCards/>
        </div>
    );
}
