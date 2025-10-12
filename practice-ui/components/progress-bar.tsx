import { Check, RefreshCcw } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import { useAnimate ,motion, useAnimation } from "motion/react";

export default function Progressbar() {
  return (
    <div className="border border-neutral-200 bg-neutral-50  dark:border-neutral-900 dark:bg-neutral-950 shadow-2xl rounded-3xl   mt-20  h-[515px]  max-w-xl mx-auto w-full">
      <FirstPart />
      <div className="h-px bg-neutral-500 opacity-35 w-full shadow" />
      <ButtonSection />
    </div>
  );
}

const FirstPart = () => {
  return (
    <div className="mx-auto w-full max-w-xl p-2  ">
      <div className=" relative w-full">
        <Image
          src="/images/4.jpg"
          alt="seven"
          height={200}
          width={200}
          className="  rounded-[16px] w-full"
        />
        <button className=" absolute   bottom-4  left-1/3 flex gap-1 items-center rounded-3xl px-3 py-1.5 text-sm font-light   text-white bg-black">
          {" "}
          <RefreshCcw size={16} className="mt-0.5" /> Synchronization
        </button>
        <Animation />
      </div>
      <div className="flex flex-col gap-2 p-2  items-start mt-3 ">
        <h1 className="font-bold text-xl  text-neutral-900 dark:text-neutral-300">Real Time synchronization</h1>
        <p className="text-neutral-500  tracking-tighter max-w-xl mx-auto font-semibold">
          Collaborating in the create process is now easier than ever,thank to real-time file
          sysnchorization
        </p>
      </div>
    </div>
  );
};

const ButtonSection = () => {
  return (
    <div className="flex  justify-between items-center gap-2 px-2 mt-4 ">
      <button className="text-[16px]  text-neutral-900 font-semibold  cursor-pointer rounded-lg text-center px-4 py-1.5   border border-neutral-200 bg-zinc-100">
        Previous
      </button>
      <div className="flex gap-1 items-center">
        <div className=" rounded-full h-2 w-2 cursor-pointer  bg-neutral-500" />
        <div className="rounded-full h-2 w-2 cursor-pointer bg-neutral-500 opacity-50" />
        <div className="rounded-full h-2 w-2 cursor-pointer  bg-neutral-500 opacity-40" />
      </div>
      <button className="text-[16px] cursor-pointer text-white font-semibold rounded-lg text-center px-4 py-1.5   border border-blue-500 bg-blue-500 h duration-300 transition-all">
        Continue
      </button>
    </div>
  );
};

const Animation = () => {
  const progessControl=useAnimation()
  const checkControl = useAnimation();
  const progessControl1=useAnimation()
    const checkControl1 = useAnimation();
 useEffect(()=>{
  const  animation=async()=>{
      await progessControl.start({
        width:"100%",
        transition :{duration:2 , delay:1 ,ease:"easeInOut"} 
      })
      await checkControl.start({
        opacity:1,
        scale:0.5,
      
        display:"block",
        transition:{duration:0.5,ease:"easeInOut"}
      })
        await progessControl1.start({
        width:"100%",
        transition :{duration:2 , delay:2, ease:"easeInOut"}
      })
      await checkControl1.start({
        opacity:1,
        scale:0.5,
        display:"block",
        transition:{duration:0.5 ,ease:"easeInOut"}
      })
  }

   animation()
 },[])

  return (
    <div   className="rounded-xl border border-neutral-50 bg-neutral-100 dark:border-neutral-900  dark:bg-neutral-900 absolute top-1/3 left-1/4   w-1/2  ">
      <div className="flex flex-col gap-0.5 p-2 ">
         <div className=" flex justify-between   items-center p-1 dark:text-white  text-neutral-700  font-semibold text-[10px]">
           <h1 className="flex items-center">
             <motion.p
             initial={{
              opacity:0,
              scale:0,
              display:"none"
             }}

             animate={checkControl}  className="bg-green-400 text-white rounded-full w-5 h-5 "
             ><Check  
                className=" size-5 "/></motion.p>
             <span>Final export</span>
           </h1>
          <span className="text-neutral-500 text-[9px] font-bold">1.2 GB</span>
        </div>
        <div className="relative h-[2.5px] bg-neutral-400 rounded-2xl">
          <motion.div
            initial={{ width: "0%" }}
            animate={progessControl}
          className="green h-[2.5px]   bg-green-400  rounded-2xl" />
        </div>
      </div>
      <div className="h-[1px] dark:bg-neutral-50 bg-neutral-950 opacity-25" />
      <div className="flex flex-col gap-0.5  p-2 ">
        <div className=" flex justify-between   items-center p-1 dark:text-white text-neutral-700 font-semibold text-[10px]">
           <h1 className="flex items-center">
             <motion.p
              initial={{
              opacity:0,
              scale:0,
                    display:"none",
           
             }}
             animate={checkControl1}
             className="bg-green-400 rounded-full text-white  w-5 h-5 "
             ><Check    className=" size-5"/></motion.p>
             <span>Motion template</span>
           </h1>
          <span className="text-neutral-500 text-[9px] font-bold">366 MB</span>
        </div>
          <div className="relative h-[2.5px] bg-neutral-400 rounded-2xl">
          <motion.div 
             initial={{ width: "0%" }}
            animate={progessControl1}
          className="green h-[2.5px]  bg-green-400  rounded-2xl" />
        </div>
      </div>
    </div>
  );
};
