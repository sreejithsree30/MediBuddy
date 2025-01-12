import React, { useState } from "react";
import "./index.css";

const FAQ= () => {
  const faqs = [
    {
      id: 1,
      question: "Is getting lab test done, safe and secure?",
      answer:
        "Lorem ipsum lorem ipsum lorato lorem ipsum Lorem ipsum lorem ipsum lorato lorem ipsum rem ipsum lorem ipsum lorato lorem ipsum lorem ipsum lorem ipsum lorato lorem.",
    },
    {
      id: 2,
      question: "What is home sample collection?",
      answer:
        "Home sample collection allows you to get tested from the comfort of your home. A certified professional will visit your home to collect the sample.",
    },
    {
      id: 3,
      question: "What are the benefits of book my test online?",
      answer:
        "Booking your test online is convenient, saves time, and provides access to discounts and offers.",
    },
    {
      id: 4,
      question: "How to prepare for Lab Test/Health Checkup?",
      answer:
        "Preparation instructions may vary based on the test. Some tests require fasting, while others don’t. Follow the guidelines provided at the time of booking.",
    },
    {
      id: 5,
      question: "How to use my wallet to book Lab Test/HealthCheckup?",
      answer:
        "You can use your wallet balance during checkout. Select 'Use Wallet' as the payment option to redeem your balance.",
    },
  ];

  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-header">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className={`faq-item ${activeId === faq.id ? "active" : ""}`}
          >
            <div
              className="faq-question"
              onClick={() => toggleFAQ(faq.id)}
            >
              <p>{faq.question}</p>
              <span className="faq-icon">
                {activeId === faq.id ? "−" : "+"}
              </span>
            </div>
            {activeId === faq.id && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
