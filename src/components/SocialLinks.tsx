import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className='flex mx-auto w-11/12 justify-center gap-10 my-10'>
      {/* Twitter Link */}
      <a href="https://x.com/beckyonsol?s=21&t=HrxgnzJckhLwgGrBqnaGHw" target="_blank" rel="noopener noreferrer">
        <div className='bg-black rounded-full flex justify-center items-center h-20 w-20'>
          <FaXTwitter className='text-white text-5xl' />
        </div>
      </a>

      {/* Telegram Link */}
      <a href="https://t.me/+YOmfNv8o4mkwZDkx" target="_blank" rel="noopener noreferrer">
        <div className='bg-[#55e1f7] rounded-full flex justify-center items-center h-20 w-20'>
          <FaTelegramPlane className='text-white text-5xl' />
        </div>
      </a>

      {/* Instagram Link */}
      <a href="https://www.instagram.com/beckyonsol?igsh=YjFucW5vOG5ndTAy" target="_blank" rel="noopener noreferrer">
        <div className='bg-red-700 rounded-full flex justify-center items-center h-20 w-20'>
          <FaInstagram className='text-white text-5xl' />
        </div>
      </a>
    </div>
  );
}

export default SocialLinks;