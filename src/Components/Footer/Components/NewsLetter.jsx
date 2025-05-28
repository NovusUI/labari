import React from 'react'
import { useErrorSuccessContext } from '../../../ContextApi/MessageContext'
import EmailForm from '../../EmailForm'

const NewsLetter = () => {
    const {setSuccessBox} = useErrorSuccessContext()
    const subscribe = async(e)=>{
        e.preventDefault()
        setSuccessBox("subscribed to newletter")
    }
  return (
    <div className='text-[#0C1D44] text-[16px] space-y-5'>
      <p className='roboto-600'>Subscribe</p>
      {/* <EmailForm/> */}
    </div>
  )
}

export default NewsLetter
