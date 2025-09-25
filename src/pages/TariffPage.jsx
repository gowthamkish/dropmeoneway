import React from "react";
import TariffTable from "../components/tariff/TariffTable";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Helmet } from "react-helmet-async";

const TariffPage = () => {
  return (
    <>
      <Helmet>
        <title>Taxi Tariff & Pricing | DropMe1Way - Affordable One Way & Round Trip Cabs</title>
        <meta
          name="description"
          content="Check our transparent taxi tariff for Sedan, SUV, Innova. One way and round trip cab rates, extra charges, and important travel info. Book your safe ride in Tamil Nadu now!"
        />
        <link rel="canonical" href="https://dropme1way.com/tariff" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dropme1way.com/tariff" />
        <meta
          property="og:title"
          content="Taxi Tariff & Pricing | DropMe1Way - Affordable One Way & Round Trip Cabs"
        />
        <meta
          property="og:description"
          content="Check our transparent taxi tariff for Sedan, SUV, Innova. One way and round trip cab rates, extra charges, and important travel info. Book your safe ride in Tamil Nadu now!"
        />
        <meta property="og:image" content="/banner1.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://dropme1way.com/tariff" />
        <meta
          name="twitter:title"
          content="Taxi Tariff & Pricing | DropMe1Way - Affordable One Way & Round Trip Cabs"
        />
        <meta
          name="twitter:description"
          content="Check our transparent taxi tariff for Sedan, SUV, Innova. One way and round trip cab rates, extra charges, and important travel info. Book your safe ride in Tamil Nadu now!"
        />
        <meta name="twitter:image" content="/banner1.jpg" />
        <meta
          name="google-site-verification"
          content="NikWlSxeq8KUkSAZxqVlhZwTOaiVU-WpwY-tyzZ1v8g"
        />
      </Helmet>
      <Header />
      <TariffTable />
      <Footer />
    </>
  );
};

export default TariffPage;
