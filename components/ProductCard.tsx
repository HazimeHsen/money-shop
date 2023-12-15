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
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -50 },
      }}
      transition={{ duration: 0.1 }}
      className="h-full hover:scale-105 cursor-pointer transition-all p-3 duration-200">
      <div className="max-h-[80px] md:max-h-[100px] !w-full !h-full bg-gray-200 rounded-lg">
        <Image
          src={product.image[0].url}
          alt={product.name}
          width={150}
          height={150}
          className="object-cover max-h-[80px] md:max-h-[100px] !w-full rounded-lg !h-full "
        />
      </div>
      <div className="flex flex-col text-xs py-1">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold">{product.name}</h1>
          <div className="text-primary font-bold rounded">
            <span className="!text-sm">$</span>
            {product.price}
          </div>
        </div>
        <div className="text-xs text-gray-500">{product.country.name}</div>
        <button
          onClick={handleAddToCart}
          className="px-1 mt-2 w-full py-1 bg-transparent ring-2 text-primary ring-primary rounded-full hover:bg-primary/30">
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}

export default ProductCard;
