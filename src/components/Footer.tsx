import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-foreground flex items-center justify-between">
      <Image
        src="/images/about.png"
        alt="About title image"
        width={600}
        height={200}
        className="mx-auto"
      />
    </footer>
  );
};

export default Footer;
