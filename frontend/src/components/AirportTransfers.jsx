import React from 'react';
import { MdLocalAirport } from "react-icons/md";

function AirportTransfers() {
  return (
    <>
    <div className="py-20 px-6 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <MdLocalAirport className="text-5xl text-orange-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold">Airport Transfers</h1>
            <p className="mt-2 text-gray-600">Hassle-free pickups and drop-offs to ensure a comfortable journey to and from the guest house. Safe, punctual, and affordable.</p>
          </div>
          <ul className="list-disc space-y-2 pl-6 text-gray-700">
            <li>24/7 Availability</li>
            <li>Pickup from nearby railway stations or bus stands</li>
            <li>Comfortable A/C vehicles</li>
            <li>Local driver assistance</li>
            <li>Charges (mention if free or paid)</li>
          </ul>
        </div>
    </>
  )
}

export default AirportTransfers
