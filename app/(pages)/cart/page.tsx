"use client";
import React, { useContext, useEffect } from "react";
import Header from "../../../components/Header";
import Link from "next/link";
import { CartContext, CartContextType } from "@/context/CartContext";
import { Products } from "@/types/Products";
import Image from "next/image";

const CartPage = () => {
  const cartContext = useContext<CartContextType | undefined>(CartContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Your client-specific code here
      console.log("Component has been rendered on the client side");
    }
  }, []);
  if (!cartContext) {
    // Handle the case where the context is undefined
    return <div>Error: Cart context is undefined</div>;
  }

  const { cartItems, getCartTotal, addToCart, removeFromCart } = cartContext;
  const totalQuantity = cartItems?.length ?? 0;
  const totalPrice = getCartTotal ? getCartTotal() : 0;
  const handleRemoveFromCart = (product: Products) => {
    if (removeFromCart) {
      removeFromCart(product);
    }
  };
  return (
    <>
      <Header />
      <div className="px-5 h-full">
        <div className="w-full h-full ">
          {totalQuantity === 0 ? (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xl w-full">
              <h2>Cart is empty</h2>
              <Link
                className="flex justify-center font-semibold text-indigo-600"
                href="/">
                <svg
                  className="fill-current mr-2 text-indigo-600 w-4"
                  viewBox="0 0 448 512">
                  {/* Continue Shopping Icon */}
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                <div className="text-nowrap w-fit">Continue Shopping</div>
              </Link>
            </div>
          ) : (
            <div className="flex md:flex-nowrap flex-wrap-reverse gap-4 mt-10">
              <div className="md:w-3/4 w-full bg-gray-100 rounded-lg p-6 md:p-10">
                <div className="flex justify-between border-b p-5">
                  <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                  <h2 className="font-semibold text-2xl">
                    {totalQuantity > 0 ? totalQuantity.toString() : 0} Items
                  </h2>
                </div>
                <div className="flex mt-10 mb-5 w-full flex-1 flex-grow-1">
                  <h3 className="font-semibold flex-1 text-gray-600 text-xs uppercase w-2/5">
                    Product Details
                  </h3>
                  <h3 className="font-semibold flex-1 text-center text-gray-600 text-xs uppercase w-1/5">
                    Country
                  </h3>
                  <h3 className="font-semibold flex-1 text-center text-gray-600 text-xs uppercase w-1/5">
                    Price
                  </h3>
                </div>
                {cartItems && cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div
                      key={item._id}
                      className="flex justify-between items-center hover:bg-gray-100 py-5 w-full flex-1 flex-grow-1 border-b">
                      <div className="flex items-center w-2/5 flex-1">
                        <div className="!w-16">
                          <Image
                            width={60}
                            height={60}
                            className="rounded-md"
                            src={item.image}
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col  ml-4 flex-grow">
                          <span className="font-bold text-sm">{item.name}</span>

                          <button
                            onClick={() => handleRemoveFromCart(item)}
                            className="font-semibold text-start w-fit hover:text-red-500 text-gray-500 text-xs">
                            Remove
                          </button>
                        </div>
                      </div>
                      <span className="w-2/5 text-center font-semibold">
                        {item.country.name}
                      </span>
                      <span className="text-center w-1/5 font-semibold text-sm flex-1">
                        ${item.price}
                      </span>
                    </div>
                  ))
                ) : (
                  <p>No items in the cart.</p>
                )}
                <Link
                  className="flex font-semibold text-indigo-600 text-sm mt-10"
                  href="/">
                  <svg
                    className="fill-current mr-2 text-indigo-600 w-4"
                    viewBox="0 0 448 512">
                    {/* Continue Shopping Icon */}
                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                  </svg>
                  Continue Shopping
                </Link>
              </div>
              <div
                id="summary"
                className="md:w-1/4 w-full p-6 md:px-8 md:py-10 bg-gray-100 rounded-lg">
                <h1 className="font-semibold text-2xl border-b pb-8">
                  Order Summary
                </h1>
                <div className="flex justify-between mt-10 mb-5">
                  <span className="font-semibold text-sm uppercase">
                    {" "}
                    Items ({totalQuantity > 0 ? totalQuantity.toString() : 0})
                  </span>
                  <span className="font-semibold text-sm">
                    ${totalPrice > 0 ? totalPrice.toString() : 0}
                  </span>
                </div>
                <div className="border-t mt-8">
                  <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total cost</span>
                    <span>${totalPrice > 0 ? totalPrice.toString() : 0}</span>
                  </div>
                  <button className="w-full">CheckOut</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
