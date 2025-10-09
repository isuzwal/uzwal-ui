import { CircleCheck, CameraIcon, Plus, Images } from "lucide-react";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

export const ScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const opactiyContent0 = useTransform(scrollYProgress, [0, 0.6, 0.8], [0, 1, 0]);
  const blur0 = useTransform(scrollYProgress, [0, 0.6, 1], ["8px", "0px", "4px"]);

  const opactiyContent = useTransform(scrollYProgress, [0.2, 0.7, 1], [0, 1, 0]);
  const blur = useTransform(scrollYProgress, [0.2, 0.7, 1], ["8px", "0px", "4px"]);

  const opactiyContent1 = useTransform(scrollYProgress, [0, 0.99, 1], [0, 1, 0]);
  const blur1 = useTransform(scrollYProgress, [0.2, 0.8, 1], ["8px", "0px", "4px"]);
  // have to create the differnt transfrom for ecach div while this not best beacuse 
  // the main div while scrollY is on the main div so on each opacity it calualate the main ref 
  return (
    <div
      ref={ref}
      className=" min-h-screen text-white  flex flex-col gap-10   py-[650px]  justify-center items-center ">
      <motion.div
        style={{
          opacity: opactiyContent0,
          filter: `blur${blur0}`,
           boxShadow:"2px 4px 10px rgba(0,255,0 0.5)"
        }}
        className="main-div    srelative bg-[#171616] border border-zinc-800     rounded-3xl py-7 px-6  flex gap-4  mx-auto  md:w-[820px] ">
        <div className=" flex flex-col gap-4 py-2">
          <div className="flex flex-col gap-2 ">
            <CameraIcon className="text-green-400 w-12 h-12 px-3 py-2  shadow-xs bg-[#1f1f1f] rounded-xl border border-[#1f1f1f]" />
            <div className="">
              <h5 className="text-[1rem] font-medium">Createive content </h5>
              <p className="text-neutral-600 text-12px font-semibold ">
                Creative content brings your brand to life and creates trust
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2  mt-3">
            <div className="flex  items-center gap-1 ">
              <span className="">
                <CircleCheck className="text-green-400 w-4 h-4" />
              </span>
              <p className="text-neutral-500 tracking-tighter font-medium text-8px">
                Photos and videos that captivate your target group
              </p>
            </div>
            <div className="flex  items-center gap-1 ">
              <span className="">
                <CircleCheck className="text-green-400 w-4 h-4" />
              </span>
              <p className="text-neutral-500 tracking-tighter font-medium text-8px">
                Effective on all relevant platforms
              </p>
            </div>
            <div className="flex  items-center gap-1 ">
              <span className="">
                <CircleCheck className="text-green-400 w-4 h-4" />
              </span>
              <p className="text-neutral-500 tracking-tighter font-medium text-8px">
                More engagement and interaction from your community
              </p>
            </div>
          </div>
        </div>

        <div className=" hidden flex-1 md:flex   justify-center   px-8 py-3">
          <div className="relative bg-neutral-800 w-full  h-auto shadow-xs  opacity-30 border border-neutral-800 rounded-lg">
            <div className=" absolute  z-20 top-4  h-20 w-full -left-8 rounded-md border border-neutral-800  bg-zinc-700/80  opacity-80 shadow-xs   px-5 py-3 ">
              <div className="border-2 flex justify-center items-center border-dashed rounded-md h-14 w-full">
                <Plus />
              </div>
            </div>
            <div className=" absolute z-40 flex   items-start  bottom-3  h-20  w-full left-8 rounded-md border border-neutral-800  bg-zinc-700/80 shadow-xs opacity-80 px-5 py-3 ">
              <Images className="text-neutral-200 w-12 h-12 px-3 py-2  shadow-xs bg-[#1f1f1f] rounded-xl border border-[#1f1f1f]" />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{
          //  y:trasnfromContent,
          opacity: opactiyContent,
          filter: blur,
        }}
        className="main-div  relative bg-[#171616] border border-zinc-800   shadow-xs  rounded-3xl py-7 px-6  flex gap-4  mx-auto  md:w-[820px] ">
        <div className=" flex flex-col gap-4 py-2">
          <div className="flex flex-col gap-2 ">
            <CameraIcon className="text-green-400 w-12 h-12 px-3 py-2  shadow-xs bg-[#1f1f1f] rounded-xl border border-[#1f1f1f]" />
            <div className="">
              <h5 className="text-[1rem] font-medium">Createive content </h5>
              <p className="text-neutral-600 text-12px font-semibold ">
                Creative content brings your brand to life and creates trust
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2  mt-3">
            <div className="flex  items-center gap-1 ">
              <span className="">
                <CircleCheck className="text-green-400 w-4 h-4" />
              </span>
              <p className="text-neutral-500 tracking-tighter font-medium text-8px">
                Photos and videos that captivate your target group
              </p>
            </div>
            <div className="flex  items-center gap-1 ">
              <span className="">
                <CircleCheck className="text-green-400 w-4 h-4" />
              </span>
              <p className="text-neutral-500 tracking-tighter font-medium text-8px">
                Effective on all relevant platforms
              </p>
            </div>
            <div className="flex  items-center gap-1 ">
              <span className="">
                <CircleCheck className="text-green-400 w-4 h-4" />
              </span>
              <p className="text-neutral-500 tracking-tighter font-medium text-8px">
                More engagement and interaction from your community
              </p>
            </div>
          </div>
        </div>

        <div className=" hidden flex-1 md:flex   justify-center   px-8 py-3">
          <div className="relative bg-neutral-800 w-full  h-auto shadow-xs  opacity-30 border border-neutral-800 rounded-lg">
            <div className=" absolute  z-20 top-4  h-20 w-full -left-8 rounded-md border border-neutral-800  bg-zinc-700/80  opacity-80 shadow-xs   px-5 py-3 ">
              <div className="border-2 flex justify-center items-center border-dashed rounded-md h-14 w-full">
                <Plus />
              </div>
            </div>
            <div className=" absolute z-40 flex   items-start  bottom-3  h-20  w-full left-8 rounded-md border border-neutral-800  bg-zinc-700/80 shadow-xs opacity-80 px-5 py-3 ">
              <Images className="text-neutral-200 w-12 h-12 px-3 py-2  shadow-xs bg-[#1f1f1f] rounded-xl border border-[#1f1f1f]" />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{
          opacity: opactiyContent1,
          filter: blur1,
        }}
        className="main-div  relative bg-[#171616] border border-zinc-800   shadow-xs  rounded-3xl py-7 px-6  flex gap-4  mx-auto  md:w-[820px] ">
        <div className=" flex flex-col gap-4 py-2">
          <div className="flex flex-col gap-2 ">
            <CameraIcon className="text-green-400 w-12 h-12 px-3 py-2  shadow-xs bg-[#1f1f1f] rounded-xl border border-[#1f1f1f]" />
            <div className="">
              <h5 className="text-[1rem] font-medium">Createive content </h5>
              <p className="text-neutral-600 text-12px font-semibold ">
                Creative content brings your brand to life and creates trust
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2  mt-3">
            <div className="flex  items-center gap-1 ">
              <span className="">
                <CircleCheck className="text-green-400 w-4 h-4" />
              </span>
              <p className="text-neutral-500 tracking-tighter font-medium text-8px">
                Photos and videos that captivate your target group
              </p>
            </div>
            <div className="flex  items-center gap-1 ">
              <span className="">
                <CircleCheck className="text-green-400 w-4 h-4" />
              </span>
              <p className="text-neutral-500 tracking-tighter font-medium text-8px">
                Effective on all relevant platforms
              </p>
            </div>
            <div className="flex  items-center gap-1 ">
              <span className="">
                <CircleCheck className="text-green-400 w-4 h-4" />
              </span>
              <p className="text-neutral-500 tracking-tighter font-medium text-8px">
                More engagement and interaction from your community
              </p>
            </div>
          </div>
        </div>

        <div className=" hidden flex-1 md:flex   justify-center   px-8 py-3">
          <div className="relative bg-neutral-800 w-full  h-auto shadow-xs  opacity-30 border border-neutral-800 rounded-lg">
            <div className=" absolute  z-20 top-4  h-20 w-full -left-8 rounded-md border border-neutral-800  bg-zinc-700/80  opacity-80 shadow-xs   px-5 py-3 ">
              <div className="border-2 flex justify-center items-center border-dashed rounded-md h-14 w-full">
                <Plus />
              </div>
            </div>
            <div className=" absolute z-40 flex   items-start  bottom-3  h-20  w-full left-8 rounded-md border border-neutral-800  bg-zinc-700/80 shadow-xs opacity-80 px-5 py-3 ">
              <Images className="text-neutral-200 w-12 h-12 px-3 py-2  shadow-xs bg-[#1f1f1f] rounded-xl border border-[#1f1f1f]" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
