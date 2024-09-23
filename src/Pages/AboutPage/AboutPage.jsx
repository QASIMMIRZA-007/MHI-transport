import React from "react";
import "./AboutPage.scss";
import ContentDisplay from "../../UI/ContentDisplay/ContentDisplay";
import About from "../../Components/About/About";
import {
  frieghtDispatch,
  mission,
  newSvg,
  person1,
  person2,
  person3,
  values,
  vision,
} from "../../assets/Index";
import Card from "../../UI/Card/Card";
import { ReactSVG } from "react-svg";
const AboutPage = () => {
  const cardsData = [
    {
      id: 1,
      title: "Mission",
      description:
        "Our mission extends beyond typical dispatching services. We aim to provide a holistic dispatch experience, ensuring that our clients' drivers are continuously on the move while we efficiently manage all logistical aspects.",
      svg: mission,
    },
    {
      id: 2,
      title: "Vision",
      description:
        "Our vision is to set the standard for truck dispatching services. We aspire to meet and exceed the current and future transportation needs of various industries, continually pushing the boundaries of what a dispatch company can achieve.",
      svg: vision,
    },
    {
      id: 3,
      title: "Values",
      description:
        "Our core values are Synergy, Transparency, Reliability, and Excellence. We believe in the power of teamwork, clear and honest communication, dependable service, and a relentless pursuit of quality in freight dispatching.",
      svg: values,
    },
  ];

  const fullWidth = [
    {
      id: 1,
      digit: "72",
      defination: "Customer",
    },
    {
      id: 2,
      digit: "110",
      defination: "Number of Trucks",
    },
    {
      id: 3,
      digit: "8444",
      defination: "Loads Booked",
    },
  ];
  const testimonialData = [
    {
      id: 1,
      name: "S. Watkins",
      review:
        "MHI Transport Dispatch has been a game-changer for our logistics operations. Their meticulous attention to detail and efficient handling of all dispatch tasks have significantly reduced our operational costs. The seamless process and excellent support make them a standout choice in the industry. ",
      svg: person1,
    },
    {
      id: 2,
      name: "Jenna M.",
      review:
        "The service provided by MHI Transport Dispatch has been exceptional. They take care of all our dispatch needs with efficiency and professionalism, allowing us to focus on growing our business. Their proactive approach and reliable results have made a noticeable difference in our operations. We are very satisfied.",
      svg: person2,
    },
    {
      id: 3,
      name: "Lisa H.",
      review:
        "MHI Transport Dispatch’s service has been outstanding from day one. They have streamlined our dispatch process, from load planning to real-time monitoring, making our operations more efficient. The team’s dedication and expertise ensure everything is handly seamlessly. We’re very pleased with the results. ",
      svg: person3,
    },
  ];
  return (
    <div className="aboutPageWrapper">
      <div className="aboutPageWrapp">
        <div className="contentWrapper">
          <About
            paddingTop="10px"
            svg={frieghtDispatch}
            title="How We Are"
            description1="MHI Transport Dispatch was designed to simplify the dispatching process for owners. After encountering common industry challenges—like high operational costs and a lack of trained personnel—we saw the need for a reliable service to bridge the gap between trucking companies and the necessary technical resources."
            description2="We take care of all the technical and administrative tasks, letting clients focus on getting their loads on the road. Through thorough market analysis and efficient load planning, we ensure optimal dispatch durations and lucrative opportunities. From start to finish, our service guarantees a seamless and stress-free dispatch experience"
            miniSpan=""
          />
        </div>
        <div className="aboutCardsWrapper">
          <div className="aboutCardsWrapp">
            {cardsData.map((item) => {
              return (
                <Card
                  height="270px"
                  key={item.id}
                  svg={item.svg}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="fullWidthWrapper">
        <div className="fullWidthWrapp">
          <div className="fullWidth">
            {fullWidth.map((item) => {
              return (
                <div key={item.id} className="box">
                  <h1>{item.digit}</h1>
                  <h2>{item.defination}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="secContentWrapper">
        <ContentDisplay
          title="What Defines Us"
          description={
            "MHI Transport Dispatch Services specializes in truck dispatch, providing efficient truck dispatching services to carriers and owner-operators across the United Arab Emirates. Our dedicated team of specialized dispatchers excels at booking optimal loads for drivers based on their preferences. Through our years of experience, we have cultivated strong relationships with the top brokers in America, allowing us to secure loads even before they are listed on load boards. Your success is our priority." +
            "<br />" +
            "MHI Transport Dispatch Services excels in dispatching various types of trucks, including box trucks, hotshots, power-only units, dry vans, reefers, and flatbeds. Our unique blend of experience, exceptional service, and cutting-edge technology enables us to deliver dispatch services that not only ensure high reliability but also remain incredibly cost-effective. Trust us to optimize your trucking operations."
          }
          svg={newSvg}
          isSvgFirst={false}
        />
      </div>
      <div className="testimonialWrapper">
        <div className="testimonialWrapp">
          <h1 className="mainHeading">Customer Testimonials</h1>
          <div className="testimonialCards">
            {testimonialData.map((item) => {
              return (
                <div key={item.id} className="testimonialCard">
                  <div className="flex">
                    <ReactSVG src={item.svg} />
                    <h2>{item.name}</h2>
                  </div>
                  <p>{item.review}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
