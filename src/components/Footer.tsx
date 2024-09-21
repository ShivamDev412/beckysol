"use client"; // This ensures the component runs on the client side

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-foreground flex flex-col lg:flex-row mx-auto px-6 pb-5 lg:justify-between items-center space-y-4 lg:space-y-0 lg:space-x-10">
      {/* Left Section with multiple images (if needed) */}
      {/* <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-8">
        <Image
          src="/images/about.png"
          alt="About title image"
          width={200}
          height={200}
          className="mx-auto"
        />
        <Image
          src="/images/roadmap.png"
          alt="Roadmap title image"
          width={200}
          height={200}
          className="mx-auto"
        />
        <Image
          src="/images/how-to-buy.png"
          alt="How to buy title image"
          width={200}
          height={200}
          className="mx-auto"
        />
      </div> */}

      {/* Right Section with sliding girl image */}
      {/* <motion.div
        initial={{ x: 300, opacity: 0 }} // Start off-screen (right) and transparent
        animate={{ x: 0, opacity: 1 }} // Slide into view with full opacity
        transition={{ duration: 1, ease: "easeInOut" }} // Animation duration and easing
      >
        <Image
          src="/images/roadmap-girl.jpeg"
          alt="Roadmap girl image"
          width={200}
          height={200}
          className="mx-auto"
        />
      </motion.div> */}

      {/* Footer Bottom Section */}
      <div className="w-full text-center mt-5 text-white">
        <p className="text-lg font-bold">2024 © All Rights Reserved</p>
        <p className="text-sm mt-2 w-full xl:w-1/2 mx-auto">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          The crypto market is unpredictable. Be mindful of tax implications, as profits might be liable for capital gains or other taxes depending on your region. Regulatory guidelines vary, so it's crucial to know the specific rules that apply to you. Conduct thorough research and risk only what you can afford to lose.
        </p>
      </div>
    </footer>
  );
};

export default Footer;