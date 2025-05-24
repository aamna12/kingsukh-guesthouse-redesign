import heroImg from '../assets/28Kothi-Header_credit-28Kothi.jpg';
import {Link} from "react-router";

const HeroSection = () => (
  <section id="home"
    className="h-[500px] md:h-[600px] bg-cover bg-center flex items-center justify-center text-center text-white"
    style={{ backgroundImage: `url(${heroImg})` }}
  >
    <div className="bg-white bg-opacity-50 px-6 py-10 md:px-10 md:py-16 rounded max-w-xl w-full mx-4">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight text-black">
        Your Stay.
      </h2>
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight text-black">
        Our Hospitality.
      </h2>
      <p className="text-orange-900 font-bold text-sm sm:text-base md:text-lg mb-6">
        Comfort & elegance in the heart of the city.
      </p>
      <Link to="/rooms" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="inline-block bg-black px-5 py-2.5 md:px-6 md:py-3 rounded hover:bg-orange-700 transition duration-300">
        Explore Rooms
      </Link>
    </div>
  </section>
);

export default HeroSection;
