"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Roadmap = () => {
  // Animation controls for roadmap image and each step
  const imageControls = useAnimation();
  const step1Controls = useAnimation();
  const step2Controls = useAnimation();
  const step3Controls = useAnimation();
  const step4Controls = useAnimation();

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
    if (imageInView) {
      imageControls.start({ y: "0%", opacity: 1 });
    } else {
      imageControls.start({ y: "-100%", opacity: 0 });
    }
  }, [imageControls, imageInView]);

  // Trigger animations for each step
  useEffect(() => {
    if (step1InView) step1Controls.start({ y: "0%", opacity: 1 });
    if (step2InView) step2Controls.start({ y: "0%", opacity: 1 });
    if (step3InView) step3Controls.start({ y: "0%", opacity: 1 });
    if (step4InView) step4Controls.start({ y: "0%", opacity: 1 });
  }, [step1Controls, step1InView, step2Controls, step2InView, step3Controls, step3InView, step4Controls, step4InView]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center xl:space-y-10 overflow-hidden">
      {/* Centered Roadmap Image */}
      <motion.div
        ref={imageRef}
        initial={{ y: "100%", opacity: 0 }}
        animate={imageControls}
        transition={{ type: "spring", stiffness: 50, damping: 10 }}
        className="w-full max-w-md"
      >
        <Image
          src="/images/roadmap.png"
          alt="Roadmap Title Image"
          width={600}
          height={200}
          className="mx-auto"
        />
      </motion.div>

      {/* Roadmap Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-[90%] mx-auto text-zinc-100">
        {/* Step 1 */}
        <motion.div
          className="flex flex-col items-start space-y-4"
          ref={step1Ref}
          initial={{ y: "100%", opacity: 0 }}
          animate={step1Controls}
          transition={{ type: "spring", stiffness: 50, damping: 10, delay: 0.2 }}
        >
          <Image src="/images/step-1.png" alt="Step 1" width={300} height={200} />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">The Big Bang</h2>
          <ul className="list-none text-xl md:text-2xl">
            <li className="flex items-center">
              <span className="w-4 h-4 bg-white rounded-full mr-2"></span> Website Goes Live
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-white rounded-full mr-2"></span> Contract Gets Written
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-white rounded-full mr-2"></span> Social Channels are Born
            </li>
          </ul>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          className="flex flex-col items-start space-y-4"
          ref={step2Ref}
          initial={{ y: "100%", opacity: 0 }}
          animate={step2Controls}
          transition={{ type: "spring", stiffness: 50, damping: 10, delay: 0.3 }}
        >
          <Image src="/images/step-2.png" alt="Step 2" width={300} height={200} />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Development</h2>
          <ul className="list-none text-xl md:text-2xl">
            <li className="flex items-center">
              <span className="w-4 h-4 bg-white rounded-full mr-2"></span> Contract Audit
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-white rounded-full mr-2"></span> Presale Begins
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-white rounded-full mr-2"></span> Community Building
            </li>
          </ul>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          className="flex flex-col items-start space-y-4"
          ref={step3Ref}
          initial={{ y: "100%", opacity: 0 }}
          animate={step3Controls}
          transition={{ type: "spring", stiffness: 50, damping: 10, delay: 0.4 }}
        >
          <Image src="/images/step-3.png" alt="Step 3" width={300} height={200} />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Awareness</h2>
          <ul className="list-none text-xl md:text-2xl">
            <li className="flex items-center">
              <span className="w-4 h-4 bg-white rounded-full mr-2"></span> Marketing Initiation
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-white rounded-full mr-2"></span> First DEX Listings
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-white rounded-full mr-2"></span> CMC & CG Application
            </li>
          </ul>
        </motion.div>

        {/* Step 4 */}
        <motion.div
          className="flex flex-col items-start space-y-4"
          ref={step4Ref}
          initial={{ y: "100%", opacity: 0 }}
          animate={step4Controls}
          transition={{ type: "spring", stiffness: 50, damping: 10, delay: 0.5 }}
        >
          <Image src="/images/step-4.png" alt="Step 4" width={300} height={200} />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Cosmic Travel</h2>
          <ul className="list-none text-xl md:text-2xl">
            <li className="flex items-center">
              <span className="w-4 h-4 bg-white rounded-full mr-2"></span> First CEX Listings
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-white rounded-full mr-2"></span> Continued Marketing
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-white rounded-full mr-2"></span> Community Incentives
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Roadmap;