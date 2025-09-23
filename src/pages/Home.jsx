
import React from "react";
import Header from "../components/header/Header";
import HeroBooking from "../components/booking/HeroBooking";
import PopularCities from "../components/popular-cities/PopularCities";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import { Helmet } from "react-helmet-async";


const Home = () => {
  return (
    <>
      <Helmet>
        <title>DropMe1Way - 24x7 Safe & Secure Cab Service in Tamil Nadu</title>
        <meta name="description" content="DropMe1Way provides 24x7 safe, secure, and affordable one way cab services across Tamil Nadu. Best drivers, 24x7 support, neat and clean cabs. Book your journey now!" />
        <link rel="canonical" href="https://dropmeoneway.vercel.app/" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dropmeoneway.vercel.app/" />
        <meta property="og:title" content="DropMe1Way - 24x7 Safe & Secure Cab Service in Tamil Nadu" />
        <meta property="og:description" content="24x7 one way drop taxi service in Tamil Nadu. Best drivers, safe, secure, neat and clean cabs. Book your journey now!" />
        <meta property="og:image" content="/banner1.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://dropmeoneway.vercel.app/" />
        <meta name="twitter:title" content="DropMe1Way - 24x7 Safe & Secure Cab Service in Tamil Nadu" />
        <meta name="twitter:description" content="24x7 one way drop taxi service in Tamil Nadu. Best drivers, safe, secure, neat and clean cabs. Book your journey now!" />
        <meta name="twitter:image" content="/banner1.jpg" />
        <meta name="google-site-verification" content="NikWlSxeq8KUkSAZxqVlhZwTOaiVU-WpwY-tyzZ1v8g" />
      </Helmet>
      <div>
        <Header />
        <HeroBooking />
        <PopularCities />
        <br />
        <About />
        <Footer />
      </div>
    </>
  );
};

export default Home;
