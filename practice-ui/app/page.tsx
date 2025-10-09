"use client";

import { TextAnimation } from "@/components/animation-seq";
import { Button } from "@/components/button-view";
import { Card } from "@/components/card-view";
import { PasswordView } from "@/components/passoword-view";
import { ProjectCard } from "@/components/project-view";
import { ScrollAnimation } from "@/components/scroll";
import { SecondButton } from "@/components/second-button";

export default function Home() {
  return (
    <div className=" flex  flex-col min-h-screen bg-neutral-950  ">
      {/* <div className="flex flex-col gap-1  max-w-7xl mx-auto "> */}
        {/* <div className="flex  flex-col md:flex-row  ">
          <PasswordView />
          <Card />
        </div>
        <div className="flex justify-center items-center gap-1   flex-col md:flex-row">
        <Button />
        <SecondButton />
        </div> */}
        {/* <ProjectCard /> */}
      {/* </div> */}
      {/* <TextAnimation /> */}
      <ScrollAnimation/>
    </div>
  );
}
