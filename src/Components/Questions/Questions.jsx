import { useState } from "react";
import "./questions.scss";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ReactSVG } from "react-svg";
import { Vector } from "../../assets/Index";

function Questions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questionsData = [
    {
      question: "What service  dose Swift Dispatch Service provide?",
      answer: `As a leading Truck Dispatch company, Swift Dispatch Services offers comprehensive Dispatching Services, specializing in Freight Dispatching for various truck types across the USA`,
    },
    {
      question: "What types of trucks does Swift Dispatch Services dispatch?",
      answer: `As a leading Truck Dispatch company, Swift Dispatch Services offers comprehensive Dispatching Services, specializing in Freight Dispatching for various truck types across the USA`,
    },
    {
      question:
        "How does Swift Dispatch Services ensure cost-effectiveness for its clients",
      answer: `As a leading Truck Dispatch company, Swift Dispatch Services offers comprehensive Dispatching Services, specializing in Freight Dispatching for various truck types across the USA`,
    },
    {
      question: "How can I get started with Techify services?",
      answer: `As a leading Truck Dispatch company, Swift Dispatch Services offers comprehensive Dispatching Services, specializing in Freight Dispatching for various truck types across the USA`,
    },
    {
      question:
        "How does Swift Dispatch Services ensure cost-effectiveness for its clients",
      answer: `As a leading Truck Dispatch company, Swift Dispatch Services offers comprehensive Dispatching Services, specializing in Freight Dispatching for various truck types across the USA`,
    },
  ];

  return (
    <>
      <div className="faq-section">
        <div className="faq-container">
          <div className="minispan">FAQs</div>
          <div className="faq-header">
            <h1>Get Answers to Your Questions</h1>
          </div>

          {questionsData.map((item, index) => (
            <div key={index} className="map-container">
              <div className="question-txt-btn">
                <div>
                  <ReactSVG src={Vector} />
                  <p
                    onClick={() => toggleDropdown(index)}
                    className="question-text"
                  >
                    {item.question}
                  </p>
                </div>
                <button
                  className={`icon-button ${openIndex === index ? "open" : ""}`}
                  onClick={() => toggleDropdown(index)}
                >
                  {openIndex === index ? (
                    <IoIosArrowUp className="minus" />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </button>
              </div>
              {openIndex === index && (
                <div className="dropdown">
                  <p className="dropdown-text">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Questions;
