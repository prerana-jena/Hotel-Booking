import React from 'react'
import Title from './Title';
import {assets} from '../assets/assets';
import {exclusiveOffers} from '../assets/assets';
const ExclusiveOffers = () => {
  return (
    <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row items-center justify-between w-full'>
            <Title title="Exclusive Offers" subTitle="Check out our special deals and offers"/>
            <button className='group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12'>View All Offers
                <img src={assets.arrowIcon} alt="arrow-icon" className="  group-hover:translate-x-1 transition-all"/>
            </button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
            {exclusiveOffers.map((item)=>(
                <div key={item._id} className='group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center' style={{backgroundImage:`url(${item.image})`}}>
                    <p className='px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full'>{item.priceOff}% OFF</p> 
                    <div>
                        <p className='text-xl font-medium font-playfair'>{item.title}</p>
                        <p>{item.description}</p>
                        <p className='text-xs text-white/70 mt-3'>Expires {item.expiryDate}</p>
                    </div>
                    <button className='group flex items-center gap-2 font-medium cursor-pointer'>
                        View Offers
                        <img src={assets.arrowIcon} alt="arrow-icon" className="group-hover:translate-x-1 transition-all"/>
                    </button>
                </div>

            ))}
        </div>
    </div>
  )
}

export default ExclusiveOffers