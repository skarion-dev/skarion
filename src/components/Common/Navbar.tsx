"use client";
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
                                        <p className="text-[20px] text-[#191F38] font-[600]">Programs</p>
                                    </div>
                                )}
                                {selectedMenu === "company" && (
                                    <div className="p-4">
                                        <p className="text-[20px] text-[#191F38] font-[600]">Company</p>
                                    </div>
                                )}
                            </div>

                            <div className="border-t sm:m-4 pt-6">
                                <div className="flex flex-wrap gap-3">
                                    <div className="flex gap-3 w-full md:w-auto">
                                        <Link
                                            href={`/auth/sign-up`}
                                            className="rounded-[8px] flex items-center gap-2 font-[600] transition-all cursor-pointer border-2 border-[#4157FE] text-[#4157FE] px-4 py-2 text-[16px] max-h-[40px]"
                                        >
                                            Try For Free!
                                        </Link>
                                        <Link
                                            href="/resources/video-guides"
                                            className="rounded-[8px] flex items-center gap-2 font-[600] transition-all cursor-pointer bg-[#F0F5FF] text-[#2377FC] border-2 border-[#4157FE] px-4 py-2 text-[16px] max-h-[40px] shadow-[0px_2px_4px_0px_#00000014,0px_0px_6px_0px_#00000005]"
                                        >
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7.5075 4.41539C6.25725 3.68639 4.6875 4.58789 4.6875 6.03539V11.9649C4.6875 13.4124 6.25725 14.3139 7.5075 13.5849L12.5903 10.6194C13.83 9.89639 13.83 8.10389 12.5903 7.38089L7.5075 4.41539Z"
                                                    fill="#4157FE"
                                                />
                                            </svg>
                                            Watch Demo
                                        </Link>
                                    </div>
                                    <Link
                                        href="/contact-sales"
                                        className="w-full md:w-auto rounded-[8px] flex items-center justify-center gap-2 font-[600] transition-all cursor-pointer bg-[#4157FE] border border-[#317EF3] text-[#FFFFFF] px-4 py-2 text-[16px] max-h-[40px]"
                                    >
                                        <svg
                                            width="19"
                                            height="18"
                                            viewBox="0 0 19 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8.7875 11.2125L7.4 12.6C7.1075 12.8925 6.6425 12.8925 6.3425 12.6075C6.26 12.525 6.1775 12.45 6.095 12.3675C5.3225 11.5875 4.625 10.77 4.0025 9.915C3.3875 9.06 2.8925 8.205 2.5325 7.3575C2.18 6.5025 2 5.685 2 4.905C2 4.395 2.09 3.9075 2.27 3.4575C2.45 3 2.735 2.58 3.1325 2.205C3.6125 1.7325 4.1375 1.5 4.6925 1.5C4.9025 1.5 5.1125 1.545 5.3 1.635C5.495 1.725 5.6675 1.86 5.8025 2.055L7.5425 4.5075C7.6775 4.695 7.775 4.8675 7.8425 5.0325C7.91 5.19 7.9475 5.3475 7.9475 5.49C7.9475 5.67 7.895 5.85 7.79 6.0225C7.6925 6.195 7.55 6.375 7.37 6.555L6.8 7.1475C6.7175 7.23 6.68 7.3275 6.68 7.4475C6.68 7.5075 6.6875 7.56 6.7025 7.62C6.725 7.68 6.7475 7.725 6.7625 7.77C6.8975 8.0175 7.13 8.34 7.46 8.73C7.7975 9.12 8.1575 9.5175 8.5475 9.915C8.6225 9.99 8.705 10.065 8.78 10.14C9.08 10.4325 9.0875 10.9125 8.7875 11.2125Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M16.9767 13.7473C16.9767 13.9573 16.9392 14.1748 16.8642 14.3848C16.8417 14.4448 16.8192 14.5048 16.7892 14.5648C16.6617 14.8348 16.4967 15.0898 16.2792 15.3298C15.9117 15.7348 15.5067 16.0273 15.0492 16.2148C15.0417 16.2148 15.0342 16.2223 15.0267 16.2223C14.5842 16.4023 14.1042 16.4998 13.5867 16.4998C12.8217 16.4998 12.0042 16.3198 11.1417 15.9523C10.2792 15.5848 9.41672 15.0898 8.56172 14.4673C8.26922 14.2498 7.97672 14.0323 7.69922 13.7998L10.1517 11.3473C10.3617 11.5048 10.5492 11.6248 10.7067 11.7073C10.7442 11.7223 10.7892 11.7448 10.8417 11.7673C10.9017 11.7898 10.9617 11.7973 11.0292 11.7973C11.1567 11.7973 11.2542 11.7523 11.3367 11.6698L11.9067 11.1073C12.0942 10.9198 12.2742 10.7773 12.4467 10.6873C12.6192 10.5823 12.7917 10.5298 12.9792 10.5298C13.1217 10.5298 13.2717 10.5598 13.4367 10.6273C13.6017 10.6948 13.7742 10.7923 13.9617 10.9198L16.4442 12.6823C16.6392 12.8173 16.7742 12.9748 16.8567 13.1623C16.9317 13.3498 16.9767 13.5373 16.9767 13.7473Z"
                                                fill="white"
                                            />
                                        </svg>
                                        Contact Sales
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}