import React from "react";
import ContactUs from "../components/contact/ContactUs";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | DropMe1Way - 24x7 Taxi Booking & Support Tamil Nadu</title>
        <meta
          name="description"
          content="Contact DropMe1Way for 24x7 taxi booking, customer support, and office location in Tamil Nadu. Call us or visit our office for safe, secure, and affordable cab service."
        />
        <link rel="canonical" href="https://dropmeoneway.vercel.app/contact" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dropmeoneway.vercel.app/contact" />
        <meta property="og:title" content="Contact Us | DropMe1Way - 24x7 Taxi Booking & Support Tamil Nadu" />
        <meta property="og:description" content="Contact DropMe1Way for 24x7 taxi booking, customer support, and office location in Tamil Nadu. Call us or visit our office for safe, secure, and affordable cab service." />
        <meta property="og:image" content="/banner1.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://dropmeoneway.vercel.app/contact" />
        <meta name="twitter:title" content="Contact Us | DropMe1Way - 24x7 Taxi Booking & Support Tamil Nadu" />
        <meta name="twitter:description" content="Contact DropMe1Way for 24x7 taxi booking, customer support, and office location in Tamil Nadu. Call us or visit our office for safe, secure, and affordable cab service." />
        <meta name="twitter:image" content="/banner1.jpg" />
        <meta name="google-site-verification" content="NikWlSxeq8KUkSAZxqVlhZwTOaiVU-WpwY-tyzZ1v8g" />
      </Helmet>
      <Header />
      <ContactUs />
      <Footer />
    </>
  );
};

export default ContactPage;
