import "./App.css";
import Header from './components/header/Header';
import HeroBooking from "./components/booking/HeroBooking";
// import BookingForm from "./components/booking/BookingForm";
import PopularCities from "./components/popular-cities/PopularCities";
import Footer from './components/footer/Footer';
import About from "./components/about/About";


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
    </>
  );
}

export default App;
