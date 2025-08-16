import React from "react";
import { assets , cities } from "../assets/assets";

const Hero = () => {
  return (
    <>
      <div
         style={{ backgroundImage: `url('/src/assets/heroImage.png')` }}
  className="flex flex-col items-start justify-center px-4 md:px-10 lg:px-24 xl:px-32 text-white bg-no-repeat bg-cover  bg-center bg-fixed h-screen w-full"
>
      
        <p className="bg-[#49B9FF] w-[300px]  text-center mr-9 rounded-full mt-30">
          The Ultimate Hotel Experience
        </p>

        <h1 className="font-playfair text-1xl md:text-4xl md:text-[20x] md:leading-[36x] font-bold md:font-extrabold max-w-xl mr-18 pr-18 mt-4 ml-[1px]">
          Discover Your Perfect <br /> Gateway Destination
        </h1>

        <p className="max-w-110 mt-2 text-sm md:text-base ml-[1px]">
          Unparalleled luxury and comfort await at the world's most exclusive
          hotels and resort. Start your journey today.
        </p>
        <form className="bg-white mt-6 text-gray-500 rounded-lg px-6 py-4 flex flex-col md:flex-row items-start gap-4 ml-[3px]">
          <div>
            <div className="flex items-center gap-2">
              <img src={assets.calenderIcon} alt="" className="h-4" />
              <label htmlFor="destinationInput">Destination</label>
            </div>
            <input
              list="destinations"
              id="destinationInput"
              type="text"
              className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
              placeholder="Type here"
              required
            />
            <datalist id="destinations">
              {cities.map((city, index) => (
                <option key={index} value={city} />
              ))}
            </datalist>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <img src={assets.calenderIcon} alt="" className="h-4" />
              <label htmlFor="checkIn">Check in</label>
            </div>
            <input
              id="checkIn"
              type="date"
              className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <img src={assets.calenderIcon} alt="" className="h-4" />
              <label htmlFor="checkOut">Check out</label>
            </div>
            <input
              id="checkOut"
              type="date"
              className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            />
          </div>

          <div className="flex md:flex-col  gap-2 items-start">
            <label htmlFor="guests">Guests</label>
            <input
              min={1}
              max={4}
              id="guests"
              type="number"
              className="rounded border border-gray-200 px-3 py-1.5  text-sm outline-none max-w-16"
              placeholder="0"
            />
          </div>

          <button className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer">
            <img src={assets.searchIcon} alt="Search" className="h-4" />
            <span>Search</span>
          </button>
        </form>
      </div>
    </>
  );
};
export default Hero;
