import React from "react";
import Card from "../../UI/Card/Card";
import { eye, Reliability, synergy } from "../../assets/Index";
import "./cardRow.scss";

const CardRow = () => {
  const propsItems = [
    {
      id: 1,
      svg: synergy,
      title: "Synergy ",
      description:
        "At MHI Transport Dispatch Services, we are committed to being the best truck dispatching service in the industry. We firmly believe in harnessing our collective resources and expertise to generate unparalleled levels of efficacy, value, and performance for our esteemed clients. Your success is our mission.",
    },
    {
      id: 2,
      svg: eye,
      title: "Transparency ",
      description:
        "As the best truck dispatching service in the business, our commitment to our clients goes beyond just efficiency. We prioritize transparent communication, ensuring our clients are informed about the load being hauled and freight details at every step of the journey. Your peace of mind is our top priority.",
    },
    {
      id: 3,
      svg: Reliability,
      title: "Reliability ",
      description:
        "We deeply value the trust that our clients place in us, and we are committed to operating with the utmost integrity. Our mission is to provide the most dependable and efficient truck dispatch service across the United Arab Emirates, ensuring that our clients can always count on us to deliver exceptional results",
    },
  ];
  return (
    <div className="cardRowWrapper">
      <div className="cardRowWrapp">
        {propsItems.map((item) => {
          return (
            <Card
              height="300px"
              key={item.id}
              svg={item.svg}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardRow;
