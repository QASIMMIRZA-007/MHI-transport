import React from "react";
import "./FrieghtDispatch.scss";
import ContentDisplay from "../../../UI/ContentDisplay/ContentDisplay";
import {
  booking,
  communication,
  credit,
  frieghtDispatch,
  invoice,
  lamper,
  paperwork,
} from "../../../assets/Index";
import Card from "../../../UI/Card/Card";
import Form from "../../../Components/Forms/Form";

const FrieghtDispatch = () => {
  const stepData = [
    {
      id: 1,
      digit: "1",
      title: "Market Analysis",
      descrition:
        "Our Truck Dispatch Services include proactive market analysis, using analytics to stay ahead in Freight Dispatching with competitive rates and strategic logistics planning",
    },
    {
      id: 2,
      digit: "2",
      title: "Load Planning",
      descrition:
        "Our expertise in Truck Dispatching is evident in our meticulous load planning, optimizing drivers' hours and showcasing our excellence as a Freight Dispatcher",
    },
    {
      id: 3,
      digit: "3",
      title: "Load Booking",
      descrition:
        "As a leading Truck Dispatch Company, we leverage strong broker relationships to secure premium loads. Our strategic timing in Truck Dispatch enhances your profitability.",
    },
    {
      id: 4,
      digit: "4",
      title: "Driver Support",
      descrition:
        "Our Truck Dispatch Services offer comprehensive driver support, quickly resolving on-road challenges and reinforcing our commitment.",
    },

    {
      id: 5,
      digit: "5",
      title: "Invoicing",
      descrition:
        "Our Truck Dispatch Company streamlines invoicing and paperwork, simplifying financial processes and enhancing your experience",
    },
  ];
  const cardData = [
    {
      id: 1,
      svg: paperwork,
      title: "Paperwork",
      description:
        "At MHI Transport Dispatch Services, our experienced dispatchers handle all essential paperwork carrier setup, rate confirmations, invoicing, and insurance, so you can focus on the road.",
    },
    {
      id: 2,
      svg: booking,
      title: "Loads Booking",
      description:
        "As a premier dispatch company, we leverage strong broker relationships to secure lucrative loads quickly, ensuring optimal bookings for our carriers",
    },
    {
      id: 4,
      svg: lamper,
      title: "Lumper / Detention",
      description:
        "With our efficient truck dispatch services, we minimize detention costs by negotiating the best rates and providing all necessary documentation.",
    },
    {
      id: 3,
      svg: communication,
      title: "Communication",
      description:
        "Our goal is to provide reliable dispatch services with seamless communication, keeping clients fully informed using the latest trucking dispatch technology.",
    },
    {
      id: 5,
      svg: invoice,
      title: "Invoicing",
      description:
        "Our dedicated dispatch team manages paperwork for factoring companies, ensuring clients receive timely payments",
    },
    {
      id: 6,
      svg: credit,
      title: "Credit Checks",
      description:
        "Our dispatch service ensures timely payments by verifying brokers' credit scores before dispatching, showcasing our efficiency.",
    },
  ];
  return (
    <div className="FrieghtDispatchWrapper">
      <div className="FrieghtDispatchWrapp">
        <ContentDisplay
          isSvgFirst={true}
          svg={frieghtDispatch}
          title="Freight Dispatch"
          description="Freight dispatch involves the coordination and management of transporting goods from one location to another. It encompasses planning routes, scheduling pickups and deliveries, communicating with drivers and carriers, handling necessary documentation, and monitoring shipments to ensure timely and efficient delivery. Freight dispatchers act as vital intermediaries in the supply chain, facilitating smooth operations by resolving issues, optimizing logistics, and ensuring that shipments meet their deadlines. Effective freight dispatching is essential for maintaining the flow of goods across various industries, enhancing operational efficiency, reducing costs, and ensuring customer satisfaction."
        />

        <div className="workflowWrapper">
          <div className="workflowWrapp">
            <h1 className="">Dispatch Workflow</h1>
            <p className="para">
              In the dynamic world of Truck Dispatch, MHI Transport Dispatch
              stands out for adaptability and efficiency. We constantly evolve
              our Dispatching Services to meet industry trends and best
              practices.
            </p>
            <div className="stepWrapp">
              {stepData.map((item) => {
                return (
                  <div key={item.id} className="step">
                    <div className="circle">
                      <h1>{item.digit}</h1>
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.descrition}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="exServicesWrapper">
          <div className="exServicesWrapp">
            <h1>We Offer Excellence in Services</h1>
            <p className="exPara">
              In the dynamic world of Truck Dispatch, MHI Transport Dispatch
              stands out for adaptability and efficiency. We constantly evolve
              our Dispatching Services to meet industry trends and best
              practices.
            </p>
            <div className="exCardsWrapper">
              <div className="exCardsWrapp">
                {cardData.map((item) => {
                  return (
                    <Card
                      height="250px"
                      svg={item.svg}
                      key={item.id}
                      title={item.title}
                      description={item.description}
                    />
                  );
                })}
              </div>
            </div>
            <div className="contactFormWrapp">
              <Form conditionShown={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrieghtDispatch;
