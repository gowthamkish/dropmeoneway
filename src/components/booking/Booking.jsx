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
  Spinner,
} from "react-bootstrap";
import styles from "./Booking.module.css";
import TariffCard from "./TariffCard";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { env } from "../../utils/envVariables";
import CustomToast from "../../common/CustomToast";
import { useSelector } from "react-redux";

const {
  baseUrl,
  apiUrl,
  whatsAppApiKey,
  whatsAppPhoneNumberId,
  whatsAppRecipientNumber,
  whatsAppBusinessAccountId,
} = env;

function Booking() {
  const [tripType, setTripType] = useState("oneway");
  const [carType, setCarType] = useState("SEDAN");
  const [pickUpDateTime, setPickupDateTime] = useState("");
  const [returnDateTime, setReturnDateTime] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState("success"); // "success" or "danger"

  const [loading, setLoading] = useState(false);
  const { cities, countryLoading, error } = useSelector(
    (state) => state.location
  );

  // Generate city options for react-select
  const cityOptions = cities.map((city) => ({
    value: city.name,
    label: city.name,
  }));

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
    setPickupDateTime("");
    setReturnDateTime("");
    setCarType("SEDAN");
    setErrors({});
  };

  const sendWhatsAppMessage = () => {
    const message = `New Booking Received:\nName: ${name}\nMobile: ${mobile}\nPick-up Location: ${pickup}\nDrop-off Location: ${drop}\nPick-up Date & Time: ${pickUpDateTime.toLocaleString()}\nCar Type: ${carType}\nTrip Type: ${tripType}`;
    const whatsappData = {
      messaging_product: "whatsapp",
      to: whatsAppRecipientNumber,
      type: "text",
      text: { body: message },
    };

    axios
      .post(
        `https://graph.facebook.com/v17.0/${whatsAppPhoneNumberId}/messages`,
        whatsappData,
        {
          headers: {
            Authorization: `Bearer ${whatsAppApiKey}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("WhatsApp message sent:", res.data);
      })
      .catch((err) => {
        console.error("Error sending WhatsApp message:", err);
      });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!mobile.trim()) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(mobile.trim())) {
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
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
    if (!pickUpDateTime || isNaN(pickUpDateTime.getTime())) {
      newErrors.date = "Pick-up date & time is required.";
    }
    if (!carType) {
      newErrors.carType = "Car type is required.";
    }

    // ✅ Validate return date & time for roundtrip
    if (tripType === "roundtrip") {
      if (!returnDateTime || isNaN(returnDateTime.getTime())) {
        newErrors.returnDateTime =
          "Return date & time is required for round trip.";
      } else if (pickUpDateTime && returnDateTime <= pickUpDateTime) {
        newErrors.returnDateTime =
          "Return date & time must be after pick-up date & time.";
      }
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setLoading(true); // Show spinner
      // Prepare booking data
      const bookingData = {
        name,
        mobile,
        pickUpLocation: pickup,
        dropOffLocation: drop,
        pickUpDateAndTime: pickUpDateTime,
        returnDateAndTime: tripType === "roundtrip" ? returnDateTime : "",
        carType,
        tripType,
      };
      axios
        .post(`${apiUrl}/api/bookings`, bookingData)
        .then((res) => {
          if (res.data.success) {
            setToastMessage(
              "Submitted successfully!\nWe will get back to you soon..."
            );
            setToastVariant("success");
            setShowToast(true);

            // sendWhatsAppMessage();

            // Reset form
            resetForm();
          } else {
            setToastMessage("Failed to submit booking. Please try again.");
            setToastVariant("danger");
            setShowToast(true);
          }
        })
        .catch(() => {
          setToastMessage("Failed to submit booking. Please try again.");
          setToastVariant("danger");
          setShowToast(true);
        })
        .finally(() => {
          setLoading(false); // Hide spinner
        });
    }
  };

  useEffect(() => {
    resetForm();
  }, [tripType]);

  return (
    <>
      <div className={styles.heroBgWrap}>
        <CustomToast
          setShowToast={setShowToast}
          showToast={showToast}
          toastMessage={toastMessage}
          toastVariant={toastVariant}
        />

        <Container className={styles.heroContainer}>
          <Row className={styles.heroRow}>
            {/* Left: Text & Call */}
            <Col md={6} className={styles.leftCol}>
              {/* <img src={taxiImg} alt="Taxi" className={styles.taxiImg} /> */}
              <h1 className={styles.heroTitle}>Your Journey, Your Way</h1>
              <h2 className={styles.heroSubtitle}>
                <span className={styles.highlightText}>
                  Hassle-free rides for one-way, round-trip & airport transfers.
                </span>
                <br />
                On time. Comfortable. Transparent pricing.
              </h2>
              <div className={styles.heroDesc}>
                <div>✅ Door-to-door service</div>
                <div>✅ Clean, well-maintained cars</div>
                <div>✅ Trusted, professional drivers</div>
                <div>✅ 24/7 customer support</div>
                <div>✅ Transparent pricing</div>
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
                  onSubmit={(e) => handleFormSubmit(e)}
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
                              maxLength={10}
                              onChange={(e) => {
                                // Allow only digits, max 10 characters
                                const val = e.target.value
                                  .replace(/\D/g, "")
                                  .slice(0, 10);
                                setMobile(val);
                              }}
                              isInvalid={!!errors.mobile}
                              inputMode="numeric"
                              pattern="\d*"
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
                              maxLength={10}
                              onChange={(e) => {
                                // Allow only digits, max 10 characters
                                const val = e.target.value
                                  .replace(/\D/g, "")
                                  .slice(0, 10);
                                setMobile(val);
                              }}
                              isInvalid={!!errors.mobile}
                              inputMode="numeric"
                              pattern="\d*"
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
                        placeholderText="Select pick-up date & time"
                        autoComplete="off"
                        selected={pickUpDateTime}
                        onChange={(date) => setPickupDateTime(date)}
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
                          placeholderText="Select return date & time"
                          autoComplete="off"
                          selected={returnDateTime}
                          onChange={(date) => setReturnDateTime(date)}
                          minDate={new Date()}
                          showTimeSelect
                          dateFormat="Pp"
                          className={
                            errors.date
                              ? `${styles.input} is-invalid`
                              : styles.input
                          }
                        />

                        {errors.returnDateTime && (
                          <Form.Text className="text-danger">
                            {errors.returnDateTime}
                          </Form.Text>
                        )}
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
                        <option value="MUV">MUV</option>
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
                    <Button
                      className={styles.estimateBtn}
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Spinner
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            className="me-2"
                          />
                          Submitting...
                        </>
                      ) : (
                        "SUBMIT"
                      )}
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
