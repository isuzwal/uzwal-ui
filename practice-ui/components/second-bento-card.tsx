import {
  Check,
  Eye,
  FilterIcon,
  Folder,
  Handshake,
  Save,
  SaveAll,
  Search,
  Star,
} from "lucide-react";
import Image from "next/image";
import { Line, SVGLine, SVGLine1, SVGLine2, SVGLine3 } from "./beam-lights";
import { motion, Variants } from "motion/react";

export const SecondBento = () => {
  return (
    <div className="flex  min-h-screen max-w-7xl mx-auto w-full">
      <div className=" w-full grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-2 rounded-md p-2">
        <LeftSide />
        <Middle />
        <div className="flex  text-neutral-500 border">Hello</div>
      </div>
    </div>
  );
};
const LeftSide = () => {
  return (
    <div className="flex flex-col  gap-5 ">
      <div className="  border flex  max-w-xl mx-auto w-full h-80 flex-col justify-between gap-2 items-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] dark:bg-zinc-900/60   dark:border-neutral-900  shadow-xl  bg-white/90  border-neutral-50 text-neutral-500  rounded-xl p-2">
        <div className=" flex  flex-1 mask mask-t-from-90% flex-col w-full  max-w-2xl mx-auto p-1.5">
          <div className="flex  flex-col gap-3  justify-center h-full relative  ">
            <div className="h-[24px] absolute inset-0 -top-4 left-20     w-72 bg-neutral-900  rounded-lg" />
            <div className=" relative w-full flex justify-between items-center">
              <div className=" absolute  -top-3 bg-neutral-900/90  border border-neutral-900/80  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-full flex items-center ">
                <Check className="text-neutral-500 size-5 mt-0.5" />
              </div>
              <div className=" ml-3 flex w-72 rounded-lg dark:bg-neutral-900/60 dark:border-neutral-900 p-1.5">
                <Image
                  src={"/images/isuzwal.jpg"}
                  alt="isuzwal"
                  height={40}
                  width={40}
                  className="rounded-full"
                />
                <div className="flex flex-col    justify-between  gap-1 items-start p-2  w-full">
                  <div className="h-[6px] bg-neutral-600/20 w-full rounded-lg" />
                  <div className="h-[6px] bg-neutral-600/20 w-1/2 rounded-lg" />
                </div>
              </div>
            </div>
            <div className=" w-full flex justify-end items-end">
              <div className="flex   w-52  rounded-lg dark:bg-neutral-900/60 dark:border-neutral-900 p-1.5">
                <Image
                  src={"/images/old.jpeg"}
                  alt="isuzwal"
                  height={40}
                  width={40}
                  className="rounded-full"
                />
                <div className="flex flex-col    justify-between  gap-1 items-start p-2  w-full">
                  <div className="h-[6px] bg-neutral-600/20 w-full rounded-lg" />
                  <div className="h-[6px] bg-neutral-600/20 w-1/2 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex  flex-col  w-full  max-w-2xl mx-auto  p-1.5 ">
          <h1 className="font-medium text-[24px] leading-tight text-neutral-950  dark:text-neutral-300">
            Great Skill assessment
            <br /> by industry veteran
          </h1>
          <p className="text-neutral-500 dark:text-neutral-500 text-[14px] font-semibold  mt-2">
            We specilaize in crafting striking descriptions that showcase your company
            curlture,compelling only the SEOs with superior ability to apply
          </p>
        </div>
      </div>
      <div className=" border flex max-w-xl mx-auto w-full   flex-col justify-between gap-2 items-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] dark:bg-zinc-900/60   dark:border-neutral-900  shadow-xl  bg-white/90  border-neutral-50 text-neutral-500  rounded-xl p-2">
        <div className=" relative flex py-3 px-2  flex-col justify-between items-center gap-8  w-full mx-auto max-w-xl">
          <div className=" relative  rounded-2xl flex gap-2  max-w-xs w-full mx-auto justify-between items-center bg-neutral-900/60  border-neutral-900 border px-4 py-2">
            <div className="rounded-full  border border-neutral-800/80 bg-neutral-800/80  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] w-8 h-8 items-center flex  justify-center">
              <Eye className="size-4" />
            </div>
            <div className="rounded-full  border border-neutral-800/80 bg-neutral-800/80  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] w-8 h-8 items-center flex  justify-center">
              <Search className="size-4" />
            </div>
            <div className="rounded-full  border border-neutral-800/80 bg-neutral-800/80  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] w-8 h-8 items-center flex  justify-center">
              <Handshake className="size-4" />
            </div>
            <div className="h-3 w-3 bg-neutral-800 border border-neutral-800  rounded-full z-10 absolute  left-[50%] -bottom-1.5 " />
            <div className="w-full flex    left-0 justify-between absolute bottom-0 gap-2 items-center">
              <SVGLine />
              <SVGLine1 />
            </div>
          </div>
          <div className="  relative flex  flex-col   gap-6 justify-between items-center  max-w-md w-full mx-auto h-48 bg-neutral-900/60   border-neutral-900 border rounded-lg shadow-2xs px-3  py-2  mt-8 ">
            <div className="h-3 w-3 bg-neutral-800 border border-neutral-800  rounded-full z-10 absolute  left-[50%] -top-1.5 " />
            <div className="w-full flex top-0   left-0 justify-between absolute gap-2 items-center">
              <SVGLine2 />
              <SVGLine3 />
            </div>
            <Line />
            <div className="w-full flex justify-between p-1.5 items-center ">
              <div className="flex gap-1 rounded-4xl border border-neutral-800 bg-neutral-800 items-center justify-start shadow-2xs  p-1">
                <div className="w-6 h-6 overflow-hidden rounded-full">
                  <Image
                    src={"/images/isuzwal.jpg"}
                    width={24}
                    height={24}
                    alt="old"
                    className="object-cover"
                  />
                </div>
                <h2 className="text-neutral-800 dark:text-neutral-500 text-[12px] font-semibold p-0.5">
                  Uzwal gaihre
                </h2>
              </div>

              <div className="flex gap-1 rounded-4xl border border-neutral-800 bg-neutral-800 items-center justify-start shadow-2xs  p-1">
                <div className="w-6 h-6 overflow-hidden rounded-full">
                  <Image
                    src={"/images/third.png"}
                    width={24}
                    height={24}
                    alt="old"
                    className="object-cover"
                  />
                </div>
                <h2 className="text-neutral-800 dark:text-neutral-500 text-[12px] font-semibold p-0.5">
                  Albert Juan
                </h2>
              </div>
            </div>
            <div className="flex  z-10 gap-1 rounded-4xl border border-neutral-800 bg-neutral-800 items-center justify-start shadow-2xs  p-1">
              <div className="w-6 h-6 overflow-hidden rounded-full">
                <Image
                  src={"/images/lady.png"}
                  width={26}
                  height={26}
                  alt="old"
                  className="object-cover"
                />
              </div>
              <h2 className="text-neutral-800 dark:text-neutral-500 text-[12px] font-semibold p-0.5">
                Tisha Norton
              </h2>
            </div>

            <div className="w-full flex justify-between p-1.5 items-center ">
              <div className="flex gap-1 rounded-4xl border border-neutral-800 bg-neutral-800 items-center justify-start shadow-2xs  p-1">
                <div className="w-6 h-6 overflow-hidden rounded-full">
                  <Image
                    src={"/images/isuzwal.jpg"}
                    width={24}
                    height={24}
                    alt="old"
                    className="object-cover"
                  />
                </div>
                <h2 className="text-neutral-800 dark:text-neutral-500 text-[12px] font-semibold p-0.5">
                  Uzwal gaihre
                </h2>
              </div>
              <div className="flex gap-1 rounded-4xl border border-neutral-800 bg-neutral-800 items-center justify-start shadow-2xs p-1">
                <div className="w-6 h-6 overflow-hidden rounded-full">
                  <Image
                    src={"/images/third.png"}
                    width={24}
                    height={24}
                    alt="old"
                    className="object-cover"
                  />
                </div>
                <h2 className="text-neutral-800 dark:text-neutral-500 text-[12px] font-semibold p-0.5">
                  Mavis Barry
                </h2>
              </div>
            </div>

            <div className="  -bottom-6  absolute flex items-center  justify-center  rounded-full shadow-2xs  w-14 h-14 bg-neutral-800 border border-neutral-800 ">
              <FilterIcon className=" size-6" />
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-2 justify-start max-w-xl mx-auto w-full  mt-20 p-1.5">
          <h1 className="text-neutral-300 text-[24px] font-semibold ">
            The Seo talent Hub <br />
            Recruitment Foramula
          </h1>
          <p className="text-neutral-500 text-[14px] font-semibold leading-tight">
            We specilaize in crafting striking descriptions that showcase your company
            curlture,compelling only the SEOs with superior ablity to apply
          </p>
        </div>
      </div>
    </div>
  );
};

