import { useEffect, useState } from "react";
import "./App.scss";

import { Outlet, useLocation } from "react-router-dom";
import HomeRoutes from "./Pages/HomeRoutes";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <HomeRoutes />
    </>
  );
}

export default App;
