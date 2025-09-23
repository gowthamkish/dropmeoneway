import chennaiImg from "../../assets/city-chennai.jpg";
import coimbatoreImg from "../../assets/city-coimbatore.jpg";
import maduraiImg from "../../assets/city-madurai.jpg";
import salemImg from "../../assets/city-salem.jpg";
import trichyImg from "../../assets/city-trichy.jpg";
import pondicherryImg from "../../assets/city-pondicherry.jpg";
import velloreImg from "../../assets/city-vellore.jpg";
import tanjoreImg from "../../assets/city-tanjore.jpg";
import styles from "./PopularCities.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const cities = [
  {
    name: "Chennai",
    subtitle: "Drop Taxi",
    image: chennaiImg,
  },
  {
    name: "Coimbatore",
    subtitle: "Drop Taxi",
    image: coimbatoreImg,
  },
  {
    name: "Madurai",
    subtitle: "Drop Taxi",
    image: maduraiImg,
  },
  {
    name: "Salem",
    subtitle: "Drop Taxi",
    image: salemImg,
  },
  {
    name: "Trichy",
    subtitle: "Drop Taxi",
    image: trichyImg,
  },
  {
    name: "Pondicherry",
    subtitle: "Drop Taxi",
    image: pondicherryImg,
  },
  {
    name: "Vellore",
    subtitle: "Drop Taxi",
    image: velloreImg,
  },
  {
    name: "Thanjavur",
    subtitle: "Drop Taxi",
    image: tanjoreImg,
  },
];

function PopularCities() {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.heading}>Popular cities</h2>
        <Row className={styles.cardGrid}>
          {cities.map((city, idx) => (
            <Col
              key={city.name}
              md={3}
              sm={6}
              xs={12}
              className={styles.cardCol}
            >
              <Card className={styles.cityCard}>
                <Card.Img
                  src={city.image}
                  alt={city.name}
                  className={styles.cardImg}
                />
                <Card.ImgOverlay className={styles.overlay}>
                  <div className={styles.cardTop}>OUTSTATION CABS</div>
                  <div className={styles.cardBottom}>
                    <div className={styles.cityName}>{city.name}</div>
                    <div className={styles.citySubtitle}>{city.subtitle}</div>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
        <div className={styles.centerBtnWrap}>
          <Button className={styles.viewMoreBtn}>View More</Button>
        </div>
      </Container>
    </section>
  );
}

export default PopularCities;
