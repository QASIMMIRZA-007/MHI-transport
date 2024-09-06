import React, { useState } from "react";
import "./form.scss";
import { ReactSVG } from "react-svg";
import { clockVec, emailVec, phoneVector } from "../../assets/Index";
import { Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import PrimaryButton from "../../UI/PrimaryButton/PrimaryButton";
const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone Number is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };
  const contactData = [
    {
      id: 1,
      svg: phoneVector,
      description: "+1 765 390 2387",
    },
    {
      id: 2,
      svg: emailVec,
      description: "swiftsystem@gmail.com",
    },
    {
      id: 3,
      svg: clockVec,
      description: "Mon - Fri-0700-1600 Central Time",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };
  const handleSubmit = (e) => {
    console.log(formData, "object");
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSubmitting(true);
      axios
        .post("/api/contact", formData)
        .then((response) => {
          setFormData({
            firstName: "",
            phoneNumber: "",

            email: "",
            message: "",
          });
          console.log("Form submitted successfully", response);
          message.success("Form submitted successfully");
        })
        .catch((error) => {
          console.error("There was an error submitting the form", error);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <div className="formWrapper">
      <div className="formWrapp">
        <div className="mainTextBox">
          <div className="minispan">SEND A MESSAGE</div>
          <h1 className="mainHeading">Get in touch with us</h1>
          <p className="para">
            We will respond to your message as soon as possible
          </p>
          {contactData.map((item) => {
            return (
              <div key={item.id} className="miniFlex">
                <ReactSVG src={item.svg} />
                <p className="data">{item.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mainFormBox">
          <Input
            placeholder="Your Name"
            name="name"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
          <Input
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <Input
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
          <TextArea
            rows={6}
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            maxLength={500}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
      </div>
      <button className="button" onSubmit={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Form;
