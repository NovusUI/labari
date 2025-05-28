import React from 'react';
import { motion } from 'framer-motion';


const HomeCard1 = ({ header, text, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className='w-full h-full text-center p-6 md:p-10 border border-[#00A45A] space-y-4 rounded-xl roboto-400 bg-[linear-gradient(to_bottom,_#171717_0%,_#171717_60%,_#160647_100%)] flex flex-col justify-between'
    >
      <div>
       
        <h1 className='!text-[24px] md:text-[20px] font-semibold mb-5'>{header}</h1>
        <p className='roboto-200 text-[14px] md:text-[16px]'>{text}</p>
      
      </div>
      {icon && <motion.div
     
     
    >
      {icon()}</motion.div>}
    </motion.div>
  );
};

export default HomeCard1;
