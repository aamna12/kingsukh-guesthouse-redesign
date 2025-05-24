import React from 'react';
import logo from '../assets/Capture.jpg';
import {Link} from "react-router";

function Navbar() {

    const message = `Hi, I want to book a room at King Sukh Guest House`;
  const whatsappLink = `https://wa.me/919007062180?text=${encodeURIComponent(message)}`;

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-3 py-3 flex justify-between items-center">
          <div className='flex flex-col items-center'>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
              <img src={logo} alt="logo" className="h-8 w-15" /></Link>
            <h5 className=" font-bold text-orange-600">King Sukh Guest House</h5>
          </div>

          <div className="md:hidden">
            <input id="menu-toggle" type="checkbox" className="hidden peer" />
            <label htmlFor="menu-toggle" className="cursor-pointer">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>

            <div className="absolute top-full left-0 w-full bg-white shadow-md max-h-0 overflow-hidden peer-checked:max-h-screen transition-all duration-300 md:hidden">
              <nav className="flex flex-col px-4 py-2 space-y-2">
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-orange-600">Home</Link>
                <Link to="/rooms" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-orange-600">Rooms</Link>
                <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-orange-600">About</Link>
                <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-orange-600">Contact</Link>
                <a href={whatsappLink}  target="_blank" className='bg-orange-600 text-white text-center py-2 rounded hover:bg-orange-700'>
                  Book Now
                </a>
              </nav>
            </div>
          </div>

          <nav className="space-x-6 hidden md:flex items-center">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-orange-600 hover:underline underline-offset-4  ">Home</Link>
            <Link to="/rooms" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-orange-600 hover:underline underline-offset-4 ">Rooms</Link>
            <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-orange-600 hover:underline underline-offset-4 ">About</Link>
            <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-orange-600 hover:underline underline-offset-4 ">Contact</Link>
          </nav>
          <a href={whatsappLink} target="_blank" className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 hidden md:flex">Book Now</a>
        </div>
      </header>
    </>
  )
}

export default Navbar
