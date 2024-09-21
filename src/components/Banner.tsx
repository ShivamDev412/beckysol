import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative w-full mt-[1in] h-[30vh] md:h-[70vh] lg:h-[130vh]">
      <Image 
        src="/images/banner.jpeg" 
        alt="Banner" 
        layout="fill" 
        objectFit="cover" 
        objectPosition="center" 
        priority
      />
    </div>
  );
};

export default Banner;