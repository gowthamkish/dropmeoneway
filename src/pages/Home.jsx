import React from "react";
import Header from "../components/header/Header";
import HeroBooking from "../components/booking/HeroBooking";
import PopularCities from "../components/popular-cities/PopularCities";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroBooking />
      <PopularCities />
      <br />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
