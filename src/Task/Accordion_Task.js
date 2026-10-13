import React, { useState } from "react";

function Accordion({ faqs = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="section" id="faq">
      <p className="eyebrow">COMMON QUESTIONS</p>
      <h2 className="section-title">Frequently Asked Questions</h2>

      <div className="accordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={faq.question}>
            <button
              className="accordion-question"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              aria-expanded={activeIndex === index}
            >
              <span>{faq.question}</span>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </button>

            {activeIndex === index && (
              <div className="accordion-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Accordion;