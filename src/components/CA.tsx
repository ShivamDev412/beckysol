'use client';
import React from 'react';

const CA = () => {
  const copyToClipboard = () => {
    const textToCopy = "6aNtorm2HyyxCGuqREXm8BGXnFy9Th5BLmcLENKvpump";
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("Copied to clipboard!");
    }).catch((err) => {
      console.error("Failed to copy: ", err);
    });
  };

  return (
    <div className="bg-foreground py-10 w-[90%] mx-auto mt-10 flex justify-center flex-col items-center rounded-lg p-4">
      <h2 className="text-white text-center text-2xl xl:text-4xl font-semibold uppercase break-all">
        CA: 6aNtorm2HyyxCGuqREXm8BGXnFy9Th5BLmcLENKvpump
      </h2>
      <button
        onClick={copyToClipboard}
        className="mt-5 bg-white text-foreground py-2 px-4 rounded w-fit font-semibold"
      >
        Copy to Clipboard
      </button>
    </div>
  );
};

export default CA;