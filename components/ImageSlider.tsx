import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

export default function Slider({ images }: { images: string[] }) {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper !w-[250px]">
        {images.map((image, i) => (
          <SwiperSlide className="!w-[250px]" key={i}>
            <Image
              placeholder="blur"
              blurDataURL={image}
              src={image}
              alt=""
              width={150}
              height={150}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
