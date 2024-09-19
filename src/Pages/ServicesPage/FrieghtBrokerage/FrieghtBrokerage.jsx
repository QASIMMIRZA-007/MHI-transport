import React from "react";
import "./FrieghtBrokerage.scss";
import ContentDisplay from "../../../UI/ContentDisplay/ContentDisplay";
import {
  frieghtBrokerage,
  svg1,
  svg2,
  svg3,
  svg4,
  svg5,
  svg6,
  svg7,
  svg8,
} from "../../../assets/Index";
import { ReactSVG } from "react-svg";

const FrieghtBrokerage = () => {
  const cardData = [
    {
      id: 1,
      svg: svg1,
      title: "Dedicated Fleet Solutions",
      para: "Protect yourself from market volatility with GlobalTranz’s pop-up dedicated fleet logistics.",
    },
    {
      id: 2,
      svg: svg2,
      title: "Expedited Shipping",
      para: "Strategic shipping solutions for your high-value, time-critical freight.",
    },
    {
      id: 3,
      svg: svg3,
      title: "Final Mile Delivery",
      para: "Streamline your final mile Logistics and drive customer satisfaction.",
    },
    {
      id: 4,
      svg: svg4,
      title: "Intermodal Transportation",
      para: "Door-to-door convenience of truckload shipping with the long-haul economy of intermodal rail..",
    },
    {
      id: 5,
      svg: svg5,
      title: "Managed Transportation",
      para: "A trusted partner for full-service managed transportation services.",
    },
    {
      id: 6,
      svg: svg6,
      title: "Less-Than-Truckload",
      para: "Get more from your LTL shipping with reliable options and complete shipment visibility.",
    },
    {
      id: 7,
      svg: svg7,
      title: "Truck Load",
      para: "Great truckload rates backed by excellent service to drive your business forward.",
    },
    {
      id: 8,
      svg: svg8,
      title: "Industry Solutions",
      para: "Cutting-edge logistics solutions designed for the specific challenges of your industry.",
    },
  ];
  return (
    <div className="frieghtBrokerageWrapper">
      <div className="frieghtBrokerageWrapp">
        <ContentDisplay
          isSvgFirst={false}
          svg={frieghtBrokerage}
          title="Freight Brokerage"
          description="Freight brokerage is a service that connects shippers needing to transport goods with carriers who have the capacity to move those goods. Brokers manage the logistics of shipping, including negotiating rates, coordinating schedules, and handling paperwork. They aim to streamline the shipping process, ensuring that shipments are delivered efficiently and cost-effectively. By leveraging their network of carriers and industry knowledge, freight brokers help shippers avoid the complexities of finding and managing carriers themselves, while also helping carriers find consistent loads and optimize their routes."
        />
      </div>
      <div className="solutionsWrapper">
        <div className="solutionsWrapp">
          <h1 className="mainHeading">Our Logistics Solutions</h1>
          <p className="para">
            Swift is more than a third-party logistics (3PL) company. We’re a
            strategic partner with a full-suite of best-in-class transportation
            services and logistics solutions.
          </p>
          <div className="cardsWrap">
            {cardData.map((item) => {
              return (
                <div key={item.id} className="card">
                  <ReactSVG src={item.svg} />
                  <h2>{item.title}</h2>
                  <p>{item.para}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrieghtBrokerage;
