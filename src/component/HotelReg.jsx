import React, { useState } from 'react';
import { assets } from '../assets/assets';

const HotelReg = () => {
  const [isOpen, setIsOpen] = useState(true); // controls modal visibility

  if (!isOpen) return null; // don't render if closed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
      <form className="flex bg-white rounded-xl relative max-w-4xl w-full max-md:mx-4 flex-col md:flex-row overflow-hidden">
        
        {/* Left image */}
        <img
          src={assets.regImage}
          alt="reg-image"
          className="w-1/2 hidden md:block object-cover"
        />

        {/* Right section */}
        <div className="w-full md:w-1/2 p-6 relative">
          
          {/* ❗ Close icon with onClick */}
          <img
            src={assets.closeIcon}
            alt="close-icon"
            className="absolute top-4 right-4 h-5 w-5 cursor-pointer"
            onClick={() => setIsOpen(false)} // close modal on click
          />

          <p className="text-2xl font-semibold mt-10 ml-2">Register Your Hotel</p>
          
          {/* You can add form fields here */}
          
        </div>
      </form>
    </div>
  );
};

export default HotelReg;
