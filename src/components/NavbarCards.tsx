'use client'
import { useState } from "react"

const courses = [
    {
        courseName: "Outside Plant Engineering",
        courseDescription: "Understand the fundamentals of fiber optics, including OSP design, splicing techniques, and network layout. Ideal for those aiming to work in telecom and infrastructure.",
        modules: 13,
        tag: "Most Popular",
        isPopular: true,
    },
    {
        courseName: "AutoCAD Fundamentals",
        courseDescription: "Learn the ins and outs of AutoCAD, from basic drawing to advanced modeling. Suitable for those with a passion for design.",
        modules: 13,
        tag: "Coming Soon",
        isPopular: false,
    },
    {
        courseName: "GIS Essentials",
        courseDescription: "Learn the ins and outs of GIS, from mapping to data analysis. Ideal for those with a passion for location-based services.",
        modules: 13,
        tag: "Coming Soon",
        isPopular: false,
    }
]

export default function CourseCards() {
    const [activeId, setActiveId] = useState(null)

    return (
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, index) => {
                    const { courseName, courseDescription, modules, tag, isPopular } = course || {}

                    return (
                        <div
                            key={index}
                            className="relative bg-white border rounded-lg w-full"
                        >
                            <div className="relative bg-gray-300 rounded-lg h-[150px] m-2">
                                <div className={`absolute -bottom-4 left-2 inline-flex items-center justify-center px-4 py-1 text-[11px] font-[600] rounded-full border-3 border-white z-10 ${isPopular ? 'text-green-800 bg-green-200' : 'text-red-800 bg-red-200'}`}>
                                    {tag}
                                </div>
                            </div>

                            <div className="px-4">
                                <div className="mt-6 text-[20px] font-[600] text-black">
                                    {courseName}
                                </div>
                                <div className="mt-1 text-[14px] text-gray-600 line-clamp-2">
                                    {courseDescription}
                                </div>
                            </div>

                            <div className="mt-4 px-4 pb-4 flex justify-between items-center">
                                <span className="text-xs text-gray-500">{modules} Modules</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}