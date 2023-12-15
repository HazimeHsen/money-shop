"use client";
import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo, SearchIcon, UserIcon, CartIcon, HamburgerIcon } from "@/icons";
import SideBar from "./SideBar";
import { CartContext, CartContextType } from "@/context/CartContext";
import ToggleTheme from "./toggleLightAndDarkModeButton";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import Animation from "@/app/Animation";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import ClientOnly from "./ClientOnly";
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
    // { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];
  const cartContext = useContext<CartContextType | undefined>(CartContext);

  const { cartItems } = cartContext || {};

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Percentage of the element in view
  });

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <>
      <div className={`pt-5 md:px-10 px-4 md:mb-5 z-20`}>
        <div className="flex w-full items-center justify-between px-5 mx-auto sm:px-0">
          {/* LOGO */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -200 },
            }}
            transition={{ duration: 0.5, delay: 1 }}
            className="cursor-pointer text-3xl font-extrabold ">
            <Link className="flex items-center" href="/">
              <div>
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={70}
                  height={50}
                />
              </div>
              <div className="md:block hidden">Heritage Kings</div>
            </Link>
          </motion.div>

          {/* NAVIGATION */}
          <div className="items-center text-lg hidden space-x-10 font-semibold md:flex">
            {links.map((link, i) => (
              <a
                className="hover:text-primary"
                href={link.href}
                key={link.name}>
                <motion.div
                  initial="hidden"
                  animate={controls}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: -100 },
                  }}
                  transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}>
                  {link.name}
                </motion.div>
              </a>
            ))}
          </div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 200 },
            }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex items-center gap-4">
            <div className="relative">
              <Link href="/cart">
                <FiShoppingCart size={25} />
              </Link>
              <ClientOnly>
                <span>
                  {cartItems && cartItems?.length > 0 && (
                    <span className="text-white bg-red-600 rounded-full w-4 h-4 absolute -top-1 -right-2 flex items-center justify-center p-1 text-xs">
                      {cartItems?.length}
                    </span>
                  )}
                </span>
              </ClientOnly>
            </div>

            <ToggleTheme />

            <div
              onClick={() => setIsOpen(true)}
              className="cursor-pointer md:hidden">
              <FiMenu size={25} />
            </div>
          </motion.div>
        </div>
      </div>
      <SideBar links={links} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Header;
