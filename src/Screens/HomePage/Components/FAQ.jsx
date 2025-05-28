import React, { useState } from 'react';
import Accordions from '../../../Components/Accordions/Accordions';
import { motion } from 'framer-motion';
import EmailForm from '../../../Components/EmailForm';
import { useTranslation } from 'react-i18next';
  

  
  const FAQ = () => {

  
    const { t} = useTranslation()

    const items = [
      {
        title:`${t("q_what_is_labari")}`,
        content:`${t("a_what_is_labari")}`
      },
      {
        title:`${t("q_when_launch")}`,
        content:`${t("a_when_launch")}`
      },
      {
        title:`${t("q_cost")}`,
        content:`${t("a_cost")}`
      },
      {
        title:`${t("q_where_use")}`,
        content:`${t("a_where_use")}`
      },
      {
        title:`${t("q_kind_content")}`,
        content:`${t("a_kind_content")}`
      },
 
      {
        title:`${t("q_download")}`,
        content:`${t("a_download")}`
      },
      {
        title:`${t("q_suitable_kids")}`,
        content:`${t("a_suitable_kids")}`
      },
      {
        title:`${t("q_sign_up")}`,
        content:`${t("a_sign_up")}`
      },
      {
        title:`${t("q_stay_updated")}`,
        content:`${t("a_stay_updated")}`
      },
    ];
  
    return (
      <motion.div
        className='bg-black flex flex-col items-center py-20 px-6 md:px-10 space-y-12 text-center w-full text-white mb-1'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <motion.h1 className='roboto-600 text-xl md:text-[48px]'>{t("faq_title")}</motion.h1>
  
        <motion.div className='w-full max-w-4xl'>
          <Accordions items={items} />
        </motion.div>
  
        <motion.div

          className='text-center space-y-6 w-full max-w-xl'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="space-y-5 py-40">
          <h1 className='roboto-400 text-lg md:text-[24px]'>
            {t("join_waitlist")}
          </h1>
  
          <EmailForm/>
  
          </div>
      
        </motion.div>
      </motion.div>
    );
  };
  
  export default FAQ;
  