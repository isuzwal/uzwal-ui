"use client";
import { LockKeyhole, Unlock } from "lucide-react";
import { motion, Variants } from "motion/react";
import { useState } from "react";

export function PasswordView() {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants: Variants = {
    rest: {
      y: 8,
      transition: {
        duration: 0.3,
        delay: 0.1,
        staggerChildren: 0.15,
      },
    },
    hover: {
      y: -8,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.3,

        staggerChildren: 0.15,
      },
    },
  };

  const childVariants: Variants = {
    rest: {
      opacity: 0.9,
      scale: 1,
      rotate: 0,
      borderColor: "#212128",
      boxShadow: "none",
      color: "white",
    },
    hover: {
      opacity: 1,
      scale: 1.05,
      rotate: -3,
      color: "oklch(78.9% 0.154 211.53)",
      borderColor: "oklch(78.9% 0.154 211.53)",
      boxShadow: "0 0 8px oklch(78.9% 0.154 211.53)",
    },
  };

  const inputVariants: Variants = {
    rest: { borderColor: "#27262f", boxShadow: "none" },
    hover: {
      borderColor: "oklch(78.9% 0.154 211.53)",
      boxShadow: "0 0 8px oklch(78.9% 0.154 211.53)",
    },
  };

  return (
    <div className="w-full  mt-5 p-6 border-2">
      <h1 className="text-neutral-700 text-[18px]  text-center font-semibold m-2 ">
        Have to watch the How to apply variant and stagger on multiple children{" "}
      </h1>

      <div className="flex justify-center max-w-xl mx-auto w-full shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
        <div className="border bg-[#202026] flex flex-col gap-1 items-center h-96 w-full rounded-lg border-zinc-900 p-4">
          {/* main center area */}
          <div className="flex flex-1 w-full flex-col justify-center gap-2 items-center p-6">
            <motion.div
              variants={containerVariants}
              initial="rest"
              animate={isHovered ? "hover" : "rest"}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="relative bg-[#1c1c21] border border-[#202026] rounded-xl w-full min-h-48 p-4 flex justify-center items-center">
              <motion.div
                variants={childVariants}
                animate={isHovered ? "hover" : "rest"}
                className="bg-[#202026] h-16 w-16 flex items-center justify-center rounded-full shadow-2xl absolute left-1/2 -translate-x-1/2 -translate-y-[85px] p-2 border text-current">
                {isHovered ? (
                  <Unlock className="h-full w-8 text-current" />
                ) : (
                  <LockKeyhole className="h-full w-8 text-current" />
                )}
              </motion.div>

              <motion.div className="mt-6 w-full flex justify-center items-center">
                <motion.input
                  variants={inputVariants}
                  initial="rest"
                  animate={isHovered ? "hover" : "rest"}
                  type="password"
                  placeholder="*********"
                  className="relative flex items-center justify-center outline-0 focus:outline sm:w-[20rem] w-full font-semibold shadow-xl p-2 rounded-md bg-[#27262f] placeholder:text-2xl text-start text-neutral-300 border"
                />
              </motion.div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-2 p-2">
            <h3 className="font-semibold text-md text-white">Passwords</h3>
            <p className="text-neutral-500 text-sm font-medium">
              Simple and secure password authentication, complete with breach detection and recovery
              options.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
