import React, { useEffect, useRef, useState } from "react";
import { Button, Checkbox, message, Steps, theme } from "antd";
import "./pricing.scss";

import {
  FBrokerage,
  FDispatch,
  flatbed,
  pricingBars,
} from "../../assets/Index";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ReactSVG } from "react-svg";
import { useLocation, useNavigate } from "react-router-dom";
const Pricing = () => {
  const location = useLocation();

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    truckTypeID: null,
    truckType: "",
    truckSizeID: null,
    truckSize: "",
    // truckName: "",
    // truckNameID: null,
    truckNames: [],
    truckNameIDs: [],
  });
  const [formvalues, setformvalues] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [current]);

  const secondStepData = [
    {
      id: 1,
      title: "Flatbed",
      description:
        "Our dispatch solutions for flatbed trucking cater to diverse load types, including industrial equipment and oversized structures",
      svg: flatbed,
    },
    {
      id: 2,
      title: "Reefer",
      description:
        "Reefer trucking is vital for temperature-sensitive goods, with Swift Dispatch Services leading in efficiency and reliability.",
      svg: flatbed,
    },
    {
      id: 3,
      title: "Dry Van",
      description:
        "Dry van trucking excels in hauling non-perishable goods. Our dispatchers coordinate with brokers, managing cargo details and schedules.",
      svg: flatbed,
    },
    {
      id: 4,
      title: "Box",
      description:
        "We excel in customizing our dispatch services to align with the specific requirements of each box truck carrier.",
      svg: flatbed,
    },
    {
      id: 5,
      title: "Power Only",
      description:
        "Power-only trucking pairs carriers’ semi tractors with client-supplied trailers, streamlining logistics in our dispatch focus.",
      svg: flatbed,
    },
    {
      id: 6,
      title: "Hot Shot",
      description:
        "Hotshot dispatching matches non-CDL loads with equipment preferences, ensuring secure, efficient transport with skilled coordination",
      svg: flatbed,
    },
    {
      id: 7,
      title: "Step Deck",
      description:
        "Step Deck trucks, with their two-tiered decks, transport tall cargo, serving various industries with versatility and ease.",
      svg: flatbed,
    },
    {
      id: 8,
      title: "Tanker",
      description:
        "Tankers, with their specialized design, transport bulk liquids, serving various industries with efficiency and reliability.",
      svg: flatbed,
    },
    {
      id: 9,
      title: "Tow Truck",
      description:
        "Tow trucks, with their robust design, recover and transport vehicles, serving various industries with efficiency and reliability.",
      svg: flatbed,
    },
  ];

  const zeroStepCardData = [
    {
      id: 1,
      svg: FDispatch,
      title: "Freight Dispatch",
      description: `  Our dispatch solutions for flatbed trucking cater to diverse
                load types, including industrial equipment and oversized
                structures, ensuring versatility and adaptability for truckers`,
    },
    {
      id: 2,
      svg: FBrokerage,
      title: "Freight Brokerage",
      description: `Our dispatch solutions for flatbed trucking cater to diverse load types, including industrial equipment and oversized structures, ensuring versatility and adaptability for truckers`,
    },
  ];
  const cardData = [
    { id: 1, title: "1-2" },
    { id: 2, title: "3-5" },
    { id: 3, title: "5-10" },
    { id: 4, title: "10-15" },
    { id: 5, title: "15-20" },
    { id: 6, title: "20-25" },
    { id: 7, title: "25-30" },
    { id: 8, title: "30+" },
  ];

  // const handleTruckNameSelection = (e, id) => {
  //   if (e.target.checked) {
  //     const selectedTruckName = secondStepData.find((item) => item.id === id);
  //     if (selectedTruckName) {
  //       setFormData((prev) => ({
  //         ...prev,
  //         truckNameID: id,
  //         truckName: selectedTruckName.title,
  //       }));
  //     }
  //   } else {
  //     setSelectedCheckbox(null);
  //   }
  // };

  const handleTruckNameSelection = (e, id) => {
    const selectedTruckName = secondStepData.find((item) => item.id === id);

    if (e.target.checked) {
      setFormData((prev) => ({
        ...prev,
        truckNameIDs: [...prev.truckNameIDs, id],
        truckNames: [...prev.truckNames, selectedTruckName.title],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        truckNameIDs: prev.truckNameIDs.filter((nameId) => nameId !== id),
        truckNames: prev.truckNames.filter(
          (name) => name !== selectedTruckName.title
        ),
      }));
    }
  };

  const handleTruckTypeSelection = (id) => {
    const truckTypeObject = zeroStepCardData.find((item) => item.id === id);
    if (truckTypeObject) {
      setFormData((prev) => ({
        ...prev,
        truckTypeID: id,
        truckType: truckTypeObject.title,
      }));
    }
  };

  const handleTruckSizeSelection = (id) => {
    const selectedTruckSizeObj = cardData.find((item) => item.id === id);
    if (selectedTruckSizeObj) {
      setFormData((prev) => ({
        ...prev,
        truckSizeID: id,
        truckSize: selectedTruckSizeObj.title,
      }));
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    companyName: Yup.string().required("Company name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    jobTitle: Yup.string().required("Job title is required"),
  });

  console.log("formdaata is here", formData);

  const steps = [
    {
      content: (
        <div className="zeroStepWrapper">
          <div className="zeroStepCards">
            {zeroStepCardData.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`zeroStepCard ${
                    formData.truckTypeID === item.id
                      ? "selectedZeroStepCard"
                      : ""
                  }`}
                  onClick={() => handleTruckTypeSelection(item.id)}
                >
                  <ReactSVG src={item.svg} />
                  <h2>{item.title} </h2>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      ),
    },

    {
      title: "",
      content: (
        <div className="stepCardsWrapper">
          <div className="stepCardsWrapp">
            {cardData.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`stepCard ${
                    formData.truckSizeID === item.id ? "selectedStepCard" : ""
                  }`}
                  onClick={() => handleTruckSizeSelection(item.id)}
                >
                  <ReactSVG src={pricingBars} />
                  <h2 className="mainHeading">{item.title}</h2>
                </div>
              );
            })}
          </div>
        </div>
      ),
    },
    {
      title: "",
      content: (
        <div className="secondStepWrapper">
          <div className="secondStepWrapp">
            {secondStepData.map((item) => {
              return (
                <div
                  className={`secondStepCard ${
                    formData.truckNameID === item.id
                      ? "selectedSecondStepCard"
                      : ""
                  }`}
                >
                  <Checkbox
                    className="checkbox"
                    // checked={formData.truckNameID === item.id}
                    checked={formData.truckNameIDs.includes(item.id)}
                    onChange={(e) => handleTruckNameSelection(e, item.id)}
                  />
                  <ReactSVG src={item.svg} />
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      ),
    },
    {
      content: (
        <Formik
          initialValues={{
            name: "",
            companyName: "",
            email: "",
            phoneNumber: "",
            jobTitle: "",
          }}
          validationSchema={validationSchema}
          // onSubmit={(values) => {
          //   console.log("values", values);

          //   message.success("Processing complete!");
          //   navigate("/order-complete");
          // }}

          onSubmit={async (values, { setSubmitting }) => {
            try {
              console.log("Submitting form values:", values);

              const payload = {
                ...values,
                truckName: formData.truckNames,
                truckType: formData.truckType,
                truckSize: formData.truckSize,
              };

              // Store the payload in localStorage
              localStorage.setItem("formPayload", JSON.stringify(payload));

              console.log("Payload saved to localStorage:", payload);

              // Make an API request to send the data
              // const response = await fetch(
              //   "https://your-api-endpoint.com/submit",
              //   {
              //     method: "POST",
              //     headers: {
              //       "Content-Type": "application/json",
              //     },
              //     body: JSON.stringify({
              //       ...values,
              //       truckName: formData.truckName,
              //       truckType: formData.truckType,
              //       truckSize: formData.truckSize,
              //     }),
              //   }
              // );

              // if (!response.ok) {
              //   throw new Error("Network response was not ok");
              // }

              // const data = await response.json();
              // console.log("Response from server:", data);

              message.success("Processing complete!");
              navigate("/order-complete");
            } catch (error) {
              console.error("Error submitting form:", error);
              message.error("Failed to submit form. Please try again.");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ handleSubmit }) => (
            <Form className="forthStepWrapper" onSubmit={handleSubmit}>
              <div className="forthStepWrapp">
                <div className="forthStep">
                  <div className="inputWrapper">
                    <Field
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      className="input"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="inputWrapper">
                    <Field
                      name="companyName"
                      type="text"
                      placeholder="Company Name"
                      className="input"
                    />
                    <ErrorMessage
                      name="companyName"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="inputWrapper">
                    <Field
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="input"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="inputWrapper">
                    <Field
                      name="phoneNumber"
                      type="number"
                      placeholder="Phone Number"
                      className="input"
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="inputWrapper">
                    <Field
                      name="jobTitle"
                      type="text"
                      placeholder="Job Title"
                      className="input"
                    />
                    <ErrorMessage
                      name="jobTitle"
                      component="div"
                      className="error"
                    />
                  </div>
                </div>

                <div className="mainFlex">
                  <div className="flex">
                    <h2>Truck Name:</h2>
                    {/* <p> {formData.truckName || "Tanker"}</p> */}
                    <p>
                      {formData.truckNames.length > 0
                        ? formData.truckNames.join(", ")
                        : "None"}
                    </p>
                  </div>
                  <div className="flex">
                    <h2>Truck type:</h2>
                    <p>{formData.truckType || "flatbed"}</p>
                  </div>
                  <div className="flex">
                    <h2>Truck size:</h2>
                    <p> {formData.truckSize || "3-5"}</p>
                  </div>
                </div>
              </div>

              <button type="submit" className="submitButton">
                Submit
              </button>

              {current === 3 ? (
                <Button style={{ marginLeft: "10px" }} onClick={prev}>
                  Previous
                </Button>
              ) : (
                ""
              )}
            </Form>
          )}
        </Formik>
      ),
    },
  ];

  const doneClick = () => {
    // const errors = await validateForm();
    // if (Object.keys(errors).length > 0) {
    //   message.error("Please fill in all the required fields.");
    // } else {
    //   submitForm();
    message.success("Processing complete!");
    navigate("/order-complete");
  };
  // const doneClick = async () => {
  //   console.log("clicked");
  //   if (formikRef.current) {
  //     const errors = await formikRef.current.validateForm();
  //     if (Object.keys(errors).length > 0) {
  //       message.error("Please fill in all the required fields.");
  //     } else {
  //       formikRef.current.submitForm();
  //       message.success("Processing complete!");
  //       navigate("/order-complete");
  //     }
  //   }
  // };
  const next = () => {
    if (current === 0 && !formData.truckTypeID) {
      message.error("Please select a truck type before proceeding.");
      return;
    }
    if (current === 1 && !formData.truckSizeID) {
      message.error("Please select a truck size before proceeding.");
      return;
    }

    if (current === 2 && !formData.truckNameIDs) {
      message.error("Please select a truck name before proceeding.");
      return;
    }
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    // lineHeight: "260px",
    // textAlign: "center",
    // color: token.colorTextTertiary,
    // backgroundColor: token.colorFillAlter,
    // borderRadius: token.borderRadiusLG,
    // border: `1px dashed ${token.colorBorder}`,
    // marginTop: 16,
  };
  return (
    <div className="pricingWrapper">
      <div className="pricingWrapp">
        <h1 className="mainHeading">Pricing</h1>
        <p>
          We can help you deliver and execute your future, wherever you compete,
          using the latest technologies, from strategy development to
          implementation.
        </p>
        <Steps className="stepsLine" current={current} items={items} />
        <div style={contentStyle}>{steps[current].content}</div>
        <div
          style={{
            marginTop: 24,
          }}
        >
          {current < steps.length - 1 && (
            <Button
              style={{ background: "#287094" }}
              type="primary"
              onClick={next}
            >
              Next
            </Button>
          )}

          {current > 0 && (
            <Button
              className={`${current === 3 ? "hide" : ""}`}
              style={{
                margin: "0 8px",
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
