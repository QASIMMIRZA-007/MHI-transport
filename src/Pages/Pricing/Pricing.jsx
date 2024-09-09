import React, { useState } from "react";
import { Button, Checkbox, message, Steps, theme } from "antd";
import "./pricing.scss";

import {
  FBrokerage,
  FDispatch,
  flatbed,
  pricingBars,
} from "../../assets/Index";
import { ReactSVG } from "react-svg";
const Pricing = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

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

  const onChange = (e, id) => {
    console.log(` Selected Checkbox: ${id}`);
    if (e.target.checked) {
      setSelectedCheckbox(id);
    } else {
      setSelectedCheckbox(null);
    }
  };

  const steps = [
    {
      content: (
        <div className="zeroStepWrapper">
          <div className="zeroStepCards">
            {zeroStepCardData.map((item) => {
              return (
                <div key={item.id} className="zeroStepCard">
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
                <div key={item.id} className="stepCard">
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
                <div className="secondStepCard">
                  <Checkbox
                    className="checkbox"
                    checked={selectedCheckbox === item.id}
                    onChange={(e) => onChange(e, item.id)}
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
      title: "",
      content: (
        <div className="forthStepWrapper">
          <div className="forthStepWrapp">
            <div className="forthStep">
              <input placeholder="Your Name" />
              <input placeholder="Company Name" />
              <input placeholder="Email" />
              <input placeholder="Phone Number" />
              <input placeholder="Job Title" />
            </div>
            <div className="mainFlex">
              <div className="flex">
                <h2>Truck type:</h2>
                <p>Flatbed</p>
              </div>
              <div className="flex">
                <h2>Truck size:</h2>
                <p>size 3-5</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
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
              onClick={() => next()}
            >
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              style={{ background: "#287094" }}
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button
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
