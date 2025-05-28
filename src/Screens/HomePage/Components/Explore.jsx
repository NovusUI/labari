import React from 'react'
import Button1 from '../../../Components/Buttons/Button1'
import AngleRightVector from '../../../Vectors/AngleRightVector'
import {motion} from "framer-motion"
import femaleworker1 from "../../../assets/girl1.jpg"
import Rasengan from '../../../Vectors/Rasengan'
import Love from '../../../Vectors/Love'
import { useNavigate } from 'react-router-dom'

const Explore = () => {
  const navigate = useNavigate()

  return (
    <div className='bg-[#eaeeff] w-full md:flex md:justify-between  px-5 sm:px-10 lg:px-20 py-40 space-y text-[#0C1D44]'>
        <div className='w-full md:w-[50%] space-y-10 mb-10 md:mb-0'>
            <h1 className='roboto-600 text-[16px] text-[#F8C605]'>Explore</h1>
            <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }} 
            className='roboto-700 text-[24px] md:text-[32px] lg:text-[48px]'>Explore A World of Animated Books</motion.p>
            <p className='roboto-400 text-[18px]'>Our platform offers an extensive collection of  animated books tailored to your tastes. With user reviews and expert recommendations, finding your next favorite is effortless.</p>
            <div className='w-full sm:flex sm:justify-between sm:space-x-5'>
                <div className='sm:w-[50%] space-y-5'>
                    <Rasengan/>
                    <p className='roboto-700 text-[20px]'>Wide Selection</p>
                    <p className='roboto-400 text-[16px]'>Access thousands of titles across genres, ensuring something for everyone.</p>
                </div>
                <div className='sm:w-[50%] space-y-5'>
                    <Love/>
                    <p className='roboto-700 text-[20px]'>Wide Selection</p>
                    <p className='roboto-400 text-[16px]'>Access thousands of titles across genres, ensuring something for everyone.</p>
                </div>
            </div>
            <div className='w-full flex space-x-10 items-center'>
                <Button1 title={"Learn More"} onClick={()=>navigate("/login")}/>
                <div role='button' className='flex space-x-5 items-center' onClick={()=>navigate("/login")}><p>Sign up</p><AngleRightVector/></div>
            </div>
        </div>
        <div style={{ backgroundImage: `url(${femaleworker1})`, backgroundSize: 'cover' }} className='w-full md:w-[45%] h-[640px] mb-10 sm:mb-0 bg-center rounded-[20px]'>
         
      </div>
    </div>
  )
}

export default Explore
