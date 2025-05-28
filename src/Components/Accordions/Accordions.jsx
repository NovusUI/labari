import React, { useState } from 'react'
import AccordionItem from './AccordionItem';

const Accordions = ({items}) => {

    const [openIndex, setOpenIndex] = useState(null); // Track which accordion item is open

    const handleToggle = (index) => {
      setOpenIndex(index === openIndex ? null : index); // Close the current one or open a new one
    };

  return (
    <div className='w-full'>
      {
        items && items.map((item,index)=><AccordionItem 
         key={index}
        title={item.title} 
        content={item.content}   
        isOpen={openIndex === index}
        onToggle={() => handleToggle(index)}/>)
      }
    </div>
  )
}

export default Accordions
