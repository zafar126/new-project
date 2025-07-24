// import React from 'react'
// import { roomsDummyData } from '../assets/assets'
// import HotelCard from './HotelCard'

// const FeaturedDestination = () => {
//   return (
//     <div>
//       {roomsDummyData.slice(0, 4).map((room, index)=>(
//         <HotelCard key={room.id} room={room} index={index} />
//       ))}
//     </div>
//   )
// }

// export default FeaturedDestination

import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'

const FeaturedDestination = () => {
  return (
    <div>
      {roomsDummyData.slice(0, 4).map((room, index) => (
        <HotelCard key={`${room.id}-${index}`} room={room} index={index} />
      ))}
    </div>
  )
}

export default FeaturedDestination
