import React from 'react';
import styles from './About.module.css';
import carImage from '../../assets/banner1.jpg';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <div className={styles.imageWrapper}>
          <img src={carImage} alt="Red Car" className={styles.carImage} />
        </div>
        <div className={styles.textWrapper}>
          <h1 className={styles.aboutTitle}>About</h1>
          <h2 className={styles.welcomeTitle}>
            Welcome to DropMeOneWay - Your Trusted One Way Drop Taxi Service
          </h2>
          <p className={styles.description}>
            We Provide 24x7 One way Drop Service in Tamilnadu. DropMeOneWay is one of the best cab service in Krishnagiri, provides its services between various locations across Tamilnadu at best price. We provides safest journey in Tamil Nadu
          </p>
          <div className={styles.features}>
            <div>
              <strong>Best Drivers</strong>
              <p>
                We have drivers with more than 15 years of experience in this driving field . so that we ensure customers to have pleasant journey.
              </p>
            </div>
            <div>
              <strong>24x7 Call Support</strong>
              <p>
                We have 24x7 Customer Support. Our Support Team will assist customers if they need any kind of support
              </p>
            </div>
            <div>
              <strong>Safe and Secure</strong>
              <p>
                DropMeOneWay Taxi always provides safest and secure journey to the customers
              </p>
            </div>
            <div>
              <strong>Neat and Clean</strong>
              <p>
                We always maintain our cabs with neat and clean.So that Customers always feel hygenic through out the journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
