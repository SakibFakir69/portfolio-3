"use client";

import { motion } from "framer-motion";
import { DecryptingText } from "./decrypting";
const SlideInText = ({
  text = "Simplicity is the ultimate sophistication.",
}) => {
  return (
    <h2 className="md:text-5xl text-3xl   font-bold ">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{
            x: -50,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: i * 0.03,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h2>
  );
};
const SlideInView = () => {
  return (
    <div
      className="flex flex-col items-center justify-center font-sans  p-4 text-white 

  
 w-full  "
    >
        <p className="text-xl font-semibold flex gap-x-2"> Crafting <span className="text-blue-400">

            
            <DecryptingText targetText={"Real-World"}/>
            </span> Solutions</p>

      <SlideInText text="Turning Concepts into Seamless " />
      <h2 className="text-3xl md:text-6xl font-bold text-center md:mt-3 mt-2">

        <span className="text-blue-400 md:mt-0 -mt-4">
          <SlideInText text="Software Solutions" />
        </span>
      </h2>
    </div>
  );
};
export default SlideInView;
