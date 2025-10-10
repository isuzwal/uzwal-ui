"use client";
import React, { useEffect } from "react";
import { motion, useAnimate, stagger } from "motion/react";

export default function Hero() {
  const text = "Join Waitlist";

  return (
    <div className="my-40 flex w-full flex-col items-center justify-center">
      <motion.h1
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          delay: 0.2,
        }}
        className="max-w-2xl bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-5xl leading-tight font-bold tracking-tight text-transparent md:text-7xl"
      >
        Unleash the power of intuitive finance
      </motion.h1>
      <motion.p
        initial={{
          opacity: 0,
          y: 10,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.5,
          delay: 0.6,
        }}
        className="text-md mx-auto mt-10 max-w-3xl p-1 text-center font-semibold text-neutral-500  selection:bg-cyan-300/80  md:text-xl"
      >
        Say goodbye to the <span className="text-primary">outdated </span>{" "}
        financial tools. Every small business owner, regardless of the
        background, can now manage their{" "}
        <span className="text-primary">business </span> like a pro. Simple.
        Intuitive. And never boring.
      </motion.p>
      <div className="mt-8 flex w-full max-w-lg justify-center">
        <motion.button className="relative cursor-pointer rounded-3xl border border-neutral-800 px-6 py-2 text-white">
          <div className="absolute inset-x-0 bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-600 to-transparent"></div>
          {text.split("  ").map((word, idx) => (
            <motion.span
              className="inline-block text-sm font-semibold"
              key={word + idx}
            >
              {word} &nbsp;
            </motion.span>
          ))}
        </motion.button>
      </div>
      <div className="mt-8">
        <div className="relative rounded-xl p-4 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.rect
              x="2"
              y="2"
              width="99%"
              height="99%"
              rx="12"
              ry="12"
              fill="none"
              stroke="url(#borderGradient)"
              strokeWidth="1"
               pathLength="1"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: 3,
                delay: 1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
            <defs>
              <linearGradient
                id="borderGradient"
                x1="10%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="oklch(70.7% 0.165 254.624)" />
                <stop offset="100%" stopColor="oklch(74% 0.238 322.16)" />
              </linearGradient>
            </defs>
          </svg>
          <img
            src="landing.png"
            className="relative z-10 mr-2 rounded-[12px]"
            alt="Landing"
          />
        </div>
      </div>
      <div className="py-10 px-3 mt-10">
      <div className=" md:flex-row flex   max-w-7xl mx-auto w-full flex-col md:items-center items-start  gap-6  justify-between  ">
         <h1  className=" selection:bg-cyan-300/80 max-w-2xl bg-gradient-to-r from-neutral-50 to-neutral-500 bg-clip-text  text-3xl leading-tight font-bold tracking-tight text-transparent  text-start md:text-4xl">Who said finance has to be boring?</h1>
       <p className="text-[16px] mx-auto  font-semibold max-w-3xl text-neutral-500  tracking-wide  selection:bg-cyan-300/80  ">
        With Cobalt, managing your business finances is effortless, empowering, and anything but boring. Our intuitive platform brings clarity to your cash flow, simplifies your financial decision-making, and puts the power of advanced financial management right at your fingertips. 
        <span className="text-neutral-200">Say no to spreadsheets and tools designed in the 80s.</span>
       </p>
      </div>
      </div>
      <div className="py-10 px-3 mt-10 max-w-7xl mx-auto w-full">
  <div className="flex flex-col gap-2 items-start">
    <h1 className="selection:bg-cyan-300/80 max-w-2xl bg-gradient-to-r from-neutral-50 to-neutral-500 bg-clip-text text-3xl leading-tight font-bold tracking-tight text-transparent text-start md:text-4xl">
      Everything you need.<br />Nothing you don't
    </h1>
    <p className="text-[16px] text-start w-full max-w-3xl font-semibold text-neutral-500 tracking-wide selection:bg-cyan-300/80">
      Financial management and visibility in one place. Experience <span className="text-neutral-200 font-semibold">a flexible toolkit</span> that makes every task feel like a breeze.
    </p>
  </div>
</div>
    </div>
  );
}
