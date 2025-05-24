import React from 'react';
import { FaSpa } from "react-icons/fa";

function WellnessRecreation() {
  return (
    <>
    <div className="py-20 px-6 max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <FaSpa className="text-5xl text-orange-600 mx-auto mb-4" />
                <h1 className="text-3xl font-bold">Wellness & Recreation</h1>
                <p className="mt-2 text-gray-600">Relax, rejuvenate, and enjoy your time off with our wellness and leisure offerings designed for your comfort and well-being.</p>
              </div>
              <ul className="list-disc space-y-2 pl-6 text-gray-700">
                <li>Garden and Open Sitting Area</li>
                <li>Morning Yoga on Request</li>
                <li>Cycling & Walking Trails</li>
                <li>In-room spa/massage services (if available)</li>
                <li>Local village tours or nature walks </li>
              </ul>
            </div>
    </>

  )
}

export default WellnessRecreation
