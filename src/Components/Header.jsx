import React from 'react'
import labarilogo from "../assets/labari.png"
import Button1 from './Buttons/Button1'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="sticky top-0 bg-[#fff] z-40 border-b-[1px] border-b-[#0C1D44]">
        <nav className='w-full px-5 sm:px-10 md:px-20 py-3  flex justify-between items-center'>
            <div className="w-[69px] h-[40px]" onClick={()=>navigate("/")}>
                <img src={labarilogo} className="w-[100%] h-[100%] object-cover"></img>
            </div>
            <ul className="hidden gap-7 text-[20px]  md:flex roboto-400 text-[#0C1D44] items-center">
                <li><a className="hover:text-[#052A80] hover:roboto-600" onClick={()=>{isLoggedIn ? navigate("/home") : navigate("/")}} href="#home">Home Page</a></li>
                <li><a className="hover:text-[#052A80] hover:roboto-600" href="#aboutus" onClick={()=>{isLoggedIn ? navigate("/home") : navigate("/")}}>Book List</a></li>
                <li><a className="hover:text-[#052A80] hover:roboto-600" onClick={()=>{isLoggedIn ? navigate("/") : navigate("/subscription")}}>Genre</a></li>
                <li>
                  <Button1 color={"#052A80"} title="Sign Up" onClick={()=>navigate("/login")}/>
                </li>
            </ul>
        </nav>
    </header>

  )
}

export default Header
