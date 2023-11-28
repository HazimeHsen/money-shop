"use client";
import Image from "next/image";
import { arimo, bebas } from "../app/font";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
type Props = {};

function Hero({}: Props) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Percentage of the element in view
  });

  useEffect(() => {
    controls.start("visible");
  }, [controls]);
  return (
    <>
      <div className="h-[95vh] md:pt-0 flex justify-center items-center ">
        <div className="flex md:flex-row md:gap-0 gap-5 flex-col w-full items-center justify-evenly px-4 ">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            transition={{ duration: 0.5 }}
            className="w-full font-semibold md:w-1/2 md:text-start text-center space-y-5">
            <h1
              className={`max-w-md mx-auto md:mx-0 md:max-w-lg text-3xl font-extrabold md:text-5xl ${arimo.className}`}>
              The Best Place To Find And Buy Amazing{" "}
              <span className="text-primary">Bank Notes</span>
            </h1>
            <h3
              className={`max-w-md mx-auto md:mx-0 md:max-w-lg text-sm md:text-base font-semibold gray-text ${arimo.className}`}>
              Heritage Kings is specialized in delivering exceptional
              user-experience with the notes that you cannot find anywhere else.
            </h3>
            <button className="Button">Explore Now</button>
            <div className="md:block hidden">
              <div className="flex flex-col   mb-10">
                <div className=" flex items-center ">
                  <Image
                    src="/images/money.gif"
                    width={50}
                    height={50}
                    alt=""
                  />
                  <h2 className="font-bold text-xl underline justify-start text-primary mb-2">
                    Why Us
                  </h2>
                </div>
                <div className="md:w-3/4 w-full ">
                  <ul className="font-semibold max-w-sm text-sm gray-text pl-8">
                    We&apos;re growing our collection and creating a top-notch
                    online paper money gallery at HeritageKings.com. Looking for
                    a specific banknote? Use our search to find details like its
                    value and description. Whether you&apos;re expanding your
                    collection or starting a new one, trust HeritageKings.com
                    for buying paper money online.
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -100 },
            }}
            transition={{ duration: 0.5 }}>
            <Image
              src="/images/hero.png"
              className="md:w-[300px] md:h-[300px] w-[140px] h-[140px] mx-auto md:mx-0 upDownAnimation"
              alt=""
              width={300}
              height={300}
            />
            <div className="md:hidden block">
              <div className="flex flex-col md:flex-row md:items-center mb-10">
                <div className=" flex items-center ">
                  <Image
                    src="/images/money.gif"
                    width={50}
                    height={50}
                    alt=""
                  />
                  <h2 className="font-bold text-xl underline justify-start text-primary mb-2">
                    Why Us
                  </h2>
                </div>
                <div className="md:w-3/4 w-full ">
                  <ul className="font-semibold max-w-sm text-sm gray-text pl-8">
                    We&apos;re growing our collection and creating a top-notch
                    online paper money gallery at HeritageKings.com. Looking for
                    a specific banknote? Use our search to find details like its
                    value and description. Whether you&apos;re expanding your
                    collection or starting a new one, trust HeritageKings.com
                    for buying paper money online.
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Hero;
