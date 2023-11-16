"use client";
import { sendEmail } from "@/app/sendEmail";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent) => {};

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Percentage of the element in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div id="contact" className="container mx-auto md:px-6 relative z-0">
      <section className="relative z-0">
        <div className="container px-6 md:px-12 relative z-0">
          <div className="block rounded-lg bg-[#4d875493] px-6 py-12 shadow-lg md:py-16 md:px-12 -mt-[100px] ">
            <div className="mb-12 text-3xl font-extrabold text-white text-center">
              Contact Us
            </div>
            <div className="mx-auto max-w-[700px]">
              <form>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="focus:ring-2 ring-primary  bg-gray-200 peer block min-h-[auto] w-full rounded border-0 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary "
                    id="exampleInput90"
                    placeholder="Name"
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="email"
                    className="focus:ring-2 ring-primary bg-gray-200 peer block min-h-[auto] w-full rounded border-0 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary "
                    id="exampleInput91"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    className="focus:ring-2 ring-primary  bg-gray-200 peer block min-h-[auto] w-full rounded border-0 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    placeholder="Your message"></textarea>
                </div>
                <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                  <input
                    className=" relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    value=""
                    id="exampleCheck96"
                    checked
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="exampleCheck96">
                    Send me a copy of this message
                  </label>
                </div>
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
