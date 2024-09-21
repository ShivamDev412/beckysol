"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const HowToBuy = () => {
  const textControls = useAnimation();
  const imageControls = useAnimation();
  const [textRef, textInView] = useInView({
    triggerOnce: true, // Animation triggers only once when in view
    threshold: 0.1, // Trigger when 10% of the text is visible
  });
  const [imageRef, imageInView] = useInView({
    triggerOnce: true, // Animation triggers only once when in view
    threshold: 0.1, // Trigger when 10% of the image is visible
  });

  // Animation for text sections (slide up with fade effect)
  React.useEffect(() => {
    if (textInView) {
      textControls.start({ y: "0%", opacity: 1 });
    } else {
      textControls.start({ y: "100%", opacity: 0 });
    }
  }, [textControls, textInView]);

  // Animation for the image (slide from top with fade effect)
  React.useEffect(() => {
    if (imageInView) {
      imageControls.start({ y: "0%", opacity: 1 });
    } else {
      imageControls.start({ y: "-100%", opacity: 0 });
    }
  }, [imageControls, imageInView]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Image Section */}
      <motion.div
        ref={imageRef} // Link the element with the IntersectionObserver
        initial={{ y: "-100%", opacity: 0 }} // Start off-screen at the top and fade in
        animate={imageControls} // Trigger animation based on `inView`
        transition={{ type: "spring", stiffness: 50, damping: 10 }} // Customize the transition
        className="w-full max-w-md"
      >
        <Image
          src="/images/how-to-buy.png"
          alt="How to buy illustration"
          width={600} // Adjust width
          height={300} // Adjust height
          className="mx-auto"
        />
      </motion.div>

      {/* How to Buy Steps */}
      <div className="flex flex-col space-y-8 w-[90%] mx-auto text-zinc-100">
        {/* Step 1 */}
        <motion.div
          className="flex flex-col items-start"
          ref={textRef}
          initial={{ y: "100%", opacity: 0 }} // Start off-screen at the bottom and fade in
          animate={textControls}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            delay: 0.2,
          }}
        >
          <h2 className="text-3xl font-bold">Create a Wallet</h2>
          <p className="mt-2 text-lg">
            Download Metamask or your wallet of choice from the app store or Google Play Store for free. 
            Desktop users, download the Google Chrome extension by going to metamask.io.
          </p>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          className="flex flex-col items-start"
          ref={textRef}
          initial={{ y: "100%", opacity: 0 }} // Start off-screen at the bottom and fade in
          animate={textControls}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            delay: 0.4,
          }}
        >
          <h2 className="text-3xl font-bold">Get some $ETH</h2>
          <p className="mt-2 text-lg">
            Have ETH or USDT in your wallet to switch to $PORK. If you don’t have any ETH, you can buy directly 
            on Metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.
          </p>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          className="flex flex-col items-start"
          ref={textRef}
          initial={{ y: "100%", opacity: 0 }} // Start off-screen at the bottom and fade in
          animate={textControls}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            delay: 0.6,
          }}
        >
          <h2 className="text-3xl font-bold">Buy $PORK</h2>
          <p className="mt-2 text-lg">
            Connect your wallet. Navigate to the top of this page and connect your preferred wallet using the presale widget. 
            Input the amount of tokens you want to exchange for $PORK and confirm the transaction through your wallet.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HowToBuy;
