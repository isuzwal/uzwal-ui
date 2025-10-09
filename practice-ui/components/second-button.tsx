import { ArrowRight, Save, TextSearch } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "motion/react";

export function SecondButton() {

  const childrenVariants: Variants = {
    closed: { scale: 1, y: 0, opacity: 1 },
    hover: {
      scale: 0.7,
      y: -6,      
      opacity: 0.7,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };
  const textVarinats:Variants={
    closed:{scale:1 ,y:0 ,opacity:1},
    hover:{
        scale:0.99,
        y:-1,
        opacity:0.9,
        transition: { duration: 0.3, ease: "easeInOut"},
    }
  }
 const hoverBorderVariants: Variants = {
  initial: {
    borderColor: "rgba(255,255,255,0.3)",
    boxShadow: "0 0 0 rgba(255,255,255,0)", 
  },
  hover: {
    borderColor: "rgba(255,255,255,0.9)",
    boxShadow: "0 0 22px rgba(255,255,255,0.3)", 
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

  return (
    <div className="py-2 min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-2 h-[32rem] border-2 border-zinc-900 bg-zinc-950 p-3 rounded-xl">
        <motion.div
          initial="closed"
          whileHover="hover"
          className="group relative col-span-3 min-h-[20rem] p-4 flex flex-col justify-end items-end 
            overflow-hidden rounded-xl shadow-md transform-gpu 
             border border-neutral-900
             bg-neutral-950
            lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3"
        >
            <motion.div 
            initial='initial'
            variants={hoverBorderVariants}
            whileHover='hover'
            className="absolute inset-0 rounded-xl border border-white/90 blur-md"></motion.div>
            <div className="flex flex-col gap-1 items-start">
            <motion.div variants={childrenVariants}>
              <Save className="text-neutral-300" size={36} />
            </motion.div>

            <motion.div 
            variants={textVarinats}>
              <h1 className="text-white text-xl font-medium">Save your files</h1>
              <p className="text-neutral-300 text-md">
                We automatically save your files as you type.
              </p>
            </motion.div>
            <Link href="/" className="flex gap-1  font-semibold items-center text-white">
              Check out <ArrowRight size={16} className="mt-1 text-white" />
            </Link>
          </div>
        </motion.div>

       
        <motion.div
          initial="closed"
          whileHover="hover"
          className="group relative col-span-3 flex-1 p-4 flex flex-col  justify-end 
            overflow-hidden rounded-xl shadow-md transform-gpu 
            border border-neutral-900
             bg-neutral-950
           
            lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3"
        >
            <motion.div 
            initial='initial'
            variants={hoverBorderVariants}
            whileHover='hover' className="absolute inset-0 rounded-xl border border-white/90 blur-md"></motion.div>
          <div className="flex flex-col gap-1 items-start">
            <motion.div variants={childrenVariants}>
              <TextSearch className="text-neutral-400" />
            </motion.div>
          <motion.div 
            variants={textVarinats}>
              <h1 className="text-white text-xl font-medium">Full text search</h1>
              <p className="text-neutral-300 text-md">
                Search through all your files in one place.
              </p>
            </motion.div>
            <Link href="/" className="flex gap-1  font-semibold items-center text-white">
              Learn more <ArrowRight size={16} className="mt-1 text-white" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
