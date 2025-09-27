import styles from "./ContactUs.module.css";
import { FaEnvelope, FaRunning, FaPhone, FaMapMarkerAlt, FaSearchLocation} from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactGrid}>
        <div className={styles.contactItem}>
          <div className={styles.iconCircle}>
            <FaEnvelope size={48} />
          </div>
          <h3>EMAIL</h3>
          <div className={styles.infoText}>
            <em>dropme1waytaxi@gmail.com</em>
          </div>
        </div>
        {/* <div className={styles.contactItem}>
          <div className={styles.iconCircle}>
            <FaPhone size={48} />
          </div>
          <h3>MOBILE</h3>
          <div className={styles.infoText}>
            <span>+91 9876543210</span>
            <br />
          </div>
        </div> */}
        <div className={styles.contactItem}>
          <div className={styles.iconCircle}>
            <FaSearchLocation size={48} />
          </div>
          <h3>LOCATION</h3>
          <div className={styles.infoText}>
            <em>
              Krishnagiri, Tamil Nadu, India
            </em>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
