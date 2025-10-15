"use client";
import { ChevronRight, Settings, Settings2Icon, X } from "lucide-react";
import { motion, useAnimate } from "motion/react";
export const NextJSButton = () => {
  const [scope, animate] = useAnimate();


  const CloseButton = async () => {
      await animate(".btn_part",{
         opacity:0,
         x:-10
        },{
            duration:0.2,
            ease:"easeOut"
        })
             
    await animate("span", {
      width: "2.25rem", 
       height:"2.25rem",
      
    },{
         duration:0.25,
         ease:"easeInOut"
    }
)
await animate("button",{
    width:"2rem",
    height:"2rem",
    x:-1
})
await animate(".hov",{
    opacity:"0"
})
  
  };
  return (
    <div className=" flex justify-center items-center max-w-4xl w-full mx-auto  ">
      <div ref={scope}>
        <motion.span
          style={{
            width: "10rem",
            height:"2.25rem"
           
          }}
          className="hehe relative rounded-full flex gap-1  items-center   p-0.5  h-9 border-neutral-300 bg-zinc-200 border dark:border-neutral-900  dark:bg-neutral-900  shadow-[-0.5px_1px_9px_rgb(255,255,250,0.3)] ">
          <div 
           className="    rounded-full h-8 w-8  ">
            <motion.button
             style={{
            width: "2rem",
            height:"2rem",
            x:-1
          }}
              className=" group inset-0  relative  rounded-full text-[10px] cursor-pointer border-neutral-200 w-full h-full  items-center bg-neutral-200 dark:text-white font-semibold dark:bg-neutral-950 dark:border-neutral-950 
             ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 180 180"
                className="w-full h-full text-neutral-500"
                fill="currentColor">
                <path
                
                  d="M64.5 55.5H75L115.5 105V55.5H124.5V124.5H114L74.25 74.25V124.5H64.5V55.5Z"
                />
              </svg>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileHover={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeIn",
                }}
                className="hov cursor-pointer  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            rounded-full bg-neutral-400/20 
            w-[26px] h-[26px] z-10"></motion.div>
            </motion.button>
          </div>
          <motion.div className="btn_part flex  px-2 flex-1 justify-center gap-12   items-center text-neutral-500 ">
            <p className=" text-[12px] font-semibold ">Error</p>
            <button  onClick={CloseButton} className="mt-0.5  items-center  flex justify-center  cursor-pointer w-5 h-5 hover:bg-neutral-600/80 rounded-full transition-all duration-300 ">
              <X className="size-3" />
            </button>
          </motion.div>
        </motion.span>
        {/* <SeetingDiv /> */}
      </div>
    </div>
  );
};

// const SeetingDiv = () => {
//   const list = [
//     {
//       heading: "Route",
//       lable: "Static",
//     },
//     {
//       heading: "Try Turbopack",
//       lable: <ChevronRight />,
//     },
//     {
//       heading: "Route Info",
//       lable: <ChevronRight />,
//     },
//   ];
//   return (
//     <div
//       className="flex flex-col items-start rounded-xl border border-neutral-800/70
//                  bg-neutral-950/80 backdrop-blur-md
//                  w-72 h-44 shadow-[0_4px_20px_rgba(0,0,0,0.4)]
//                  transition-all duration-300 hover:shadow-[0_6px_25px_rgba(0,0,0,0.6)]">
//       <div className="flex flex-1 flex-col gap-1 px-2 py-1.5 w-full">
//         {list.map((item) => (
//           <div
//             key={item.heading}
//             className="w-full flex justify-between items-center px-2 py-1.5
//                        rounded-md cursor-pointer
//                        text-[14px] font-medium text-neutral-300
//                        transition-all duration-300
//                        hover:bg-neutral-800/60 hover:text-white
//                        hover:opacity-100 opacity-80">
//             <h1>{item.heading}</h1>
//             <button className="text-neutral-500 text-[14px]  font-medium">{item.lable}</button>
//           </div>
//         ))}
//       </div>
//       <div className="w-full h-[1px] bg-neutral-800" />
//       <div className="flex px-2 py-2 w-full">
//         <div
//           className="text-white flex items-center gap-1 justify-between w-full cursor-pointer  transition-all duration-300
//                        hover:bg-neutral-800/60 hover:text-white px-2 py-1.5 rounded-md
//                        hover:opacity-100 opacity-80">
//           <h1 className="text-[14px] font-semibold">Preferences</h1>
//           <Settings className="size-4 text-neutral-500" />
//         </div>
//       </div>
//     </div>
//   );
// };
