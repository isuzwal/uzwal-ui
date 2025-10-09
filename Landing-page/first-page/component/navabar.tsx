import React from "react";

export default function Nabar() {
  return (
    <div className="flex items-center mt-2  justify-between px-6 py-2">
      <h1 className="text-xl font-semibold">cobalt</h1>
      <div className="flex items-center gap-3">
        <button className="cursor-pointer rounded-3xl px-7 py-2 font-semibold text-white">
          Blog
        </button>
        <button className="relative  hover:shadow-[0_10px_50px_rgba(8,_112,_184,_0.5)] cursor-pointer rounded-3xl border border-neutral-800 bg-neutral-900 px-5 py-2 text-sm font-semibold text-white transition-all duration-300">
          Join the Waitlist
        </button>
      </div>
    </div>
  );
}
