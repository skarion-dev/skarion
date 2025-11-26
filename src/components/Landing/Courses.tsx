import CourseCard from "@/components/CourseCard";

export default function Courses() {
    return (
        <div className="w-full bg-[#ffffff] py-10 px-12">
            <div className="text-[#000000] text-[64px] leading-[1.2] text-left mb-12">
                Our Offered Programs
            </div>

            <div className="flex space-x-8">
                <CourseCard isPopular={true} courseName="Outside Plant Engineering" courseDescription="Understand the fundamentals of fiber optics, including OSP design, splicing techniques, and network layout. Ideal for those aiming to work in telecom and infrastructure." modules={13} tag="Most Popular" />
                <CourseCard isPopular={false} courseName="AutoCAD Fundamentals" courseDescription="Learn the ins and outs of AutoCAD, from basic drawing to advanced modeling. Suitable for those with a passion for design." modules={13} tag="Coming Soon" />
                <CourseCard isPopular={false} courseName="GIS Essentials" courseDescription="Learn the ins and outs of GIS, from mapping to data analysis. Ideal for those with a passion for location-based services." modules={13} tag="Coming Soon" />
            </div>
        </div>
    );
}
