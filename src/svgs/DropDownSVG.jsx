import React from 'react'

const DropDownSVG = ({fill}) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_122_439)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.0402 11.9596C22.4308 12.3502 22.4308 12.9833 22.0402 13.3738L16.7069 18.7071C16.3164 19.0977 15.6833 19.0977 15.2928 18.7071L9.95939 13.3738C9.56887 12.9833 9.56887 12.3502 9.95939 11.9596C10.3499 11.5691 10.9831 11.5691 11.3736 11.9596L15.9998 16.5858L20.6261 11.9596C21.0166 11.5691 21.6497 11.5691 22.0402 11.9596Z" fill={fill || "black"}/>
</g>
<defs>
<clipPath id="clip0_122_439">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
  )
}

export default DropDownSVG
