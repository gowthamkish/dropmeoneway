import "./App.css";
import Header from "./components/header/Header";
import HeroBooking from "./components/booking/HeroBooking";
// import BookingForm from "./components/booking/BookingForm";
import PopularCities from "./components/popular-cities/PopularCities";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Layout from "./Layout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here as needed */}
        </Routes>
      </Router>
      {/* Analytics & Speed Insights */}
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
