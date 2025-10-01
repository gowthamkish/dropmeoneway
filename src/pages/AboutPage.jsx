import React from "react";
import Header from "../components/header/Header";
import HeroBooking from "../components/booking/Booking";
import PopularCities from "../components/popular-cities/PopularCities";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | DropMe1Way - Trusted One Way Drop Taxi in Tamil Nadu</title>
        <meta
          name="description"
          content="Discover DropMe1Way's story, values, and commitment to safe, secure, and affordable taxi service across Tamil Nadu. Meet our experienced drivers and learn about our 24x7 customer support."
        />
        <link rel="canonical" href="https://dropme1way.com/about" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dropme1way.com/about" />
        <meta property="og:title" content="About Us | DropMe1Way - One Way Drop Taxi in Tamil Nadu" />
        <meta property="og:description" content="Discover DropMe1Way's story, values, and commitment to safe, secure, and affordable taxi service across Tamil Nadu. Meet our experienced drivers and learn about our 24x7 customer support." />
        <meta property="og:image" content="https://dropme1way.com/logo1.jpeg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://dropme1way.com/about" />
        <meta name="twitter:title" content="About Us | DropMe1Way - Trusted One Way Drop Taxi in Tamil Nadu" />
        <meta name="twitter:description" content="Discover DropMe1Way's story, values, and commitment to safe, secure, and affordable taxi service across Tamil Nadu. Meet our experienced drivers and learn about our 24x7 customer support." />
        <meta name="twitter:image" content="https://dropme1way.com/logo1.jpeg"/>
        <meta name="google-site-verification" content="NikWlSxeq8KUkSAZxqVlhZwTOaiVU-WpwY-tyzZ1v8g" />
      </Helmet>
      <div>
        <Header />
        {/* <HeroBooking /> */}
        <About />

        <PopularCities />
        <br />
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
