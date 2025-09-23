import React from "react";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.leftContent}>
        <div className={styles.topText}>BOOK, RELAX & ENJOY</div>
        <h1 className={styles.heading}>Best Drop Taxi<br />Oneway Service</h1>
      </div>
      <div className={styles.rightImage}></div>
    </section>
  );
}

export default HeroSection;
