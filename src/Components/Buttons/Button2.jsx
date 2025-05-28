import React from 'react'

const Button2 = ({color,title,fullBg,onClick}) => {
  return (
    <button 
    style={{
        borderColor: color || '#000000',
        color: fullBg ?  "#000000" : color,
        backgroundColor: fullBg && color 
      }}
      className="border-[1px] h-[50px] rounded-[10px] w-full md:w-[370px] roboto-400 text-[16px]"
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button2
