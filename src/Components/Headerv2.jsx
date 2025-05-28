import React from 'react'
import { useNavigate } from 'react-router-dom'
import labarilogo from "../assets/labari.png"
import Button1 from './Buttons/Button1'
import { useTranslation } from 'react-i18next'

const Headerv2 = () => {
    const navigate = useNavigate()
    const { t, i18n } = useTranslation();
    
  return (

    <header className="sticky top-0  z-40 border-b-[1px] ">
        <nav className="flex items-center justify-between px-6 md:px-[40px] lg:px-[80px] h-[10vh] shadow-sm absolute w-full z-30 bg-[#FFFFFF33]">
        <div className="w-[69px] h-[40px]" onClick={()=>navigate("/")}>
            <img src={labarilogo} className="w-[100%] h-[100%] object-cover"></img>
        </div>
        <div className="flex space-x-3 justify-center items-center">
        <select className="outline-none bg-white/50 text-white p-3"  onChange={(e) => i18n.changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="ha">Hausa</option>
        <option value="ig">Igbo</option>
        <option value="yo">Yoruba</option>
        <option value="sw">Swahili</option>
        <option value="fr">French</option>
        <option value="pt">Portuguese</option>
        <option value="ar">Arabic</option>
        <option value="pidgin">Pidgin</option>
      </select>
        <ul className="hidden gap-7 text-[20px]  md:flex roboto-400 text-[#0C1D44] items-center">
     
            <li>
              <Button1 fullBg={true} color={"#00A45A"} title={t("Sign Up")} onClick={()=>navigate("/login")}/>
            </li>
        </ul>
        </div>
    </nav>
</header>
  )
}

export default Headerv2
