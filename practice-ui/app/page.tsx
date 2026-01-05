"use client";

import BentoCard from "@/components/ui/bento-card";
import Button from "@/components/ui/button";

import { Screen } from "@/container/section-view";

export default function Home() {
  return (
    <Screen>
      {/* <BentoCard /> */}
      <Button variant={"deafault"} size={"md"} className="bg-red-400">
        Login
      </Button>
    </Screen>
  );
}
