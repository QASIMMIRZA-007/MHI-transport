import React, { useState } from "react";
import "./contact.scss";
import ContentDisplay from "../../UI/ContentDisplay/ContentDisplay";
import { contactSvg } from "../../assets/Index";
import Form from "../../Components/Forms/Form";
const Contact = () => {
  return (
    <div className="contactWrapper">
      <div className="contactWrapp">
        <ContentDisplay
          title="We're Here to Help You"
          description="We're here to assist with any questions, feedback, or support you might need. Whether you have a query, a suggestion, or require help with an issue, don't hesitate to reach out. Our team is dedicated to providing you with timely and effective responses, ensuring that your experience is smooth and satisfactory. Feel free to contact us, and we'll get back to you as quickly as possible. Your satisfaction is our priority, and we're here to make sure you have everything you need"
          svg={contactSvg}
          isSvgFirst={false}
        />
      </div>
      <div className="contactFormWrapp">
        <Form conditionShown={true} />
      </div>
    </div>
  );
};

export default Contact;
