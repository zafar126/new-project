// import React, { useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import { roomsDummyData } from '../assets/assets'

// const RoomDetails = () => {
//     const {id} = useParams()
//     const [room, setRoom] = useState(null)
//     const [mainImage, setMainImage] = useState(null)
//     useEffect(()=> {
//      const room =  roomDummyData.find(room => room._id === id)
//      rooom && setRoom(room)
//      room && setMainImage(room.images[0])
//     },[])

//   return room && (

//     <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
//       {/* room details */}
//       <div><h1> {room.hotel.name} <span>
//        ( {room.roomType})
//       </span>
//       <p>20% OFF</p>
//         </h1>
//         </div>
//     </div>
//   )
// }

// export default RoomDetails
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { roomsDummyData, assets, facilityIcons } from "../assets/assets";
// import StarRating from "../component/StarRating";

// const RoomDetails = () => {
//   const { id } = useParams();
//   const [room, setRoom] = useState(null);
//   const [mainImage, setMainImage] = useState(null);

//   useEffect(() => {
//     const foundRoom = roomsDummyData.find((room) => room._id === id);
//     if (foundRoom) {
//       setRoom(foundRoom);
//       setMainImage(foundRoom.images[0]);
//     }
//   }, [id]);

//   return (
//     room && (
//       <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
//         {/* Room Title */}
//         <div>
//           <h1 className="text-3xl md:text-4xl font-playfair flex items-center gap-3 flex-wrap">
//             {room.hotel.name}
//             <span className="font-inter text-sm">({room.roomType})</span>
//             <span className="text-xs font-inter py-1 px-3 text-white bg-orange-500 rounded-full">
//               20% OFF
//             </span>
//           </h1>
//         </div>

//         {/* Room Rating */}
//         <div className="flex items-center gap-2 mt-2">
//           <StarRating />
//           <p className="text-sm text-gray-600">200+ reviews</p>
//         </div>

//         {/* Room Address */}
//         <div className="flex items-center gap-1 text-gray-500 mt-2">
//           <img src={assets.locationIcon} alt="Location Icon" />
//           <span>{room.hotel.address}</span>
//         </div>

//         {/* Main Image & Thumbnails */}
//         <div className="flex flex-col lg:flex-row gap-5 mt-6">
//           {/* Main Image */}
//           <div className="w-full lg:w-3/4">
//             <img
//               src={mainImage}
//               alt="Room Main"
//               className="w-full h-[350px] rounded-xl shadow-lg object-cover"
//             />
//           </div>

//           {/* Thumbnail Images */}
//           <div className="grid grid-cols-2 gap-3 lg:w-1/4">
//             {room?.images.slice(0, 4).map((image, index) => (
//               <div
//                 key={index}
//                 onClick={() => setMainImage(image)}
//                 className={`rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-200 ${
//                   mainImage === image
//                     ? "border-orange-500 scale-105"
//                     : "border-transparent"
//                 }`}
//               >
//                 <img
//                   src={image}
//                   alt={`Thumbnail ${index + 1}`}
//                   className="w-full h-[160px] object-cover rounded-xl"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Room Highlights */}
//         <div className="flex flex-col md:flex-row md:justify-between mt-10">
//           <div className="flex flex-col">
//             <h1 className="text-3xl md:text-4xl font-playfair">
//               Experience Luxury Like Never Before
//             </h1>
//             <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
//               {room.amenities.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100"
//                 >
//                   <img
//                     src={facilityIcons[item]}
//                     alt={item}
//                     className="w-5 h-5"
//                   />
//                   <p className="text-xs">{item}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <p className="text-2xl font-medium mt-4 md:mt-0">
//             {room.pricePerNight} / night
//           </p>
//         </div>
//         {/* cheking chekout form */}
//        <div className="bg-white p-6 rounded-xl shadow-md mt-10 max-w-6xl mx-auto">
//   <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">

//     {/* Check-In */}
//     <div>
//       <label htmlFor="checkInDate" className="font-medium block mb-1">
//         Check-In
//       </label>
//       <input
//         type="date"
//         id="checkInDate"
//         className="w-50 rounded border border-gray-300 px-3 py-2 outline-none"
//         required
//       />
//     </div>

//     {/* Check-Out */}
//     <div>
//       <label htmlFor="checkOutDate" className="font-medium block mb-1">
//         Check-Out
//       </label>
//       <input
//         type="date"
//         id="checkOutDate"
//         className="w-50 rounded border border-gray-300 px-3 py-2 outline-none"
//         required
//       />
//     </div>

//     {/* Guests */}
//     {/* <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div> */}

//     <div>
//       <label htmlFor="guests" className="font-medium block mb-1">
//         Guests
//       </label>
//       <input
//         type="number"
//         id="guests"
//         placeholder="0"
//         className="w-25 rounded border border-gray-300 px-3 py-2 outline-none"
//         required
//       />
//     </div>

//     {/* Book Now */}
//     <div>
//       <button
//         type="submit"
//         className="w-full bg-primary hover:bg-primary-dull active:scale-90 transition-all text-white rounded-md px-5 py-3 text-base cursor-pointer"
//       >
//         Check Availability
//       </button>
//     </div>
//     {/* Common Specifications */}
// <div className='mt-[100px] space-y-4'>
//   {roomCommonData.map((spec, index) => (
//     <div key={index} className='flex items-start gap-2'>
//       <img src={spec.icon} alt={`${spec.title}-icon`} className='w-[26px]' />
//       <div>
//         <p className='text-base'>{spec.title}</p>
//         <p className='text-gray-500'>{spec.description}</p>
//       </div>
//     </div>
//   ))}
// </div>

