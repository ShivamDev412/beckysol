"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Header = () => {
  // State to control the visibility of the dropdown menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      // Close menu after clicking on a link
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center transition-all duration-300 bg-[#93579d]/50 backdrop-blur-lg backdrop-brightness-125 py-2 px-10">
      {/* Logo */}
      <Image
        src="/images/logo.png"
        alt="becky_logo"
        width={100}
        height={100}
        className="hover:cursor-pointer"
        onClick={() => scrollToSection("home")}
      />

      {/* Hamburger Menu for smaller screens */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <span className="block w-8 h-1 bg-white mb-1"></span>
          <span className="block w-8 h-1 bg-white mb-1"></span>
          <span className="block w-8 h-1 bg-white"></span>
        </button>
      </div>

      {/* Full-screen dropdown menu (Mobile) */}
      {isOpen && (
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-full bg-[#93579d] z-40 h-screen flex flex-col items-center justify-center space-y-10 text-white"
        >
          {/* Close button (small white cross) */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-6 text-white text-4xl font-bold"
          >
            &times;
          </button>

          {/* Logo inside the dropdown */}
          <Image
            src="/images/logo.png"
            alt="becky_logo"
            width={150}
            height={150}
            className="hover:cursor-pointer"
            onClick={() => scrollToSection("home")}
          />

          {/* Navigation Links */}
          <nav className="w-full text-center">
            <ul className="text-4xl font-bold space-y-8">
              <li
                className="underline hover:cursor-pointer underline-offset-[5.5px] font-[Sofadi One]"
                onClick={() => scrollToSection("about")}
              >
                About
              </li>
              <li
                className="underline hover:cursor-pointer underline-offset-[5.5px] font-[Sofadi One]"
                onClick={() => scrollToSection("how-to-buy")}
              >
                How To Buy?
              </li>
              <li
                className="underline hover:cursor-pointer underline-offset-[5.5px] font-[Sofadi One]"
                onClick={() => scrollToSection("roadmap")}
              >
                Roadmap
              </li>
              <li
                className="underline hover:cursor-pointer underline-offset-[5.5px] font-[Sofadi One]"
                onClick={() => scrollToSection("tokenomics")}
              >
                Tokenomics
              </li>
            </ul>
          </nav>

          {/* "Buy Now" Button inside the dropdown */}
          <a
            href="https://pump.fun/6aNtorm2HyyxCGuqREXm8BGXnFy9Th5BLmcLENKvpump"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 px-8 py-4 bg-foreground text-white font-extrabold text-xl rounded-lg border-2 border-black shadow-[5px_5px_0px_0px_#ffffff] hover:shadow-[8px_8px_0px_0px_#ffffff] transition-all duration-300 ease-in-out"
          >
            Buy Now
          </a>
        </motion.div>
      )}

      {/* Regular Navigation for larger screens */}
      <nav className="hidden md:flex flex-1 justify-center">
        <ul className="flex items-center gap-10 text-3xl font-bold text-white">
          <li
            className="underline hover:cursor-pointer underline-offset-[5.5px] font-[Sofadi One]"
            onClick={() => scrollToSection("about")}
          >
            About
          </li>
          <li
            className="underline hover:cursor-pointer underline-offset-[5.5px] font-[Sofadi One]"
            onClick={() => scrollToSection("how-to-buy")}
          >
            How To Buy?
          </li>
          <li
            className="underline hover:cursor-pointer underline-offset-[5.5px] font-[Sofadi One]"
            onClick={() => scrollToSection("roadmap")}
          >
            Roadmap
          </li>
          <li
            className="underline hover:cursor-pointer underline-offset-[5.5px] font-[Sofadi One]"
            onClick={() => scrollToSection("tokenomics")}
          >
            Tokenomics
          </li>
        </ul>
      </nav>

      {/* "Buy Now" Button for larger screens */}
      <a
        href="https://pump.fun/6aNtorm2HyyxCGuqREXm8BGXnFy9Th5BLmcLENKvpump"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:block px-8 py-4 bg-foreground text-white font-extrabold text-xl rounded-lg border-2 border-black shadow-[5px_5px_0px_0px_#ffffff] hover:shadow-[8px_8px_0px_0px_#ffffff] transition-all duration-300 ease-in-out"
      >
        Buy Now
      </a>
    </header>
  );
};

export default Header;
