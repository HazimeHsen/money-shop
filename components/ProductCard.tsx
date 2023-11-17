import React from "react";
import Image from "next/image";
import { Products } from "@/types/Products";
import { PortableText } from "@portabletext/react";

type Props = {
  product: Products;
};

function ProductCard({ product }: Props) {
  return (
    <div className="w-fit h-full hover:scale-105 cursor-pointer transition-all duration-200 bg-gray-100 ring-1 ring-gray-300 rounded-lg">
      <div>
        <Image
          src={product.image}
          alt={product.name}
          width={250}
          height={250}
          className="w-full object-cover"
        />
      </div>
      <div className="flex flex-col px-4 pb-2">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold">{product.name}</h1>
          <div className="text-primary font-bold rounded p-2">
            ${product.price}
          </div>
        </div>
        <div className="text-sm text-gray-600">{product.country.name}</div>
      </div>
    </div>
  );
}

export default ProductCard;
