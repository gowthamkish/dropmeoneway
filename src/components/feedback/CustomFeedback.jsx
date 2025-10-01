import React from "react";
import { Carousel, Container } from "react-bootstrap";

const feedbacks = [
  {
    name: "Arun Kumar",
    feedback:
      "Excellent service! The driver was punctual and the car was very clean. Highly recommended for one-way trips.",
    city: "Chennai",
  },
  {
    name: "Priya S.",
    feedback:
      "Booking was easy and transparent. The support team was very responsive. Will use again!",
    city: "Salem",
  },
  {
    name: "Rahul M.",
    feedback:
      "Affordable pricing and professional drivers. My family felt safe and comfortable throughout the journey.",
    city: "Coimbatore",
  },
  {
    name: "Meena R.",
    feedback:
      "Loved the door-to-door service. The car arrived on time and the ride was smooth.",
    city: "Bangalore",
  },
];

export default function CustomerFeedbackCarousel() {
  return (
    <Container className="my-5">
      <h3
        className="mb-4"
        style={{ color: "#6b233a", fontWeight: 700, textAlign: "center" }}
      >
        What Our Customers Say
      </h3>
      <Carousel indicators={false} interval={5000} pause="hover">
        {feedbacks.map((item, idx) => (
          <Carousel.Item key={idx}>
            <div
              style={{
                background: "#fffbe6",
                borderRadius: "16px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                padding: "2rem",
                maxWidth: 600,
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "1.2rem", color: "#333" }}>
                "{item.feedback}"
              </p>
              <div
                style={{ marginTop: "1rem", fontWeight: 600, color: "#6b233a" }}
              >
                {item.name}
              </div>
              <div style={{ color: "#FFC700", fontWeight: 500 }}>
                {item.city}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
