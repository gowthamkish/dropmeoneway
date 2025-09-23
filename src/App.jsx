import "./App.css";
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
