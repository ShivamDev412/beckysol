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
      {/* Hamburger Menu for smaller screens */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <span className="block w-8 h-1 bg-white mb-1"></span>
          <span className="block w-8 h-1 bg-white mb-1"></span>
          <span className="block w-8 h-1 bg-white"></span>
        </button>
      </div>

      {/* Full-screen dropdown menu */}
      {isOpen && (
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-full h-full bg-[#93579d] z-40 flex flex-col items-center"
        >
          {/* Logo inside dropdown */}
          <Image
            src="/images/logo.png"
            alt="becky_logo"
            width={200}
            height={200}
            className="hover:cursor-pointer mt-10"
            onClick={() => scrollToSection("home")}
          />
          <nav className="w-full h-full">
            <ul className="flex flex-col items-center justify-between h-full text-4xl font-bold text-white py-10">
              <motion.li
                whileHover={{ scale: 1.2 }}
                className="underline hover:cursor-pointer underline-offset-[5.5px] font-[Sofadi One]"
                onClick={() => scrollToSection("about")}
              >
                About
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2 }}
                className="underline hover:cursor-pointer underline-offset-[5.5px] font-[Sofadi One]"
                onClick={() => scrollToSection("how-to-buy")}
              >
                How To Buy?
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2 }}
                className="underline hover:cursor-pointer underline-offset-[5.5px] font-[Sofadi One]"
                onClick={() => scrollToSection("roadmap")}
              >
                Roadmap
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2 }}
                className="underline hover:cursor-pointer underline-offset-[5.5px] font-[Sofadi One]"
                onClick={() => scrollToSection("tokenomics")}
              >
                Tokenomics
              </motion.li>
            </ul>
          </nav>
        </motion.div>
      )}

      {/* Regular Navigation for larger screens */}
      <Image
        src="/images/logo.png"
        alt="becky_logo"
        width={200}
        height={200}
        className="hover:cursor-pointer"
        onClick={() => scrollToSection("home")}
      />
      <nav className="hidden md:block">
        <ul className="flex items-center gap-10 text-3xl font-bold text-white">
          <motion.li
            whileHover={{ scale: 1.2 }}
            className="underline hover:cursor-pointer underline-offset-[5.5px] font-[Sofadi One]"
            onClick={() => scrollToSection("about")}
          >
            About
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            className="underline hover:cursor-pointer underline-offset-[5.5px] font-[Sofadi One]"
            onClick={() => scrollToSection("how-to-buy")}
          >
            How To Buy?
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            className="underline hover:cursor-pointer underline-offset-[5.5px] font-[Sofadi One]"
            onClick={() => scrollToSection("roadmap")}
          >
            Roadmap
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            className="underline hover:cursor-pointer underline-offset-[5.5px] font-[Sofadi One]"
            onClick={() => scrollToSection("tokenomics")}
          >
            Tokenomics
          </motion.li>
        </ul>
      </nav>
      <button className="relative px-4 py-2 bg-foreground text-white font-extrabold text-xl rounded-lg border-2 border-black shadow-[5px_5px_0px_0px_#ffffff] hover:shadow-[8px_8px_0px_0px_#ffffff] transition-all duration-300 ease-in-out group overflow-hidden">
        <span className="relative inline-block transition-transform duration-300 ease-in-out group-hover:translate-y-[-5px] group-hover:scale-110">
          Buy Now
        </span>
      </button>
    </header>
  );
};

export default Header;
