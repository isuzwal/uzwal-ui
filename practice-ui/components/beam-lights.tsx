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

export const ReactLight = () => {
  return (
    <svg
      className="pointer-events-none absolute rounded-4xl  inset-0 h-14 w-52   "
      xmlns="http://www.w3.org/2000/svg">
      <motion.rect
        x="2"
        y="2"
        width="110%"
        height="95%"
        rx="14"
        ry="14"
        fill="none"
        stroke="url(#borderGradient)"
        strokeWidth="0.5"
        pathLength="0.5"
        initial={{
          pathLength: 0,
        }}
        animate={{
          pathLength: 1,
        }}
        transition={{
          duration: 3,
          delay: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <defs>
        <linearGradient id="borderGradient" x1="10%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(79.2% 0.209 151.711)" />
          <stop offset="100%" stopColor="oklch(79.2% 0.209 151.711)" />
        </linearGradient>
      </defs>
    </svg>
  );
};


export const LeftLine = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 10 300 20"
      strokeLinecap="round"
      fill="none"
      className="absolute  right-1/2 w-26 sm:w-32 lg:w-16">
      {/* Base line — make it subtle and darker */}
      {/* <line
    x1="0"
    y1="20"
    x2="360"
    y2="20"
    stroke="oklch(37.1% 0 0 / 0.3)"  // darker gray, low opacity
    strokeWidth="0.5"
  /> */}

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
          <stop offset="0" stopColor="oklch(37.1% 0 0 / 0.2)" />
          <stop offset="0.3" stopColor="oklch(85% 0.25 140)" />
          <stop offset="0.5" stopColor="oklch(85% 0.25 140)" />
          <stop offset="1" stopColor="oklch(37.1% 0 0 / 0.2)" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

export const RightLine = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 35"
      strokeLinecap="round"
      fill="none"
      className="absolute  left-1/2 w-26 sm:w-32 lg:w-16 rotate-180">
      {/* Base line — make it subtle and darker */}
      {/* <line
    x1="0"
    y1="20"
    x2="360"
    y2="20"
    stroke="oklch(37.1% 0 0 / 0.3)"  // darker gray, low opacity
    strokeWidth="0.5"
  /> */}

      <line x1="0.5" y1="20" x2="360" y2="20" stroke="url(#line-color)" strokeWidth="3" />

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



export const LeftSideLight=()=>{
    const pathD = "M100 15 V5 M100 15 H0 M1 15 V25";
  return (
 <svg
 className="w-44 absolute  lg:top-[52%]  sm:top-[53.5%]  top-[65%] left-[20%] "
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 120 30"
  fill="none"
  stroke="#1d1d1d"   
  strokeWidth="2.5"
  strokeLinecap="round"
  strokeLinejoin="round"
>
 <path
        d={pathD}
        stroke="oklch(26.9% 0 0)" 
        strokeWidth="1.5"
      />
  <motion.path
           d={pathD}
          stroke="url(#line-color)"
          strokeWidth="1"
          initial={{ pathLength: 0,   pathOffset:0 }}
          animate={{ pathLength: 1 ,pathOffset:1 }}
          transition={{
          duration: 2,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
        <defs>
        <linearGradient id="line-color" gradientUnits="userSpaceOnUse">
          <stop offset="0.3" stopColor="oklch(87.1% 0.15 154.449)" stopOpacity="0" />
          <stop offset="0.8" stopColor="oklch(79.2% 0.209 151.711)" stopOpacity="1" />
          <stop offset="1" stopColor="oklch(72.3% 0.219 149.579)" stopOpacity="1" />
        </linearGradient>
      </defs>
</svg>
  )
}
export const RightSideLight=()=>{
  const pathD = "M1 15 V5 M0 15 H100 M100 15 V25";
  return (
 <svg
 className="w-44 absolute  lg:top-[52%]  sm:top-[53.5%]  top-[65%]  right-[10%] "
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 120 30"
  fill="none"
  stroke="#1d1d1d"   
  strokeWidth="1.5"
  strokeLinecap="round"
  strokeLinejoin="round"
>
    <path
        d={pathD}
        stroke="oklch(26.9% 0 0)" 
        strokeWidth="1.5"
      />
  <motion.path
           d={pathD}
          stroke="url(#line-color)"
          strokeWidth="1"
          initial={{ pathLength: 0,   pathOffset:1 }}
          animate={{ pathLength: 1 ,pathOffset:0 }}
          transition={{
          duration: 2,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    <defs>
        <linearGradient id="line-color" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="oklch(87.1% 0.15 154.449)" stopOpacity="0" />
          <stop offset="0.3" stopColor="oklch(79.2% 0.209 151.711)" stopOpacity="1" />
          <stop offset="1" stopColor="oklch(72.3% 0.219 149.579)" stopOpacity="1" />
        </linearGradient>
      </defs>
</svg>
  )
}


