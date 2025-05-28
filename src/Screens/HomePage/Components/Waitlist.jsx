import React from 'react'
import SlantStripesVector2 from '../../../Vectors/SlantStripesVector2'
import {motion} from  "framer-motion"
import { useErrorSuccessContext } from '../../../ContextApi/MessageContext'


const Waitlist = () => {

    const {setSuccessBox} = useErrorSuccessContext()


    const submitWaitlist = async(e)=>{
        e.preventDefault()
        setSuccessBox("Thank you for joining!")

    }
  return (
    <div className='w-full px-5 sm:px-10 lg:px-20  py-20 space-y-8 text-[#0C1D44] relative bg-white'>
        <div className='absolute left-0 top-0'>
            <SlantStripesVector2/>
        </div>
        <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}  
        className='roboto-700 text-[24px] md:text-[32px] lg:text-[48px] z-20 relative'>Join The Waitlist</motion.p>
        <motion.p 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
        className='roboto-400 text-[18px]'>We are currently working, be the first to know when we lunch!!!</motion.p>
        <form className='md:flex md:space-x-5' onSubmit={submitWaitlist}>
            <input type='email' required className='border-[1px] h-[50px] w-full  md:w-[50%] border-[#0C1D44] rounded-[30px] px-10 mb-5 md:mb-0' placeholder='Your Email'></input>
            <button type='submit' className='rounded-[30px] bg-[#0C1D44] text-white py-3 px-10'>Join waitlist</button>
        </form>
    </div>
   
  )
}

export default Waitlist
