import React from 'react'
import MailVecor from '../../../Vectors/MailVecor'
import PhoneVector from '../../../Vectors/PhoneVector'
import OfficeVector from '../../../Vectors/OfficeVector'
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <div className='bg-black w-full px-5 sm:px-10 lg:px-20  py-24 flex flex-col md:flex-row justify-between md:space-x-10'>
    <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.4 }} 
    className='space-y-5 text-center flex flex-col items-center text-white'>
        <MailVecor/>
        <h1 className='roboto-700 text-[20px] sm:text-[25px]'>Email</h1>
        <p className='roboto-400 text-[16px]'>For any inquiries, please reach out to us directly.</p>
        <p className='roboto-400 text-[16px] underline'>labari@doubleyou.com.ng</p>
    </motion.div>
    <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }} 
        className='space-y-5 mt-20 md:mt-0  text-center flex flex-col items-center text-white'>
        <PhoneVector/>
        <h1 className='roboto-700 text-[20px] sm:text-[25px]'>Phone</h1>
        <p className='roboto-400 text-[16px]'>Feel free to call us anytime for assistance.</p>
        <p className='roboto-400 text-[16px] underline'>+2348073705508</p>
    </motion.div>
    <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.4 }} 
    className='space-y-5 mt-20 md:mt-0  text-center flex flex-col items-center text-white'>
        <OfficeVector/>
        <h1 className='roboto-700 text-[20px] sm:text-[25px]'>Office</h1>
        <p className='roboto-400 text-[16px]'>Visit us at our physical location for more information.</p>
        <p className='roboto-400 text-[16px] underline'>1500 North Grant Street, Suite C Denver, olorado 80203 United States</p>
    </motion.div>
  </div>
  )
}

export default Contact
