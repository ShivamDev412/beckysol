import React from 'react'
import Image from 'next/image'
const PreHowToBuy = () => {
  return (
    <div className="w-auto h-[12in] relative">
        <Image 
          src="/images/pre-how-to-buy-one.jpeg" 
          alt="Banner" 
          layout="fill" 
          objectFit="cover" 
          objectPosition="center" 
          priority
        />
      </div>
  )
}

export default PreHowToBuy
