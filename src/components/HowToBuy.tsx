"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const HowToBuy = () => {
  const [, setIsSmallScreen] = useState(false);

  // Detect screen size on mount
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // Check the screen size on initial load
    window.addEventListener("resize", handleResize); // Update on window resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-end md:space-x-10 md:space-y-0 overflow-hidden px-5 mt-10 xl:mt-0">
      {/* How to Buy Text Section */}
      <div className="w-full max-w-xl flex flex-col items-start xl:mb-10">
        <Image
          src="/images/how-to-buy.webp"
          alt="How To Buy title image"
          width={600}
          height={200}
          className="mx-auto"
        />

        <div>
          <h3 className="text-3xl font-bold text-white">Create a Wallet</h3>
          <p className="mt-2 text-xl text-white">
            Download Phantom Wallet or your wallet of choice from the app store
            or Google Play Store for free. Desktop users, download the Google
            Chrome extension for Phantom Wallet.
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-white">Get some SOL</h3>
          <p className="mt-2 text-xl text-white">
            Have SOL or USDT in your wallet to switch to $BECKY. If you don’t
            have any SOL, you can buy directly on Phantom, transfer from another
            wallet, or buy on another exchange and send it to your wallet.
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-white">Buy $BECKY</h3>
          <p className="mt-2 text-xl text-white">
            Connect your wallet to Pumpfun or add the $BECKY address in the
            token bar and swap some SOL for Becky! Its that simple!
          </p>
        </div>
      </div>

      {/* How to Buy Image Section */}
      <div className="w-full xl:w-[35%] mx-auto">
        <Image
          src="/images/how-to-buy.jpeg" // Replace with your image
          alt="How to buy girl"
          width={1500}
          height={1500}
          priority
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default HowToBuy;
