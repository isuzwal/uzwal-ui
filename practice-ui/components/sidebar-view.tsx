 "use client"

import { Headset, Home, PhoneIcon, PhoneIncoming, Settings } from "lucide-react";
import { useState } from "react"

 export const  SibeBar=()=>{
    const [opeN,setOpen]=useState<boolean>(false);
    
    const close=()=>{
        setOpen((prev)=>!prev);
    }

        interface Props{
            ions:React.ReactNode
            label:string
        }
    const items=[
        {
            icons:<Home  className="size-5"/>,
            label:"Home"
        },
        {
            icons:<Settings className="size-5" />,
            label:"Setting"
        },{
            icons:<Headset  className="size-5"/>,
            label:"Contact us"
        }
    ]
    return(
        <div  className="flex justify-center items-center   h-96">
            <div className="flex flex-col border max-w-96 mx-auto w-full gap-2 bg-neutral-900 border-neutral-900/90 py-6 px-6 rounded-2xl items-center">
                {items.map((item)=>(
                    <button key={item.label} className=" border rounded-[12px]  text-neutral-300  font-semibold w-full flex items-center justify-center gap-2 p-1">
                        <span>{item.icons}</span>
                        {item.label}
                        </button>
                ))}
            </div>
           
        </div>
    )
 }