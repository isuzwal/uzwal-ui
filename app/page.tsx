"use client";

import {Button} from "@/components/button-view";
import { Card } from "@/components/card-view";
import { PasswordView } from "@/components/passowrd-view";



export default function Home() {
  return (
   <div className=" flex  flex-col min-h-screen bg-neutral-100  py-8">
   <Button />
   <Card />
   <PasswordView />
   </div>
  );
}
