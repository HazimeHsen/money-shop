"use client";
import React, { useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { BsTiktok, BsFacebook } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

const Socials = [
  {
    title: "Facebook ",
    icon: BsFacebook,
    link: "#",
    subTitle: "lorem eifi ifjeijf ojrfojoe",
    info: "hello",
  },
  {
    title: "Instagram",
    icon: BsTiktok,
    link: "#",
    subTitle: "lorem eifi ifjeijf ojrfojoe",
    info: "hello",
  },
  {
    title: "Instagram",
    icon: MdOutlineMail,
    link: "#",
    subTitle: "Our friendly team is here to help.",
    info: "hello@merakiui.com",
  },
];
const ContactUs = () => {
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
      <section className="">
        <div className="container px-6 py-12 mx-auto">
          <div className="text-center">
            <p className="font-medium text-blue-500">Contact us</p>

            <h1 className="mt-2 text-2xl font-semibold md:text-3xl">
              Get in touch
            </h1>

            <p className="mt-3 text-gray-500">
              Our friendly team is always here to chat.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            {Socials.map((social, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center">
                <a
                  href={social.link}
                  className="p-3 text-blue-500 rounded-full bg-blue-100/80">
                  <social.icon size={25} />
                </a>

                <h2 className="mt-4 text-lg font-medium">{social.title}</h2>
                <p className="mt-2 text-gray-500">{social.subTitle}</p>
                <a href={social.link} className="mt-2 text-blue-500">
                  {social.info}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default ContactUs;
