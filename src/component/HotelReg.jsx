import React, { useState } from "react";
import { assets, cities } from "../assets/assets";

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

          <p className="text-2xl font-semibold mt-10 ml-2">
            Register Your Hotel
          </p>

          {/* yaha se kuch bhi likhna h zafar */}
          <div className="w-full mt-4">
            <label htmlFor="name" className="font-medium text-gray-500">
              Hotel Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Type Here "
              className="border border-gray-200 rounded w-full px-3 py-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            />
          </div>
          <div className="w-full mt-4">
            <label htmlFor="contact" className="font-medium text-gray-500">
              phone
            </label>
            <input
              id="contact"
              type="number"
              placeholder="Type Here "
              className="border border-gray-200 rounded w-full px-3 py-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            />
          </div>
          <div className="w-full mt-4">
            <label htmlFor="address" className="font-medium text-gray-500">
              Address
            </label>
            <input
              id="address"
              type="address"
              placeholder="Type Here "
              className="border border-gray-200 rounded w-full px-3 py-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            />
          </div>
          <div className="w-full mt-4 max-w-60 mr-auto">
            <label htmlFor="city" className="font-medium text-gray-500">
              City
            </label>
            <select
              id="city"
              className="border border-gray-200 rounded w-full px-3 py-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            >
              <option value="">Select City </option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <button className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white mr-auto px-6 py-2 rounded cursor-pointer mt-6"> Register</button>
        </div>
      </form>
    </div>
  );
};

export default HotelReg;
