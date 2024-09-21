"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
    window.addEventListener('resize', handleResize); // Update on window resize

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Image animation (slide from left)
  useEffect(() => {
    if (imageInView || isSmallScreen) {
      imageControls.start({ x: '0%', opacity: 1 });
    } else {
      imageControls.start({ x: '-100%', opacity: 0 });
    }
  }, [imageControls, imageInView, isSmallScreen]);

  // Description animation (slide from right)
  useEffect(() => {
    if (descInView || isSmallScreen) {
      descriptionControls.start({ x: '0%', opacity: 1 });
    } else {
      descriptionControls.start({ x: '100%', opacity: 0 });
    }
  }, [descriptionControls, descInView, isSmallScreen]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center md:items-end space-y-6 md:space-x-10 md:space-y-0 overflow-hidden">
      {/* About Section (on top for small screens) */}
      <div className="w-full max-w-xl flex flex-col items-start space-y-6">
        {/* About Title Image */}
        <motion.div
          ref={imageRef}
          initial={{ x: '-100%', opacity: 0 }}
          animate={imageControls}
          transition={{ type: 'spring', stiffness: 50, damping: 10 }}
          className="w-full max-w-md"
        >
          <Image 
            src="/images/about.png" 
            alt="About title image"
            width={600}
            height={200}
            className="mx-auto"
          />
        </motion.div>

        {/* Description Section */}
        <motion.div
          ref={descRef}
          initial={{ x: '100%', opacity: 0 }}
          animate={descriptionControls}
          transition={{ type: 'spring', stiffness: 50, damping: 10 }}
          className="text-left text-white px-5"
        >
          <p className="text-3xl font-bold" style={{
              WebkitTextStroke: "0.3px #333",
              WebkitTextFillColor: "white",
            }}>
            $BECKY is the newest baddie from the MATT FURIE collection. She’s a naughty playboy model who hangs out on the Solana Chain and is ready to handle any big green candle.
          </p>
         
          <p className="mt-8 text-3xl font-bold" style={{
              WebkitTextStroke: "0.3px #333",
              WebkitTextFillColor: "white",
            }}>
            $BECKY is here to rule the meme world with her insane comics that are currently in development, featuring even more degeneration than you’ve seen from any of her Boy’s Club homies. So pack a bag and get ready for a whirlwind of BECKY's escapades, animated by her genius team!
          </p>
        </motion.div>
      </div>

      {/* Image Section (below content for small screens) */}
      <motion.div
        ref={imageRef}
        initial={{ x: '-100%', opacity: 0 }}
        animate={imageControls}
        transition={{ type: 'spring', stiffness: 50, damping: 10 }}
        className="w-full max-w-md"
      >
        <Image 
          src="/images/about-girl.jpeg" 
          alt="About girl"
          width={1200}
          height={1200}
          className="mx-auto"
        />
      </motion.div>
    </div>
  );
};

export default About;