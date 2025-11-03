"use client";

import { Bell, ChevronDown, Cog, Layers3, Newspaper, Pentagon, Settings } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
export const SibeBar = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [secondOpen, setSecondOpen] = useState<boolean>(false);
  const close = () => {
    setOpen((prev) => !prev);
  };
  const SecondClose = () => {
    setSecondOpen((prev) => !prev);
  };

  return (
    <div className="flex h-[600px]  items-center justify-center  ">
      <div className="  h-[600px]  items-center  relative flex flex-col border max-w-2xl mx-auto w-full gap-2 bg-neutral-900 border-neutral-900/90 py-6 px-6 rounded-2xl  justify-center">
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className=" absolute top-3 left-4 px-3 py-1 border  bg-neutral-950/80 border-neutral-900 rounded-md cursor-pointer text-neutral-400  text-base font-semibold">
          {expanded ? <p>Close</p> : <p>Open</p>}
        </button>

        <div
          className={`
                flex flex-col   gap-4 border   bg-neutral-950/80 border-neutral-950/80 rounded-xl px-4 py-2  ${
                  expanded ? "w-72" : "w-24"
                } `}>
          <div className=" flex gap-2 items-center justify-between  hover:bg-neutral-800/90 duration-300 transition-all ease-in-out  rounded-md px-2 hover:shadow-2xs">
            <div className="flex  items-center  gap-3 text-neutral-100 font-semibold  text-[16px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 128 128"
                className=" fill-neutral-300">
                <path d="m125.571 39.926l-58.5-39c-1.997-1.23-4.128-1.24-6.142 0l-58.5 39C.929 40.926 0 42.712 0 44.497v39c0 1.786.929 3.572 2.429 4.571l58.5 39.006c1.996 1.229 4.128 1.24 6.142 0l58.5-39.006c1.5-.999 2.429-2.785 2.429-4.57v-39c0-1.786-.929-3.572-2.429-4.572m-56.07-24.144l43.07 28.715l-19.214 12.858L69.5 41.425V15.784zm-11.001 0v25.644L34.642 57.354L15.428 44.498zm-47.5 39l13.786 9.215L11 73.212zm47.5 57.43L15.428 83.497L34.642 70.64L58.5 86.569zM64 76.997l-19.428-13l19.428-13l19.428 13zm5.5 35.215V86.569L93.357 70.64l19.214 12.857l-43.07 28.715zm47.5-39l-13.786-9.215L117 54.783z" />
              </svg>
              <h1 className="flex flex-col ">
                Pure Agenncy
                <span className="text-neutral-500 text-[12px] font-semibold">Adminstrator</span>
              </h1>
            </div>
            <Bell className="size-6 text-neutral-300" />
          </div>
          <div className=" mt-2 px-3">
            <p className=" flex items-center text-neutral-500 font-medium text-[15px] gap-4">
              <Pentagon className="size-4 text-neutral-500" />
              Overview
            </p>
          </div>
          <div className="">
            <div className="flex gap-1 items-center justify-between border border-neutral-900/80 bg-neutral-900/80 rounded-[8px]  p-1.5 shadow-xl hover:bg-neutral-800 duration-300 transition-all ease-in-out  ">
              <h1 className="flex gap-2 items-center p-0.5">
                <Newspaper className="size-4 text-neutral-400" />
                <span className="text-[16px] text-neutral-300 font-semibold">Newsletters</span>
              </h1>
              <button onClick={close} className="cursor-pointer">
                <ChevronDown className="text-neutral-400 " />
              </button>
            </div>

            {open && (
              <div className=" flex flex-col gap-0">
                <div className=" relative px-4 flex  items-end  mt-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 180 180"
                    width="20"
                    height="30"
                    className="absolute -top-3 ml-[3.5px] z-30">
                    <path
                      d="M50 0 L50 180 L150 180"
                      stroke="oklch(70.8% 0 0)"
                      strokeWidth="10"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <h1 className="text-neutral-400 text-[16px]   max-w-40 mx-auto w-full font-medium  ml-5  bg-neutral-800 border  border-neutral-800/80 rounded-md px-2.5">
                    Lists and contacts
                  </h1>
                </div>
                <div className=" relative  px-4 flex  items-end mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 310 310"
                    width="30"
                    height="50"
                    className=" border border-transparent absolute -top-8  ml-[3.5px]  z-20 ">
                    <path
                      d="M50 0 L50 370 L170 370"
                      stroke="oklch(70.8% 0 0)"
                      strokeWidth="10"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <h1 className="text-neutral-400 text-[16px] font-medium ml-5  max-w-40 mx-auto w-full  bg-neutral-800 border  border-neutral-800/80 rounded-md px-2.5 ">
                    Stop list
                  </h1>
                </div>
              </div>
            )}
          </div>
          <div className="">
            <div className="flex gap-1 items-center justify-between border border-neutral-900/80 bg-neutral-900/80 rounded-[8px]  p-1.5 shadow-xl hover:bg-neutral-800 duration-300 transition-all ease-in-out  ">
              <h1 className="flex gap-2 items-center p-0.5">
                <Layers3 className="size-4 text-neutral-400" />
                <span className="text-[16px] text-neutral-300 font-semibold">Functions</span>
              </h1>
              <button onClick={SecondClose} className="cursor-pointer">
                <ChevronDown className="text-neutral-400 " />
              </button>
            </div>
            {secondOpen && (
              <div className=" flex flex-col gap-0">
                <div className=" relative px-4 flex  items-end  mt-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 180 180"
                    width="20"
                    height="30"
                    className="absolute -top-3 ml-[3.5px] z-30">
                    <path
                      d="M50 0 L50 180 L150 180"
                      stroke="oklch(70.8% 0 0)"
                      strokeWidth="10"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <h1 className="text-neutral-400 text-[16px] font-medium  max-w-36 mx-auto w-full ml-5  bg-neutral-800 border  border-neutral-800/80 rounded-md px-2.5">
                    Automation
                  </h1>
                </div>

                <div className=" relative  px-4 flex  items-end mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 310 310"
                    width="30"
                    height="50"
                    className=" border border-transparent absolute -top-8  ml-[3.5px]  z-20 ">
                    <path
                      d="M50 0 L50 370 L170 370"
                      stroke="oklch(70.8% 0 0)"
                      strokeWidth="10"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <h1 className="text-neutral-400 text-[16px] font-medium ml-5  max-w-36 mx-auto w-full  bg-neutral-800 border  border-neutral-800/80 rounded-md px-2.5 ">
                    Mail
                  </h1>
                </div>
                <div className=" relative px-4 flex  items-end  mt-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 250 250"
                    width="30"
                    height="50"
                    className="absolute -top-8 border border-transparent ml-[2px] z-20">
                    <path
                      d="M50 0 L50 250 L150 250"
                      stroke="oklch(70.8% 0 0)"
                      strokeWidth="8"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <h1 className="text-neutral-400 text-[16px] font-medium  max-w-36 mx-auto w-full  ml-5  bg-neutral-800 border  border-neutral-800/80 rounded-md px-2.5">
                    Congratulations
                  </h1>
                </div>

                <div className=" relative    px-4 flex  items-end mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 310 310"
                    width="30"
                    height="51"
                    className=" border border-transparent absolute -top-10  ml-[3.5px]  z-20 ">
                    <path
                      d="M50 0 L50 420 L170 420"
                      stroke="oklch(70.8% 0 0)"
                      strokeWidth="10"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <h1 className="text-neutral-400 text-[16px] max-w-36 mx-auto w-full font-medium ml-5  bg-neutral-800 border  border-neutral-800/80 rounded-md px-2.5 ">
                    Exhange rates
                  </h1>
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="flex gap-1 items-center justify-between border border-neutral-900/80 bg-neutral-900/80 rounded-[8px]  p-1.5 shadow-xl hover:bg-neutral-800 duration-300 transition-all ease-in-out  ">
              <div className="flex items-center gap-1">
                <Cog className="text-neutral-400 size-4" />
                <h1 className="text-neutral-500 font-medium text-[16px]">Integrations</h1>
              </div>
              <div className="flex items-center  relative">
                <Image
                  src="/images/isuzwal.jpg"
                  alt="uzwal"
                  width={20}
                  height={20}
                  className="rounded-full border border-neutral-600/70  z-30"
                />
                <Image
                  src="/images/old.jpeg"
                  alt="uzwal"
                  width={20}
                  height={20}
                  className="rounded-full absolute  border border-neutral-600/70 left-3 z-20"
                />
                <Image
                  src="/images/isuzwal.jpg"
                  alt="uzwal"
                  width={20}
                  height={20}
                  className="rounded-full  border border-neutral-600/70 z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
