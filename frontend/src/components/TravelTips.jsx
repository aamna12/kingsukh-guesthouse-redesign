import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoRestaurant } from "react-icons/io5";
import one from "../assets/muradi_lake__purulia__india_by_anuranit_ddh1om6-fullview.jpg";
import { FaCarSide } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";

function TravelTips() {
    return (
        <>
            <div className='p-8 mx-auto'>
                <div className='bg-gray-50 p-10 rounded-xl'>
                    <div className='flex justify-center flex-col' >
                        <div className='flex items-center'>
                            <h1 className='font-bold text-5xl text-gray-800 '>Explore Like a Local</h1>
                         <p className='font-bold text-3xl text-gray-800 ml-5'><FaPlane /></p>
                        </div>
                         
                    <h1 className='font-bold text-4xl text-gray-800 mb-3'>Plan Your Trip Smart </h1>
                    </div>
                   
                    <div className='flex justify-center flex-col bg-cover rounded-xl' style={{ backgroundImage: `url(${one})` }}>
                        <div style={{ backgroundColor: 'rgba(243, 244, 246, 0.35)' }}>
                            <div className='p-5 m-3 '>
                                <div className='flex items-center' >
                                    <p className='text-2xl text-red-600 m-3'><FaLocationDot /></p>
                                    <p className='text-gray-800 text-2xl font-bold'>Places to Visit Nearby</p>
                                </div>
                                <ul className="list-disc pl-6 space-y-2 ml-12">
                                    <li><strong>Baranti Lake & Dam</strong> (500m): A peaceful reservoir ideal for nature walks and sunsets.</li>
                                    <li><strong>Garpanchkot Ruins</strong> (8 km): Ancient temple ruins of Panchkot Raj, rich in history.</li>
                                    <li><strong>Joychandi Pahar</strong> (15 km): Popular trekking destination with scenic views and film history.</li>
                                    <li><strong>Susunia Hill</strong> (45 km): Known for rock climbing, fossils, and a natural spring.</li>
                                </ul>
                            </div>
                            <div className='p-3 m-3'>
                                <div className='flex items-center' >
                                    <p className='text-2xl text-blue-600 m-3'><IoRestaurant /></p>
                                    <p className='text-gray-800 text-2xl font-bold'>Must-try Restaurants</p>
                                </div>
                                <ul className="list-disc pl-6 space-y-2 ml-12">
                                    <li><strong>Spice N Bite</strong> (Raghunathpur – 8 km): Family-friendly with North Indian & Bengali dishes.</li>
                                    <li><strong>Highway Dhaba</strong> (Barhanti Road – 2 km): Rustic roadside eatery with local flavors.</li>
                                    <li><strong>Café Saffron</strong> (Asansol – 25 km): Coffee, snacks, and continental options.</li>
                                </ul>
                            </div>
                            <div className='p-3 m-3'>
                                <div className='flex items-center' >
                                    <p className='text-2xl text-yellow-500 m-3'><FaCarSide /></p>
                                    <p className='text-gray-800 text-2xl font-bold'>How to Reach Us</p>
                                </div>
                                <ul className="list-disc pl-6 space-y-2 ml-12">
                                    <li>From <strong>Asansol Railway Station</strong>: ~1 hour (30 km)</li>
                                    <li>From <strong>Raghunathpur Bus Stand</strong>: ~25 minutes (8 km)</li>
                                    <li>From <strong>Purulia Town</strong>: ~1.5 hours (40 km)</li>
                                    <li>Nearest Airport: <strong>Durgapur (Kazi Nazrul Islam Airport)</strong> ~2.5 hours (90 km)</li>
                                </ul>
                            </div>
                        </div>

                    </div>
<p className="mt-2 text-sm  text-red-600">*Pickup/drop available on request from selected locations.</p>

                </div>
            </div>
        </>
    )
}

export default TravelTips
