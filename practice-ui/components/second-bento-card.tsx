import {
  Check,
  CheckCircle,
  Earth,
  Eye,
  FileText,
  FilterIcon,
  Globe,
  Handshake,
  Search,
  Settings,
  Star,
  WorkflowIcon,
} from "lucide-react";
import Image from "next/image";
import { LeftLine, LeftSideLight, Line, RightLine, RightSideLight, SVGLine, SVGLine1, SVGLine2, SVGLine3,  } from "./beam-lights";
import { motion, Variants } from "motion/react";

export const SecondBento = () => {
  return (
    <div className="flex  min-h-screen max-w-7xl mx-auto w-full">
      <div className=" w-full grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-2 rounded-md p-2">
        <LeftSide />
        <Middle />
        <Right />
        {/* <div className="flex  text-neutral-500 border">Hello</div> */}
      </div>
    </div>
  );
};
const LeftSide = () => {
  return (
    <div className="flex flex-col  gap-2 ">
      <div className="  border flex  max-w-xl mx-auto w-full  flex-col justify-between gap-2 items-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] dark:bg-zinc-900/60   dark:border-neutral-900  shadow-xl  bg-white/90  border-neutral-50 text-neutral-500  rounded-xl p-2">
        <div className=" flex  flex-1 mask mask-t-from-90% flex-col w-full  max-w-2xl mx-auto p-1.5">
          <div className="flex  flex-col gap-3  justify-center h-full relative  ">
            <div className="h-[24px] absolute inset-0 -top-4 left-20     w-72 bg-neutral-900  rounded-lg" />
            <div className=" relative w-full flex justify-between items-center">
              <div className=" absolute  -top-1 left-1 bg-green-400  border border-green-400 h-4 w-4  rounded-full flex items-center ">
                <Check className="text-neutral-300 size-5 mt-0.5 font-bold" />
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
        <div className=" flex flex-col gap-2 justify-start max-w-xl mx-auto w-full mt-4.5 p-1.5">
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
    rest: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item: Variants = {
    rest: { opacity: 0.5, y: 0.2 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } },
  };

  return (
    <div className="flex flex-col  gap-2   ">
      <div className="  flex flex-col  justify-between gap-3  max-w-xl mx-auto w-full  border  dark:bg-zinc-900/60   dark:border-neutral-900  rounded-xl p-3 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
        <motion.div
          whileHover="show"
          variants={container}
          initial="hidden"
          animate="rest"
          className="w-full relative mt-2">
          <div className=" relative rounded-xl flex w-[80%]  flex-col gap-6  justify-between border-neutral-800 bg-neutral-800/40 px-3  py-5">
            <motion.div className="flex gap-1">
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
            <div className=" shadow-[0_0_8px_2px_rgba(105,230,124,0.4)] bg-neutral-800/70 border-neutral-800 top-1 right-1 absolute border w-20 h-20 rounded-lg rotate-12 flex items-center justify-center">
              <Image
                src={"/images/isuzwal.jpg"}
                height={50}
                width={50}
                alt="me"
                className="rounded-full"
              />
            </div>
          </div>
        </motion.div>
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
      <div className="flex  flex-col  justify-between gap-3  max-w-xl mx-auto w-full  border  dark:bg-zinc-900/60   dark:border-neutral-900  rounded-xl p-4 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
        <div className="flex gap-2 justify-between  p-1 ">
          <div className="  w-1/2  flex items-end  flex-col  justify-end gap-1 p-1">
            <div className=" flex w-32 rounded-xl bg-neutral-900/80  border-neutral-900/80 border flex-col  items-center gap-1 p-1 ">
              <div className="flex gap-1   items-end">
                <div className="rounded-4xl p-0.5 h-10 w-[22px] flex  justify-center items-start bg-gradient-to-b from-green-400 to-green-200">
                  <Image
                    src="/images/wife.jpg"
                    width={20}
                    height={20}
                    className="rounded-full"
                    alt="_me"
                  />
                </div>
                <div className="rounded-4xl p-0.5 h-14 w-[22px] flex  justify-center items-start bg-gradient-to-b from-green-400 to-green-200">
                  <Image
                    src="/images/isuzwal.jpg"
                    width={20}
                    height={20}
                    className="rounded-full"
                    alt="_me"
                  />
                </div>
                <div className="rounded-4xl p-0.5 h-12  w-[22px] flex  justify-center items-start bg-gradient-to-b from-green-400 to-green-200">
                  <Image
                    src="/images/old.jpeg"
                    width={20}
                    height={20}
                    className="rounded-full"
                    alt="_me"
                  />
                </div>
              </div>
              <p className="text-[12px] text-neutral-500 font-semibold">
                Top <span className="font-bold text-[13px] text-neutral-300">5%</span> talent
              </p>
            </div>
            <div className="relative rounded-2xl w-full h-52 overflow-hidden">
              <Image src="/images/lady.png" alt="_lady" fill className="object-cover" />
            </div>
            <div className=" grid grid-cols-5  gap-1 w-20 mt-2 ">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-neutral-500 rounded-full"></div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1 w-1/2 justify-start items-start">
            <div className="relative rounded-2xl w-full h-72 overflow-hidden">
              <Image src="/images/third.png" alt="_lady" fill className="object-cover" />
            </div>
            <div className=" flex  gap-1 boder border-neutral-800/80 bg-neutral-800 rounded-lg w-36 mt-4 ">
              <div className="flex flex-col gap-1 px-2 py-1 mt-2">
                <div className="bg-green-400/80   flex items-center justify-center rounded-full h-4 w-4  p-1">
                  <Earth className="text-neutral-300  size-12" />
                </div>
                <p className="text-neutral-500 text-[8px] font-medium">
                  ENGAGEMENT <br />
                  <span className=" font-bold text-neutral-400 text-[10px]">+22%</span>
                </p>
              </div>
              <div className=" flex w-full items-end justify-center gap-0.5 px-1 py-0.5  mr-1">
                <div className="w-4 h-12 rounded   relative overflow-hidden">
                  <div
                    className="absolute inset-0 "
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, #e0e0e0 0, #e0e0e0 1px, transparent 1px, transparent 4px)",
                    }}
                  />
                </div>
                <div className="w-4 h-9 rounded   bg-[#3535A5] " />
                <div className="w-4 h-14 rounded  bg-gradient-to-b from-green-400 to-green-200" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2  items-start mt-4 ">
          <h1 className="font-medium text-[24px] leading-tight text-neutral-950  dark:text-neutral-300">
            A global leader in SEO <br /> Recruitment{" "}
          </h1>
          <p className="text-neutral-500 text-[14px] leading-tight font-semibold">
            We empower progressive, ambitions comapanies who wish to hire the best SEO talent
            worildwide
          </p>
        </div>
      </div>
    </div>
  );
};

