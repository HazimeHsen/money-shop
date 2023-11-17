"use client";
import { getProduct } from "@/app/sanity/schemas/sanity-utils";
import { PortableText } from "@portabletext/react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { getProducts } from "../../../sanity/schemas/sanity-utils";
import { useEffect, useState } from "react";
import { Products } from "@/types/Products";
import Slider from "@/components/ImageSlider";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
// ... other imports

const Page = ({ params }: { params: Params }) => {
  const { id } = params;
  const [product, setProduct] = useState<Products | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products: Products[] = await getProducts();
        const selectedProduct = products.find((p) => p._id === id);

        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          console.error(`Product with ID ${id} not found`);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="min-h-screen p-5">
      <div className="my-3">
        <Link href="/" className="my-3 ">
          <FaArrowLeft size={25} />
        </Link>
      </div>
      {product ? (
        <div className="flex md:flex-row flex-col gap-5">
          <div className="w-full md:w-1/2">
            <Slider
              images={[
                product.image,
                product.image,
                product.image,
                product.image,
              ]}
            />
          </div>

          <div className="flex flex-col space-y-1 md:w-1/2 w-full">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold">{product.name || ""}</h1>
              <div className="text-primary font-bold rounded">
                ${product.price || ""}
              </div>
            </div>
            <div className="text-sm text-gray-600 mb-2">
              {product.country?.name || ""}
            </div>
            <div className="text-sm text-gray-600">
              <PortableText value={product.content || []} />
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Page;
