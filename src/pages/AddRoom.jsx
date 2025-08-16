// import React, { useState } from "react";
// import Title from "../component/Title";
// import { assets } from "../assets/assets";

// const AddRoom = () => {
//   const [images, setImages] = useState({
//     1: null,
//     2: null,
//     3: null,
//     4: null,
//   });
//   const [inputs, setInputs] = useState({
//     roomType: "",
//     pricePerNight: 0,
//     amenities: {
//       "Free WiFi": false,
//       "Free Breakfast": false,
//        "Room Service": false,
//       "Mountain View": false,
//       "Pool Access": false,
//     },
//   });
//   return (
//     <form>
//       <Title
//         align="left"
//         font="outfit"
//         title="Add Room"
//         subTitle=" Fill in the details carefully and accurate room details, pricing, and amenities, to enhance the user booking experience "
//       />
//       {/* yaha area ka image dalna h */}
//       <p className="text-gray-800 mt-10">Images</p>
//       <div className="grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap">
//         {Object.keys(images).map((key) => (
//           <label htmlFor={`roomImage${key}`} key={key}>
//             <img
//               className="max-h-13 cursor-pointer opacity-80"
//               src={
//                 images[key]
//                   ? URL.createObjectURL(images[key])
//                   : assets.uploadArea
//               }
//               alt=""
//             />
//             <input
//               type="file"
//               accept="image/*"
//               id={`roomImage${key}`}
//               hidden
//               onChange={(e) =>
//                 setImages({ ...images, [key]: e.target.files[0] })
//               }
//             />
//           </label>
//         ))}
//       </div>
//       {/* nahi hoga yaha past karna  */}
//       <div className="w-full flex max-sm:flex-col sm:gap-4 mt-4">
//         <div className="flex-1 maz-w-48">
//           <p className="text-gray-800 mt-4">Room Type</p>
//           <select
//             value={inputs.roomType}
//             onChange={(e) => setInputs({ ...inputs, roomType: e.target.value })}
//             className="border opacity-70 border-gray-300 mt-1 rounded p-2 w-50"
//           >
//             <option value="Select Room Type">Select Room Type </option>
//             <option value="Single Bed">Single Bed </option>
//             <option value="Double Bed">Double Bed </option>
//             <option value="Luxury Room">Luxury Room </option>
//             <option value="Family Suite">Family Suite </option>
//           </select>
//         </div>
//         <div>
//           <p className="mt-4 mr-140 text-gray-800">
//             Price <span>/night</span>
//           </p>
//           <input
//             type="number"
//             placeholder="0"
//             className="border border-gray-300 mt-1 rounded p-2 w-24"
//             value={inputs.pricePerNight}
//             onChange={(e) =>
//               setInputs({ ...inputs, pricePerNight: e.target.value })
//             }
//           />
//         </div>
//       </div>
//       <p className="text-gray-800 mt-4">Amenities</p>
//       <div className="flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm">
//         {Object.keys(inputs.amenities).map((amenity, index)=>(
//           <div key={index}>
//             <input type="checkbox" id={`amenities${index+1}`} checked={inputs.amenities[amenity]} onChange={()=>setInputs({... inputs,amenities:{...inputs.amenities,[amenity]: !inputs.amenities[amenity]}})} />
//             <label htmlFor={`amenities${index+1}`}>  {amenity} </label>

//           </div>

//         ))}

//       </div>
//       <button className="bg-primary text-white px-8 py-2 rounded mt-8 cursor-pointer"> Add Room</button>
//     </form>
//   );
// };

// export default AddRoom;
import React, { useState } from "react";
import Title from "../component/Title";
import { assets } from "../assets/assets";

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    roomType: "",
    pricePerNight: 0,
    amenities: {
      "Free WiFi": false,
      "Free Breakfast": false,
      "Room Service": false,
      "Mountain View": false,
      "Pool Access": false,
    },
  });

  return (
    <form className="w-full max-w-4xl mx-auto p-4">
      {/* Title */}
      <Title
        align="left"
        font="outfit"
        title="Add Room"
        subTitle="Fill in the details carefully — accurate room details, pricing, and amenities will enhance the user booking experience."
      />

      {/* Images Section */}
      <p className="text-gray-800 mt-10 font-medium">Images</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-4">
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImage${key}`} key={key} className="cursor-pointer">
            <img
              className="w-full h-32 object-cover rounded border border-gray-300 opacity-80 hover:opacity-100 transition"
              src={
                images[key]
                  ? URL.createObjectURL(images[key])
                  : assets.uploadArea
              }
              alt="room upload"
            />
            <input
              type="file"
              accept="image/*"
              id={`roomImage${key}`}
              hidden
              onChange={(e) =>
                setImages({ ...images, [key]: e.target.files[0] })
              }
            />
          </label>
        ))}
      </div>

      {/* Room Type & Price */}
      <div className="w-full flex flex-col sm:flex-row gap-4 mt-6">
        {/* Room Type */}
        <div className="flex-1">
          <p className="text-gray-800 font-medium">Room Type</p>
          <select
            value={inputs.roomType}
            onChange={(e) =>
              setInputs({ ...inputs, roomType: e.target.value })
            }
            className="border border-gray-300 mt-1 rounded p-2 w-full"
          >
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>

        {/* Price */}
        <div className="flex-1 sm:max-w-[150px]">
          <p className="text-gray-800 font-medium">
            Price <span className="text-gray-500">/night</span>
          </p>
          <input
            type="number"
            placeholder="0"
            className="border border-gray-300 mt-1 rounded p-2 w-full"
            value={inputs.pricePerNight}
            onChange={(e) =>
              setInputs({ ...inputs, pricePerNight: e.target.value })
            }
          />
        </div>
      </div>

      {/* Amenities */}
      <p className="text-gray-800 mt-6 font-medium">Amenities</p>
      <div className="flex flex-wrap gap-3 mt-2 text-gray-600">
        {Object.keys(inputs.amenities).map((amenity, index) => (
          <label
            key={index}
            className="flex items-center gap-2 border border-gray-300 px-3 py-1 rounded cursor-pointer hover:bg-gray-50"
          >
            <input
              type="checkbox"
              checked={inputs.amenities[amenity]}
              onChange={() =>
                setInputs({
                  ...inputs,
                  amenities: {
                    ...inputs.amenities,
                    [amenity]: !inputs.amenities[amenity],
                  },
                })
              }
            />
            {amenity}
          </label>
        ))}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-primary text-white px-8 py-2 rounded mt-8 cursor-pointer hover:bg-primary/90 transition"
      >
        Add Room
      </button>
    </form>
  );
};

export default AddRoom;
