import React from "react";
import { motion } from "framer-motion";
import { useErrorSuccessContext } from "../ContextApi/MessageContext";

const SuccessBox = () => {
  const { successMessages } = useErrorSuccessContext();

  return (
    <div className="fixed top-20 max-w-[300px] right-5 z-50 flex flex-col gap-2 z-40">
      {successMessages.map((msg) => (
        <motion.div
          key={msg.id}
          initial={{height:0, width:0, opacity: 0, y: -10 }}
          animate={{height:"50px", width: "300px", opacity: 1, y: 0 }}
          exit={{ height: 0, opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative bg-blue-500 text-white p-4 pl-6 rounded-md flex items-center justify-end"
        >
          <p>{msg.message}</p>
          <div className="absolute top-0 left-0 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[20px] border-l-white"></div>
        </motion.div>

      ))}
    </div>
  );
};

export default SuccessBox;
