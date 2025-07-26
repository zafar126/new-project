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
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { roomsDummyData, assets } from '../assets/assets';
import StarRating from '../component/StarRating';

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

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
        {/* Room Title */}
        <div>
          <h1 className="text-3xl md:text-4xl font-playfair flex items-center gap-3 flex-wrap">
            {room.hotel.name}{' '}
            <span className="font-inter text-sm">({room.roomType})</span>
            <span className="text-xs font-inter py-1 px-3 text-white bg-orange-500 rounded-full">
              20% OFF
            </span>
          </h1>
        </div>

        {/* Room Rating */}
        <div className="flex items-center gap-2 mt-2">
          <StarRating />
          <p className="text-sm text-gray-600">200+ reviews</p>
        </div>

        {/* Room Address */}
        <div className="flex items-center gap-1 text-gray-500 mt-2">
          <img src={assets.locationIcon} alt="Location Icon" />
          <span>{room.hotel.address}</span>
        </div>
      </div>
    )
  );
};

export default RoomDetails;
