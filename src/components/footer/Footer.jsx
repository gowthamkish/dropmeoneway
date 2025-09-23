import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import styles from "./Footer.module.css";
import logo from "../../assets/logo1.jpeg";

const cityColumns = [
  {
    title: "Chennai",
    routes: [
      "Chennai to Coimbatore taxi",
      "Chennai to Bangalore taxi",
      "Chennai to Kochi taxi",
      "Chennai to Madurai taxi",
      "Chennai to Salem taxi",
      "Chennai to Trichy taxi",
      "Chennai to Pondicherry taxi",
      "Chennai to Tirunelveli taxi",
      "Chennai to Neyveli taxi",
      "Chennai to Rameshwaram taxi",
    ],
  },
  {
    title: "Coimbatore",
    routes: [
      "Coimbatore to Chennai taxi",
      "Coimbatore to Bangalore taxi",
      "Coimbatore to Kochi taxi",
      "Coimbatore to Madurai taxi",
      "Coimbatore to Salem taxi",
      "Coimbatore to Trichy taxi",
      "Coimbatore to Pondicherry taxi",
      "Coimbatore to Tirunelveli taxi",
      "Coimbatore to Neyveli taxi",
      "Coimbatore to Rameshwaram taxi",
    ],
  },
  {
    title: "Bangalore",
    routes: [
      "Bangalore to Chennai taxi",
      "Bangalore to Coimbatore taxi",
      "Bangalore to Kochi taxi",
      "Bangalore to Madurai taxi",
      "Bangalore to Salem taxi",
      "Bangalore to Trichy taxi",
      "Bangalore to Pondicherry taxi",
      "Bangalore to Tirunelveli taxi",
      "Bangalore to Neyveli taxi",
      "Bangalore to Rameshwaram taxi",
    ],
  },
];

const cityColumns2 = [
  {
    title: "Tirunelveli",
    routes: [
      "Tirunelveli to Chennai taxi",
      "Tirunelveli to Bangalore taxi",
      "Tirunelveli to Thoothukudi taxi",
      "Tirunelveli to Madurai taxi",
      "Tirunelveli to Salem taxi",
      "Tirunelveli to Trichy taxi",
      "Tirunelveli to Coimbatore taxi",
      "Tirunelveli to Pondicherry taxi",
      "Tirunelveli to Neyveli taxi",
      "Tirunelveli to Rameshwaram taxi",
    ],
  },
  {
    title: "Kanyakumari",
    routes: [
      "Kanyakumari to Chennai taxi",
      "Kanyakumari to Bangalore taxi",
      "Kanyakumari to Thoothukudi taxi",
      "Kanyakumari to Madurai taxi",
      "Kanyakumari to Salem taxi",
      "Kanyakumari to Trichy taxi",
      "Kanyakumari to Pondicherry taxi",
      "Kanyakumari to Neyveli taxi",
      "Kanyakumari to Rameshwaram taxi",
    ],
  },
  {
    title: "Rameshwaram",
    routes: [
      "Rameshwaram to Chennai taxi",
      "Rameshwaram to Bangalore taxi",
      "Rameshwaram to Thoothukudi taxi",
      "Rameshwaram to Madurai taxi",
      "Rameshwaram to Salem taxi",
      "Rameshwaram to Trichy taxi",
      "Rameshwaram to Coimbatore taxi",
      "Rameshwaram to Pondicherry taxi",
      "Rameshwaram to Neyveli taxi",
      "Rameshwaram to Kanyakumari taxi",
    ],
  },
];

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Popular Routes", href: "#" },
  { label: "Cars / Tariff", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Book Now", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const outstationServices = [
  "One Way",
  "Round Trip",
  "Drop Taxi",
  "Airport Taxi",
  "Rental Taxi",
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <Container>
          <Row>
            {cityColumns.map((col) => (
              <Col md={4} sm={12} key={col.title} className={styles.cityCol}>
                <div className={styles.cityTitle}>{col.title}</div>
                <ul className={styles.cityList}>
                  {col.routes.map((route) => (
                    <li key={route}>{route}</li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>

          <Row>
            {cityColumns2.map((col) => (
              <Col md={4} sm={12} key={col.title} className={styles.cityCol}>
                <div className={styles.cityTitle}>{col.title}</div>
                <ul className={styles.cityList}>
                  {col.routes.map((route) => (
                    <li key={route}>{route}</li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className={styles.bottomSection}>
        <Container>
          <Row>
            <Col md={3} sm={12} className={styles.bottomCol}>
              <img
                src={logo}
                alt="DropMe1Way Logo"
                className={styles.logoSmall}
              />
              <div className={styles.bottomText}>
                We are providing Oneway Taxi, Outstation Taxi, and Airport Taxi.
                Hire Oneway Taxi with cheapest price right at your place. Always
                Available 24/7.
              </div>
            </Col>
            <Col md={3} sm={12} className={styles.bottomCol}>
              <div className={styles.bottomTitle}>Outstation Service</div>
              <ul className={styles.bottomList}>
                {outstationServices.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Col>
            <Col md={3} sm={12} className={styles.bottomCol}>
              <nav aria-label="Quick Links">
                <div className={styles.bottomTitle}>Quick Links</div>
                <ul className={styles.bottomList}>
                  {quickLinks.map((item) => (
                    <li key={item.label}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </Col>
            <Col md={3} sm={12} className={styles.bottomCol}>
              <div className={styles.bottomTitle}>Official Info</div>
              <address>
                <div className={styles.infoItem}>
                  <b>Location:</b>
                  <br />
                  Krishnagiri, Tamil Nadu, India.
                </div>
                <div className={styles.infoItem}>
                  <b>Email:</b>
                  <br />
                  <a href="mailto:dropmeonwaytaxi@gmail.com">dropmeonwaytaxi@gmail.com</a>
                </div>
                <div className={styles.infoItem}>
                  <b>Phone:</b>
                  <br />
                  <a href="tel:+919876543210">+91 9876543210</a>
                </div>
              </address>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.copyright}>
        © DropMeOnWay - Drop Taxi. All Rights Reserved. | Developed by GK
        Technologies
      </div>
    </footer>
  );
}

export default Footer;
