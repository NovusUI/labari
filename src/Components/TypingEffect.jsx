import React from "react";
import { motion } from "framer-motion";

const TypingEffect = ({ text }) => {
  const textArray = text.split(""); // Split text into individual characters

  return (
    <div className="flex poppins-light text-[48px] text-white">
      {textArray.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: index * 0.1, // Delay each character
            duration: 0.05,
          }}
        >
          {char === " " ? "\u00A0" : char} {/* Handle spaces */}
        </motion.span>
      ))}
    </div>
  );
};


export default TypingEffect;
