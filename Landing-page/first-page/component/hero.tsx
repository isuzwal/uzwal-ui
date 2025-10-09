import React from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="my-40 flex w-full flex-col items-center justify-center">
      <h1 className="max-w-2xl bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-7xl leading-tight font-bold tracking-tight text-transparent">
        Unleash the power of intuitive finance
      </h1>
      <p className="mx-auto mt-10 max-w-3xl p-1 text-center text-xl font-semibold text-neutral-500 selection:bg-white">
        Say goodbye to the <span className="text-primary">outdated </span>{" "}
        financial tools. Every small business owner, regardless of the
        background, can now manage their{" "}
        <span className="text-primary">business </span> like a pro. Simple.
        Intuitive. And never boring.
      </p>
      <div className="mt-8 flex w-full max-w-lg justify-center">
        <button className="relative cursor-pointer rounded-3xl border border-neutral-800 px-6 py-2 text-white">
          <div className="absolute inset-x-0 bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-600 to-transparent"></div>
          Join Waitlist
        </button>
      </div>
      <div className="mt-8 ">
        <div className="border border-neutral-900  rounded-xl p-4 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
        <img src="landing.png"  className="rounded-[12px]"/>
        </div>
      </div>
    </div>
  );
}
