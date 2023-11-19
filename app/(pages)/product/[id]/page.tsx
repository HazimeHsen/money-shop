"use client";
import { getProduct } from "@/app/sanity/schemas/sanity-utils";
import { PortableText } from "@portabletext/react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { getProducts } from "../../../sanity/schemas/sanity-utils";
import { useContext, useEffect, useState } from "react";
import { Products } from "@/types/Products";
import Slider from "@/components/ImageSlider";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { Header } from "@/components";
import { CartContext, CartContextType } from "@/context/CartContext";
// ... other imports

const Page = ({ params }: { params: Params }) => {
  const { id } = params;
  const [product, setProduct] = useState<Products | null>(null);
  const cartContext = useContext<CartContextType | undefined>(CartContext);

  const { cartItems, addToCart, removeFromCart } = cartContext || {};

  const handleAddToCart = () => {
    if (addToCart && product) {
      addToCart(product);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products: Products[] = await getProducts();
        const selectedProduct = products.find((p) => p._id === id);
        console.log(products);
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
    <>
      <Header />
      <div className="min-h-screen p-5">
        <div className="my-3">
          <Link href="/" className="my-3 ">
            <FaArrowLeft size={25} />
          </Link>
        </div>
        {product ? (
          <div className="flex md:flex-row flex-col h-full gap-5">
            <div className="w-full md:w-1/2">
              <Slider images={product.image} />
            </div>

            <div className="flex flex-col space-y-1 h-full md:w-1/2  py-5 w-full">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-extrabold">
                  {product.name || ""}
                </h1>
                <div className="text-primary font-bold rounded">
                  ${product.price || ""}
                </div>
              </div>

              <div className="text-sm gray-text">
                <PortableText value={product.content || []} />
              </div>
              <div className="flex gap-3 mt-5">
                <button className="px-4 py-2 bg-primary text-white rounded-full w-1/2 hover:bg-primary/90">
                  Buy Now
                </button>
                <button
                  onClick={handleAddToCart}
                  className="px-4 py-2 bg-transparent ring-2 text-primary ring-primary rounded-full w-1/2 hover:bg-primary/30">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Page;
