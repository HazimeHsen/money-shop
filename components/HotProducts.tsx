"use client";
import type { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import Image from "next/image";
import { Products } from "@/types/Products";
import { getProducts } from "@/app/sanity/schemas/sanity-utils";

export const HeroScrollPreview = () => {
  return (
    <div className="flex flex-col bg-white">
      <HeroScroll />
    </div>
  );
};
export const HeroScroll = () => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const [products, setProducts] = useState<Products[]>([]);
  useEffect(() => {
    const getData = async () => {
      const data: Products[] = await getProducts();
      setProducts(data);
    };
    getData();
  }, []);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className=" md:h-[100vh] mt-28 mb-10 md:my-20 flex items-center justify-center relative ">
      <div
        className="w-full relative"
        style={{
          perspective: "1000px",
        }}>
        <Header translate={translate} />
        <Card
          products={products}
          rotate={rotate}
          translate={translate}
          scale={scale}
        />
      </div>
    </div>
  );
};

export const Header = ({ translate }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center">
      <h1 className="text-4xl font-semibold">
        <span className="text-[3rem] xs:text-[4rem] md:text-[5rem] line-clamp-2 lg:text-[6rem] font-bold mt-1 leading-none">
          OUR HOT PRODUCTS
        </span>
      </h1>
    </motion.div>
  );
};

