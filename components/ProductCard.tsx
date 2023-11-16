import React from "react";
import Image from "next/image";
import { Products } from "@/types/Products";
import { PortableText } from "@portabletext/react";

type Props = {
  product: Products;
};

function ProductCard({ product }: Props) {
  return (
    <div className="w-fit h-full bg-green-100 ring-2 ring-primary p-4 rounded-lg">
      <div>
        <Image
          src={product.image}
          alt={product.name}
          width={250}
          height={250}
          className="w-[150px] h-[100px] object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col ">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold">{product.name}</h1>
          <div className="text-primary font-bold rounded p-2">
            ${product.price}
          </div>
        </div>
        <div className="text-sm text-gray-600">
          <PortableText value={product.content} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
