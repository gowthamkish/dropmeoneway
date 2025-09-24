import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/header/Header";
import TariffPage from "./pages/TariffPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tariff" element={<TariffPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Add more routes here as needed */}
        </Routes>
        {/* Analytics & Speed Insights */}
        <Analytics />
        <SpeedInsights />
      </Router>
    </>
  );
}

export default App;
