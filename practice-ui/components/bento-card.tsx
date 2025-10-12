import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BentoCard() {
  return (
    <div className="min-h-screen mx-auto w-full max-w-2xl md:max-w-4xl  pt-20 pb-10 px-4 md:px-8 ">
      <Header />
      <div className=" mask mask-b-from-60% grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-2 my-8 md:border p-2 rounded-3xl md:border-neutral-900">
        <Colum>
          <Card src="/images/1.jpeg" alt="first" href="https://uzwal.me"  className="lg:rounded-tl-[calc(24px-8px)]"  />
          <Card src="/images/2.jpeg" alt="second"  href="#" className=""   />
          <Card src="/images/3.jpg" alt="third"  href="#"  className=""  />
          <Card src="/images/7.png" alt="Seven" href="#"  className=""   />
        </Colum>
        <Colum>
          <Card src="/images/4.jpg" alt="fourth"  href="https://pinterest.com" className=""  />
          <Card src="/images/3.jpg" alt="5" href="#" className=""   />
          <Card src="/images/6.jpg" alt="sixth" href="#"  className=""   />
          <Card src="/images/7.png" alt="Seven"  href="#" className=""   />
          <Card src="/images/8.png" alt="Eight" href="https://pinterest.com" className=""   />
        </Colum>
        <Colum>
          <Card src="/images/8.png" alt="Eight"   href="https://pinterest.com" className=""  />
          <Card src="/images/11.png" alt="Nine" href="https://ui.shadcn.com" className=""    />
          <Card src="/images/12.png" alt="12" href="https://perplexity.ai" className=""   />
          <Card src="/images/13.jpg" alt="13"  href="#" className=""  />
          <Card src="/images/3.jpg" alt="third"  href="#"  className=""  />
          <Card src="/images/7.png" alt="Seven" href="#"  className=""  />
        </Colum>
        <Colum>
          <Card src="/images/1.jpeg" alt="first" href="https://uzwal.me" className="lg:rounded-tr-[calc(24px-8px)]"  />
          <Card src="/images/10.png" alt="Ten" href="https://linear.app" className=""   />
          <Card src="/images/11.png" alt="11" href="https://ui.shadcn.com" className=""   />
          <Card src="/images/7.png" alt="Seven"  href="#" className=""   />
          <Card src="/images/3.jpg" alt="third"  href="#" className=""  />
        </Colum>
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <>
      <h1 className="text-4xl tracking-tighter  text-neutral-400 font-bold">
        Bento grids are cool, you should try it sometimes
      </h1>
      <p className="text-base text-neutral-500 mx-w-xl mt-5 font-medium">
        Discover innvovation soluation that tranfrom the way of styling work. Our cutting-edge tools
        are desgined to empower your style.
      </p>
    </>
  );
};

const Colum = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const Card = ({ src, alt, href ,className}: { src: string; alt: string,href:string ,className:string }) => {
  return (
    <Link href={href} target="_blank" className={` group
      after:content-[''] after:absolute after:inset-0 after:bg-black/60 after:opacity-0 after:w-full after:h-full
      hover:after:opacity-90 after:transition after:duration-300 max-w-xl mx-auto rounded-md
      relative mb-2 overflow-hidden shadow-sm block group transition duration-300 ${className}`} >
      <Image src={src} width={500} height={500} alt={alt} className="w-full" />
      <p className=" opacity-0   hover:opacity-100   z-20 transition-all duration-300
      absolute inset-0 text-white font-medium  items-center  m-auto justify-center  flex text-sm">{href.split("https://")[1]}</p>
    </Link>
  );
};
