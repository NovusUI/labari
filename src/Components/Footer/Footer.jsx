import React from 'react'
import labarilogo from "../../assets/labari.png"
import EmailForm from '../EmailForm'

const Footer = () => {
  return (
    <div id="footer" className="bg-[#000000] text-white p-5 sm:p-10  md:p-20 w-full mt-1">
      <div className="w-full flex justify-between">
        <div className="w-[69px] h-[40px] hidden md:block">
          <img src={labarilogo} className="w-[100%] h-[100%] object-cover"></img>
        </div>
       
        <EmailForm buttonTitle='Join waitlist'/>
 
      </div>
      <br/><br/>
      {/* <hr className='my-10 border-[0.5px] border-white'></hr> */}
      <div className="container mx-auto sm:flex justify-between text-[14px] ">
        <p>&copy; 2025 Labari. All rights reserved.</p>
        <div className="flex space-x-3 mt-10 sm:mt-0">
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
          <a>Cookies settings</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
