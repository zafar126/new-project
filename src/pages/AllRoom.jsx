// import React from 'react';
// import { assets, facilityIcons, roomsDummyData } from '../assets/assets';
// import { useNavigate } from 'react-router-dom';
// import StarRating from '../component/StarRating';



// const CheckBox = ({ level, selected = false, onChane =() => { } })=>{
//   return(
//     <label className='flex gap-3 items-center cursor-pointer mt-2 textsm'>
//       <input type="checkbox" checked={selected } onChange={(e)=>onChane(e.target.checked,label)}/>
//       <span className='font-light select-none'>{label}</span>
//     </label>
    
//   )

// }
// const RadiokBox = ({ level, selected = false, onChane =() => { } })=>{
//   return(
//     <label className='flex gap-3 items-center cursor-pointer mt-2 textsm'>
//       <input type="radio" name="sortOption" checked={selected } onChange={()=>onChane(label)}/>
//       <span className='font-light select-none'>{label}</span>
//     </label>
    
//   )

// }


// const AllRooms = () => {
//   const navigate = useNavigate();
//   const [openFilters, setOpenFilters] =useState(false);
//   const roomType = [
//     "Single Bed",
//     "Double Bed",
//     "Luxury Room",
//     "Family Suite",
//   ];
//   const priceRanges =[
//     '0 to 500',
//     '500 to 1000',
//     '100 to 2000',
//     '2000 to 3000',

//   ];
//   const sortOptions =[
//     "Price Low to High ",
//     "Price High to Low ",
//     "Newet First",
//   ];
//   return (
//     <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>
//       <div>
//         <div className='flex flex-col items-start text-left'>
//           <h1 className='font-playfair text-4xl md:text-[40px]'>Hotel Rooms</h1>
//           <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-[74%]'>
//             Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
//           </p>
//         </div>
//         {roomsDummyData.map((room)=>(
//           <div key={room._id} className='flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pd-30 last:border-0'>
//             <img onClick={() =>{ navigate(`/room/${room._id}`), scrollTo(0,0)}}
//              src={room.images[0]} alt="hotel-img"  title='View Room Details' className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'/>
//              <div className='md:w-1/2 flex flex-col gap-2'>
//               <p className='text-gray-500'>{room.hotel.city}</p>
//                <p onClick={() =>{ navigate(`/room/${room._id}`), scrollTo(0,0)}}
//                 className='text-gray-800 text-3xl font-playfair cursor-pointer'>{room.hotel.name}</p>
//                <div className='flex items-center'>
//                 <StarRating />
//                 <p className='ml-2'>200+ reviews</p>

//                </div>
//             <div className='flex gap-2'>
//               <img src={assets.locationIcon} alt="location icon" />
//               <span>{room.hotel.address}</span>
//             </div>
//             {/* room amenities */}
//             <div className='flex flex-rap item-center mt-3 mb-6 gap-4'>
//               {room.amenities.map((item,index)=>(
//                 <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70'>
//                   <img src={facilityIcons[item]} alt={item} className='w-5 h-5'/>
//                   <p className='text-xs'>{item}</p>
//                 </div>
//               ))}

//             </div>
//             {/* room price per night */}
//             <p className='text-xl font-medium text-gray-700'>${room.pricePerNight} /Day</p>
//              </div>
//           </div>
//         ))}
//       </div>

//       {/* Filters */}
//       <div className='bg-white w-80 border-gray-300 text-gray-600 max-lg:md-8 min-mt-16'>
//         <div className={`flex item-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${openFilters && "border-b"}`}>
//           <div className='text-xs cousor-pointer'>
//           <p className='text-base font-medium text-gray-800'>FILTERS</p>
//           <div>
//             <span onClick={()=> setOpenFilters(!openFilters)} className='lg:hidden'> 
//               {openFilters? 'HIDE' : 'SHOW'}</span>
//             <span className='hidden lg:block'>
//               CLEAR
//             </span>
//           </div>
//         </div>
//         </div>
//         <div className={`${openFilters ? 'h-auto' : "h-0 lg:h-auto"} overflow-hidden transition-all duration-700`}>
//           <div className='px-5 pt-5'>
//             <p className='font-medium text-gray-800 pb-2'>Popular filters</p>
//             {roomTypes.map((room, index)=>(
//               <CheckBox key={index} label={room} />
//             ))}
//           </div>
//            <div className='px-5 pt-5'>
//             <p className='font-medium text-gray-800 pb-2'>Price Range</p>
//             {priceRanges.map((range, index)=>(
//               <CheckBox key={index} label={`$ ${range}`} />
//             ))}
//           </div>
//            </div>
//            <div className='px-5 pt-5'>
//             <p className='font-medium text-gray-800 pb-2'>Sort By</p>
//             {sortOptions.map((option, index)=>(
//              <RadioButton key={index} label={option} />
//             ))}
//           </div>


