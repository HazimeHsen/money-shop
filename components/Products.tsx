"use client";
import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { SearchIcon } from "@/icons";
import { ProductCard } from "@/components";
import Link from "next/link";
import {
  getCategories,
  getCountry,
  getProducts,
} from "@/app/sanity/schemas/sanity-utils";
import { Products } from "@/types/Products";
import { Categories } from "@/types/Categories";
import { Countries } from "@/types/Countries";
import Modal from "./Modal";
import FilterList from "./FilterList";

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
  const filterOptions: { value: string; label: string }[] = [
    { value: "priceup", label: "Price ↑" },
    { value: "pricedown", label: "Price ↓" },
    { value: "az", label: "A-Z" },
  ];

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

  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div id="products" className="container min-h-screen px-4 py-5 mx-auto">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5 }}>
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
              <Image
                src={SearchIcon}
                width={22}
                height={22}
                alt="Search-Icon"
              />
            </div>
            <input
              type="text"
              placeholder="Search"
              onChange={handleSearch}
              className="w-56 h-16 pl-4 text-gray-700 placeholder-gray-400 bg-gray-100 border border-transparent outline-none lg:w-96 text-md rounded-r-lg"
            />
          </div>
          <button className="hidden lg:block h-16 px-10 py-4 Button">
            Explore Now
          </button>
        </div>
        <div className="flex flex-row flex-wrap gap-2 md:flex-row items-center mb-5 justify-center ">
          {/* Use FilterList for Categories */}
          <div className="md:flex justify-center">
            <div className="grid grid-cols-2 gap-2">
              <FilterList
                selectedValue={selectedCategory}
                options={categories}
                onChange={setSelectedCategory}
                label="Select Category"
              />
              {/* Use FilterList for Countries */}
              <FilterList
                selectedValue={selectedCountry}
                options={countries}
                onChange={setSelectedCountry}
                label="Select Country"
              />
            </div>
          </div>
          <FilterSelect
            selectedValue={selectedFilter}
            options={[
              { value: "priceup", label: "Price ↑" },
              { value: "pricedown", label: "Price ↓" },
              { value: "az", label: "A-Z" },
            ]}
            onChange={(value) => setSelectedFilter(value)}
            label="Filters"
          />
        </div>
      </motion.div>
      <div className="flex justify-center">
        <div className="grid gap-2 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-7">
          {products.map((product) => (
            <Link
              href={`/product/${product._id}`}
              className="h-full"
              key={product._id}
              onClick={() => handleCardClick(product)}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;

interface FilterSelectProps {
  selectedValue: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  label: string;
}

const FilterSelect: React.FC<FilterSelectProps> = ({
  selectedValue,
  options,
  onChange,
  label,
}) => {
  return (
    <div className="relative pr-4  w-[150px] text-sm md:w-[200px] rounded-md">
      <Listbox value={selectedValue} onChange={(value) => onChange(value)}>
        <div className="relative">
          <Listbox.Button className="w-full text-xs md:text-base outline-none px-4 py-2 border appearance-none rounded">
            <span className="mr-4">
              {selectedValue
                ? options.find((option) => option.value === selectedValue)
                    ?.label
                : label}
            </span>
            <span className="absolute inset-y-0 right-0 flex flex-col justify-center items-center px-2 pointer-events-none">
              <FaChevronUp size={12} className="text-gray-600" />
              <FaChevronDown size={12} className="text-gray-600" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {options.map((option) => (
                <Listbox.Option
                  key={option.value}
                  value={option.value}
                  className={({ active, selected }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active || selected
                        ? "bg-green-300 text-green-900"
                        : "text-gray-900"
                    }`
                  }>
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}>
                        {option.label}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

