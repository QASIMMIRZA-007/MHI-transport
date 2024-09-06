import React from "react";
import "./home.scss";
import { ReactSVG } from "react-svg";
import { homeSvg } from "../../assets/Index";
import PrimaryButton from "../../UI/PrimaryButton/PrimaryButton";

const Home = () => {
  const handleOnClick = () => {
    console.log("object");
  };
  return (
    <div className="homeWrapper">
      <div className="textWrapp">
        <h1 className="mainHeading">
          The premier truck dispatching service in the United States.
        </h1>
        <p>
          For years, we've partnered with experts to ensure seamless truck
          dispatch.
        </p>
        <PrimaryButton onClick={handleOnClick}> Get in Touch</PrimaryButton>
      </div>
      <div className="imgWrapp">
        <img src={homeSvg} />
      </div>
    </div>
  );
};

export default Home;
