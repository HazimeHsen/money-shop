"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SearchIcon, FilterIcon } from "@/icons";
import { ProductCard } from "@/components"; // Import your Modal component
import {
  getCategories,
  getCountry,
  getProducts,
} from "@/app/sanity/schemas/sanity-utils";
import { Products } from "@/types/Products";
import { Categories } from "@/types/Categories";
import { Countries } from "@/types/Countries";
import Modal from "./Modal";
import Slider from "./ImageSlider";
import { PortableText } from "@portabletext/react";

function Products() {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [products, setProducts] = useState<Products[]>([]);
  const [unFilteredProducts, setUnFilteredProducts] = useState<Products[]>([]);
  const [countries, setCountries] = useState<Countries[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Categories | null>(
    null
  );
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<Countries | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Products | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data: Products[] = await getProducts();
      const categories: Categories[] = await getCategories();
      const countries: Countries[] = await getCountry();
      setProducts(data);
      setCategories(categories);
      setCountries(countries);
      setUnFilteredProducts(data);

      let sortedProducts = [...data];

      if (selectedFilter === "priceup") {
        sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
      } else if (selectedFilter === "pricedown") {
        sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
      } else if (selectedFilter === "az") {
        sortedProducts = sortedProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }

      if (selectedCategory) {
        sortedProducts = sortedProducts.filter(
          (product) => product.category?._id === selectedCategory._id
        );
      }

      if (selectedCountry) {
        sortedProducts = sortedProducts.filter(
          (product) => product.country?._id === selectedCountry._id
        );
      }

      setProducts(sortedProducts);
    };

    fetchData();
  }, [selectedCategory, selectedCountry, selectedFilter]);

  const handleSearch = (e: any) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredProducts = [...products].filter(
      (product: Products) =>
        product.name.toLowerCase().includes(searchValue) ||
        product.category.name.toLowerCase().includes(searchValue)
    );
    if (searchValue === "") setProducts(unFilteredProducts);
    else setProducts(filteredProducts);
  };

  const handleCardClick = (product: Products) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="container w-screen min-h-screen mb-10 px-4 py-10 mx-auto ">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-extrabold lg:text-5xl">
          <span className="text-primary">Exclusive</span> Products
        </h1>
        <p className="text-sm font-semibold text-gray-400 md:text-base">
          Search for the latest fashion articles and find amazing products to
          buy from our huge collection
        </p>
      </div>
      <div className="flex my-5 items-center justify-center space-x-3">
        <div className="flex">
          <div className="flex items-center justify-center h-16 pl-4 bg-gray-100 py-7 rounded-s-lg">
            <Image src={SearchIcon} width={22} height={22} alt="Search-Icon" />
          </div>
          <input
            type="text"
            placeholder="Search"
            onChange={handleSearch}
            className="w-56 h-16 pl-4 text-gray-700 placeholder-gray-400 bg-gray-100 border border-transparent outline-none lg:w-96 text-md rounded-e-lg"
          />
        </div>
        <button className="hidden lg:block h-16 px-10 py-4 Button">
          Explore Now
        </button>
      </div>
      <div className="flex flex-col gap-4 md:flex-row items-center mb-5 justify-center ">
        <select
          value={selectedCategory?._id || ""}
          onChange={(e) =>
            setSelectedCategory(
              categories.find((cat) => cat._id === e.target.value) || null
            )
          }
          className="categorySelect w-[180px] ring-2 ring-primary outline-none px-4 py-2 border  rounded">
          <option className="hover:!bg-primary hover:!text-white !text-lg !py-2 !px-4">
            Select Category
          </option>
          {categories.map((category) => (
            <option
              className="hover:!bg-primary hover:!text-white !text-lg !py-2 !px-4"
              key={category._id}
              value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        <select
          value={selectedCountry?._id || ""}
          onChange={(e) =>
            setSelectedCountry(
              countries.find((country) => country._id === e.target.value) ||
                null
            )
          }
          className="categorySelect w-[180px] ring-2 ring-primary outline-none px-4 py-2 border  rounded">
          <option className="hover:!bg-primary hover:!text-white !text-lg !py-2 !px-4">
            Select Country
          </option>
          {countries.map((country) => (
            <option
              className="hover:!bg-primary hover:!text-white !text-lg !py-2 !px-4"
              key={country._id}
              value={country._id}>
              {country.name}
            </option>
          ))}
        </select>

        <div className="flex">
          <select
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="categorySelect w-[180px] ring-2 ring-primary outline-none px-4 py-2 border  rounded">
            <option value="" className="font-sans">
              Filters
            </option>
            <option value="priceup" className="font-sans">
              Price ↑
            </option>
            <option value="pricedown" className="font-sans">
              Price ↓
            </option>
            <option value="az" className="font-sans">
              A-Z
            </option>
          </select>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <div
              className="h-full"
              key={product._id}
              onClick={() => handleCardClick(product)}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal component */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          {selectedProduct && (
            <>
              <Slider
                images={[
                  selectedProduct.image,
                  selectedProduct.image,
                  selectedProduct.image,
                  selectedProduct.image,
                ]}
              />

              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <h1 className="font-semibold">{selectedProduct.name}</h1>
                  <div className="text-primary font-bold rounded">
                    ${selectedProduct.price}
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  {selectedProduct.country.name}
                </div>
                <div className="text-sm text-gray-600">
                  <PortableText value={selectedProduct.content} />
                </div>
              </div>
            </>
          )}
        </Modal>
      )}
    </div>
  );
}

export default Products;
