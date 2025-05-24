import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {Link} from "react-router";

function FooterSection() {
    return (
        <>
            <br />
            <hr />
            <footer className='max-w-full mx-auto bg-gray-100 mt-2 text-center'>

                <div className='flex flex-col px-4 max-w-7xl mx-auto bg-gray-100 text-center md:flex-row justify-around p-3 gap-8'>
                    <div className='flex flex-col p-3 m-3'>
                        <h3 className='font-bold text-xl mb-2'>QUICK LINKS</h3>
                        <Link to="/rooms" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='hover:text-orange-600 p-1'>Room Types & Amenities</Link>
                        <Link to="/reviews" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='hover:text-orange-600 p-1'>Customer Reviews & Ratings</Link>
                        <Link to="/traveltips" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='hover:text-orange-600 p-1'>Travel Tips & Guides</Link>
                    </div>

                    <div className='flex flex-col p-3 m-3'>
                        <h3 className='font-bold text-xl mb-2'>OUR SERVICES</h3>
                        <Link to="/concierge" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='hover:text-orange-600 p-1'>Concierge Assistance</Link>
                        <Link to="/booking-options" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='hover:text-orange-600 p-1'>Flexible Booking Options</Link>
                        <Link to="/airport-transfers" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='hover:text-orange-600 p-1'>Airport Transfers</Link>
                        <Link to="/wellness-recreation" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='hover:text-orange-600 p-1'>Wellness & Recreation</Link>
                    </div>

                    <div className='flex flex-col p-3 m-3'>
                        <h3 className='font-bold text-xl mb-2'>CONTACT US</h3>
                        <p className='p-1'>Address: Beside Barshal Water Tank, </p>
                        <p className='p-1'>Manpur, Barhanti, West Bengal 723156</p>
                        <p className=' p-1'>kkghosh0099@gmail.com</p>
                        <p className=' p-1'>+91 9007062180</p>
                    </div>
                </div>
                
                <div className='flex justify-between'>
                    <div className="space-x-6 text-sm text-left">
                        <a href="#" className="hover:underline transition duration-200  ml-7">Privacy</a>
                        <a href="#" className="hover:underline transition duration-200  ">Terms</a>
                        <p className="text-sm text-left mt-1">
                            © 2025 King Sukh Guest House. All Rights Reserved.
                        </p>
                    </div>

                    <div className='flex flex-row justify-center gap-3 mb-4 mr-8'>
                        <a href="https://www.facebook.com/share/16ZBUtKwaY/?mibextid=wwXIfr" target="_blank" className="hover:text-blue-700 text-2xl"><FaFacebook /></a>
                        <a href="https://www.instagram.com/kingsukhguesthouse/" target="_blank" className="hover:text-pink-800 text-2xl"><FaInstagram /></a>
                    </div>
                </div>


            </footer>
        </>
    )
}

export default FooterSection
