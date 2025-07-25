import React from 'react';
import Title from './Title';
import { assets,exclusiveOffers } from '../assets/assets';

const ExclusiveOffers = () => {
  return (
//     <div className='flex flex-col items-center px-6 md:px-6 lg:px-24 xl:px-32 pt-20 pb-30'>
//       <div  className='flex flex-col md:flex-row items-center justify-between w-full'>
//         <Title 
//           align='left' 
//           title='Exclusive Offers' 
//           subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories." 
//         />
//         <button className="group flex items-center gap-2 mt-4">
//           View All Offers
//           <img 
//             src={assets.arrowIcon} 
//             alt="arrow-icon" 
//             className="group-hover:translate-x-1 transition-all"
//           />
//         </button>
//         <div>
//   {exclusiveOffers.map((item) => (
//     <div
//       key={item._id}
//       className="group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center"
//       style={{ backgroundImage: `url(${item.image})` }}
//     >
//       <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">
//         {item.priceOff}% OFF
//       </p>

//       <div>
//         <p className="text-2xl font-medium font-playfair">{item.title}</p>
//         <p>{item.description}</p>
//         <p>Expires {item.expiryDate}</p>
//       </div>

//       <button className="flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5">
//         View Offers
//         <img
//           className="invert group-hover:translate-x-1 transition-all"
//           src={assets.arrowIcon}
//           alt="arrow-icon"
//         />
//       </button>
//     </div>
//   ))}
// </div>

//       </div>
//     </div>
//   );
// };
<div className="px-6 md:px-16 lg:px-24 py-12 space-y-8">
  {/* Header Section */}
  <div className="flex justify-between items-center">
    <div>
      <h2 className="text-3xl md:text-4xl font-playfair font-semibold">Exclusive Offers</h2>
      <p className="text-gray-500 mt-2 max-w-xl">
        Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
      </p>
    </div>
    <button className="group flex text-blue-600 items-center gap-2 mt-4">
      View All Offers
      <img
        src={assets.arrowIcon}
        alt="arrow"
        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-all"
      />
    </button>
  </div>

  {/* Offers Grid */}
  <div className="flex flex-wrap justify-center gap-6">
    {exclusiveOffers.map((item) => (
      <div
        key={item._id}
        className="group relative w-full sm:w-[300px] md:w-[320px] h-[270px] rounded-xl overflow-hidden text-white bg-cover bg-center hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-xl"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        {/* Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 text-xs bg-white text-gray-800 font-medium rounded-full">
          {item.priceOff}% OFF
        </div>

        {/* Content */}
        <div className="flex flex-col justify-end h-full p-6 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
          <h3 className="text-xl font-medium font-playfair">{item.title}</h3>
          <p className="text-sm">{item.description}</p>
          <p className="text-xs mt-1">Expires {item.expiryDate}</p>

          <button className="flex items-center text-sm mt-4 font-medium cursor-pointer">
            View Offers
            <img
              className="ml-2 w-4 h-4 invert group-hover:translate-x-1 transition-all duration-300"
              src={assets.arrowIcon}
              alt="arrow-icon"
            />
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}

     
export default ExclusiveOffers;


