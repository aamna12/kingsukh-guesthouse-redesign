import React, { useState, useEffect } from 'react';
import one from "../assets/3.jpg";
import two from "../assets/2.jpg";
import three from "../assets/out.jpg";
import five from "../assets/2023-12-26.jpg";
import { FaMapMarkerAlt, FaWifi, FaConciergeBell, FaSuitcaseRolling, FaUserShield, FaSmile, FaChartLine } from 'react-icons/fa';

function About() {
  const images = [one, two, three, five];
  const [currImg, setCurrImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrImg((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">

        <div className="w-full md:w-1/2 relative overflow-hidden rounded-2xl shadow-lg h-[400px] md:h-[600px]">
          {images.map((image, idx) => (
            <img key={idx} src={image} alt={`Slide ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${idx === currImg ? 'opacity-100' : 'opacity-0'}`}/>
          ))}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button key={idx} className={`w-3 h-3 rounded-full ${currImg === idx ? 'bg-orange-600' : 'bg-white/60'} border border-gray-300`}
                onClick={() => setCurrImg(idx)}/>
            ))}
          </div>
        </div>


        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">The Best Holidays Start Here!</h3>
          <p className="mb-4 text-gray-600 leading-relaxed text-lg">
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath, Baranti, Susunia, and more. Experience comfort, delightful meals, and warm hospitality amid Purulia's hidden gems.
          </p>


          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-6">
            <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col items-center">
              <FaMapMarkerAlt className="text-3xl text-orange-600 mb-2" />
              <h4 className="text-xl font-bold text-gray-800 text-center">Prime Location</h4>
              <p className="text-sm text-gray-600 text-center">Near railway & airport</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col items-center">
              <FaWifi className="text-3xl text-orange-600 mb-2" />
              <h4 className="text-xl font-bold text-gray-800">Free Wi-Fi</h4>
              <p className="text-sm text-gray-600 text-center">High-speed internet</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col items-center">
              <FaConciergeBell className="text-3xl text-orange-600 mb-2" />
              <h4 className="text-xl font-bold text-gray-800">24/7 Service</h4>
              <p className="text-sm text-gray-600 text-center">Always at your service</p>
            </div>
          </div>


          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 text-center">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col items-center">
              <FaSuitcaseRolling className="text-3xl text-orange-600 mb-2" />
              <h4 className="text-xl font-bold text-gray-800">Tourist Guide Support</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col items-center">
              <FaUserShield className="text-3xl text-orange-600 mb-2" />
              <h4 className="text-xl font-bold text-gray-800">High Class Security</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col items-center">
              <FaChartLine className="text-3xl text-orange-600 mb-2" />
              <h4 className="text-xl font-bold text-gray-800">100+</h4>
              <p className="text-sm text-gray-600">Bookings Completed</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col items-center">
              <FaSmile className="text-3xl text-orange-600 mb-2" />
              <h4 className="text-xl font-bold text-gray-800">150+</h4>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>

      </div>
      <div className="mt-16 w-full p-8">
        <h4 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left">Find Us Here</h4>
        <div className="w-full h-80 md:h-[450px] rounded-lg overflow-hidden shadow">
          <iframe title="King Sukh Guest House Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.3933379808887!2d86.81654611495714!3d23.041369184944264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f720b2c95c2715%3A0x508d11bc1b19848f!2sKing%20Sukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1683317604061!5m2!1sen!2sin"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
}

export default About;
