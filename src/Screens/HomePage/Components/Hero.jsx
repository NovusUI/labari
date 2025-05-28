import React from 'react'
import hero from '../../../assets/hero.jpg'
import {motion} from "framer-motion"
import Button1 from '../../../Components/Buttons/Button1'
import HeroVector from '../../../Vectors/HeroVector'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
const navigate = useNavigate()
  return (
    <div id='home' className='w-full  sm:pt-10  sm:px-10 lg:px-20 text-white snap-start relative'>
      <div style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover', }} className=' text-center bg-center w-full sm:rounded-[20px] h-[80vh]'>
       
       </div>
       <div className='top-0 sm:top-10  left-0 absolute text-center bg-center sm:text-left  w-full  h-[80vh] sm:px-10 lg:px-20'>
        <div className='w-full h-full sm:rounded-[20px] flex justify-center flex-col items-center px-5 sm:px-10 text-center'>
          <motion.p 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={{ once: false, amount: 0.4 }} 
          className='text-[32px] lg:text-[56px] roboto-700'>Discover your Next</motion.p>
          <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           viewport={{ once: false, amount: 0.4 }}  
          className='text-[32px] lg:text-[56px] roboto-700 mb-10'>Favourite Animated</motion.p>
           <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           viewport={{ once: false, amount: 0.4 }}  
          className='text-[32px] lg:text-[56px] roboto-700 mb-10'>Books</motion.p>


          <p className='text-[12px] sm:text-[16px] lg:text-[20px] roboto-400'>Dive into a world of captivating stories and unforgettable characters. Explore </p>
          <p className='text-[12px] sm:text-[16px] lg:text-[20px] roboto-400 mb-10'> our curated selection of animated books tailored just for you.</p>
          <div  className='flex  justify-center sm:justify-start space-x-4'>
            <a href='#services' >
            {/* <DiscoverOurServicesBtn title="discover our services" /> */}
            <Button1 fullBg={true} title={"Explore"} color={"#A88704"} onClick={()=>navigate("/login")}/>
            
            </a>
            <Button1 title={"Learn More"} color={"#A88704"} onClick={()=>navigate("/login")}/>
          </div>
        </div>
      </div>
      <div className='absolute -bottom-20 right-12 hidden lg:block'>
        <HeroVector/>
      </div>
    </div>
  )
}

export default Hero
