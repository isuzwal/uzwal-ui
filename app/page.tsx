"use client";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="[perspective::1000px] [transform-style:preserve-3d]   h-screen w-full bg-neutral-900 flex items-center justify-center">
      <motion.button
        whileHover={{
          rotateX: 20,
          rotateY: 12,
          boxShadow: "0px 10px 60px rgba(249, 115, 22, 0.7)",
          y: -5,
        }}
        whileTap={{
          y: 10,
        }}
        style={{
          translateZ: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeIn",
        }}
        className=" group  relative text-neutral-400   cursor-pointer
       font-semibold px-12 py-4 rounded-lg bg-black  shadow_[0px_1px_4px_0px_right(255,255,255,0.1)_inset[0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]">
        <span className="group-hover:text-orange-300">Learing animation </span>
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-orange-300 *:to-transparent h-px w-3/4 mx-auto"></span>
        <span
          className="absolute  opacity-0 group-hover:opacity-100  transition-opacity duration-300 
         inset-x-0 bottom-px  blur-sm h-[5px]
         bg-gradient-to-r from-transparent via-orange-300 to-transparent w-3/4 mx-auto"></span>
      </motion.button>
    </div>
  );
}
