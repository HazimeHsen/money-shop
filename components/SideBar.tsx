"use client";
import React from "react";

const SideBar = ({
  isOpen,
  setIsOpen,
  links,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  links: {
    name: string;
    href: string;
  }[];
}) => {
  return (
    <div
      className={`md:hidden block fixed top-0 right-0 z-50 w-64 h-screen p-4 overflow-y-auto transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } sidebar `}>
      <div className="flex items-center justify-between mt-3">
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold gray-text uppercase ">
          Menu
        </h5>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="gray-text bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5  inline-flex items-center ">
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
      </div>
      <div className="py-4 mt-3 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {links.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="flex items-center p-2 rounded-lg  hover:bg-gray-300 group">
                <span className="ms-3">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
