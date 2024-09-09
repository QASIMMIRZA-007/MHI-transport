import React from "react";
import "./FAQs.scss";
import Questions from "../../Components/Questions/Questions";
import { longQuestionData } from "../../Components/Questions/QuestionsData";
const FAQs = () => {
  return (
    <div className="FAQsWrapper">
      <div className="FAQsWrapp">
        <div className="FAQsContainer">
          <Questions
            paragraph="Find answers to common questions quickly. Browse our FAQs for helpful information and solutions."
            miniSpan=""
            title="Frequently Asked Questions"
            questionsDataProp={longQuestionData}
            marginTop="50px"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQs;
