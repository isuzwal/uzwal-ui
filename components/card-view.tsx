"use client";
import Image from "next/image";
import { X, Send, Twitter, Cat, SmilePlus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export function Card() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex justify-center  p-2 ">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="w-96 min-h-[32rem]   items-center   rounded-xl bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
            p-5 flex flex-col">
            <div className=" w-full">
              <h2 className="font-bold  text-md ">Card Components</h2>
              <p className="text-neutral-600 mt-2 text-sm font-medium"> Simple and lovely card for your page</p>
            </div>
            <div className=" flex items-center justify-center">
              <button
                onClick={() => setOpen(false)}
                className="flex  gap-1  mt-4 px-3 py-1.5  cursor-pointer  items-center
              shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
              rounded-md text-neutral-600 font-semibold text-[10px]">
                <Image width={50} height={50} alt="logo" src="/discord.jpeg" className="h-5 w-5" />{" "}
                UI card by uzwal
                <X className="h-3 w-3 text-neutral-400" />
              </button>
            </div>
            <div className=" w-full flex-1 rounded-lg border  mt-4 border-neutral-200 bg-neutral-200 relative">
              {/*Motion part here */}
              <motion.div
                initial={{
                  opacity: 0,
                  filter: "blur(10px)",
                  scale: 0.98,
                }}
                whileHover={{
                  opacity: 1,
                  filter: "blur(0px)",
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  damping: 15,
                  stiffness: 100,
                }}
                className="absolute  border border-neutral-200  inset-0 h-full w-full bg-white rounded-lg divide-y divide-neutral-300">
                <div className="flex  gap-3  p-4">
                  <div
                    className="h-8 w-8  rounded-lg flex-shrink-0 bg-gradient-to-br 
                 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white flex items-center justify-center ">
                    <Send className="h-5 w-5 text-neutral-600" />
                  </div>
                  <div className="flex flex-col gap-1 ">
                    <p className="text-neutral-600 text-md font-semibold">uzwal card components</p>
                    <p className="text-neutral-400 text-sm">A collection of my UI components</p>
                  </div>
                </div>
                <div className="flex  gap-3  p-4">
                  <div
                    className="h-8 w-8  rounded-lg flex-shrink-0 bg-gradient-to-br 
                shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white flex items-center justify-center ">
                    <a href="https://x.com/isuzwal" target="_blank">
                      {" "}
                      <Twitter className="h-5 w-5 text-neutral-600" />{" "}
                    </a>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-neutral-600 text-md font-semibold">Follow on Twitter</p>
                    <p className="text-neutral-400 text-sm tracking-tight ">
                      See my upcoming animation components
                    </p>
                  </div>
                </div>
                <div className="flex  gap-3  p-4">
                  <div
                    className="h-8 w-8  rounded-lg flex-shrink-0 bg-gradient-to-br 
                 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white flex items-center justify-center ">
                    <Cat className="h-5 w-5 text-neutral-600" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-neutral-600 text-md font-semibold">Anime love </p>
                    <p className="text-neutral-400 text-sm">Love to watch anime just me some </p>
                  </div>
                </div>
                <div className="flex  gap-3  p-4">
                  <div
                    className="h-8 w-8  rounded-lg flex-shrink-0 bg-gradient-to-br 
                shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white flex items-center justify-center ">
                    <SmilePlus className="h-5 w-5 text-neutral-600" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-neutral-600 text-md font-semibold">Introvert</p>
                    <p className="text-neutral-400 text-sm">Enjoy my space & happy </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
