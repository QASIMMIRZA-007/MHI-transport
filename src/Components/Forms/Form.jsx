// import React, { useState } from "react";
// import "./form.scss";
// import { ReactSVG } from "react-svg";
// import { clockVec, emailVec, phoneVector } from "../../assets/Index";
// import { Checkbox, Input, message } from "antd";
// import TextArea from "antd/es/input/TextArea";
// import PrimaryButton from "../../UI/PrimaryButton/PrimaryButton";
// const Form = ({ conditionShown }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     phoneNumber: "",
//     email: "",
//     message: "",
//   });

//   console.log(formData, "formDataState");

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.firstName) newErrors.firstName = "First Name is required";
//     if (!formData.phoneNumber)
//       newErrors.phoneNumber = "Phone Number is required";
//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid";
//     }
//     if (!formData.message) newErrors.message = "Message is required";
//     return newErrors;
//   };
//   const contactData = [
//     {
//       id: 1,
//       svg: phoneVector,
//       description: "+1 765 390 2387",
//     },
//     {
//       id: 2,
//       svg: emailVec,
//       description: "swiftsystem@gmail.com",
//     },
//     {
//       id: 3,
//       svg: clockVec,
//       description: "Mon - Fri-0700-1600 Central Time",
//     },
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//     setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
//   };
//   const handleSubmit = (e) => {
//     console.log(formData, "object");
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       setErrors({});
//       setIsSubmitting(true);
//       axios
//         .post("/api/contact", formData)
//         .then((response) => {
//           setFormData({
//             firstName: "",
//             phoneNumber: "",

//             email: "",
//             message: "",
//           });
//           console.log("Form submitted successfully", response);
//           message.success("Form submitted successfully");
//         })
//         .catch((error) => {
//           console.error("There was an error submitting the form", error);
//         })
//         .finally(() => {
//           setIsSubmitting(false);
//         });
//     }
//   };

//   const handleCheckBoxChange = (e) => {
//     console.log(`checked = ${e.target.checked}`);
//   };

//   return (
//     <div className="formWrapper">
//       <div className="formWrapp">
//         <div className="mainTextBox">
//           <div className="minispan">SEND A MESSAGE</div>
//           <h1 className="mainHeading">Get in touch with us</h1>
//           <p className="para">
//             We will respond to your message as soon as possible
//           </p>
//           {contactData.map((item) => {
//             return (
//               <div key={item.id} className="miniFlex">
//                 <ReactSVG src={item.svg} />
//                 <p className="data">{item.description}</p>
//               </div>
//             );
//           })}
//         </div>
//         <div className="mainFormBox">
//           <Input
//             placeholder="Your Name"
//             name="name"
//             value={formData.firstName}
//             onChange={handleChange}
//           />
//           {errors.firstName && <p className="error">{errors.firstName}</p>}
//           <Input
//             placeholder="Email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {errors.email && <p className="error">{errors.email}</p>}

//           <Input
//             placeholder="Phone Number"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//           />
//           {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
//           <TextArea
//             rows={6}
//             placeholder="Message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             maxLength={500}
//           />
//           {errors.message && <p className="error">{errors.message}</p>}
//           {conditionShown && (
//             <div className="conditionsWrapper">
//               <p>
//                 By checking the box, you are providing your express consent for{" "}
//                 <b>  SWIFT DISPATCH SERVICES </b> to send you communications,
//                 including but not limited to text messages and email, to the
//                 contact details you have provided. These communications may
//                 include updates, promotional offers, and other information
//                 related to our products or services
//               </p>
//               <div className="flex">
//                 <Checkbox onChange={handleCheckBoxChange} />
//                 <p>
//                   <b>
//                     Yes, I agree to receive emails from SWIFT DISPATCH SERVICES.
//                   </b>
//                 </p>
//               </div>
//               <p>
//                 By providing your phone number, you consent to receive SMS
//                 messages from <b> SWIFT DISPATCH SERVICES </b>  and its
//                 employees for informational and marketing purposes. Message
//                 frequency may vary. Standard message and data rates may apply.
//                 Reply
//                 <b> "STOP" </b> to unsubscribe
//               </p>
//               <div className="flex">
//                 <Checkbox onChange={handleCheckBoxChange} />
//                 <p>
//                   <b>
//                     Yes, I agree to receive text messages from SWIFT DISPATCH
//                     SERVICES.
//                   </b>
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <button className="button" onSubmit={handleSubmit}>
//         Submit
//       </button>
//     </div>
//   );
// };

// export default Form;

import React, { useState } from "react";
import "./form.scss";
import { ReactSVG } from "react-svg";
import { clockVec, emailVec, phoneVector } from "../../assets/Index";
import { Checkbox, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import PrimaryButton from "../../UI/PrimaryButton/PrimaryButton";
import axios from "axios";

const Form = ({ conditionShown }) => {
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
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSubmitting(true);
      axios.post("/api/contact", formData);
      console
        .log("object", formData)
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

  const handleCheckBoxChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
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
          {contactData.map((item) => (
            <div key={item.id} className="miniFlex">
              <ReactSVG src={item.svg} />
              <p className="data">{item.description}</p>
            </div>
          ))}
        </div>

        <form className="mainFormBox" onSubmit={handleSubmit}>
          <div className="fieldWrapper">
            <Input
              placeholder="Your Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <div className="fieldWrapper">
            <Input
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="fieldWrapper">
            <Input
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <p className="error">{errors.phoneNumber}</p>
            )}
          </div>
          <div className="fieldWrapper">
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
          {conditionShown && (
            <div className="conditionsWrapper">
              <p>
                By checking the box, you are providing your express consent for
                <b>  SWIFT DISPATCH SERVICES </b> to send you communications...
              </p>
              <div className="flex">
                <Checkbox onChange={handleCheckBoxChange} />
                <p>
                  <b>
                    Yes, I agree to receive emails from SWIFT DISPATCH SERVICES.
                  </b>
                </p>
              </div>
              <p>
                By providing your phone number, you consent to receive SMS
                messages...
              </p>
              <div className="flex">
                <Checkbox onChange={handleCheckBoxChange} />
                <p>
                  <b>
                    Yes, I agree to receive text messages from SWIFT DISPATCH
                    SERVICES.
                  </b>
                </p>
              </div>
            </div>
          )}
          <div className="buttonWrapper">
            <button className="button" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
