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
        className="mySwiper ">
        {images.map((image, i) => (
          <SwiperSlide className="!h-[500px]" key={i}>
            <Image src={image.url} alt="" fill />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
