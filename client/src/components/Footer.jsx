import React from 'react'
import { assets } from '../assets/assets';
const Footer = () => {
  return (
     <footer className="bg-[#F6F9FC] px-6 md:px-16 lg:px-24 xl:px-32 w-full">
            <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-gray-500/30">
                
                <div className="max-w-96">
                    <img src={assets.logo} alt="logo" className="mb-4 h-8 md:h-9 invert opacity-80"/>
                    <p className="mt-6 text-sm text-gray-500">
                        Experience the epitome of hospitality with our hotel booking website. Discover a world of comfort, convenience, and unforgettable stays at your fingertips. Book your next adventure with us and let us take care of the rest.
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                        <a href="#">
                            <img src={assets.facebookIcon} alt="Facebook" className="w-6"/>
                        </a>
                        <a href="#">
                            <img src={assets.twitterIcon} alt="Twitter" className="w-6"/>
                        </a>
                        <a href="#">
                            <img src={assets.instagramIcon} alt="Instagram" className="w-6"/>
                        </a>
                    </div>
                </div>
        
                <div className="w-1/2 grid grid-cols-2 gap-12">
                    <div>
                        <p className="font-playfair text-lg text-gray-800">RESOURCES</p>
                        <ul className="mt-3 flex flex-col gap-2 text-sm text-gray-500">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Partners</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-playfair text-lg text-gray-800">COMPANY</p>
                        <div className="mt-3 flex flex-col gap-2 text-sm text-gray-500"> 
                            <li><a href="#">Help Centers</a></li>
                            <li><a href="#">Safety Information</a></li>
                            <li><a href="#">Cancellation Options</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Accessibilty</a></li>
                        </div>
                    </div>
                </div>
                <div className='max-w-80'>
                    <p className='font-playfair text-lg text-gray-800'>STAY UPDATED</p>
                    <p className='mt-3 text-sm text-gray-500'>
                        Subscribe to our newsletter for inspiration and special offers.
                    </p>
                    <div className='flex items-center mt-4'>
                        <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email' />
                        <button className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r'>
                            {/* Arrow icon */}
                            <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                        </button>
                    </div>
                </div>
        
            </div>
    
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5 text-gray-500'>
                <p>© {new Date().getFullYear()} QuickStay. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
        </footer>
  )
}

export default Footer