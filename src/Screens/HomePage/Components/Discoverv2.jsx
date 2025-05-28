import React from 'react';
import { motion } from 'framer-motion';
import { useTilt } from '../../../hooks/useTilt';
import { useTranslation } from 'react-i18next';



const Discoverv2 = () => {

    const [tiltRef, tiltStyle] = useTilt();
    const { t} = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false}}
      className='flex flex-col justify-center items-center space-y-10 py-20 px-6 md:px-20 lg:px-40 bg-[#000000] text-[#ffffff] w-full'
    >
      <motion.h3
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: false}}
        className='text-[#F8C605] text-2xl md:text-[28px] roboto-600'
      >
        {t("discover_title")}
      </motion.h3>

      <motion.div
         ref={tiltRef}
         style={{
           ...tiltStyle,
           willChange: "transform"
         }}
        className='w-full p-6 md:p-10 lg:py-20 lg:px-20 space-y-5 bg-[#171717] rounded-[20px] text-center border border-[#00A45A]'
      >
        <h1 className='text-3xl md:text-4xl lg:text-[48px] roboto-700 !leading-normal'>
          {t("discover_heading")}
        </h1>
        <p className='text-lg md:text-xl lg:text-2xl roboto-200'>
          {t("discover_text")}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Discoverv2;
