import { useState } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Card from "./UI/Card/Card";
import CardRow from "./Components/CardRow/CardRow";
import Services from "./Components/Services/Services";
import Equipments from "./Components/Equipments/Equipments";
import Questions from "./Components/Questions/Questions";
import Form from "./Components/Forms/Form";
import Footer from "./Components/Footer/Footer";

function App() {
  const [isNav, setIsNav] = useState(false);

  return (
    <>
      <Header isNav={isNav} setIsNav={setIsNav} />
      <div className="appWrapper">
        {/* <Home /> */}
        {/* <About />
        <CardRow />
        <Services />
        <Equipments />
        <Questions />
        <Form /> */}
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
