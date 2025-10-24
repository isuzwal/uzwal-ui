import { ArrowRightCircle, Check, CheckCircle } from "lucide-react"
import Image from "next/image"

export const SecondBento=()=>{
    return(
    <div  className="flex  justify-center items-center min-h-screen max-w-7xl mx-auto w-full">
        <Card />
     <div className=" w-full grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-2 rounded-md p-2">
      {/* <LeftSide /> */}
      {/* <div className="flex  text-neutral-500 border">
         Hello
      </div>
      <div className="flex  text-neutral-500 border">
         Hello
      </div> */}
     </div>
    </div>
    )
}
const LeftSide=()=>{
    return(
        <div className="flex  border flex-col justify-between gap-2  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] dark:bg-zinc-900/70   dark:border-neutral-900  shadow-xl  bg-white/90  border-neutral-50 text-neutral-500  rounded-xl p-2">
       <div className="  flex flex-col gap-2 items-center rounded-2xl p-5 ">
        <div className="  rounded-xl shadow-md w-full  max-w-2xl mx-auto p-1.5">
         <div className="flex gap-2 ">
            <Image src={"/images/isuzwal.jpg"} alt="isuzwal" height={40} width={40}  className="rounded-full"/>
            <div  className="flex flex-col p-2">
                <div className="h-[4px] bg-neutral-500 w-full rounded-lg" />
             <div className="h-[4px] bg-neutral-500 w-full rounded-lg" />
            </div>
         </div>
        </div>
        <div className="w-full  max-w-2xl mx-auto  p-1.5 ">
        <h1 className="font-medium text-[20px] leading-tight text-neutral-950  dark:text-neutral-300">Great Skill assessment<br /> by industry veteran</h1>
        <p className="text-neutral-700 dark:text-neutral-500 text-[12px] font-semibold  mt-2">We specilaize in crafting striking descriptions that showcase your company curlture,compelling only the SEOs with superior ability to apply</p>
        </div>
       </div>
       <div>second</div>
      </div> 
    )
}
const Card=()=>{
    return(

        <div className="  border flex  h-80 flex-col justify-between gap-2 items-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] dark:bg-zinc-900/60   dark:border-neutral-900  shadow-xl  bg-white/90  border-neutral-50 text-neutral-500  rounded-xl p-2">
    
        <div className=" flex  flex-1 mask mask-t-from-60% flex-col w-full  max-w-2xl mx-auto p-1.5">
         <div className="flex  flex-col gap-3  justify-center h-full relative  ">
            <div className="h-[24px] absolute inset-0 -top-3 left-20   w-48  bg-neutral-600/20  rounded-lg" />
            <div className=" relative w-full flex justify-between items-center">
                <div className=" absolute  -top-3 bg-neutral-900/90  border border-neutral-900/80  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-full flex items-center ">
                <Check  className="text-neutral-500 size-5 mt-0.5"/>
                </div>
            <div className=" ml-3 flex w-72 rounded-lg dark:bg-neutral-900/60 dark:border-neutral-900 p-1.5">
            <Image src={"/images/isuzwal.jpg"} alt="isuzwal" height={40} width={40}  className="rounded-full"/>
            <div  className="flex flex-col    justify-between  gap-1 items-start p-2  w-full">
                <div className="h-[6px] bg-neutral-600/20 w-full rounded-lg" />
             <div className="h-[6px] bg-neutral-600/20 w-1/2 rounded-lg" />
            </div>
            </div>
            </div>
            <div className=" w-full flex justify-end items-end">
             <div className="flex   w-52  rounded-lg dark:bg-neutral-900/60 dark:border-neutral-900 p-1.5">
            <Image src={"/images/isuzwal.jpg"} alt="isuzwal" height={40} width={40}  className="rounded-full"/>
            <div  className="flex flex-col    justify-between  gap-1 items-start p-2  w-full">
                <div className="h-[6px] bg-neutral-600/20 w-full rounded-lg" />
             <div className="h-[6px] bg-neutral-600/20 w-1/2 rounded-lg" />
            </div>
            </div>
            </div>
         </div>
        </div>
        <div className=" flex  flex-col  w-full  max-w-2xl mx-auto  p-1.5 ">
        <h1 className="font-medium text-[20px] leading-tight text-neutral-950  dark:text-neutral-300">Great Skill assessment<br /> by industry veteran</h1>
        <p className="text-neutral-700 dark:text-neutral-500 text-[12px] font-semibold  mt-2">We specilaize in crafting striking descriptions that showcase your company curlture,compelling only the SEOs with superior ability to apply</p>
        </div>
       </div>
    )
}