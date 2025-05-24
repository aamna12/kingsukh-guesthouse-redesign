import React from 'react';
import RoomCard from './RoomCard';
import one from "../assets/small.jpg";
import two from "../assets/large.jpg";
import three from "../assets/recep.jpg";

function Rooms() {

    const rooms = [{
        name: "Cozy Haven Room",
        price: 1000,
        image: one,
        desc: "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation."
    },
    {
        name: "Spacious Serenity Suite",
        price: 1600,
        image: two,
        desc: "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance."
    },
{
    name: "Closure Room",
    price: 1780,
    image: three,
    desc: "Unwind in comfort with elegant décor, soft lighting, and all the modern conveniences you need for a relaxing stay"
}];

    return (
        <>
            <div className="max-w-7xl mx-auto text-left m-10 bg-orange-100 p-5 rounded-lg">
                <h3 className='font-bold text-6xl '>The Most Memorable</h3>
                <h3 className='font-bold text-6xl mb-12'>Rest Time Starts Here.</h3>
                <div className='justify-center items-center grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {rooms.map((room, ind) => {
                        return (<RoomCard key={ind} name={room.name} price={room.price} image={room.image} desc={room.desc} />
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Rooms
