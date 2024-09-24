import React from "react";
import "./home.scss";
import { ReactSVG } from "react-svg";
import { homeSvg } from "../../assets/Index";
import PrimaryButton from "../../UI/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    console.log("hello");
    navigate("/contact");
  };
  return (
    <div className="homeWrapper">
      <div className="homeWrapp">
        <div className="textWrapp">
          <h1 className="mainHeading">
            The premier truck dispatching service in the United Arab Emirates.
          </h1>
          <p>
            For years, we've partnered with experts to ensure seamless truck
            dispatch.
          </p>
          <PrimaryButton onClick={handleLoginClick}>
            {" "}
            Get in Touch
          </PrimaryButton>
        </div>
        <div className="imgWrapp">
          <img src={homeSvg} />
        </div>
      </div>
    </div>
  );
};

export default Home;
