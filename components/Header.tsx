"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo, SearchIcon, UserIcon, CartIcon, HamburgerIcon } from "@/icons";
import SideBar from "./SideBar";

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

  return (
    <>
      <div className={`w-screen pt-5 transition-all md:px-10 px-4 z-20`}>
        <div className="container flex items-center justify-between px-5 mx-auto sm:px-0">
          {/* LOGO */}
          <div className="cursor-pointer">
            <Image src={Logo} width={80} height={35} alt="Logo" />
          </div>

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

          {/* HAMBURGER */}
          <div
            onClick={() => setIsOpen(true)}
            className="cursor-pointer md:hidden">
            <Image
              src={HamburgerIcon}
              width={30}
              height={30}
              alt="Hamburguer-Icon"
            />
          </div>
        </div>
      </div>
      <SideBar links={links} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Header;
