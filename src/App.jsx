import "./App.css";
import Header from "./components/header/Header";
import HeroBooking from "./components/booking/HeroBooking";
// import BookingForm from "./components/booking/BookingForm";
import PopularCities from "./components/popular-cities/PopularCities";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <>
      <Header />
      <HeroBooking />
      {/* <BookingForm /> */}
      <PopularCities />
      <br />
      <About />
      <Footer />

      {/* Analytics & Speed Insights */}
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
