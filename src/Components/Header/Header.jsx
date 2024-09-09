import "./header.scss";
import React from "react";
import { ReactSVG } from "react-svg";
// import { Link } from "react-scroll";
import PrimaryButton from "../../UI/PrimaryButton/PrimaryButton";
import { downVector, logo } from "../../assets/Index";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
function Header({ isNav, setIsNav }) {
  const handleLoginClick = () => {
    console.log("hello");
  };

  const mobileResponsive = useMediaQuery({
    query: "(max-width: 992px)",
  });

  const items = [
    {
      label: (
        <Link to="/frieght-dispatch" style={{ fontSize: "16px" }}>
          Freight Dispatch{" "}
        </Link>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Link to="/frieght-brokerage" style={{ fontSize: "16px" }}>
          Freight Brokerage{" "}
        </Link>
      ),
      key: "1",
    },
  ];

  return (
    <header className="header-container">
      <div className="logo-menu">
        <Link to="/">
          <ReactSVG src={logo} className="logo" />
        </Link>
        <div
          className={isNav ? "change" : "menu"}
          onClick={() => setIsNav(!isNav)}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      <div id="open" className={isNav ? "open" : "list-button"}>
        <div className="nav-group">
          <ul>
            <Link offset={-80} to="/" smooth duration={500}>
              <li className={location.pathname === "/" ? "active" : ""}>
                Home
              </li>
            </Link>
            <Link offset={-80} to="" smooth duration={500}>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <li>Services</li>
                    <ReactSVG
                      src={downVector}
                      style={{ marginBottom: "5px" }}
                    />
                  </Space>
                </a>
              </Dropdown>
            </Link>

            <Link offset={-70} to="/pricing" smooth duration={500}>
              <li className={location.pathname === "/pricing" ? "active" : ""}>
                Pricing
              </li>
            </Link>
            <Link offset={-70} to="/about" smooth duration={500}>
              <li className={location.pathname === "/about" ? "active" : ""}>
                About us
              </li>
            </Link>
            <Link offset={-80} to="/FAQs" smooth duration={500}>
              <li className={location.pathname === "/FAQs" ? "active" : ""}>
                {" "}
                FAQs
              </li>
            </Link>
            <Link offset={-80} to="/contact" smooth duration={500}>
              <li className={location.pathname === "/contact" ? "active" : ""}>
                Contact us
              </li>
            </Link>

            {mobileResponsive ? (
              <PrimaryButton
                className="button invisible"
                onClick={handleLoginClick}
              >
                Get in Touch
              </PrimaryButton>
            ) : (
              " "
            )}
          </ul>
        </div>
      </div>
      <div>
        {mobileResponsive ? (
          " "
        ) : (
          <PrimaryButton className="button " onClick={handleLoginClick}>
            Get in Touch
          </PrimaryButton>
        )}
      </div>
    </header>
  );
}

export default Header;
