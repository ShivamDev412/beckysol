import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className='flex mx-auto w-11/12 justify-center gap-10 mb-10'>
      <div className='bg-black rounded-full flex justify-center items-center h-20 w-20'>
        <FaXTwitter className='text-white text-5xl' />
      </div>
      <div className='bg-[#55e1f7] rounded-full flex justify-center items-center h-20 w-20'>
        <FaTelegramPlane className='text-white text-5xl' />
      </div>
      <div className='bg-red-700 rounded-full flex justify-center items-center h-20 w-20'>
        <FaInstagram className='text-white text-5xl' />
      </div>
    </div>
  )
}

export default SocialLinks
