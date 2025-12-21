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
              <div className="relative w-full h-full rounded-[14px] overflow-hidden">
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SwiperComponent;
