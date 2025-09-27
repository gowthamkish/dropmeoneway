import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Toast,
} from "react-bootstrap";
import styles from "./Booking.module.css";
import TariffCard from "./TariffCard";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

const apiUrl = import.meta.env.VITE_API_URL;

function Booking() {
  const [tripType, setTripType] = useState("oneway");
  const [carType, setCarType] = useState("SEDAN");
  const [startDate, setStartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  const cityOptions = [
    { value: "Salem", label: "Salem" },
    { value: "Chennai", label: "Chennai" },
    { value: "Bangalore", label: "Bangalore" },
    { value: "Coimbatore", label: "Coimbatore" },
    { value: "Madurai", label: "Madurai" },
    { value: "Tirunelveli", label: "Tirunelveli" },
    { value: "Trichy", label: "Trichy" },
  ];

  const handleChangePickup = (selectedOption) => {
    setPickup(selectedOption?.value || "");
    // If drop is same as pickup, reset drop
    if (drop === selectedOption?.value) setDrop("");
  };

  const handleChangeDrop = (selectedOption) => {
    setDrop(selectedOption?.value || "");
  };

  const resetForm = () => {
    setName("");
    setMobile("");
    setPickup("");
    setDrop("");
    setStartDate(new Date());
    setCarType("SEDAN");
    setErrors({});
  }

  useEffect(() => {
    
    resetForm();

  }, [tripType]);

  return (
    <>
      <div className={styles.heroBgWrap}>
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3500}
          autohide
          style={{
            position: "fixed",
            top: 24,
            right: 24,
            zIndex: 9999,
            minWidth: 320,
            background: "#d1f7c4",
            border: "2px solid #28a745",
            boxShadow: "0 4px 16px rgba(40,167,69,0.15)",
            color: "#155724",
            opacity: showToast ? 1 : 0,
            transform: showToast ? "translateY(0)" : "translateY(-30px)",
            transition:
              "opacity 0.5s cubic-bezier(.4,0,.2,1), transform 0.5s cubic-bezier(.4,0,.2,1)",
          }}
        >
          <Toast.Header
            style={{
              background: "#28a745",
              color: "#fff",
              fontWeight: 600,
              fontSize: "1.1rem",
            }}
          >
            <span role="img" aria-label="success" style={{ marginRight: 8 }}>
              ✅
            </span>
            <strong className="me-auto">Success</strong>
          </Toast.Header>
          <Toast.Body style={{ fontSize: "1.05rem", fontWeight: 500 }}>
            Submitted successfully!
            <br />
            We will get back to you soon...
          </Toast.Body>
        </Toast>
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
              {/* <Button className={styles.callBtn} href="tel:+919876543210">
                CALL +91 9876543210
              </Button> */}
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
                <Form
                  className={styles.bookingForm}
                  noValidate
                  onSubmit={(e) => {
                    e.preventDefault();
                    const newErrors = {};
                    if (!mobile.trim()) {
                      newErrors.mobile = "Mobile number is required.";
                    } else if (!/^\d{10}$/.test(mobile.trim())) {
                      newErrors.mobile =
                        "Enter a valid 10-digit mobile number.";
                    }
                    if (!name.trim()) {
                      newErrors.name = "Name is required.";
                    }
                    if (!pickup.trim()) {
                      newErrors.pickup = "Pick-up location is required.";
                    }
                    if (!drop.trim()) {
                      newErrors.drop = "Drop-off location is required.";
                    }
                    if (!startDate || isNaN(startDate.getTime())) {
                      newErrors.date = "Pick-up date & time is required.";
                    }
                    if (!carType) {
                      newErrors.carType = "Car type is required.";
                    }
                    setErrors(newErrors);
                    if (Object.keys(newErrors).length === 0) {
                      // Prepare booking data
                      const bookingData = {
                        name,
                        mobile,
                        pickUpLocation: pickup,
                        dropOffLocation: drop,
                        pickUpDateAndTime: startDate,
                        returnDateAndTime:
                          tripType === "roundtrip" ? startDate : "",
                        carType,
                        tripType,
                      };
                      axios
                        .post(`${apiUrl}/bookings`, bookingData)
                        .then((res) => {
                          if (res.data.success) {
                            setShowToast(true);
                            // Reset form
                            resetForm();
                          } else {
                            setErrors({
                              api: "Failed to submit booking. Please try again.",
                            });
                          }
                        })
                        .catch(() => {
                          setErrors({
                            api: "Failed to submit booking. Please try again.",
                          });
                        });
                    }
                  }}
                >
                  <Row>
                    {tripType === "oneway" ? (
                      <>
                        <Col sm={6} className={styles.formCol}>
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            placeholder="Enter your Name"
                            className={styles.input}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            isInvalid={!!errors.name}
                          />
                          {errors.name && (
                            <Form.Text className="text-danger">
                              {errors.name}
                            </Form.Text>
                          )}
                        </Col>
                        <Col sm={6} className={styles.formCol}>
                          <Form.Label>Mobile number</Form.Label>
                          <InputGroup>
                            <Form.Control
                              placeholder="Mobile number"
                              className={styles.input}
                              value={mobile}
                              onChange={(e) => setMobile(e.target.value)}
                              isInvalid={!!errors.mobile}
                            />
                          </InputGroup>
                          {errors.mobile && (
                            <Form.Text className="text-danger">
                              {errors.mobile}
                            </Form.Text>
                          )}
                        </Col>
                      </>
                    ) : (
                      <>
                        <Col sm={6} className={styles.formCol}>
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            placeholder="Enter your Name"
                            className={styles.input}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            isInvalid={!!errors.name}
                          />
                          {errors.name && (
                            <Form.Text className="text-danger">
                              {errors.name}
                            </Form.Text>
                          )}
                        </Col>
                        <Col sm={6} className={styles.formCol}>
                          <Form.Label>Mobile number</Form.Label>
                          <InputGroup>
                            <Form.Control
                              placeholder="Mobile number"
                              className={styles.input}
                              value={mobile}
                              onChange={(e) => setMobile(e.target.value)}
                              isInvalid={!!errors.mobile}
                            />
                          </InputGroup>
                          {errors.mobile && (
                            <Form.Text className="text-danger">
                              {errors.mobile}
                            </Form.Text>
                          )}
                        </Col>
                      </>
                    )}
                  </Row>

                  <Row>
                    <Col sm={6} className={styles.formCol}>
                      <Form.Label>Pick-up Location</Form.Label>
                      <Select
                        options={cityOptions}
                        value={pickup ? { value: pickup, label: pickup } : null}
                        onChange={handleChangePickup}
                        placeholder="Select pick-up location"
                        isSearchable
                      />
                      {errors.pickup && (
                        <Form.Text className="text-danger">
                          {errors.pickup}
                        </Form.Text>
                      )}
                    </Col>
                    <Col sm={6} className={styles.formCol}>
                      <Form.Label>Drop-off Location</Form.Label>
                      <Select
                        options={cityOptions.filter(
                          (opt) => opt.value !== pickup
                        )}
                        value={drop ? { value: drop, label: drop } : null}
                        onChange={handleChangeDrop}
                        placeholder="Select drop-off location"
                        isSearchable
                        isDisabled={!pickup}
                      />
                      {errors.drop && (
                        <Form.Text className="text-danger">
                          {errors.drop}
                        </Form.Text>
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Form.Label>Pickup Date & Time</Form.Label>
                    <Col lg={12} md={12} sm={12} className={styles.formCol}>
                      <DatePicker
                        id={styles["date-picker"]}
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        minDate={new Date()}
                        showTimeSelect
                        dateFormat="Pp"
                        className={
                          errors.date
                            ? `${styles.input} is-invalid`
                            : styles.input
                        }
                      />
                      {errors.date && (
                        <Form.Text className="text-danger">
                          {errors.date}
                        </Form.Text>
                      )}
                    </Col>
                  </Row>

                  {tripType === "roundtrip" && (
                    <Row>
                      <Form.Label>Return Date & Time</Form.Label>
                      <Col sm={12} className={styles.formCol}>
                        <DatePicker
                          id={styles["date-picker"]}
                          selected={returnDate}
                          onChange={(date) => setReturnDate(date)}
                          minDate={new Date()}
                          showTimeSelect
                          dateFormat="Pp"
                        />
                      </Col>
                    </Row>
                  )}

                  <Row>
                    <Col sm={12} className={styles.formCol}>
                      <Form.Label>Car Type</Form.Label>
                      <Form.Select
                        aria-label="Select car type"
                        value={carType}
                        onChange={(e) =>
                          setCarType(e.target.value.toUpperCase())
                        }
                        className={styles.input}
                        isInvalid={!!errors.carType}
                      >
                        <option value="SEDAN">Sedan</option>
                        <option value="SUV">SUV</option>
                        <option value="INNOVA">Innova</option>
                        <option value="ETIOS">Etios</option>
                      </Form.Select>
                      {errors.carType && (
                        <Form.Text className="text-danger">
                          {errors.carType}
                        </Form.Text>
                      )}
                    </Col>
                  </Row>

                  {/* Tariff Card below form */}
                  <TariffCard carType={carType} />

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