//         </div>
//       </div>
     
//     </div>
//   );
// };

// export default AllRooms;
import React, { useState } from 'react';
import { assets, facilityIcons, roomsDummyData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import StarRating from '../component/StarRating';

const CheckBox = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
      <input type="checkbox" checked={selected} onChange={(e) => onChange(e.target.checked, label)} />
      <span className='font-light select-none'>{label}</span>
    </label>
  );
};

const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
      <input type="radio" name="sortOption" checked={selected} onChange={() => onChange(label)} />
      <span className='font-light select-none'>{label}</span>
    </label>
  );
};

const AllRooms = () => {
  const navigate = useNavigate();
  const [openFilters, setOpenFilters] = useState(true);

  const roomTypes = ["Single Bed", "Double Bed", "Luxury Room", "Family Suite"];
  const priceRanges = ['0 to 500', '500 to 1000', '1000 to 2000', '2000 to 3000'];
  const sortOptions = ["Price Low to High", "Price High to Low", "Newest First"];

  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      {/* Room List */}
      <div className='flex-1'>
        <div className='flex flex-col items-start text-left'>
          <h1 className='font-playfair text-4xl md:text-[40px]'>Hotel Rooms</h1>
          <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-[74%]'>
            Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
          </p>
        </div>

        {roomsDummyData.map((room) => (
          <div key={room._id} className='flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0'>
            <img
              onClick={() => {
                navigate(`/room/${room._id}`);
                scrollTo(0, 0);
              }}
              src={room.images[0]}
              alt="hotel-img"
              title='View Room Details'
              className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'
            />
            <div className='md:w-1/2 flex flex-col gap-2'>
              <p className='text-gray-500'>{room.hotel.city}</p>
              <p
                onClick={() => {
                  navigate(`/room/${room._id}`);
                  scrollTo(0, 0);
                }}
                className='text-gray-800 text-3xl font-playfair cursor-pointer'
              >
                {room.hotel.name}
              </p>
              <div className='flex items-center'>
                <StarRating />
                <p className='ml-2'>200+ reviews</p>
              </div>
              <div className='flex gap-2'>
                <img src={assets.locationIcon} alt="location icon" />
                <span>{room.hotel.address}</span>
              </div>
              <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                {room.amenities.map((item, index) => (
                  <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70'>
                    <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                    <p className='text-xs'>{item}</p>
                  </div>
                ))}
              </div>
              <p className='text-xl font-medium text-gray-700'>${room.pricePerNight} /Day</p>
            </div>
          </div>
        ))}
      </div>

      {/* Unified Filter Card */}
      <div className="w-80  lg:ml-5 bg-white shadow-md rounded-2xl border border-gray-200 text-gray-700 px-5 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Filters</h2>
          <button
            onClick={() => setOpenFilters(!openFilters)}
            className="text-sm text-blue-600 lg:hidden"
          >
            {openFilters ? 'Hide' : 'Show'}
          </button>
          <button className="hidden lg:block text-sm text-red-500 font-medium hover:underline">
            Clear
          </button>
        </div>

        <div className={`${openFilters ? 'block' : 'hidden lg:block'}`}>
          {/* Popular Filters */}
          <div className="mb-6">
            <h3 className="text-base font-semibold mb-2">Popular Filters</h3>
            {roomTypes.map((room, index) => (
              <CheckBox key={index} label={room} />
            ))}
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="text-base font-semibold mb-2">Price Range</h3>
            {priceRanges.map((range, index) => (
              <CheckBox key={index} label={`$ ${range}`} />
            ))}
          </div>

          {/* Sort By */}
          <div className="mb-2">
            <h3 className="text-base font-semibold mb-2">Sort By</h3>
            {sortOptions.map((option, index) => (
              <RadioButton key={index} label={option} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;

