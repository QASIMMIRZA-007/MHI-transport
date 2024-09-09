import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import FrieghtBrokerage from "./ServicesPage/FrieghtBrokerage/FrieghtBrokerage";
import FrieghtDispatch from "./ServicesPage/FrieghtDispatch/FrieghtDispatch";
import Layout from "./Layout";
import Pricing from "./Pricing/Pricing";
import FAQs from "./FAQs/FAQs";
import About from "../Components/About/About";
import Contact from "./Contact/Contact";
import AboutPage from "./AboutPage/AboutPage";

const HomeRoutes = () => {
  return (
    <div className="HomeRoutesWrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/frieght-brokerage" element={<FrieghtBrokerage />} />
          <Route path="/frieght-dispatch" element={<FrieghtDispatch />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default HomeRoutes;
