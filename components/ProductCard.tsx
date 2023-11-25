"use client";
import React, { useState, useEffect, useContext } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { Products } from "@/types/Products";
import { CartContext } from "@/context/CartContext";

type Props = {
  product: Products;
};

function ProductCard({ product }: Props) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Percentage of the element in view
  });
  const { addToCart } = useContext(CartContext) || {};

  const handleAddToCart = () => {
    if (addToCart && product) {
      addToCart(product);
    }
  };

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
      className="h-full overflow-hidden hover:scale-105 cursor-pointer transition-all duration-200">
      <div className="max-h-[80px] md:max-h-[100px] !w-full !h-full max-w-[140px] bg-gray-200">
        <Image
          src={product.image[0].url}
          alt={product.name}
          width={150}
          height={150}
          className="object-cover max-h-[80px] md:max-h-[100px] !w-full !h-full max-w-[140px] "
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
        <div className="text-xs text-gray-500">{product.country.name}</div>
        <button
          onClick={handleAddToCart}
          className="px-4 mt-3 w-full py-2 bg-transparent ring-2 text-primary ring-primary rounded-full hover:bg-primary/30">
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}

export default ProductCard;
