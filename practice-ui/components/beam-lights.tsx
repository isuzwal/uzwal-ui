import { motion } from "motion/react";
export const SVGLine = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 35"
      strokeLinecap="round"
      fill="none"
      className="absolute left-4 -bottom-[7px] w-1/2">
      {/* Base line — make it subtle and darker */}
      {/* <line
    x1="0"
    y1="20"
    x2="360"
    y2="20"
    stroke="oklch(37.1% 0 0 / 0.3)"  // darker gray, low opacity
    strokeWidth="0.5"
  /> */}


      <line x1="0.5" y1="20" x2="360" y2="20" stroke="url(#line-color)" strokeWidth="1.5" />

      <defs>
        <motion.linearGradient
          id="line-color"
          gradientUnits="userSpaceOnUse"
          initial={{ x1: "0%", x2: "10%" }}
          animate={{ x1: "90%", x2: "100%" }}
          transition={{
            duration: 3,
            ease: "linear",
            repeatType: "loop",
            repeat: Infinity,
          }}>
          
          <stop offset="0" stopColor="oklch(37.1% 0 0 / 0.2)" />
          <stop offset="0.3" stopColor="oklch(85% 0.25 140)" /> 
          <stop offset="0.5" stopColor="oklch(85% 0.25 140)" />
          <stop offset="1" stopColor="oklch(37.1% 0 0 / 0.2)" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

export const SVGLine1 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 35"
      strokeLinecap="round"
      fill="none"
      className="absolute  right-3 -bottom-[8px] w-1/2  rotate-180">
      {/* Base line — make it subtle and darker */}
      {/* <line
    x1="0"
    y1="20"
    x2="360"
    y2="20"
    stroke="oklch(37.1% 0 0 / 0.3)"  // darker gray, low opacity
    strokeWidth="0.5"
  /> */}


      <line x1="0.5" y1="20" x2="360" y2="20" stroke="url(#line-color)" strokeWidth="1.5" />

      <defs>
        <motion.linearGradient
          id="line-color"
          gradientUnits="userSpaceOnUse"
       initial={{ x1: "100%", x2: "110%" }}
          animate={{ x1: "0%", x2: "10%" }}
          transition={{
            duration: 3,
            ease: "linear",
            repeatType: "loop",
            repeat: Infinity,
          }}>
          
          <stop offset="0" stopColor="oklch(37.1% 0 0 / 0.2)" />
          <stop offset="0.3" stopColor="oklch(85% 0.25 140)" /> 
          <stop offset="0.5" stopColor="oklch(85% 0.25 140)" />
          <stop offset="1" stopColor="oklch(37.1% 0 0 / 0.2)" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};


export const SVGLine2 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 35"
      strokeLinecap="round"
      fill="none"
      className="absolute -left-1 -top-[9px] w-1/2 rotate-180">
      {/* Base line — make it subtle and darker */}
      {/* <line
    x1="0"
    y1="20"
    x2="360"
    y2="20"
    stroke="oklch(37.1% 0 0 / 0.3)"  // darker gray, low opacity
    strokeWidth="0.5"
  /> */}

      
      <line x1="0.5" y1="20" x2="360" y2="20" stroke="url(#line-color)" strokeWidth="1.5" />

      <defs>
        <motion.linearGradient
          id="line-color"
          gradientUnits="userSpaceOnUse"
          initial={{ x1: "0%", x2: "10%" }}
          animate={{ x1: "90%", x2: "100%" }}
          transition={{
            duration: 3,
            ease: "linear",
            repeatType: "loop",
            repeat: Infinity,
          }}>
          {/* Brighter green core */}
          <stop offset="0" stopColor="oklch(37.1% 0 0 / 0.2)" />
          <stop offset="0.3" stopColor="oklch(85% 0.25 140)" />
          <stop offset="0.5" stopColor="oklch(85% 0.25 140)" />
          <stop offset="1" stopColor="oklch(37.1% 0 0 / 0.2)" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

export const SVGLine3 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 35"
      strokeLinecap="round"
      fill="none"
      className="absolute  right-1  -top-[11px] w-1/2  ">
      {/* Base line — make it subtle and darker */}
      {/* <line
    x1="0"
    y1="20"
    x2="360"
    y2="20"
    stroke="oklch(37.1% 0 0 / 0.3)"  // darker gray, low opacity
    strokeWidth="0.5"
  /> */}

      
      <line x1="0.5" y1="20" x2="360" y2="20" stroke="url(#line-color)" strokeWidth="1.5" />

      <defs>
        <motion.linearGradient
          id="line-color"
          gradientUnits="userSpaceOnUse"
       initial={{ x1: "100%", x2: "110%" }}
          animate={{ x1: "0%", x2: "10%" }}
          transition={{
            duration: 3,
            ease: "linear",
            repeatType: "loop",
            repeat: Infinity,
          }}>
         
          <stop offset="0" stopColor="oklch(37.1% 0 0 / 0.2)" />
          <stop offset="0.3" stopColor="oklch(85% 0.25 140)" /> 
          <stop offset="0.5" stopColor="oklch(85% 0.25 140)" />
          <stop offset="1" stopColor="oklch(37.1% 0 0 / 0.2)" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

export const Line = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 35"
      strokeLinecap="round"
      fill="none"
      className="absolute   left-[43.5%] w-16 -top-8 rotate-90">
      {/* Base line — make it subtle and darker */}
      {/* <line
    x1="0"
    y1="20"
    x2="360"
    y2="20"
    stroke="oklch(37.1% 0 0 / 0.3)"  // darker gray, low opacity
    strokeWidth="0.5"
  /> */}

      {/* Animated bright gradient line */}
      <line x1="0.5" y1="20" x2="360" y2="20" stroke="url(#line-color)" strokeWidth="3" />

      <defs>
        <motion.linearGradient
          id="line-color"
          gradientUnits="userSpaceOnUse"
          initial={{ x1: "0%", x2: "10%" }}
          animate={{ x1: "90%", x2: "100%" }}
          transition={{
            duration: 3,
            ease: "linear",
            repeatType: "loop",
            repeat: Infinity,
          }}>
          {/* Brighter green core */}
          <stop offset="0" stopColor="oklch(37.1% 0 0 / 0.2)" />
          <stop offset="0.3" stopColor="oklch(85% 0.25 140)" /> 
          <stop offset="0.5" stopColor="oklch(85% 0.25 140)" />
          <stop offset="1" stopColor="oklch(37.1% 0 0 / 0.2)" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};