const Right = () => {
  const items = [
    { text: "Technical SEO", icon: Settings },
    { text: "On-Page SEO", icon: Globe },
    { text: "Content SEO", icon: FileText },
  ];
  return (
    <div className=" flex flex-col gap-2">
      <div className="flex flex-col relative  justify-center items-center gap-3  max-w-xl mx-auto w-full  border  dark:bg-zinc-900/60   dark:border-neutral-900  rounded-xl p-3 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-zinc-100 border-zinc-50">
        <div className="relative rounded-3xl p-1 flex items-center w-52 h-14 justify-center gap-2 bg-neutral-900/80 border border-neutral-900 mt-1 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-0 top-0 h-full w-1/2  border-green-300  border-l-[0.5px] rounded-3xl" />
            <div className="absolute bottom-0 left-0 h-full w-full border-green-300  border-b-[0.5px]  rounded-3xl" />
          </div>
          <div className="h-3 w-36 bg-neutral-800/80 border border-neutral-800 rounded-xl" />
          <Search className="size-4 text-neutral-400" />
        </div>
        <div className=" relative w-full max-w-3xl mx-auto p-1.5 rounded-xl flex flex-col gap-3 bg-neutral-900/80 border border-neutral-900 mt-2">
                      <div className=" z-20 w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-green-300 absolute      lg:left-[46%]  left-[44%] -bottom-2  " />
                                        <div className=" z-20 w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-green-300 absolute      lg:left-[54%]  left-[59%] -bottom-2  " />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="rounded-[12px] p-2 w-full bg-neutral-800/80 border border-neutral-800/80 flex flex-col justify-between">
              <div className="flex flex-col rounded-[10px] border gap-2 bg-neutral-800/80 border-neutral-800/80 p-2">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/images/isuzwal.jpg"
                    height={40}
                    width={40}
                    alt="_isuzwal"
                    className="rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <h2 className="text-[13px] font-semibold text-neutral-950 dark:text-neutral-300">
                      Albert Juan
                    </h2>
                    <p className="text-neutral-500 text-[11px] font-medium">SEO Expert</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 w-full mt-1 px-2">
                  <span className="text-neutral-400 font-medium text-[10px] flex items-center gap-1">
                    <CheckCircle className="size-4 text-green-400" /> Selected
                  </span>
                  <span className="text-neutral-400 font-medium text-[10px] flex items-center gap-1">
                    <CheckCircle className="size-4 text-green-400" /> Selected
                  </span>
                  <p className="col-span-2 text-neutral-400 font-medium text-[10px] flex items-center gap-1">
                    <CheckCircle className="size-4 text-green-400" />
                    Added <span className="text-neutral-200 font-bold ml-1">2 days</span> ago
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-2 p-0.5">
                <div className="h-3 w-full max-w-[190px] bg-neutral-800/80 border border-neutral-800 rounded-xl" />
                <div className="h-3 w-full max-w-[170px] bg-neutral-800/80 border border-neutral-800 rounded-xl" />
                <div className="h-3 w-full max-w-[140px] bg-neutral-800/80 border border-neutral-800 rounded-xl" />
                <div className="h-3 w-full max-w-[120px] bg-neutral-800/80 border border-neutral-800 rounded-xl" />
              </div>
              <div className="rounded-3xl w-20 h-8 px-3 py-1.5  bg-gradient-to-r from-green-400 to-green-300 mt-2 text-[11px] text-white font-medium"></div>
            </div>
            <div className="rounded-[12px]  w-full flex flex-col justify-between">
              <div className="flex flex-wrap justify-start gap-2 w-full">
                {items.map(({ text, icon: Icon }, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-2 bg-neutral-800 border border-neutral-800  flex flex-col justify-center items-center gap-2 md:w-[55px] md:h-[55px] w-[70px] h-[70px] shadow-[1px_2px_3px_1px_rgba(105,230,124,0.2)]">
                    <div className="rounded-full md:w-6 md:h-6  w-7 h-7 flex items-center justify-center bg-neutral-900/80 border border-neutral-900/80">
                      <Icon className="size-3 md:size-2 text-neutral-300" />
                    </div>
                    <p className="text-[8px]  md:text-[5.5px] font-medium text-neutral-400 text-center leading-tight">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 mt-2 p-0.5">
                <div className="h-5 w-full max-w-[210px] bg-neutral-800/80 border border-neutral-800 rounded-xl" />
                <div className="h-3 w-full max-w-[180px] bg-neutral-800/80 border border-neutral-800 rounded-xl" />
                <div className="h-3 w-full max-w-[160px] bg-neutral-800/80 border border-neutral-800 rounded-xl" />
                <div className="h-3 w-full max-w-[140px] bg-neutral-800/80 border border-neutral-800 rounded-xl" />
                <div className="h-3 w-full max-w-[120px] bg-neutral-800/80 border border-neutral-800 rounded-xl" />
              </div>
              <div className="rounded-xl w-full px-2 py-0.5    justify-end flex">
                <div className=" relative rounded-3xl w-20 h-8 px-3 py-1.5     bg-neutral-800/90">
                  <div className=" absolute inset-0 rounded-3xl w-full h-full px-3 py-1.5  border-l-[0.5px] border-b-[0.5px] border-green-400 text-[11px] text-white shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <LeftSideLight />
        <RightSideLight />
        <div className=" w-full gap-1  flex  justify-between items-center mt-6  relative">
          <div className="relative z-20 rounded-xl flex flex-col  items-center justify-between gap-7 w-36 border bg-neutral-900/90 border-neutral-900/80 p-1.5">
            <div className=" z-20 w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-green-300 absolute     lg:left-[45%] left-[68%] -top-2  " />
              <div className=" z-20 w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-green-300 absolute    -right-1 top-[46%]  " />
            <div className="  rounded-2xl h-16  w-1/2 mt-1 flex items-center justify-center bg-neutral-800/80 border-neutral-800/80 border">
              <svg height="40" width="40" viewBox="0 0 20 20 " className="">
                <circle r="10" cx="10" cy="10"  fill="#3535A5" 
                />
                <circle
                  r="5"
                  cx="10"
                  cy="10"
                  fill="transparent"
                  stroke="oklch(79.2% 0.209 151.711)"
                  stroke-width="10"
                  stroke-dasharray="calc(35 * 31.4 / 100) 31.4"
                  transform="rotate(-90) translate(-20)"
                 
                />
              </svg>
            </div>
            <div className="flex gap-2 items-center p-0.5">
              <div className="flex gap-2 items-center">
                <Image
                  src="/images/isuzwal.jpg"
                  height={40}
                  width={40}
                  alt="_isuzwal"
                  className="rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <h2 className="text-[13px] font-semibold text-neutral-950 dark:text-neutral-300">
                    Albert Juan
                  </h2>
                  <p className="text-neutral-500 text-[11px] font-medium">SEO Expert</p>
                </div>
              </div>
            </div>
          </div>
          <LeftLine />
          <RightLine />
          {/* <Line /> */}
          <div className="w-8 z-10 h-8 rounded-full  bg-gradient-to-l from-green-400 to-green-300 flex items-center justify-center">
            <Search className="size-4" />
          </div>
          <div className=" z-20 w-36 relative rounded-xl border bg-neutral-900/90 border-neutral-900/80 p-1.5 ">
            <div className=" z-20 w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-green-300 absolute      lg:left-[55.5%]  left-[43%] -top-2  " />
             <div className=" z-20 w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-green-300 absolute     -left-1 top-[46%]  " />
            <div className="flex gap-3 items-center">
              <h1 className="text-neutral-300 font-semibold text-[12px]">
                Work
                <br />
                experience
              </h1>
              <div className="w-5 h-5 flex items-center justify-center rounded-full bg-gradient-to-b from-green-400 to-green-300">
                <WorkflowIcon className="size-3" />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-2 p-0.5">
              <div className="h-3 w-full max-w-[210px] bg-neutral-800/90 border border-neutral-900 rounded-xl" />
              <div className="h-3 w-full max-w-[180px] bg-neutral-800/90 border border-neutral-900 rounded-xl" />
              <div className="h-3 w-full max-w-[160px] bg-neutral-800/90 border border-neutral-900 rounded-xl" />
              <div className="h-3 w-full max-w-[140px] bg-neutral-800/90 border border-neutral-900 rounded-xl" />
              <div className="h-3 w-full max-w-[120px] bg-neutral-800/90 border border-neutral-900 rounded-xl" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2  items-start  p-0.5 ">
          <h1 className="font-medium text-[24px] leading-tight text-neutral-950  dark:text-neutral-300">
            Our talent pool
          </h1>
          <p className="text-neutral-500 text-[14px]  font-semibold">
            SEO talent comes to use worildwide because we only specilaize in SEO .We have a CRM with
            a multifold of talented SEOs
          </p>
        </div>
      </div>
       <div className="flex flex-col gap-2  max-w-xl mx-auto w-full  border  dark:bg-zinc-900/60   dark:border-neutral-900  rounded-xl p-3 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-zinc-100 border-zinc-50">
<h1 className="font-medium text-[24px] leading-tight text-neutral-950  dark:text-neutral-300">
            Hunt From International <br /> SEO conference and meetups
          </h1>
          <p className="text-neutral-500 text-[14px]  font-semibold">
           It's a habit for our team to attend  different international SEO conferences and meetups.We search and recruit brilliant seo minds from there to make aoure assests bigger 
          </p>
        </div>
    </div>
  );
};
