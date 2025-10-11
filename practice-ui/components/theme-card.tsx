"use client"
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

export default function Themecard() {


    const {theme ,setTheme} =useTheme()
    const handleTheme=()=>{
         setTheme(theme=== "dark" ? "light" :"dark")
    }
  return (
    <div className="p-2  flex  items-end shadow-2xl border border-neutral-50 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-800 rounded-2xl h-32 w-64">
      <div className="flex flex-col  items-start gap-1  w-full  px-1 ">
        <h1 className="text-black dark:text-neutral-300 font-semibold text-[20px]">Landing Page Structure</h1>
        <div className="flex gap-1 items-center">
          <button className="border dark:text-white  text-black  border-neutral-50 bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 rounded-md px-4 py-1  text-[10px] font-semibold">
            UX Design
          </button>
          <button className="border   text-black dark:text-white border-neutral-50 bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 rounded-md px-4 py-1  text-[10px] font-semibold">
            High
          </button>
        </div>
        <div className="flex w-full justify-between items-center p-1">
        <div className="flex relative mt-1 ">
          <div className="rounded-full border border-neutral-100 shadow-xl w-6 h-6">
            <img src="discord.jpeg" className="rounded-full  w-full h-full " />
          </div>
          <div className=" absolute left-3 z-10  rounded-full      bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 border border-neutral-50 shadow-xl w-6 h-6">
            <img src="first.jpeg" className="rounded-full  w-full h-full " />
          </div>
          <div className=" absolute left-6 z-10  rounded-full  border   bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 border-neutral-100 shadow-xl w-6 h-6">
            <img src="second.jpeg" className="rounded-full     " />
          </div>
        </div>
        <button onClick={handleTheme} className="rounded-md px-4 py-1.5 font-semibold   border-neutral-50 bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white text-black text-shadow-2xs cursor-pointer  text-[12px] border ">
             {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
       </button>
        </div>
      </div>
    </div>
  );
}
