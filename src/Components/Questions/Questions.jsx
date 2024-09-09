import { useState } from "react";
import "./questions.scss";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ReactSVG } from "react-svg";
import { Vector } from "../../assets/Index";
import { questionsData } from "./QuestionsData";

function Questions({
  title = "Get Answers to Your Questions",
  questionsDataProp = questionsData,
  miniSpan = "FAQs",
  paragraph,
  marginTop = `100px`,
}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="faq-section">
        <div className="faq-container" style={{ marginTop }}>
          <div className="minispan">{miniSpan}</div>
          <div className="faq-header">
            <h1>{title}</h1>
            <p>{paragraph}</p>
          </div>

          {questionsDataProp.map((item, index) => (
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
