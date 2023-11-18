import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { Images } from "@/types/Images";

export default function Slider({ images }: { images: Images[] }) {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        slidesPerView={1}
        className="mySwiper w-full">
        {images.map((image, i) => (
          <SwiperSlide className="w-full" key={i}>
            <Image src={image.url} alt="" width={150} height={150} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
