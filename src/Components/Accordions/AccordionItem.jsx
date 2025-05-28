import React from "react";
import { motion } from "framer-motion";
import CancelSVG from "../../svgs/CancelSVG";
import DropDownSVG from "../../svgs/DropDownSVG";

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className=" bg-[#1A1A1A] py-5 sm:py-10 mb-2 text-white" onClick={onToggle}>
      {/* Header */}
      <div className="text-lg lg:text-[24px] px-5 sm:px-10">
        <div className="flex justify-between roboto-400  items-center ">
          <h3 className="text-left">{title}</h3>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <CancelSVG fill={"#ffffff"}/> : <DropDownSVG fill={"#ffffff"}/>}
          </motion.span>
        </div>
      </div>
  
      {/* Animated Content */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden "
      >
        <div className="mulish-400 text-left  text-[16px] md:text-[18px] md:leading-6 mt-4 py-5 px-5 sm:px-10 border-t-2 border-black">
          {content}
        </div>
      </motion.div>
    </div>
  );
};

export default AccordionItem;
