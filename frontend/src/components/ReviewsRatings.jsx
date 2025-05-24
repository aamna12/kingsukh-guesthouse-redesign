import React from 'react';
import {Link} from "react-router";

function ReviewsRatings() {
  return (
    <>
    <div className='p-8 mx-auto'>
        <div className='bg-gray-50 p-10 rounded-xl'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-4xl text-gray-800 mb-8'>Look At What Our Guests Say </h1>
            <Link to="/contact" className="text-orange-600 text-xl font-semibold hover:underline text-right">Write Your Review →</Link>

            </div>
            <div className='grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4'>
                <div className='border-[1px] m-5 bg-white border-orange p-5 rounded-md text-center hover:shadow-md hover:shadow-orange-400'>
                    <p className='m-2'>⭐️⭐️⭐️⭐️⭐️</p>
                    <p>"Absolutely loved my stay! The rooms were clean and the staff was very helpful. Will visit again."</p>
                <span className="text-sm text-gray-500">– Riya Sharma, March 2025</span>
                </div>
                <div className='border-[1px] m-5 bg-white border-orange p-5 rounded-md text-center hover:shadow-md hover:shadow-orange-400'>
                    <p className='m-2'>⭐️⭐️⭐️⭐️</p>
                    <p>"Perfect location and peaceful environment. Great for a weekend getaway."</p>
                <span className="text-sm text-gray-500">– Aman Verma, Feb 2025</span>
                </div>
                <div className='border-[1px] m-5 bg-white border-orange p-5 rounded-md text-center hover:shadow-md hover:shadow-orange-400'>
                    <p className='m-2'>⭐️⭐️⭐️⭐️⭐️</p>
                    <p>"Good experience....Rooms are in good condition...."</p>
                <span className="text-sm text-gray-500">– Debayan Gangopadhyay, May 2024</span>
                </div>
                <div className='border-[1px] m-5 bg-white border-orange p-5 rounded-md text-center hover:shadow-md hover:shadow-orange-400'>
                    <p className='m-2'>⭐️⭐️⭐️</p>
                    <p>"Good place."</p>
                <span className="text-sm text-gray-500">– Sibaram Nandi, March 2024</span>
                </div>
                <div className='border-[1px] m-5 bg-white border-orange p-5 rounded-md text-center hover:shadow-md hover:shadow-orange-400'>
                    <p className='m-2'>⭐️⭐️⭐️⭐️⭐️</p>
                    <p>"Nice view. Good location. Good food. Nice atmosphere of hotel. Good behaviour of owner and hotel staff. It's also a budget friendly hotel."</p>
                <span className="text-sm text-gray-500">– Shudhangsu Sarkar, Feb 2024</span>
                </div>
                <div className='border-[1px] m-5 bg-white border-orange p-5 rounded-md text-center hover:shadow-md hover:shadow-orange-400'>
                    <p className='m-2'>⭐️⭐️⭐️⭐️⭐️</p>
                    <p>"Very good service</p>
                    <p>Clean room</p>
                    <p>Staff are very friendly</p>
                    <p>Tasty food</p>
                    <p>Big size room with lot of space</p>
                    <p>Perfect for a budget short trip gateway."</p>
                <span className="text-sm text-gray-500">– Nil sarkar, Feb 2024</span>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default ReviewsRatings
