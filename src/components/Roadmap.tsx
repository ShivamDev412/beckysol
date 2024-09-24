"use client";
import React, { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Roadmap = () => {
  // Animation controls for roadmap image and each step
  const imageControls = useAnimation();
  const step1Controls = useAnimation();
  const step2Controls = useAnimation();
  const step3Controls = useAnimation();
  const step4Controls = useAnimation();

  // State to detect screen size
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Detect screen size on mount
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    handleResize(); // Check the screen size on initial load
    window.addEventListener("resize", handleResize); // Update on window resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Separate refs and `useInView` for each element
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [step1Ref, step1InView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [step2Ref, step2InView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [step3Ref, step3InView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [step4Ref, step4InView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Trigger animation for roadmap image
  useEffect(() => {
    if (imageInView && !isSmallScreen) {
      imageControls.start({ y: "0%", opacity: 1 });
    } else if (!isSmallScreen) {
      imageControls.start({ y: "-100%", opacity: 0 });
    }
  }, [imageControls, imageInView, isSmallScreen]);

  // Trigger animations for each step
  useEffect(() => {
    if (!isSmallScreen) {
      if (step1InView) step1Controls.start({ y: "0%", opacity: 1 });
      if (step2InView) step2Controls.start({ y: "0%", opacity: 1 });
      if (step3InView) step3Controls.start({ y: "0%", opacity: 1 });
      if (step4InView) step4Controls.start({ y: "0%", opacity: 1 });
    }
  }, [
    step1Controls,
    step1InView,
    step2Controls,
    step2InView,
    step3Controls,
    step3InView,
    step4Controls,
    step4InView,
    isSmallScreen,
  ]);

  return (
    <div className="flex flex-col justify-center items-center  overflow-hidden">
      {/* Centered Roadmap Image */}
      <div
        ref={imageRef}
        className={`${
          isSmallScreen ? "opacity-100" : "motion-div"
        } w-full max-w-md`}
      >
        <Image
          src="/images/roadmap.webp"
          alt="Roadmap Title Image"
          width={600}
          height={200}
          className="mx-auto"
        />
      </div>

      {/* Roadmap Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-[90%] mx-auto text-zinc-100">
        {/* Step 1 */}
        <div
          className={`${
            isSmallScreen ? "opacity-100" : "motion-div"
          } flex flex-col items-center xl:items-left space-y-4`}
          ref={step1Ref}
        >
          <Image
            src="/images/step-1.webp"
            alt="Step 1"
            width={300}
            height={200}
          />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            The Big Bang
          </h2>
          <ul className="list-none text-xl md:text-2xl">
            <li className="flex items-center">
              <span className="w-4 h-4 bg-white rounded-full mr-2"></span>{" "}
              Website Goes Live
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-white rounded-full mr-2"></span>{" "}
              Pump-fun Launch
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-white rounded-full mr-2"></span> Live
              Art Creation
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-white rounded-full mr-2"></span>{" "}
              Social Channels are Born
            </li>
          </ul>
        </div>

        {/* Step 2 */}
        <div
          className={`${
            isSmallScreen ? "opacity-100" : "motion-div"
          } flex flex-col items-center xl:items-left space-y-4`}
          ref={step2Ref}
        >
          <Image
            src="/images/step-2.webp"
            alt="Step 2"
            width={300}
            height={200}
          />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Development
          </h2>
          <ul className="list-none text-xl md:text-2xl">
            <li className="flex items-center">
              <span className="w-4 h-4 bg-white rounded-full mr-2"></span> 500
              Holders
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-white rounded-full mr-2"></span>{" "}
              Animation Development
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-white rounded-full mr-2"></span>{" "}
              Community Building
            </li>
          </ul>
        </div>

        {/* Step 3 */}
        <div
          className={`${
            isSmallScreen ? "opacity-100" : "motion-div"
          } flex flex-col items-center xl:items-left space-y-4`}
          ref={step3Ref}
        >
          <Image
            src="/images/step-3.webp"
            alt="Step 3"
            width={300}
            height={200}
          />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Awareness
          </h2>
          <ul className="list-none text-xl md:text-2xl">
            <li className="flex items-center">
              <span className="w-4 h-4 bg-white rounded-full mr-2"></span>{" "}
              Marketing Initiation
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-white rounded-full mr-2"></span> First
              DEX Listings
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-white rounded-full mr-2"></span> CMC &
              CG Application
            </li>
          </ul>
        </div>

        {/* Step 4 */}
        <div
          className={`${
            isSmallScreen ? "opacity-100" : "motion-div"
          } flex flex-col items-center xl:items-left space-y-4`}
          ref={step4Ref}
        >
          <Image
            src="/images/step-4.webp"
            alt="Step 4"
            width={300}
            height={200}
          />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Cosmic Travel
          </h2>
          <ul className="list-none text-xl md:text-2xl">
            <li className="flex items-center">
              <span className="w-4 h-4 bg-white rounded-full mr-2"></span> First
              CEX Listings
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-white rounded-full mr-2"></span>{" "}
              Continued Marketing
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-white rounded-full mr-2"></span>{" "}
              Community Incentives
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
