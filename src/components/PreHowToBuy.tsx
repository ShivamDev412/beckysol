import React from 'react'
import Image from 'next/image'

const PreHowToBuy = () => {
  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[150vh]">
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