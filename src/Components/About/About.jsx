import React from "react";
import "./about.scss";
import { ReactSVG } from "react-svg";
import { about } from "../../assets/Index";

const About = () => {
  return (
    <div className="aboutWrapper">
      <div className="aboutWrapp">
        <div className="imgWrapp">
          <ReactSVG src={about} />
        </div>
        <div className="textWrapp">
          <span className="minispan">About</span>
          <h1>Truck Dispatching Service</h1>
          <p>
            The Company Swift Dispatch Services specializes in truck dispatch,
            providing efficient truck dispatching services to carriers and
            owner-operators across the United States. Our dedicated team of
            specialized dispatchers excels at booking optimal loads for drivers
            based on their preferences. Through our years of experience, we have
            cultivated strong relationships with the top brokers in America,
            allowing us to secure loads even before they are listed on load
            boards. Your success is our priority.
          </p>
          <br />
          <p>
            Swift Dispatch Services excels in dispatching various types of
            trucks, including box trucks, hotshots, power-only units, dry vans,
            reefers, and flatbeds. Our unique blend of experience, exceptional
            service, and cutting-edge technology enables us to deliver dispatch
            services that not only ensure high reliability but also remain
            incredibly cost-effective. Trust us to optimize your trucking
            operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
