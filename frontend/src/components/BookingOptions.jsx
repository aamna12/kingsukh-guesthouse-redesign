import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";

function BookingOptions() {
  return (
    <>
     <div className="py-20 px-6 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <FaCalendarAlt className="text-5xl text-orange-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold">Flexible Booking Options</h1>
            <p className="mt-2 text-gray-600">We understand that plans change. That’s why we offer flexible booking options to give you peace of mind, with easy rescheduling and cancellation policies.</p>
          </div>
          <ul className="list-disc space-y-2 pl-6 text-gray-700">
            <li>Free cancellation up to 48 hours before check-in</li>
            <li>Pay at Property option</li>
            <li>Early Check-in / Late Checkout on request</li>
            <li>No hidden fees</li>
            <li>Group discounts for families or friends</li>
          </ul>
        </div>
    </>
  )
}

export default BookingOptions
