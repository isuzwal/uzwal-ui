interface Props {
  children: React.ReactNode;
}
import React from "react";

export default function Contianer({ children }: Props) {
  return (
    <div className="relative mx-auto min-h-screen w-full max-w-7xl p-2 text-white not-visited:bg-neutral-950">
      <div className="bg-gradient-conic absolute top-0 left-0 h-72 w-full rounded-b-full from-cyan-500 via-transparent to-white"></div>
      {children}
    </div>
  );
}
