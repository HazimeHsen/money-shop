"use client";
import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation, Variants } from "framer-motion";

interface AnimatedOnInViewProps {
  children: React.ReactNode;
  delay?: number;
  startInView?: boolean;
  duration?: number;
  threshold?: number;
  animationType?:
    | "fade-left"
    | "fade-right"
    | "fade-top"
    | "fade"
    | "fade-bottom"
    | "width-increase";
  className?: string;
}

const Animation: React.FC<AnimatedOnInViewProps> = ({
  children,
  delay = 0,
  startInView = true,
  duration = 0.5,
  animationType = "fade",
  threshold = 0.3,
  className = "",
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: threshold,
    triggerOnce: true,
  });

  const animationVariants = {
    "fade-left": {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: -300 },
    },
    "fade-right": {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: 300 },
    },
    "fade-top": {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: -300 },
    },
    fade: {
      visible: { opacity: 1 },
      hidden: { opacity: 0 },
    },
    "fade-bottom": {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 50 },
    },
    "width-increase": {
      visible: { opacity: 1, width: "100%" },
      hidden: { opacity: 0, width: 0 },
    },
  };

  const transition = {
    duration,
    delay,
  };

  useEffect(() => {
    if (startInView) {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    } else {
      controls.start("visible");
    }
  }, [startInView, inView, controls]);

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants[animationType]}
      transition={transition}
      className={className}>
      {children}
    </motion.span>
  );
};

export default Animation;
