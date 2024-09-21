"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const imageControls = useAnimation();
  const descriptionControls = useAnimation();
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [descRef, descInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Detect screen size on mount
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    handleResize(); // Check the screen size on initial load
    window.addEventListener("resize", handleResize); // Update on window resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Image animation (slide from left)
  useEffect(() => {
    if (!isSmallScreen && imageInView) {
      imageControls.start({ x: "0%", opacity: 1 });
    } else {
      imageControls.start({ x: "-100%", opacity: 0 });
    }
  }, [imageControls, imageInView, isSmallScreen]);

  // Description animation (slide from right)
  useEffect(() => {
    if (!isSmallScreen && descInView) {
      descriptionControls.start({ x: "0%", opacity: 1 });
    } else {
      descriptionControls.start({ x: "100%", opacity: 0 });
    }
  }, [descriptionControls, descInView, isSmallScreen]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center md:items-end space-y-5 md:space-x-10 md:space-y-0 xl:overflow-hidden mt-[1.5in] xl:mt-0">
      {/* About Section (on top for small screens) */}
      <div className="w-full max-w-xl flex flex-col space-y-6 mt-[-3in]">
        {/* About Title Image */}
        <div
          ref={imageRef}
          className={`${
            isSmallScreen ? "opacity-100" : "motion-div"
          } mx-auto w-[80%] sm:w-[90%] md:w-[75%] lg:w-[60%] xl:w-[50%] max-w-md mt-4 lg:mt-0`}
        >
          <Image
            src="/images/about.png"
            alt="About title image"
            width={600}
            height={200}
            className="mx-auto"
          />
        </div>

        {/* Description Section */}
        <div
          ref={descRef}
          className={`${
            isSmallScreen ? "opacity-100" : "motion-div"
          } text-left text-white px-5`}
        >
          <p className="text-xl xl:text-3xl font-bold">
            $BECKY is the newest baddie from the MATT FURIE collection. She’s a
            naughty playboy model who hangs out on the Solana Chain and is ready
            to handle any big green candle.
          </p>

          <p className="mt-8 text-xl xl:text-3xl font-bold">
            $BECKY is here to rule the meme world with her insane comics that
            are currently in development, featuring even more degeneration than
            you’ve seen from any of her Boy’s Club homies. So pack a bag and get
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            ready for a whirlwind of BECKY's escapades, animated by her genius
            team!
          </p>
        </div>
      </div>

      {/* Image Section (below content for small screens) */}
      <div
        ref={imageRef}
        className={`${
          isSmallScreen ? "opacity-100" : "motion-div"
        } w-full xl:w-[35%] mx-auto`}
      >
        <Image
          src="/images/about-g.png"
          alt="About girl"
          width={1500}
          height={1500}
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default About;