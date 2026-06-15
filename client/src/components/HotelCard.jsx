import React from 'react'
import { Link } from 'react-router-dom';
import {assets} from '../assets/assets';
const HotelCard = ({room,index}) => {
  return (
    <Link to={'/room/'+room._id} onClick={()=>scrollToTop()} key={room._id} className="relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]">
        <img src={room.images[0]} alt=" "   />
        {index % 2==0 && <p className='px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full'>Best Seller</p>}
        <div className="p-4">

  {/* Row 1 */}
  <div className="flex justify-between items-center">
    <p>{room.hotel.name}</p>

    <div className="flex items-center gap-1">
      <img src={assets.starIconFilled} alt="" />
      <span>4.5</span>
    </div>
  </div>

  {/* Row 2 */}
  <div className="flex items-center gap-1 mt-2 text-sm text-gray-500">
    <img src={assets.locationIcon} alt="" />
    <span>{room.hotel.address}</span>
  </div>

  {/* Row 3 */}
  <div className="flex justify-between items-center mt-4">
    <p>
      <span className="text-2xl font-dmSans text-gray-800">
        ${room.pricePerNight}
      </span>
      /night
    </p>

    <button className="px-4 py-2 border rounded">
      Book Now
    </button>
  </div>

</div>
        
    </Link>
  )
}

export default HotelCard