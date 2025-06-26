import React, { useState } from 'react';
import './FaqSection.css';

const faqData = [
  {
    question: "What types of software solutions do you provide?",
    answer: "We develop ERP systems, web and mobile applications, and custom software tailored for industries like education, retail, healthcare, and logistics."
  },
  {
    question: "Can your ERP solutions be customized for our specific business needs?",
    answer: "Yes, our ERP platforms are fully modular and can be customized to match your exact workflows, roles, and reporting requirements."
  },
  {
    question: "Do you offer support and updates after the project is delivered?",
    answer: "Absolutely. We provide ongoing maintenance, feature updates, and dedicated support to ensure your system runs smoothly."
  }
];

function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section id="faq" className="faq section light-background">
      <div className="container-fluid">
        <div className="row gy-4">
          <div className="col-lg-7 d-flex flex-column justify-content-center order-2 order-lg-1">
            <div className="content px-xl-5" data-aos="fade-up" data-aos-delay={100}>
              <h3><span>Frequently Asked </span><strong>Questions</strong></h3>
              <p>Have questions about our tech services? Here are quick answers to help you understand how we work.</p>
            </div>
            <div className="faq-container px-xl-5" data-aos="fade-up" data-aos-delay={200}>
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item ${index === activeIndex ? 'faq-active' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <i className="faq-icon bi bi-question-circle" />
                  <h3>{item.question}</h3>
                  <div className="faq-content">
                    <p>{item.answer}</p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right" />
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2">
            <img src="assets/img/faq.jpg" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay={100} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
