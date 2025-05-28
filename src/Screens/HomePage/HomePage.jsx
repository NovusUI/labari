import React from 'react'
import Header from '../../Components/Header'
import Hero from './Components/Hero'
import Discover from './Components/Discover'
import Explore from './Components/Explore'
import Contact from './Components/Contact'
import Waitlist from './Components/Waitlist'
import Footer from '../../Components/Footer/Footer'
import HeroV2 from './Components/HeroV2'
import Headerv2 from '../../Components/Headerv2'
import Discoverv2 from './Components/Discoverv2'
import Explorev2 from './Components/Explorev2'
import FAQ from './Components/FAQ'
// import Labari from '../Labari'

const HomePage = () => {
  return (
    <div className='bg-[#1A1A1A]'>
      <Headerv2/>
     <HeroV2/> 
      {/* <Labari/> */}
      {/* <Discover/> */}
      <Discoverv2/>
      {/* <Explore/> */}
      <Explorev2/>
      <FAQ/>
      {/* <Waitlist/> */}
      <Contact/>
      <Footer/>
    </div>
  )
}

export default HomePage
