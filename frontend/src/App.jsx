import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FooterSection from './components/FooterSection'
import About from './components/About'
import Rooms from './components/Rooms'
import Contact from './components/Contact'
import {BrowserRouter, Routes, Route} from "react-router";
import ReviewsRatings from './components/ReviewsRatings'
import TravelTips from './components/TravelTips'
import Concierge from './components/Concierge'
import BookingOptions from './components/BookingOptions'
import AirportTransfers from './components/AirportTransfers'
import WellnessRecreation from './components/WellnessRecreation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter >
    <Navbar />
    <Routes>
      <Route exact path = "/" element = {<HeroSection />} />
      <Route exact path = "/about" element = {<About />} />
      <Route exact path = "/rooms" element = {<Rooms />} />
      <Route exact path = "/contact" element = {<Contact />} />
      <Route exact path = "/reviews" element = {<ReviewsRatings />} />
      <Route exact path = "/traveltips" element = {<TravelTips />} />
      <Route exact path = "/concierge" element = {<Concierge />} />
        <Route exact path = "/booking-options" element = {<BookingOptions />} />
        <Route exact path = "/airport-transfers" element = {<AirportTransfers />} />
        <Route exact path = "/wellness-recreation" element = {<WellnessRecreation />} />
    
    </Routes>
     <FooterSection />
     </BrowserRouter>
    </>
  )
}

export default App
