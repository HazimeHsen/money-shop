"use client";
import React from "react";
import Image from "next/image";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="h-screen px-5 w-screen md:pt-0 pt-16 flex justify-center items-center ">
      <div className="flex md:flex-row md:gap-0 gap-5 flex-col w-full items-center justify-evenly">
        <div className="w-full font-semibold md:w-1/2 md:text-start text-center space-y-5 mt-10">
          <h1 className="max-w-md mx-auto md:mx-0 md:max-w-lg text-3xl font-extrabold font-sans md:text-5xl">
            The Best Place To Find And Buy Amazing{" "}
            <span className="text-primary">Products</span>
          </h1>
          <h3 className="max-w-md mx-auto md:mx-0 md:max-w-lg text-sm md:text-base font-semibold text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
            nisi, at sed integer nec, velit vulptate est at.
          </h3>
          <button className="Button">Explore Now</button>
        </div>
        <div>
          <Image
            src="/images/hero.png"
            className="md:w-[300px] md:h-[300px] w-[250px] h-[250px] "
            alt=""
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
