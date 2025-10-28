"use client";

import { TextAnimation } from "@/components/animation-seq";
import { BeanLine } from "@/components/beam-line";
import BentoCard from "@/components/bento-card";
import { Button } from "@/components/button-view";
import { Card } from "@/components/card-view";
import { NextJSButton } from "@/components/next-js-button";
import { PasswordView } from "@/components/passoword-view";
import Progressbar from "@/components/progress-bar";
import { ProjectCard } from "@/components/project-view";
import { ScrollAnimation } from "@/components/scroll";
import { SecondBento } from "@/components/second-bento-card";
import { SecondButton } from "@/components/second-button";
import Themecard from "@/components/theme-card";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Home() {
      const {theme ,setTheme} =useTheme()
      const handleTheme=()=>{
           setTheme(theme=== "dark" ? "light" :"dark")
      }
  return (
    <div className=" flex flex-col min-h-screen bg-neutral-50 dark:bg-neutral-950  ">
      <button onClick={handleTheme} className="rounded-md px-4 py-1.5 font-semibold  w-14   ml-6 mt-2  border-neutral-50 bg-neutral-200 dark:border-neutral-950 dark:bg-neutral-900 dark:text-white text-black text-shadow-2xs cursor-pointer  text-[12px] border ">
             {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
       </button>
      {/* <div className="flex flex-col gap-1  max-w-7xl mx-auto "> */}
        {/* <div className="flex  flex-col md:flex-row  ">
          <Card />
          </div>
          <div className="flex justify-center items-center gap-1   flex-col md:flex-row">
          <Button />
          <SecondButton />
          </div> */}
        {/* <ProjectCard /> */}
      {/* </div> */}
      {/* <TextAnimation /> */}
      {/* <ScrollAnimation/> */}
      {/* <Themecard /> */}
      {/* <BentoCard /> */}
      {/* <Progressbar /> */}
      {/* <NextJSButton /> */}
      {/* <BeanLine /> */}
          {/* <PasswordView /> */}
      <SecondBento />
    </div>
  );
}
 