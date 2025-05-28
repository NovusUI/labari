import React, { useState } from 'react'
import bookBack from "../assets/bookbackground1.jpg"
import {motion} from "framer-motion"
import ArrowRightVector from '../Vectors/ArrowRightVector';
import labarilogo from "../assets/labari.png"
import Button2 from '../Components/Buttons/Button2';
import { useNavigate } from 'react-router-dom';
import { useErrorSuccessContext } from '../ContextApi/MessageContext';

const LoginPage = () => {

    const bounceAnimation = {
        y: [0, -10, 0], // Bounce up and down
        transition: {
          y: {
            duration: 0.6, // Bounce duration
            ease: "easeOut",
            repeat: Infinity, // Infinite loop
            repeatDelay: 2.4, // 3s total minus 0.6s bounce duration
          },
        },
      };

      const [showLogin, setShowLogin] = useState(false)
      const [showPassword, setShowPassword] = useState(false)
      const {password,setPassword} = useErrorSuccessContext()
      const navigate = useNavigate()


      const onLogin = ()=>{

        if(password === "legacy"){
            navigate("/dashboard")
        }else{
            setShowPassword(true)
        }
         
      }

      const confirmLogin =(e)=>{
        e.preventDefault()
        if(e.target.password.value === "legacy"){
            setPassword("legacy")
            navigate("/dashboard")
        }else{

            navigate("/")
        }
       
      }

  return (
    <div className='w-screen h-screen relative bg-[#052A8066]'> 
      <div style={{ backgroundImage: `url(${bookBack})`, backgroundSize: 'cover', }} className=' text-center bg-center w-screen sm:rounded-[20px] h-screen'>
       
       </div>
       {!showLogin && !showPassword &&<div className='top-0  left-0 absolute w-full  h-[100vh] bg-custom-gradient flex flex-col items-center pb-40 sm:pb-0 justify-end sm:justify-center'>

            <motion.p 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }} 
            className='poppins-light px-5 text-[32px] sm:text-[36px] md:text-[48px] text-white mb-5'>Experience books like never Before</motion.p>
            <motion.div 
              onClick={()=>setShowLogin(true)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.9 }} // Appear after 1 second
              animate={bounceAnimation} // Bounce animation
            className='rounded-full  w-[50px] h-[50px] border-[1px] border-[#F8C605] relative'>
                <motion.div
                role='button'
                 className='rounded-full flex justify-center items-center w-[50px] h-[50px]  bg-[#F8C605] absolute -top-1 -left-2'>
                    <ArrowRightVector/>
                </motion.div>
            </motion.div>
       </div>}
       {showLogin && !showPassword &&<div className='top-0  left-0 absolute w-full  h-[100vh] bg-custom-gradient2 flex flex-col items-center  sm:pb-0 justify-end sm:justify-center px-10'>

        <motion.div 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }} 
        className="w-[200px] h-[116px]" onClick={()=>navigate("/")}>
                <img src={labarilogo} className="w-[100%] h-[100%] object-cover"></img>
            </motion.div>
            <div className=' pt-44 py-20 md:pt-20'>
                <p className='text-[#FFFFFF] text-[24px] poppins-light'>Watch your favourite books play as animation</p>
                <div className='flex flex-col space-y-2 mt-5'>
                <Button2 fullBg={true} color={"#F8C605"} title={"Sign up with google"} onClick={onLogin}/>
                <Button2 color={"#F8C605"} title={"Sign up with email"} onClick={onLogin}/>
                </div>
            </div>
        
       </div>}
       {
        showPassword && <div className='top-0  left-0 absolute w-full  h-[100vh] bg-custom-gradient2 flex flex-col items-center  sm:pb-0 justify-end sm:justify-center px-10'>

        <motion.div 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }} 
        className="w-[200px] h-[116px]" onClick={()=>navigate("/")}>
                <img src={labarilogo} className="w-[100%] h-[100%] object-cover"></img>
            </motion.div>
            <form className=' pt-44 py-20 md:pt-20 space-y-5' onSubmit={confirmLogin}>
                <input id="password" type='password' required className='border-[1px] h-[50px] w-full  md:w-[50%] border-[#0C1D44] rounded-[10px] px-10 mb-5 md:mb-0' placeholder='password'></input>
                <Button2 color={"#F8C605"} title={"Confirm"}/> 
            </form>
        
       </div>
       }
    </div>
  )
}

export default LoginPage
