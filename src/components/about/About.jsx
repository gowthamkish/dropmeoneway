import React from "react";
import styles from "./About.module.css";
import carImage from "../../assets/banner1.jpg";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <>
      <section className={styles.aboutContainer} aria-labelledby="about-title">
        <h1 id="about-title" className={styles.aboutTitle}>
          About
        </h1>
        <Container>
          <div className={styles.aboutContent}>
            <figure className={styles.imageWrapper}>
              <img src={carImage} alt="Red Car" className={styles.carImage} />
            </figure>
            <div className={styles.textWrapper}>
              <h2 className={styles.welcomeTitle}>
                Welcome to DropMe1Way - Your Trusted One Way Drop Taxi Service
              </h2>
              <p className={styles.description}>
                We Provide 24x7 One way Drop Service in Tamilnadu. DropMe1Way is
                one of the best cab service in Krishnagiri, provides its
                services between various locations across Tamilnadu at best
                price. We provides safest journey in Tamil Nadu
              </p>
              <ul className={styles.features}>
                <li>
                  <strong>Best Drivers</strong>
                  <p>
                    We have drivers with more than 15 years of experience in
                    this driving field . so that we ensure customers to have
                    pleasant journey.
                  </p>
                </li>
                <li>
                  <strong>24x7 Call Support</strong>
                  <p>
                    We have 24x7 Customer Support. Our Support Team will assist
                    customers if they need any kind of support
                  </p>
                </li>
                <li>
                  <strong>Safe and Secure</strong>
                  <p>
                    DropMe1Way Taxi always provides safest and secure journey to
                    the customers
                  </p>
                </li>
                <li>
                  <strong>Neat and Clean</strong>
                  <p>
                    We always maintain our cabs with neat and clean.So that
                    Customers always feel hygenic through out the journey
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
