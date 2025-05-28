import React from 'react'
import {motion} from "framer-motion"
import Button1 from '../../../Components/Buttons/Button1'
import SlantStripesVector from '../../../Vectors/SlantStripesVector'
import NewStar from '../../../Vectors/NewStar'
import PopularStar from '../../../Vectors/PopularStar'
import YourNextFavourite from '../../../Vectors/YourNextFavourite'
import AngleRightVector from '../../../Vectors/AngleRightVector'
import { useNavigate } from 'react-router-dom'

const Discover = () => {
  const navigate = useNavigate()
 

  return (
    <div  className='px-5 sm:px-10 lg:px-20  pt-44 pb-20 w-full flex flex-col items-center relative text-[#0C1D44]'>
      <div className='lg:flex justify-between'>
        <div className='lg:w-[50%] pr-20'>
            <h1 className='roboto-600 text-[16px] text-[#F8C605]'>Discover</h1>
            <p className='roboto-700 text-[24px] md:text-[32px] lg:text-[48px]'>Explore Our Curated Animated  Book Collections</p>
        </div>
        <div className='lg:w-[50%] mt-10 lg:mt-0'>
            <motion.p 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.4 }} 
            className='roboto-400 text-[18px]'>Dive into our extensive library of animated books, featuring the latest releases and timeless classics. Whether you're a film buff or a bookworm, we have something for everyone. Discover your next favourite title today!</motion.p>
        </div>
      </div>
      <div className='w-full py-20 flex flex-col md:flex-row justify-between md:space-x-10'>
        <div className='space-y-5'>
            <NewStar/>
            <h1 className='roboto-700 text-[20px] sm:text-[25px]'>Latest Additions to Our Collection</h1>
            <p className='roboto-400 text-[16px]'>Stay updated with our newest arrivals in both film and literature.</p>
        </div>
        <div className='space-y-5 mt-20 md:mt-0'>
            <PopularStar/>
            <h1 className='roboto-700 text-[20px] sm:text-[25px]'>Popular Picks You Can't Miss</h1>
            <p className='roboto-400 text-[16px]'>Check out the trending titles that everyone is talking about.</p>
        </div>
        <div className='space-y-5 mt-20 md:mt-0'>
            <YourNextFavourite/>
            <h1 className='roboto-700 text-[20px] sm:text-[25px]'>Your Next Favorite Awaits You</h1>
            <p className='roboto-400 text-[16px]'>Browse our collections and find your next adventure.</p>
        </div>
      </div>
      <div className='w-full flex space-x-10 items-center'>
        <Button1 onClick={()=>navigate("/login")} title={"Learn More"}/>
        <div role='button' className='flex space-x-5 items-center' onClick={()=>navigate("/login")}><p>Sign up</p><AngleRightVector/></div>
      </div>
      <div className='absolute right-0 bottom-0'>
        <SlantStripesVector/>
      </div>
    </div>
  )
}

export default Discover
