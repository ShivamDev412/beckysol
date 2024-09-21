import React from "react";
import Image from "next/image";
const RoadmapGirl = () => {
  return (
    <div className="relative w-full h-[30vh] md:h-[70vh] lg:h-[130vh]">
      <Image
        src="/images/roadmap-girl.jpeg"
        alt="Banner"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
      />
    </div>
  );
};

export default RoadmapGirl;