const Middle = () => {
  const stars = [
    "text-green-200 fill-green-200",
    "text-green-300 fill-green-300",
    "text-green-400 fill-green-400",
    "text-green-500 fill-green-500",
    "text-green-600 fill-green-600",
  ];
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay between each star
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200 } },
  };

  return (
    <div className="flex justify-between  gap-2  ">
      <div className="  flex flex-col  justify-between gap-3  max-w-xl mx-auto w-full  border  dark:bg-zinc-900/60   dark:border-neutral-900  rounded-xl p-4 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] h-72">
        <div className="w-full relative mt-2">
          <div className=" relative rounded-xl flex w-[70%]  flex-col gap-6  justify-between border-neutral-800 bg-neutral-800/40 px-3  py-5">
            <motion.div variants={container} initial="hidden" animate="show" className="flex gap-1">
              {stars.map((color, i) => (
                <motion.div key={i} variants={item}>
                  <Star className={color + " w-6 h-6"} />
                </motion.div>
              ))}
            </motion.div>
            <div className="flex gap-2 flex-col">
              <div className="h-[6px] bg-neutral-700/20 w-[60%] rounded-lg" />
              <div className="h-[6px] bg-neutral-700/20 w-1/2 rounded-lg" />
            </div>
            <div className=" top-1 right-1 absolute border w-20 h-20 rounded-lg rotate-12 flex items-center justify-center bg-neutral-800/70 z-10 border-neutral-800">
              <Image
                src={"/images/isuzwal.jpg"}
                height={50}
                width={50}
                alt="me"
                className="rounded-full"
              />
            </div>
          </div>
          <div className=" top-4 right-3 absolute border w-20 h-20 rounded-lg -rotate-12 flex items-center justify-center bg-neutral-800/70 z-10 border-neutral-800">
            <Folder className="text-neutral-300 size-8" />
          </div>
        </div>
        <div className="flex flex-col gap-2  items-start mt-2 ">
          <h1 className="font-medium text-[24px] leading-tight text-neutral-950  dark:text-neutral-300">
            Tailor the recruits with <br /> our own traning method
          </h1>
          <p className="text-neutral-500 text-[14px] leading-tight font-semibold">
            After we recruit the experts ,we train them up a little bit more just to fine tuning
            thier skills to ake industry fit.
          </p>
        </div>
      </div>
    </div>
  );
};
