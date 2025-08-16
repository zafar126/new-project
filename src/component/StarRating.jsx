import React from 'react';
import { assets } from '../assets/assets'; // ✅ Import assets

const StarRating = ({ rating = 4 }) => {
  return (
    <>
      {Array(5).fill(0).map((_, index) => (
        <img
          key={index} // ✅ Always use key inside map
          src={rating > index ? assets.starIconFilled : assets.starIconOutlined}
          alt=""
          className="w-4.5 h-4.5"
        />
      ))}
    </>
  );
};

export default StarRating;
