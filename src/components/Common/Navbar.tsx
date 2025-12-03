"use client";
import CourseCards from "@/components/CourseCards";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const handleChangeMenu = (name: string) => {
        setSelectedMenu(name);
        setIsMenuOpen(true);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return (
        <div className="sticky top-4 z-30">
            <div className="relative"
            onMouseLeave={() => setIsMenuOpen(false)}>
                <div className="lg:max-w-[1400px] sm:mx-auto flex justify-between mt-4 mx-2 h-[70px] bg-[#FFFFFF] rounded-[12px] border border-[#EBEBEB] px-6">
                    <div className="flex items-center h-full gap-12">
                        <div className="" onMouseEnter={() => setIsMenuOpen(false)}>
                            <Link href="/">
                                <Image
                                    src="/logo.svg"
                                    alt="logo"
                                    width={40}
                                    height={40}
                                />
                            </Link>
                        </div>
                        <div className="hidden lg:flex gap-6">
                            <div
                                onMouseEnter={() => handleChangeMenu("programs")}
                                className="flex gap-2 cursor-pointer"
                            >
                                <p className="text-[14px] text-[#191F38] font-[500]">
                                    Programs
                                </p>
                                <svg
                                    className="my-auto"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4.5 6L8 9.5L11.5 6"
                                        stroke="#191F38"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            <div
                                className="flex gap-2 cursor-pointer"
                                onMouseEnter={() => handleChangeMenu("company")}
                            >
                                <p className="text-[14px] text-[#191F38] font-[500]">
                                    Company
                                </p>
                                <svg
                                    className="my-auto"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4.5 6L8 9.5L11.5 6"
                                        stroke="#191F38"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            <div className="flex gap-2 cursor-pointer" onMouseEnter={() => setIsMenuOpen(false)}>
                                <Link href={"/pricing"}>
                                    <p className="text-[14px] text-[#191F38] font-[500]">
                                        Success Stories
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center h-full gap-8" onMouseEnter={() => setIsMenuOpen(false)}>
                        <div className="bg-[#000000] border border-[#EBEBEB] rounded-[12px] px-4 pt-2 pb-2.5 cursor-pointer">
                            <Link href={"/contact"}>
                                <p className="text-[14px] text-[#FFFFFF] font-[500]">
                                    Contact Us
                                </p>
                            </Link>
                        </div>
                    </div>

                    <div className="flex lg:hidden items-center">
                        <button
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            className="p-2"
                        >
                            {!isMobileMenuOpen ? (
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M3 12H21"
                                        stroke="#191F38"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M3 6H21"
                                        stroke="#191F38"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M3 18H21"
                                        stroke="#191F38"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M18 6L6 18"
                                        stroke="#191F38"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M6 6L18 18"
                                        stroke="#191F38"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>

                    {isMobileMenuOpen && (
                        <div className="lg:hidden absolute top-[75px] left-0 right-0 bg-white border-b border-[#EBEBEB] shadow-lg rounded-b-[12px] mx-2 p-4">
                            <div className="flex flex-col space-y-4">
                                <div
                                    onClick={() => handleChangeMenu("programs")}
                                    className="flex justify-between items-center cursor-pointer p-2"
                                >
                                    <p className="text-[16px] text-[#191F38] font-[400]">
                                        Programs
                                    </p>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M4.5 6L8 9.5L11.5 6"
                                            stroke="#191F38"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div
                                    onClick={() =>
                                        handleChangeMenu("company")
                                    }
                                    className="flex justify-between items-center cursor-pointer p-2"
                                >
                                    <p className="text-[16px] text-[#191F38] font-[400]">
                                        Company
                                    </p>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M4.5 6L8 9.5L11.5 6"
                                            stroke="#191F38"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <Link
                                    href="/pricing"
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="p-2"
                                >
                                    <p className="text-[16px] text-[#191F38] font-[400]">
                                        Success Stories
                                    </p>
                                </Link>
                                <div className="pt-4 border-t border-[#EBEBEB] space-y-4">
                                    <Link
                                        href="/contact-sales"
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="block"
                                    >
                                        <div className="bg-[#F8FAFC] border border-[#bab9b9] rounded-[12px] px-4 py-2 text-center">
                                            <p className="text-[16px] text-[#191F38] font-[400]">
                                                Contact Us
                                            </p>
                                        </div>
                                    </Link>
                                    <div className="flex gap-2">
                                        <Link
                                            href={`/auth/sign-in`}
                                            className="flex-1"
                                        >
                                            <div className="bg-[#191F38] border border-[#EBEBEB] rounded-[12px] px-4 py-2 text-center">
                                                <p className="text-[16px] text-white font-[600]">
                                                    Login
                                                </p>
                                            </div>
                                        </Link>
                                        <Link
                                            href={`/auth/sign-up`}
                                            className="flex-1"
                                        >
                                            <div className="bg-[#191F38] rounded-[12px] px-4 py-2 text-center">
                                                <p className="text-[16px] text-white font-[600]">
                                                    Sign up
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {isMenuOpen && (
                    <div
                        ref={dropdownRef}
                        className="absolute left-1/2 transform -translate-x-1/2 lg:max-w-[1400px] w-[95%] sm:w-full mx-auto -mt-1 pt-4 z-50"
                    >
                        <div
                            className="bg-[#FFFFFF] rounded-[12px] border border-[#EBEBEB] shadow-md p-4"
                        >
                            <div className="overflow-y-auto max-h-[65vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {selectedMenu === "programs" && (
                                    <div className="p-4">
                                        <CourseCards />
                                        <div className='mt-6 md:mt-8 lg:mt-10 border-t border-black/20' />
                                        <Link href="#" className="hover:text-[#191F38]">See All Programs</Link>
                                    </div>
                                )}
                                {selectedMenu === "company" && (
                                    <div className="p-4 sm:p-6 md:p-8 lg:p-10 col-span-1 md:col-span-2 lg:col-span-3">
                                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6">
                                            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                                <div className="flex flex-col">
                                                    <p className="text-[18px] sm:text-[20px] md:text-[24px] text-[#191F38] font-[500] mb-2 md:mb-3">About</p>
                                                    <div className="space-y-1 md:space-y-2 bg-[#ffffff]">
                                                        <Link href="#" className="inline-block rounded px-2 py-1 text-[14px] sm:text-[15px] md:text-[16px] text-[#191F38] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#191F38] after:transition-all after:duration-300 hover:after:w-full">About Skarion</Link>
                                                    </div>
                                                    <div className="space-y-1 md:space-y-2 bg-[#ffffff]">
                                                        <Link href="#" className="inline-block rounded px-2 py-1 text-[14px] sm:text-[15px] md:text-[16px] text-[#191F38] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#191F38] after:transition-all after:duration-300 hover:after:w-full">Student Journey</Link>
                                                    </div>
                                                    <div className="space-y-1 md:space-y-2 bg-[#ffffff]">
                                                        <Link href="#" className="inline-block rounded px-2 py-1 text-[14px] sm:text-[15px] md:text-[16px] text-[#191F38] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#191F38] after:transition-all after:duration-300 hover:after:w-full">Contact Us</Link>
                                                    </div>
                                                    <p className="mt-3 md:mt-4 text-[18px] sm:text-[20px] md:text-[24px] text-[#191F38] font-[500] mb-2 md:mb-3">Resources</p>
                                                    <div className="space-y-1 md:space-y-2 bg-[#ffffff]">
                                                        <Link href="#" className="inline-block rounded px-2 py-1 text-[14px] sm:text-[15px] md:text-[16px] text-[#191F38] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#191F38] after:transition-all after:duration-300 hover:after:w-full">Blogs</Link>
                                                    </div>
                                                    <div className="space-y-1 md:space-y-2 bg-[#ffffff]">
                                                        <Link href="#" className="inline-block rounded px-2 py-1 text-[14px] sm:text-[15px] md:text-[16px] text-[#191F38] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#191F38] after:transition-all after:duration-300 hover:after:w-full">FAQ</Link>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-[18px] sm:text-[20px] md:text-[24px] text-[#191F38] font-[500] mb-2 md:mb-3">Community</p>
                                                    <div className="space-y-1 md:space-y-2 bg-[#ffffff]">
                                                        <Link href="#" className="inline-block rounded px-2 py-1 text-[14px] sm:text-[15px] md:text-[16px] text-[#191F38] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#191F38] after:transition-all after:duration-300 hover:after:w-full">Facebook</Link>
                                                    </div>
                                                    <div className="space-y-1 md:space-y-2 bg-[#ffffff]">
                                                        <Link
                                                            href="#"
                                                            className="inline-block rounded px-2 py-1 text-[14px] sm:text-[15px] md:text-[16px] text-[#191F38] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#191F38] after:transition-all after:duration-300 hover:after:w-full">
                                                            Linkedin
                                                        </Link>
                                                    </div>
                                                    <div className="space-y-1 md:space-y-2 bg-[#ffffff]">
                                                        <Link
                                                            href="#"
                                                            className="inline-block rounded  px-2 py-1 text-[14px] sm:text-[15px] md:text-[16px] text-[#191F38] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#191F38] after:transition-all after:duration-300 hover:after:w-full" >
                                                            X
                                                        </Link>
                                                    </div>
                                                    <p className="mt-3 md:mt-4 text-[22px] sm:text-[24px] md:text-[28px] text-[#191F38] font-[500] mb-1 md:mb-2">Company</p>
                                                    <div className="space-y-1 md:space-y-2">
                                                        <Link
                                                            href="#"
                                                            className="inline-block rounded  px-2 py-1 text-[14px] sm:text-[15px] md:text-[16px] text-[#191F38] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#191F38] after:transition-all after:duration-300 hover:after:w-full">
                                                            Career
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="lg:col-span-2 mt-4 md:mt-0">
                                                <p className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] tracking-[0.15em] text-[#191F38] font-[500] break-words">SKARION</p>
                                                <p className="mt-2 md:mt-3 text-[14px] sm:text-[15px] md:text-[16px] text-[#4B5563] max-w-xs md:max-w-sm">
                                                    Skarion is a career-focused bootcamp that equips you with job-ready skills and helps you get hired through expert training and personalized support
                                                </p>
                                            </div>
                                        </div>
                                        <div className='mt-6 md:mt-8 lg:mt-10 border-t border-black/20' />
                                        <div className="mt-auto pt-2 flex flex-col sm:flex-row sm:flex-wrap sm:justify-between sm:items-center text-[#4B5563] text-[14px] sm:text-[16px] md:text-[18px] gap-2">
                                            <span>info@skarion.com</span>
                                            <div className="flex flex-wrap gap-2 sm:gap-4 mt-1 sm:mt-2">
                                                <Link href="#" className="hover:text-[#191F38]">Terms and Conditions</Link>
                                                <Link href="#" className="hover:text-[#191F38]">Privacy Policy</Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
