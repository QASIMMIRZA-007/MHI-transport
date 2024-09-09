import React, { useState } from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Layout = ({ Children }) => {
  const [isNav, setIsNav] = useState(false);
  return (
    <div className="layoutWrapper">
      <Header isNav={isNav} setIsNav={setIsNav} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