export const Card = ({
  products,
  rotate,
  scale,
  translate,
}: {
  products: Products[];
  rotate: any;
  scale: any;
  translate: any;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate, // rotate in X-axis
        scale,
        boxShadow:
          "0 0 #0000004d, 0 5px 10px #0000004a, 0 12px 12px #00000042, 0 30px 50px #00000026, 0 80px 30px #0000000a, 0 120px 30px #00000003",
      }}
      className="md:max-w-2xl lg:max-w-4xl xl:max-w-5xl -mt-28 md:-mt-16 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl">
      <div className="bg-gray-100 h-full w-full rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-4 overflow-hidden p-4">
        {products &&
          products.map((product, idx) => (
            <motion.div
              key={`product-${idx}`}
              className="bg-white rounded-md cursor-pointer relative"
              style={{ translateY: translate }}
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}>
              <div className="absolute top-2 right-2 rounded-full text-xs font-bold bg-white px-2 py-1">
                HOT
              </div>
              <Image
                src={product.image}
                className="rounded-tr-md w-full rounded-tl-md text-sm "
                alt=""
                width={200}
                height={200}
              />
              <div className="p-4">
                <h1 className="font-semibold text-sm ">{product.name}</h1>
                <h2 className=" text-gray-500 text-xs ">
                  {product.country.name}
                </h2>
              </div>
            </motion.div>
          ))}
        {products &&
          products.map((product, idx) => (
            <motion.div
              key={`product-${idx}`}
              className="bg-white rounded-md cursor-pointer relative"
              style={{ translateY: translate }}
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}>
              <div className="absolute top-2 right-2 rounded-full text-xs font-bold bg-white px-2 py-1">
                HOT
              </div>
              <Image
                src={product.image}
                className="rounded-tr-md w-full rounded-tl-md text-sm "
                alt=""
                width={200}
                height={200}
              />
              <div className="p-4">
                <h1 className="font-semibold text-sm ">{product.name}</h1>
                <h2 className=" text-gray-500 text-xs ">
                  {product.country.name}
                </h2>
              </div>
            </motion.div>
          ))}
        {products &&
          products.map((product, idx) => (
            <motion.div
              key={`product-${idx}`}
              className="bg-white rounded-md cursor-pointer relative"
              style={{ translateY: translate }}
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}>
              <div className="absolute top-2 right-2 rounded-full text-xs font-bold bg-white px-2 py-1">
                HOT
              </div>
              <Image
                src={product.image}
                className="rounded-tr-md w-full rounded-tl-md text-sm "
                alt=""
                width={200}
                height={200}
              />
              <div className="p-4">
                <h1 className="font-semibold text-sm ">{product.name}</h1>
                <h2 className=" text-gray-500 text-xs ">
                  {product.country.name}
                </h2>
              </div>
            </motion.div>
          ))}
        {products &&
          products.map((product, idx) => (
            <motion.div
              key={`product-${idx}`}
              className="bg-white rounded-md cursor-pointer relative"
              style={{ translateY: translate }}
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}>
              <div className="absolute top-2 right-2 rounded-full text-xs font-bold bg-white px-2 py-1">
                HOT
              </div>
              <Image
                src={product.image}
                className="rounded-tr-md w-full rounded-tl-md text-sm "
                alt=""
                width={200}
                height={200}
              />
              <div className="p-4">
                <h1 className="font-semibold text-sm ">{product.name}</h1>
                <h2 className=" text-gray-500 text-xs ">
                  {product.country.name}
                </h2>
              </div>
            </motion.div>
          ))}
        {products &&
          products.map((product, idx) => (
            <motion.div
              key={`product-${idx}`}
              className="bg-white rounded-md cursor-pointer relative"
              style={{ translateY: translate }}
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}>
              <div className="absolute top-2 right-2 rounded-full text-xs font-bold bg-white px-2 py-1">
                HOT
              </div>
              <Image
                src={product.image}
                className="rounded-tr-md w-full rounded-tl-md text-sm "
                alt=""
                width={200}
                height={200}
              />
              <div className="p-4">
                <h1 className="font-semibold text-sm ">{product.name}</h1>
                <h2 className=" text-gray-500 text-xs ">
                  {product.country.name}
                </h2>
              </div>
            </motion.div>
          ))}
        {products &&
          products.map((product, idx) => (
            <motion.div
              key={`product-${idx}`}
              className="bg-white rounded-md cursor-pointer relative"
              style={{ translateY: translate }}
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}>
              <div className="absolute top-2 right-2 rounded-full text-xs font-bold bg-white px-2 py-1">
                HOT
              </div>
              <Image
                src={product.image}
                className="rounded-tr-md w-full rounded-tl-md text-sm "
                alt=""
                width={200}
                height={200}
              />
              <div className="p-4">
                <h1 className="font-semibold text-sm ">{product.name}</h1>
                <h2 className=" text-gray-500 text-xs ">
                  {product.country.name}
                </h2>
              </div>
            </motion.div>
          ))}
        {products &&
          products.map((product, idx) => (
            <motion.div
              key={`product-${idx}`}
              className="bg-white rounded-md cursor-pointer relative"
              style={{ translateY: translate }}
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}>
              <div className="absolute top-2 right-2 rounded-full text-xs font-bold bg-white px-2 py-1">
                HOT
              </div>
              <Image
                src={product.image}
                className="rounded-tr-md w-full rounded-tl-md text-sm "
                alt=""
                width={200}
                height={200}
              />
              <div className="p-4">
                <h1 className="font-semibold text-sm ">{product.name}</h1>
                <h2 className=" text-gray-500 text-xs ">
                  {product.country.name}
                </h2>
              </div>
            </motion.div>
          ))}
        {products &&
          products.map((product, idx) => (
            <motion.div
              key={`product-${idx}`}
              className="bg-white rounded-md cursor-pointer relative"
              style={{ translateY: translate }}
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}>
              <div className="absolute top-2 right-2 rounded-full text-xs font-bold bg-white px-2 py-1">
                HOT
              </div>
              <Image
                src={product.image}
                className="rounded-tr-md w-full rounded-tl-md text-sm "
                alt=""
                width={200}
                height={200}
              />
              <div className="p-4">
                <h1 className="font-semibold text-sm ">{product.name}</h1>
                <h2 className=" text-gray-500 text-xs ">
                  {product.country.name}
                </h2>
              </div>
            </motion.div>
          ))}
        {products &&
          products.map((product, idx) => (
            <motion.div
              key={`product-${idx}`}
              className="bg-white rounded-md cursor-pointer relative"
              style={{ translateY: translate }}
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}>
              <div className="absolute top-2 right-2 rounded-full text-xs font-bold bg-white px-2 py-1">
                HOT
              </div>
              <Image
                src={product.image}
                className="rounded-tr-md w-full rounded-tl-md text-sm "
                alt=""
                width={200}
                height={200}
              />
              <div className="p-4">
                <h1 className="font-semibold text-sm ">{product.name}</h1>
                <h2 className=" text-gray-500 text-xs ">
                  {product.country.name}
                </h2>
              </div>
            </motion.div>
          ))}
        {products &&
          products.map((product, idx) => (
            <motion.div
              key={`product-${idx}`}
              className="bg-white rounded-md cursor-pointer relative"
              style={{ translateY: translate }}
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}>
              <div className="absolute top-2 right-2 rounded-full text-xs font-bold bg-white px-2 py-1">
                HOT
              </div>
              <Image
                src={product.image}
                className="rounded-tr-md w-full rounded-tl-md text-sm "
                alt=""
                width={200}
                height={200}
              />
              <div className="p-4">
                <h1 className="font-semibold text-sm ">{product.name}</h1>
                <h2 className=" text-gray-500 text-xs ">
                  {product.country.name}
                </h2>
              </div>
            </motion.div>
          ))}
        {products &&
          products.map((product, idx) => (
            <motion.div
              key={`product-${idx}`}
              className="bg-white rounded-md cursor-pointer relative"
              style={{ translateY: translate }}
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}>
              <div className="absolute top-2 right-2 rounded-full text-xs font-bold bg-white px-2 py-1">
                HOT
              </div>
              <Image
                src={product.image}
                className="rounded-tr-md w-full rounded-tl-md text-sm "
                alt=""
                width={200}
                height={200}
              />
              <div className="p-4">
                <h1 className="font-semibold text-sm ">{product.name}</h1>
                <h2 className=" text-gray-500 text-xs ">
                  {product.country.name}
                </h2>
              </div>
            </motion.div>
          ))}
        {products &&
          products.map((product, idx) => (
            <motion.div
              key={`product-${idx}`}
              className="bg-white rounded-md cursor-pointer relative"
              style={{ translateY: translate }}
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}>
              <div className="absolute top-2 right-2 rounded-full text-xs font-bold bg-white px-2 py-1">
                HOT
              </div>
              <Image
                src={product.image}
                className="rounded-tr-md w-full rounded-tl-md text-sm "
                alt=""
                width={200}
                height={200}
              />
              <div className="p-4">
                <h1 className="font-semibold text-sm ">{product.name}</h1>
                <h2 className=" text-gray-500 text-xs ">
                  {product.country.name}
                </h2>
              </div>
            </motion.div>
          ))}
        {products &&
          products.map((product, idx) => (
            <motion.div
              key={`product-${idx}`}
              className="bg-white rounded-md cursor-pointer relative"
              style={{ translateY: translate }}
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}>
              <div className="absolute top-2 right-2 rounded-full text-xs font-bold bg-white px-2 py-1">
                HOT
              </div>
              <Image
                src={product.image}
                className="rounded-tr-md w-full rounded-tl-md text-sm "
                alt=""
                width={200}
                height={200}
              />
              <div className="p-4">
                <h1 className="font-semibold text-sm ">{product.name}</h1>
                <h2 className=" text-gray-500 text-xs ">
                  {product.country.name}
                </h2>
              </div>
            </motion.div>
          ))}
        {products &&
          products.map((product, idx) => (
            <motion.div
              key={`product-${idx}`}
              className="bg-white rounded-md cursor-pointer relative"
              style={{ translateY: translate }}
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}>
              <div className="absolute top-2 right-2 rounded-full text-xs font-bold bg-white px-2 py-1">
                HOT
              </div>
              <Image
                src={product.image}
                className="rounded-tr-md w-full rounded-tl-md text-sm "
                alt=""
                width={200}
                height={200}
              />
              <div className="p-4">
                <h1 className="font-semibold text-sm ">{product.name}</h1>
                <h2 className=" text-gray-500 text-xs ">
                  {product.country.name}
                </h2>
              </div>
            </motion.div>
          ))}
        {products &&
          products.map((product, idx) => (
            <motion.div
              key={`product-${idx}`}
              className="bg-white rounded-md cursor-pointer relative"
              style={{ translateY: translate }}
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}>
              <div className="absolute top-2 right-2 rounded-full text-xs font-bold bg-white px-2 py-1">
                HOT
              </div>
              <Image
                src={product.image}
                className="rounded-tr-md w-full rounded-tl-md text-sm "
                alt=""
                width={200}
                height={200}
              />
              <div className="p-4">
                <h1 className="font-semibold text-sm ">{product.name}</h1>
                <h2 className=" text-gray-500 text-xs ">
                  {product.country.name}
                </h2>
              </div>
            </motion.div>
          ))}
        {products &&
          products.map((product, idx) => (
            <motion.div
              key={`product-${idx}`}
              className="bg-white rounded-md cursor-pointer relative"
              style={{ translateY: translate }}
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}>
              <div className="absolute top-2 right-2 rounded-full text-xs font-bold bg-white px-2 py-1">
                HOT
              </div>
              <Image
                src={product.image}
                className="rounded-tr-md w-full rounded-tl-md text-sm "
                alt=""
                width={200}
                height={200}
              />
              <div className="p-4">
                <h1 className="font-semibold text-sm ">{product.name}</h1>
                <h2 className=" text-gray-500 text-xs ">
                  {product.country.name}
                </h2>
              </div>
            </motion.div>
          ))}
      </div>
    </motion.div>
  );
};
