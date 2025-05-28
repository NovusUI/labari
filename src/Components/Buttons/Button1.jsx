import React from 'react'

const Button1 = ({color,title,fullBg,onClick}) => {
  return (
    <button 
    style={{
        borderColor: color || '#000000',
        color: fullBg ? '#fff' : color || '#000000',
        backgroundColor: fullBg && color 
      }}
      className="border-[1px] py-2 px-5 roboto-400"
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button1
