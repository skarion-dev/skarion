"use client";

import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

export default function AboutUs() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    );
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        const updateDots = () => {
            setCount(api.scrollSnapList().length)
            setCurrent(api.selectedScrollSnap())
        }

        updateDots()
        plugin.current.play()

        api.on("select", updateDots)
        api.on("reInit", updateDots)
    }, [api])

    return (
        <div className="w-full bg-[#ffffff] my-5 sm:px-12 px-6 max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
                <div className="w-full lg:col-span-3">
                    <div className="relative w-full rounded-2xl overflow-hidden">
                        <Carousel
                            setApi={setApi}
                            className="w-full relative"
                            plugins={[plugin.current]}
                            opts={{ loop: true }}
                        >
                            <CarouselContent>
                                <CarouselItem>
                                    <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden">
                                        <Image src="/end to end.jpg" alt="Slide 1" fill className="object-cover" />
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden">
                                        <Image src="/globe to us.jpg" alt="Slide 2" fill className="object-cover" />
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden">
                                        <Image src="/pay when hired.jpg" alt="Slide 3" fill className="object-cover" />
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                        </Carousel>
                        <div className="flex justify-center gap-2 absolute bottom-4 left-0 right-0 z-10">
                            {Array.from({ length: count }).map((_, i) => (
                                <button
                                    key={i}
                                    className={`h-2 w-2 rounded-full transition-all duration-300 ${i === current ? "bg-white w-6" : "bg-white/50"
                                        }`}
                                    onClick={() => api?.scrollTo(i)}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4 mt-8">
                            Our mission is to create meaningful connections between talent and opportunity by equipping individuals with the skills, guidance, and strategic support needed to succeed in today's evolving workforce.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
                            We are committed to helping professionals strengthen their career potential, navigate employment pathways with confidence, and achieve sustainable professional growth. Through practical training, career development, and job placement support, we strive to contribute to a workforce that is skilled, adaptable, and prepared for the opportunities of tomorrow.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:col-span-2 flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-500 tracking-tight mb-4">About Us</h2>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
                            We work with individuals at different stages of their careers, helping them strengthen their professional positioning, build industry-relevant capabilities, and navigate the job market with greater confidence and direction. Through career development, targeted job search support, and workforce readiness initiatives, we help transform potential into measurable career outcomes.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
                            Our approach combines practical insight, market awareness, and personalized support. Rather than offering one-size-fits-all solutions, we focus on understanding each individual's goals and aligning them with opportunities that create long-term value.
                        </p>
                    </div>
                    <div className="flex justify-end gap-12">
                        <Image src="/team-fishel.png" alt="About Us" width={80} height={80} className="w-[150px]" />
                        <Image src="/team-fishel.png" alt="About Us" width={80} height={80} className="w-[150px]" />
                    </div>
                    
                </div>
            </div>
        </div>
    );
}