import React from 'react'

function RoomCard({name, price, image, desc}) {

  const message = `Hi, I want to book a ${name} at King Sukh Guest House`;
  const whatsappLink = `https://wa.me/919007062180?text=${encodeURIComponent(message)}`;

  return (
    <>
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
        <img src={image} alt={name} className='rounded-t-lg mb-3 h-[286px] w-[383px]' />
        <h3 className='font-bold text-3xl text-gray-800 m-3'>{name}</h3>
         <p className="text-gray-600 text-sm m-3">{desc}</p>
        <p className='font-bold text-2xl text-black ml-5'>{`₹${price} / night`}</p>
        <a href={whatsappLink} target = "_blank"
      className="inline-block self-start bg-orange-500 text-white px-5 py-2 text-lg font-semibold rounded hover:bg-orange-600 transition-colors duration-300 m-5"
    >
      Book Now
    </a>
    </div>
    </>
  )
}

export default RoomCard
