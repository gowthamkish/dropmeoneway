import Header from "../components/header/Header";
import PopularCities from "../components/popular-cities/PopularCities";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import { Helmet } from "react-helmet-async";
import Booking from "../components/booking/Booking";
import CustomerFeedbackCarousel from "../components/feedback/CustomFeedback";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCitiesByCountryAndState } from "../store/slices/locationSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the Redux action to fetch cities
    dispatch(getCitiesByCountryAndState({ countryCode: "IN", stateCode: "TN" }));
  }, [dispatch]);
  return (
    <>
      <Helmet>
        <title>
          One Way Drop Taxi Booking | DropMe1Way - 24x7 Cab Service Tamil Nadu
        </title>
        <meta
          name="description"
          content="Book one way drop taxi in Tamil Nadu with DropMe1Way. 24x7 safe, secure, and affordable cab service. Best drivers, neat cabs, instant support. Chennai, Coimbatore, Madurai, and more."
        />
        <link rel="canonical" href="https://dropme1way.com/" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dropme1way.com/" />
        <meta
          property="og:title"
          content="One Way Drop Taxi Booking | DropMe1Way - 24x7 Cab Service Tamil Nadu"
        />
        <meta
          property="og:description"
          content="Book one way drop taxi in Tamil Nadu with DropMe1Way. Affordable cab service. Best drivers, neat cabs, instant support. Chennai, Coimbatore, Madurai, and more."
        />
        <meta
          property="og:image"
          content="https://dropme1way.com/assets/banner1.jpg"
        />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://dropme1way.com/" />
        <meta
          name="twitter:title"
          content="One Way Drop Taxi Booking | DropMe1Way - 24x7 Cab Service Tamil Nadu"
        />
        <meta
          name="twitter:description"
          content="Book one way drop taxi in Tamil Nadu with DropMe1Way. Affordable cab service. Best drivers, neat cabs, instant support. Chennai, Coimbatore, Madurai, and more."
        />
        <meta
          name="twitter:image"
          content="https://dropme1way.com/assets/banner1.jpg"
        />
        <meta
          name="google-site-verification"
          content="NikWlSxeq8KUkSAZxqVlhZwTOaiVU-WpwY-tyzZ1v8g"
        />
      </Helmet>
      <div>
        <Header />
        <Booking />
        <CustomerFeedbackCarousel />
        <PopularCities />
        <br />
        <About />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
