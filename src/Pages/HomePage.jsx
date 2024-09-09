import React from "react";
import "./homePage.scss";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import CardRow from "../Components/CardRow/CardRow";
import Services from "../Components/Services/Services";
import Equipments from "../Components/Equipments/Equipments";
import Questions from "../Components/Questions/Questions";
import Form from "../Components/Forms/Form";

const HomePage = () => {
  return (
    <>
      <Home />
      <div className="homePageWrapper">
        <About />
        <CardRow />
        <Services />
        <Equipments />
        <Questions />
        <Form />
      </div>
    </>
  );
};

export default HomePage;
