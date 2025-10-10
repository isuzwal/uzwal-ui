"use client";
import { Menu } from "lucide-react";
import React, { useState } from "react";
import { Kanban } from "lucide-react";
export default function Nabar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className="relative mt-2 flex w-full items-center justify-between rounded-full border border-neutral-900 bg-neutral-900 px-3 py-1.5">
        <h1 className="flex items-center justify-center gap-2 text-xl font-semibold">
          <Kanban className="text-primary mt-1 rotate-90 fill-blue-400" />
          cobalt
        </h1>
        <div className="hidden items-center gap-3 md:flex">
          <button className="cursor-pointer rounded-3xl px-7 py-2 font-semibold text-white">
            Blog
          </button>
          <button className="relative cursor-pointer overflow-hidden rounded-3xl border border-neutral-900 bg-neutral-950 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300">
            <span className="relative z-10">Join the Waitlist</span>
          </button>
        </div>
        <div className="flex cursor-pointer items-center md:hidden">
          <button onClick={() => setOpen(!open)} className="cursor-pointer">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="mx-w-[95%] absolute inset-x-0 top-12 z-20 mx-auto rounded-xl border border-neutral-950 bg-zinc-900 opacity-70 md:hidden">
            <div className="mx-auto mr-10 flex flex-col items-center gap-3 p-4 text-sm text-neutral-300">
              <button className="w-full cursor-pointer rounded-3xl border border-neutral-900 px-7 py-2 font-semibold transition duration-300 hover:bg-neutral-800">
                Blog
              </button>
              <button className="relative w-full cursor-pointer rounded-3xl border border-neutral-900 bg-neutral-950 px-5 py-2 text-sm font-semibold text-white transition-all duration-300">
                Join the Waitlist
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
