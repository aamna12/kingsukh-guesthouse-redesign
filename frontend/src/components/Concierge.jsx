import { FaConciergeBell } from 'react-icons/fa';

const Concierge = () => {
  return (
    <div className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <FaConciergeBell className="text-5xl text-orange-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold">Concierge Assistance</h1>
        <p className="mt-2 text-gray-600">Here to make your stay effortless and enjoyable.</p>
      </div>
      <ul className="list-disc space-y-2 pl-6 text-gray-700">
        <li>Local tour and experience bookings</li>
        <li>Restaurant reservations & local tips</li>
        <li>Personalized itineraries for your trip</li>
        <li>Emergency and medical assistance</li>
      </ul>
    </div>
  );
};

export default Concierge;
