"use client";

import {
  Bell,
  ChevronDown,
  Cog,
  Layers3,
  Newspaper,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "motion/react";

export const SibeBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);

  const toggleFirst = () => setOpen((prev) => !prev);
  const toggleSecond = () => setSecondOpen((prev) => !prev);

  
  const sidebarVariants: Variants = {
    expanded: { width: "15rem" },
    closed: { width: "4rem" },
  };

 
  const childVariants: Variants = {
    expanded: { opacity: 1, x: 0 },
    closed: { opacity: 1, x: -1 },
  };


  const grandVariantsParent: Variants = {
    open: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
    closed: { transition: { staggerChildren: 0.1, delayChildren: -1 } },
  };

 
  const grandChildVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    closed: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  
  const items = [
    {
      title: "Automation",
      svg: {
        viewBox: "0 0 180 180",
        width: 20,
        height: 30,
        path: "M50 0 L50 180 L150 180",
        strokeWidth: 10,
        top: "-top-3",
        z: "z-30",
        ml: "ml-[3.5px]",
      },
    },
    {
      title: "Mail",
      svg: {
        viewBox: "0 0 310 310",
        width: 30,
        height: 50,
        path: "M50 0 L50 370 L170 370",
        strokeWidth: 10,
        top: "-top-8",
        z: "z-20",
        ml: "ml-[3.5px]",
      },
    },
    {
      title: "Congratulations",
      svg: {
        viewBox: "0 0 250 250",
        width: 30,
        height: 50,
        path: "M50 0 L50 250 L150 250",
        strokeWidth: 8,
        top: "-top-8",
        z: "z-20",
        ml: "ml-[2px]",
      },
    },
    {
      title: "Exchange rates",
      svg: {
        viewBox: "0 0 310 310",
        width: 30,
        height: 51,
        path: "M50 0 L50 420 L170 420",
        strokeWidth: 10,
        top: "-top-10",
        z: "z-20",
        ml: "ml-[3.5px]",
      },
    },
  ];

  return (
    <div className="flex h-[600px] items-center justify-center">
      <div className="relative flex h-[600px] flex-col items-center justify-center max-w-2xl w-full gap-2 rounded-2xl border border-neutral-900/90 bg-neutral-900 py-6 px-6">
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="absolute top-3 left-4 px-3 py-1 border bg-neutral-950/80 border-neutral-900 rounded-md cursor-pointer text-neutral-400 text-base font-semibold"
        >
          {expanded ? "Close" : "Open"}
        </button>

    
        <motion.div
          initial={false}
          variants={sidebarVariants}
          animate={expanded ? "expanded" : "closed"}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex flex-col gap-4 border border-neutral-950/80 bg-neutral-950/80 rounded-xl px-1.5 py-1"
        >
        
          <div
            className={`flex gap-2 items-center ${
              expanded ? "justify-between" : "justify-center"
            } hover:bg-neutral-800/90 transition-all duration-300 rounded-[8px] px-2 py-1.5`}
          >
            <div className="flex items-center gap-3 text-neutral-100 font-semibold text-[16px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 128 128"
                className="fill-neutral-300"
              >
                <path d="m125.571 39.926-58.5-39c-1.997-1.23-4.128-1.24-6.142 0l-58.5 39C.929 40.926 0 42.712 0 44.497v39c0 1.786.929 3.572 2.429 4.571l58.5 39.006c1.996 1.229 4.128 1.24 6.142 0l58.5-39.006c1.5-.999 2.429-2.785 2.429-4.57v-39c0-1.786-.929-3.572-2.429-4.572m-56.07-24.144l43.07 28.715-19.214 12.858L69.5 41.425V15.784zm-11.001 0v25.644L34.642 57.354 15.428 44.498zm-47.5 39 13.786 9.215L11 73.212zm47.5 57.43L15.428 83.497 34.642 70.64 58.5 86.569zM64 76.997l-19.428-13 19.428-13 19.428 13zm5.5 35.215V86.569L93.357 70.64l19.214 12.857-43.07 28.715zm47.5-39-13.786-9.215L117 54.783z" />
              </svg>
              {expanded && (
                <motion.h1
                  variants={childVariants}
                  animate={expanded ? "expanded" : "closed"}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col text-neutral-200 font-bold text-[18px]"
                >
                  Pure
                  <span className="text-neutral-400 text-[10px]">Agency</span>
                </motion.h1>
              )}
            </div>
            {expanded && <Bell className="size-6 text-neutral-300" />}
          </div>

        
          <div>
            <div
              className={`flex gap-1 items-center ${
                expanded ? "justify-between" : "justify-center"
              } border border-neutral-950/80 bg-neutral-900/80 rounded-[8px] p-1.5 shadow-xl hover:bg-neutral-800 transition-all duration-300`}
            >
              <motion.h1
                variants={childVariants}
                animate={expanded ? "expanded" : "closed"}
                transition={{ duration: 0.3 }}
                className="flex gap-2 items-center p-0.5"
              >
                <Newspaper className="size-4 text-neutral-400" />
                {expanded && (
                  <span className="text-[16px] text-neutral-300 font-semibold">
                    Newsletters
                  </span>
                )}
              </motion.h1>
              {expanded && (
                <button onClick={toggleFirst} className="cursor-pointer">
                  <ChevronDown className="text-neutral-400" />
                </button>
              )}
            </div>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={grandVariantsParent}
                  className="flex flex-col gap-0"
                >
                  <motion.div
                    variants={grandChildVariants}
                    className="relative px-4 flex items-end mt-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 180 180"
                      width="20"
                      height="30"
                      className="absolute -top-3 ml-[3.5px] z-30"
                    >
                      <path
                        d="M50 0 L50 180 L150 180"
                        stroke="oklch(70.8% 0 0)"
                        strokeWidth="10"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h1 className="text-neutral-400 text-[16px] max-w-40 mx-auto w-full font-medium ml-5 bg-neutral-800 border border-neutral-800/80 rounded-md px-2.5">
                      Lists and contacts
                    </h1>
                  </motion.div>

                  <motion.div
                    variants={grandChildVariants}
                    className="relative px-4 flex items-end mt-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 310 310"
                      width="30"
                      height="50"
                      className="absolute -top-8 ml-[3.5px] z-20"
                    >
                      <path
                        d="M50 0 L50 370 L170 370"
                        stroke="oklch(70.8% 0 0)"
                        strokeWidth="10"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h1 className="text-neutral-400 text-[16px] font-medium ml-5 max-w-40 mx-auto w-full bg-neutral-800 border border-neutral-800/80 rounded-md px-2.5">
                      Stop list
                    </h1>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div>
            <div
              className={`flex gap-1 items-center ${
                expanded ? "justify-between" : "justify-center"
              } border border-neutral-950/80 bg-neutral-900/80 rounded-[8px] p-1.5 shadow-xl hover:bg-neutral-800 transition-all duration-300`}
            >
              <motion.h1
                variants={childVariants}
                animate={expanded ? "expanded" : "closed"}
                transition={{ duration: 0.3 }}
                className="flex gap-2 items-center p-0.5"
              >
                <Layers3 className="size-4 text-neutral-400" />
                {expanded && (
                  <span className="text-[16px] text-neutral-300 font-semibold">
                    Functions
                  </span>
                )}
              </motion.h1>
              {expanded && (
                <button onClick={toggleSecond} className="cursor-pointer">
                  <ChevronDown className="text-neutral-400" />
                </button>
              )}
            </div>

            <AnimatePresence>
              {secondOpen && (
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={grandVariantsParent}
                  className="flex flex-col gap-0"
                >
                  {items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={grandChildVariants}
                      className="relative px-4 flex items-end mt-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox={item.svg.viewBox}
                        width={item.svg.width}
                        height={item.svg.height}
                        className={`absolute border border-transparent ${item.svg.top} ${item.svg.ml} ${item.svg.z}`}
                      >
                        <path
                          d={item.svg.path}
                          stroke="oklch(70.8% 0 0)"
                          strokeWidth={item.svg.strokeWidth}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h1 className="text-neutral-400 text-[16px] font-medium max-w-36 mx-auto w-full ml-5 bg-neutral-800 border border-neutral-800/80 rounded-md px-2.5">
                        {item.title}
                      </h1>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* INTEGRATIONS SECTION */}
          <div>
            <div
              className={`flex gap-1 items-center ${
                expanded ? "justify-between" : "justify-center"
              } border border-neutral-950/80 bg-neutral-900/80 rounded-[8px] p-1.5 shadow-xl hover:bg-neutral-800 transition-all duration-300`}
            >
              <div className="flex items-center gap-1">
                <Cog className="text-neutral-400 size-4" />
                {expanded && (
                  <h1 className="text-neutral-500 font-medium text-[16px]">
                    Integrations
                  </h1>
                )}
              </div>

              {expanded && (
                <div className="flex items-center relative">
                  <Image
                    src="/images/isuzwal.jpg"
                    alt="uzwal"
                    width={20}
                    height={20}
                    className="rounded-full border border-neutral-600/70 z-30"
                  />
                  <Image
                    src="/images/old.jpeg"
                    alt="old"
                    width={20}
                    height={20}
                    className="rounded-full absolute border border-neutral-600/70 left-3 z-20"
                  />
                  <Image
                    src="/images/isuzwal.jpg"
                    alt="uzwal"
                    width={20}
                    height={20}
                    className="rounded-full border border-neutral-600/70 z-10"
                  />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
