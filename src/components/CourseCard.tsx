'use client'
import { useState } from 'react';
import Image from 'next/image';


export default function CourseCard({ isPopular, courseName, courseDescription, modules, tag }: { isPopular: boolean, courseName: string, courseDescription: string, modules: number, tag: string }) {
    const [isHovered, setIsHovered] = useState(false); 

    return (
        <div 
            className="w-[300px] bg-white border rounded-lg"
            onMouseEnter={() => setIsHovered(true)}  
            onMouseLeave={() => setIsHovered(false)} 
        >
            <div className="relative bg-gray-300 rounded-lg h-[150px] m-2">
                <div className="absolute top-4 left-4 z-10">
                    <Image src="/play-button.png" alt="play-button" width={30} height={30} className="opacity-50 filter brightness-0 invert"/>
                </div>
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
    );
}
