import React from "react";
import styles from "./TariffCard.module.css";

const TARIFF_DATA = {
  SEDAN: {
    oneWay: "Rs.14/KM",
    roundTrip: "Rs.13/KM",
    extra: "Toll, Permit & Parking",
  },
  SUV: {
    oneWay: "Rs.19/KM",
    roundTrip: "Rs.18/KM",
    extra: "Toll, Permit & Parking",
  },
  MUV: {
    oneWay: "Rs.20/KM",
    roundTrip: "Rs.18/KM",
    extra: "Toll, Permit & Parking",
  },
};

function TariffCard({ carType }) {
  const tariff = TARIFF_DATA[carType] || TARIFF_DATA["SEDAN"];
  return (
    <div className={styles.tariffCard}>
      <h4 className={styles.title}>{carType} Tariff</h4>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>One Way</td>
            <td>{tariff.oneWay}</td>
          </tr>
          <tr>
            <td>Round Trip</td>
            <td>{tariff.roundTrip}</td>
          </tr>
          <tr>
            <td>Additional Charge</td>
            <td>{tariff.extra}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TariffCard;
