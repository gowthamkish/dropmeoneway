import React from "react";
import styles from "./Tariff.module.css";

const TariffTable = () => {
  return (
    <div className={styles.tariffContainer}>
      <table className={styles.tariffTable}>
        <thead>
          <tr>
            <th>Vehicle Type</th>
            <th>One Way</th>
            <th>Round Trip</th>
            <th>Additional Charge</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SEDAN</td>
            <td>Rs.14/ KM</td>
            <td>Rs.13 /KM</td>
            <td>Toll, Permit & Parking</td>
          </tr>
          <tr>
            <td>SUV</td>
            <td>Rs.19/ KM</td>
            <td>Rs.18 /KM</td>
            <td>Toll, Permit & Parking</td>
          </tr>
          <tr>
            <td>MUV</td>
            <td>Rs.20/ KM</td>
            <td>Rs.18 /KM</td>
            <td>Toll, Permit & Parking</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.infoSection}>
        <div className={styles.infoGrid}>
          <ul>
            <li><b>For your Information</b></li>
            <li>Maximum 4 passenger capacity for Sedan</li>
            <li>Maximum 7 passenger capacity for SUV</li>
            <li>Minimum 130km coverage for one-way trip</li>
            <li>Minimum 250km coverage for round trip</li>
            <li>One day Round trip closes by 11pm at your pickup</li>
            <li>Waiting charges Rs.150 per hour in between your trip</li>
            <li>Food break, tea break, & restroom no waiting charges</li>
            <li>Cancellation charges Rs.300 after driver arrival</li>
            <li>Luggage load in carrier Rs.300 if mentioned in quote</li>
          </ul>
          <ul>
            <li>Note down starting and ending km is a must</li>
            <li>Permit charges and Driver Bata are same as quoted</li>
            <li>Toll charges will be paid through Fastag by driver</li>
            <li>Payment transfer by online or by cash</li>
            <li>EOT calculated running km, Toll by Fastag & rest all</li>
            <li>Toll fees, interstate Permit, Hill charges, pet charges, waiting charges (if any) are extra</li>
            <li>For Bangalore minimum 300km per day in Round trip</li>
            <li>1 day means 1 calendar day (from midnight 12 to next midnight 12)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TariffTable;
