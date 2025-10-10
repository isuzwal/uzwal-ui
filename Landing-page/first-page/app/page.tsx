import Contianer from "@/component/container";
import Hero from "@/component/hero";
import Nabar from "@/component/navabar";

export default function Home() {
  return (
    <div className="  z-10 relative bg-neutral-950">
      <Contianer>
        <Nabar />
        <Hero />
      </Contianer>
    </div>
  );
}
