'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function LogoCarousel({ logos }: { logos: string[] }) {
    const scrollerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const scroller = scrollerRef.current;

        function addAnimation(){
            if(!scroller) return;
            const innerScroller = scroller.querySelector("inner-scroll")
            if(!innerScroller) return;
            if(innerScroller.getAttribute("data-cloned") === "true") return;
            const innerScrollerChildren = Array.from(innerScroller.children);
            innerScrollerChildren.forEach((child) => {
                const extendedLogos = child.cloneNode(true) as HTMLElement;
                innerScroller.appendChild(extendedLogos);
            })
            innerScroller.setAttribute("data-cloned", "true")
        }
    }, [])

    return (
        <div ref={scrollerRef} className="scroller">
            <div className="inner-scroll flex gap-2 animate-infinite-scroll">
                {[...logos, ...logos].map((logo, index) => (
                    <Image key={index} src={logo} alt="logo" width={100} height={100} />
                ))}
            </div>
        </div>
    )
}