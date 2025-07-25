// // import React from 'react'
// // import { roomsDummyData } from '../assets/assets'
// // import HotelCard from './HotelCard'

// // const FeaturedDestination = () => {
// //   return (
// //     <div>
// //       {roomsDummyData.slice(0, 4).map((room, index)=>(
// //         <HotelCard key={room.id} room={room} index={index} />
// //       ))}
// //     </div>
// //   )
// // }

// // export default FeaturedDestination

// import React from 'react'
// import { roomsDummyData } from '../assets/assets'
// import HotelCard from './HotelCard'

// const FeaturedDestination = () => {
//   return (
//     <div className='flex flex-col  flex-wrap items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
//       <div className='flex m-2 items-center justify-center  gap-7 mt-5'>
//       {roomsDummyData.slice(0, 4).map((room, index) => (
//         <HotelCard key={`${room.id}-${index}`} room={room} index={index} />
//       ))}
//     </div>
//     </div>
//   )
// }

// export default FeaturedDestination

import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'


const FeaturedDestination = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-slate-50 py-20 px-4 sm:px-6 md:px-16 lg:px-24">

      <Title title='Featured Destination' subTitle='Discover our handpicke selection of exceptional properties around the world , offering unparalleled luxury and unforgettable experience.'/>
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-5 mt-20">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={`${room.id}-${index}`} room={room} index={index} />
        ))}
      </div>
      <button
  onClick={() => {
    navigate('/room');
    scrollTo(0, 0);
  }}
  className="block mx-auto my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer"
>
  View All Destinations
</button>
    </div>
  )
}

export default FeaturedDestination
