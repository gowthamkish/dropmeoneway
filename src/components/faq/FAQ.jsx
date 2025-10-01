import React, { useState } from "react";
import { Accordion, ListGroup, Badge, Container } from "react-bootstrap";

const faqData = [
  {
    question: "How do I book a one-way drop taxi?",
    answer:
      "Simply fill out the booking form on our website with your details, pick-up and drop-off locations, date, and car type. Submit the form and our team will contact you to confirm your booking.",
  },
  {
    question: "Can I book a round trip?",
    answer:
      "Yes, you can select 'Round Trip' in the booking form and provide your return date and time. We will arrange your return journey accordingly.",
  },
  {
    question: "What types of cars are available?",
    answer:
      "We offer a range of vehicles including Sedans, SUVs, and Tempo Travellers. You can choose your preferred car type while booking.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach us via the contact form on this page, call our helpline, or use the WhatsApp button for instant support.",
  },
  {
    question: "Are there any hidden charges?",
    answer:
      "No, all charges are transparent and will be communicated to you before confirming the booking. There are no hidden fees.",
  },
  {
    question: "Can I cancel or reschedule my booking?",
    answer:
      "Yes, you can cancel or reschedule your booking by contacting our support team. Cancellation policies may apply.",
  },
];

export default function FAQ() {
  return (
    <Container>
      <section className="my-5">
        <h2 className="mb-4" style={{ color: "#6b233a", fontWeight: 700 }}>
          Frequently Asked Questions
        </h2>
        <ListGroup variant="flush" style={{ borderLeft: "4px solid #FFC700" }}>
          {faqData.map((item, idx) => (
            <ListGroup.Item
              key={idx}
              className="px-0 py-3"
              style={{
                border: "none",
                borderLeft: "4px solid #FFC700",
                position: "relative",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "white",
                    marginRight: 12,
                    marginTop: 8,
                    flexShrink: 0,
                    boxShadow: "0 0 0 3px #FFC700",
                    position: "relative",
                    left: -10,
                    top: 12,
                  }}
                />
                <Accordion defaultActiveKey={null} alwaysOpen style={{ width: "100%" }}>
                  <Accordion.Item eventKey={String(idx)}>
                    <Accordion.Header>
                      <span style={{ color: "#333", fontWeight: 600 }}>
                        {item.question}
                      </span>
                    </Accordion.Header>
                    <Accordion.Body
                      style={{ color: "#333"}}
                    >
                      {item.answer}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </section>
    </Container>
  );
}
