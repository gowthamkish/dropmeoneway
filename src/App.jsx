import "./App.css";
import Header from "./components/header/Header";
import HeroBooking from "./components/booking/HeroBooking";
// import BookingForm from "./components/booking/BookingForm";
import PopularCities from "./components/popular-cities/PopularCities";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import { Analytics } from "@vercel/analytics/next";

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
      <Analytics />
    </>
  );
}

export default App;