//   </div>
// </div>

//       </div>
//     )
//   );
// };

// export default RoomDetails;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { roomsDummyData, assets, facilityIcons } from "../assets/assets";
import StarRating from "../component/StarRating";
import { House, CopyCheck, MapPin, Heart } from "lucide-react";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  const roomCommonData = [
    {
      icon: <House size={28} />,
      title: "Clean & Safe Stay",
      description: "Sanitized rooms with safety protocols",
    },
    {
      icon: <CopyCheck size={28} />,
      title: "Enhanced Cleaning",
      description: "Disinfection of high-touch surfaces",
    },
    {
      icon: <MapPin size={28} />,
      title: "Great Location",
      description: "Close to attractions and transport",
    },
    {
      icon: <Heart size={28} />,
      title: "Smooth Check-In",
      description: "Quick and contactless experience",
    },
  ];

  useEffect(() => {
    const foundRoom = roomsDummyData.find((room) => room._id === id);
    if (foundRoom) {
      setRoom(foundRoom);
      setMainImage(foundRoom.images[0]);
    }
  }, [id]);

  return (
    room && (
      <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Title */}
        <div>
          <h1 className="text-3xl md:text-4xl font-playfair flex items-center gap-3 flex-wrap">
            {room.hotel.name}
            <span className="font-inter text-sm">({room.roomType})</span>
            <span className="text-xs font-inter py-1 px-3 text-white bg-orange-500 rounded-full">
              20% OFF
            </span>
          </h1>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <StarRating />
          <p className="text-sm text-gray-600">200+ reviews</p>
        </div>

        {/* Address */}
        <div className="flex items-center gap-1 text-gray-500 mt-2">
          <img src={assets.locationIcon} alt="Location Icon" />
          <span>{room.hotel.address}</span>
        </div>

        {/* Main Image + Thumbnails */}
        <div className="flex flex-col lg:flex-row gap-5 mt-6">
          <div className="w-full lg:w-3/4">
            <img
              src={mainImage}
              alt="Room Main"
              className="w-full h-[350px] rounded-xl shadow-lg object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 lg:w-1/4">
            {room.images.slice(0, 4).map((image, index) => (
              <div
                key={index}
                onClick={() => setMainImage(image)}
                className={`rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-200 ${
                  mainImage === image
                    ? "border-orange-500 scale-105"
                    : "border-transparent"
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-[160px] object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="flex flex-col md:flex-row md:justify-between mt-10">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-playfair">
              Experience Luxury Like Never Before
            </h1>
            <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
              {room.amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100"
                >
                  <img
                    src={facilityIcons[item]}
                    alt={item}
                    className="w-5 h-5"
                  />
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-2xl font-medium mt-4 md:mt-0">
            {room.pricePerNight} / night
          </p>
        </div>

        {/* Check-in Form */}
        <div className="bg-white p-6 rounded-xl shadow-md mt-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <div>
              <label htmlFor="checkInDate" className="font-medium block mb-1">
                Check-In
              </label>
              <input
                type="date"
                id="checkInDate"
                className="w-full rounded border border-gray-300 px-3 py-2 outline-none"
              />
            </div>

            <div>
              <label htmlFor="checkOutDate" className="font-medium block mb-1">
                Check-Out
              </label>
              <input
                type="date"
                id="checkOutDate"
                className="w-full rounded border border-gray-300 px-3 py-2 outline-none"
              />
            </div>

            <div>
              <label htmlFor="guests" className="font-medium block mb-1">
                Guests
              </label>
              <input
                type="number"
                id="guests"
                placeholder="0"
                className="w-full rounded border border-gray-300 px-3 py-2 outline-none"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dull active:scale-90 transition-all text-white rounded-md px-5 py-3 text-base cursor-pointer"
              >
                Check Availability
              </button>
            </div>
          </div>
        </div>
        {/* Room Specifications with Lucide Icons */}
        <div className="mt-14 space-y-4">
          {roomCommonData.map((spec, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="text-primary mt-1">{spec.icon}</div>
              <div>
                <p className="text-base font-medium">{spec.title}</p>
                <p className="text-gray-500">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-3xl border-y border-gray-300 py-10 text-gray-500">
          <p>
            {" "}
            Guestd will be allocated on the graund floor according to
            Availability. You get a comfortable Two bedroom apartment has a true
            city feeling . The price quote is for two guest, at the guest slot
            plese mark the number of guestd to ge th exact price for groups .
            The Guests will be allocated ground floor according to Availability.
            You get the comfortable teo bedroomapartment that has a true city
            feeling
          </p>
        </div>
      <div className="flex flex-com items-start gap-5">
  {/* Owner Image */}
  <div className="flex items-center mt-5 gap-5">
    <img
    src={room.hotel.owner.image}
    alt="Hotel"
    className="h-12 w-12  md:h-12 mt-2 rounded-full object-cover"
  />

  {/* Owner Details */}
  <div>
    <p className="text-lg md:text-xl font-medium">Hosted by {room.hotel.name}</p>
    <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
      <StarRating />
      <p>200+ reviews</p>
    </div>
  </div>
  </div>
  
</div>
<button
  className="px-6 py-2.5 mt-5 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer"
  onClick={() => alert('Contact request sent!')}
>
  Contact Now
</button>

      </div>
    )
  );
};

export default RoomDetails;
