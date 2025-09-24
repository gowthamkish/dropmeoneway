import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import styles from "./Booking.module.css";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

function Booking() {
  const [tripType, setTripType] = useState("oneway");
  const [carType, setCarType] = useState("SEDAN");

  return (
    <>
      <div className={styles.heroBgWrap}>
        <Container className={styles.heroContainer}>
          <Row className={styles.heroRow}>
            {/* Left: Text & Call */}
            <Col md={6} className={styles.leftCol}>
              {/* <img src={taxiImg} alt="Taxi" className={styles.taxiImg} /> */}
              <h1 className={styles.heroTitle}>One Way Drop Taxi Booking</h1>
              <h2 className={styles.heroSubtitle}>
                <span className={styles.highlightText}>DropMe1Way</span>
                <br />
                Drop Taxi - Taxi Services
              </h2>
              <div className={styles.heroDesc}>
                A Hassle-Free Journey all over Tamil Nadu, Andhra, Telangana,
                Karnataka and Kerala
              </div>
              <Button className={styles.callBtn} href="tel:+919876543210">
                CALL +91 9876543210
              </Button>
            </Col>

            {/* Right: Booking Form */}
            <Col md={6} className={styles.rightCol}>
              <div className={styles.formCard}>
                <div className={styles.tripTypeTabs}>
                  <Button
                    variant={tripType === "oneway" ? "primary" : "light"}
                    className={
                      tripType === "oneway"
                        ? styles.activeTab
                        : styles.inactiveTab
                    }
                    onClick={() => setTripType("oneway")}
                  >
                    One Way
                  </Button>
                  <Button
                    variant={tripType === "roundtrip" ? "primary" : "light"}
                    className={
                      tripType === "roundtrip"
                        ? styles.activeTab
                        : styles.inactiveTab
                    }
                    onClick={() => setTripType("roundtrip")}
                  >
                    Round Trip
                  </Button>
                </div>
                <Form className={styles.bookingForm}>
                  <Row>
                    {tripType === "oneway" ? (
                      <>
                        <Col sm={6} className={styles.formCol}>
                          <InputGroup>
                            <Form.Control
                              placeholder="Mobile number"
                              className={styles.input}
                            />
                          </InputGroup>
                        </Col>
                        <Col sm={6} className={styles.formCol}>
                          <Form.Control
                            placeholder="Enter your Name"
                            className={styles.input}
                          />
                        </Col>
                      </>
                    ) : (
                      <>
                        <Col sm={6} className={styles.formCol}>
                          <Form.Control
                            placeholder="Enter your Name"
                            className={styles.input}
                          />
                        </Col>
                        <Col sm={6} className={styles.formCol}>
                          <InputGroup>
                            <Form.Control
                              placeholder="Mobile number"
                              className={styles.input}
                            />
                          </InputGroup>
                        </Col>
                      </>
                    )}
                  </Row>

                  <Row>
                    <Col sm={6} className={styles.formCol}>
                      <Form.Control
                        placeholder="Enter pick-up location"
                        className={styles.input}
                      />
                    </Col>
                    <Col sm={6} className={styles.formCol}>
                      <Form.Control
                        placeholder="Enter Drop-off Location"
                        className={styles.input}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6} className={styles.formCol}>
                      <Form.Control
                        placeholder="Pick up Date"
                        className={styles.input}
                      />
                    </Col>
                    <Col sm={6} className={styles.formCol}>
                      <Form.Select className={styles.input}>
                        <option>Pickup Time</option>
                      </Form.Select>
                    </Col>
                  </Row>

                  {tripType === "roundtrip" && (
                    <Row>
                      <Col sm={12} className={styles.formCol}>
                        <Form.Control
                          placeholder="Return Date"
                          className={styles.input}
                        />
                      </Col>
                    </Row>
                  )}

                  <Row>
                    <Col sm={12} className={styles.formCol}>
                      <Form.Select aria-label="Default select example">
                        <option>Select car type</option>
                        <option value="sedan">Sedan</option>
                        <option value="suv">SUV</option>
                        <option value="innova">Innova</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <div className={styles.btnRow}>
                    <Button className={styles.estimateBtn} type="submit">
                      SUBMIT
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Booking;
