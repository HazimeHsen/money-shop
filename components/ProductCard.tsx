import React from "react";
import Image from "next/image";
import { Products } from "@/types/Products";

type Props = {
  product: Products;
};

function ProductCard({ product }: Props) {
  console.log("productcard", product);
  return (
    <div className="w-fit max-w-[120px] overflow-hidden card h-full hover:scale-105 cursor-pointer transition-all duration-200 rounded-lg">
      <div>
        <Image
          src={product.image[0].url}
          alt={product.name}
          width={150}
          height={150}
          className="object-cover w-full max-w-[120px]"
        />
      </div>
      <div className="flex flex-col text-xs px-2 py-1">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold">{product.name}</h1>
          <div className="text-primary font-bold rounded">${product.price}</div>
        </div>
        <div className="text-xs text-gray-600">{product.country.name}</div>
      </div>
    </div>
  );
}

export default ProductCard;
