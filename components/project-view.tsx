"use client ";

import { motion } from "framer-motion";

import { ProjectList, Projectcard } from "@/app/index";
import { useState } from "react";

export function ProjectCard() {
  const [current, setCurrent] = useState<Projectcard | null>(null);

  return (
    <div className="min-h-screen flex justify-center items-center   relative">
        {current && <div 
        onClick={()=>setCurrent(null)} className="fixed z-10 h-full w-full bg-black/50 backdrop-blur-xs "></div>}
         {current && (
        <motion.div 
         layoutId={`project-${current.name}`}
          className=" fixed z-20 inset-0 m-auto bg-neutral-950 h-[700px] w-[30rem] rounded-md border border-neutral-950 p-2 ">
          <motion.img  
           layoutId={`project-${current.src}`}
          src={current.src} alt={current.name} className="rounded-md   w-full aspect-square" />
          <div className="flex flex-col items-start gap-1 p-2">
            <h2 className="text-md  bg-neutral-100 border border-neutral-100  px-3 shadow-2xl rounded-[4px] font-semibold tracking-tighter">
              {current.name}
            </h2>
            <motion.div className="w-full flex flex-col gap-1">
                <motion.p 
                
                layoutId={`project-${current.highlight}`}className="text-neutral-300 text-md font-semibold"> {current.highlight}</motion.p>
            <motion.p

             initial={{
                opacity:0,
                filter:"blur(10px)"
             }}
             animate={{
                opacity:1,
                filter:"blur(0px)"
             }}
             transition={{
          
                delay:0.3
             }}
            className="text-sm text-neutral-500 font-semibold">{current.content}</motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
      <div className="flex flex-col gap-1 items-center px-6">
        {ProjectList.map((project) => (
          <motion.button layoutId={`project-${project.name}`}
            key={project.name}
            className="flex gap-1 cursor-pointer  border border-zinc-950 bg-foreground  p-3  rounded-lg max-w-2xl mx-auto w-full">
            <div onClick={() => setCurrent(project)} className="flex flex-col items-start gap-1 p-1">
              <div className="text-md flex flex-col  text-start gap-1  text-neutral-300 font-semibold ">
                <span className="text-md font-bold text-neutral-300">{project.name}</span>
                <span className="text-neutral-600 text-[12px] font-semibold">{project.bounty}</span>
              </div>
              < motion.p
                layoutId={`project-${project.highlight}`}
                 className="text-sm text-neutral-400 font-semibold">{project.highlight}</motion.p>
            </div>
            <div className="flex-1 flex justify-between items-center">
                <motion.img 
                 layoutId={`project-${project.src}`}
                 src={project.src} className="rounded-md object-cover w-20 h-20" />
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
