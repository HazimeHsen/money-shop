"use client";
import { sendEmail } from "@/app/sendEmail";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { arimo } from "@/app/font";
import { BsTiktok, BsFacebook } from "react-icons/bs";

const Socials = [
  {
    title: "Facebook ",
    icon: BsFacebook,
    link: "#",
  },
  {
    title: "Instagram",
    icon: BsTiktok,
    link: "#",
  },
];
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
    <div id="contact" className="container mx-auto md:px-6 py-5 relative z-0">
      <section className="relative z-0">
        <div className="container px-6 md:px-12 relative z-0">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.5 }}
            className="block rounded-lg contact  px-6 py-12 shadow-lg md:py-16 md:px-12 ">
            <div
              className={`mb-10 text-3xl font-extrabold text-white text-center ${arimo.className}`}>
              Contact Us
              <div className="flex mt-2 gap-2 justify-center">
                {Socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    className="text-gray-500 hover:text-primary ">
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
            <div className="mx-auto max-w-[700px]">
              <form>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className={`${arimo.className} focus:ring-2 ring-primary  bg-gray-200 peer block min-h-[auto] w-full rounded border-0 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary  `}
                    id="exampleInput90"
                    placeholder="Name"
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="email"
                    className={`${arimo.className} focus:ring-2 ring-primary bg-gray-200 peer block min-h-[auto] w-full rounded border-0 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary `}
                    id="exampleInput91"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    className={`${arimo.className} focus:ring-2 ring-primary  bg-gray-200 peer block min-h-[auto] w-full rounded border-0 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100`}
                    id="exampleFormControlTextarea1"
                    rows={3}
                    placeholder="Your message"></textarea>
                </div>

                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="Button w-full">
                  Send
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
