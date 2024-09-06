import React from "react";
import "./services.scss";
import { ReactSVG } from "react-svg";
import {
  dispatcherImg,
  FBrokerage,
  FDispatch,
  lineVector,
} from "../../assets/Index";
import { Divider } from "antd";

const Services = () => {
  const cardData = [
    {
      svg: FDispatch,
      heading: "Freight Dispatch",
      description: "As the best truck dispatching service in the business.",
    },
    {
      svg: FBrokerage,
      heading: "Freight Brokerage",
      description: "As the best truck dispatching service in the business.",
    },
  ];
  return (
    <div className="servicesWrapper">
      <div className="servicesWrapp">
        <div className="minispan">OUR SERVICES</div>
        <h1>Safe & Reliable Truck Dispatching Solution</h1>
        <div className="cardWrapper">
          {cardData.map((item, index) => {
            return (
              <div key={index} className="card">
                <ReactSVG src={item.svg} />
                <Divider
                  type="vertical"
                  style={{
                    borderColor: "#E6E6E6",
                    height: "70px",
                    borderWidth: "3px",
                  }}
                />
                <div>
                  <h2>{item.heading}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="dispatcherWrapper">
          <div className="dispatcherTextWrapper">
            <div className="minispan">WHY SWIFT? </div>
            <h1>The Strategic Importance of Hiring a Dispatcher</h1>
            <p>
              Transportation and logistics companies are the backbone of the
              global economy, ensuring the smooth transit of goods across
              various sectors. Within this complex ecosystem, dispatchers play a
              pivotal role, streamlining operations and enhancing efficiency.
              Here’s why hiring a dispatcher is a crucial decision for
              businesses looking to thrive in this competitive landscape
            </p>
          </div>
          <div className="dispatcherImgWrapper">
            <ReactSVG src={dispatcherImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
