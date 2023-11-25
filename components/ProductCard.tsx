"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { Products } from "@/types/Products";

type Props = {
  product: Products;
};

function ProductCard({ product }: Props) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Percentage of the element in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  console.log("productcard", product);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      className="h-full overflow-hidden card hover:scale-105 cursor-pointer transition-all duration-200 rounded-lg">
      <div className="max-w-[140px] w-full">
        <Image
          src={product.image[0].url}
          alt={product.name}
          width={150}
          height={150}
          className="object-cover max-h-[80px] md:max-h-[100px] !w-full h-full max-w-[140px] "
        />
      </div>
      <div className="flex flex-col text-xs px-2 py-1">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold">{product.name}</h1>
        </div>
        <div className="text-primary font-bold rounded">
          <span className="!text-sm">$</span>
          {product.price}
        </div>
        <div className="text-xs text-gray-600">{product.country.name}</div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
