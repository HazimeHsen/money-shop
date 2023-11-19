"use client";
import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo, SearchIcon, UserIcon, CartIcon, HamburgerIcon } from "@/icons";
import SideBar from "./SideBar";
import { CartContext, CartContextType } from "@/context/CartContext";
import ToggleTheme from "./toggleLightAndDarkModeButton";
import { FiMenu, FiShoppingCart } from "react-icons/fi";

type Props = {};

function Header({}: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/#products" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];
  const cartContext = useContext<CartContextType | undefined>(CartContext);

  const { cartItems } = cartContext || {};

  return (
    <>
      <div className={`pt-5 transition-all md:px-10 px-4 z-20`}>
        <div className="container flex items-center justify-between px-5 mx-auto sm:px-0">
          {/* LOGO */}
          <div className="cursor-pointer text-3xl font-extrabold">XOCO</div>

          {/* NAVIGATION */}
          <div className="items-center hidden space-x-10 font-semibold md:flex">
            {links.map((link) => (
              <a
                className="hover:text-primary duration-200 transition-all"
                href={link.href}
                key={link.name}>
                <h1>{link.name}</h1>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Link href="/cart">
                <FiShoppingCart size={25} />
              </Link>
              <span>
                {cartItems && cartItems?.length > 0 && (
                  <span className="text-white bg-red-600 rounded-full w-4 h-4 absolute top-0 -right-2 flex items-center justify-center p-1 text-xs">
                    {cartItems?.length}
                  </span>
                )}
              </span>
            </div>

            <ToggleTheme />

            <div
              onClick={() => setIsOpen(true)}
              className="cursor-pointer md:hidden">
              <FiMenu size={25} />
            </div>
          </div>
        </div>
      </div>
      <SideBar links={links} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Header;
