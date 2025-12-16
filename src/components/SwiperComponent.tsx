"use client";
import Image from "next/image";
import { FC } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination"; 
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules"; 
import { Swiper, SwiperSlide } from "swiper/react"; 

interface SwiperComponentProps {
	images: string[]; 
}

const SwiperComponent: FC<SwiperComponentProps> = ({ images }) => {
	return (
		<>
    		<div className="swiper-container relative w-full h-full rounded-[14px]">
				<Swiper
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={1} 
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 150,
						modifier: 1,

						slideShadows: false,
					}}
					autoplay={{
						delay: 2500, 
						disableOnInteraction: true,
					}}
					loop={true} 
					modules={[EffectCoverflow, Pagination, Autoplay]} 
					className="mySwiper w-full h-full rounded-[14px]"
				>
					{images.map((image, index) => (
						<SwiperSlide key={index} className="!h-full">
							<div className="group relative w-full h-full rounded-[14px] overflow-hidden">
								<div className="relative w-full h-full">
									<Image
										src={image}
										alt={`Slide ${index + 1}`}
										fill
										className="object-cover scale-101"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								</div>
								{/* Gradient overlay */}
								<div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
								{/* Stories button */}
								<button className="absolute bottom-4 right-4 px-5 py-2.5 bg-white backdrop-blur-md text-black text-sm font-semibold rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105 hover:shadow-gray-300 hover:bg-black hover:text-white">
									See the Stories
								</button>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};

export default SwiperComponent;