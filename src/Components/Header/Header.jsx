import "./header.scss";
import React from "react";
import { ReactSVG } from "react-svg";
import { Link } from "react-scroll";
import PrimaryButton from "../../UI/PrimaryButton/PrimaryButton";
import { downVector, logo } from "../../assets/Index";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useMediaQuery } from "react-responsive";
function Header({ isNav, setIsNav }) {
  const handleLoginClick = () => {
    console.log("hello");
  };

  const mobileResponsive = useMediaQuery({
    query: "(max-width: 992px)",
  });
  const mediumScreen = useMediaQuery({
    query: "(max-width: 992px)",
  });
  const items = [
    {
      label: <a style={{ fontSize: "16px" }}>Freight Dispatch </a>,
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: <a style={{ fontSize: "16px" }}>Freight Brokerage </a>,
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
            <Link offset={-80} to="navigate" smooth duration={500}>
              <li>Home</li>
            </Link>
            <Link offset={-80} to="accordionContainer" smooth duration={500}>
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

            <Link offset={-70} to="aboutContainer" smooth duration={500}>
              <li>Pricing</li>
            </Link>
            <Link offset={-70} to="aboutContainer" smooth duration={500}>
              <li>About us</li>
            </Link>
            <Link offset={-80} to="accordionContainer" smooth duration={500}>
              <li> FAQs</li>
            </Link>
            <Link offset={-80} to="contactForm" smooth duration={500}>
              <li>Contact us</li>
            </Link>

            {mobileResponsive && mediumScreen ? (
              <PrimaryButton className="button" onClick={handleLoginClick}>
                Get in Touch
              </PrimaryButton>
            ) : (
              " "
            )}
          </ul>
        </div>
      </div>
      <div>
        {mobileResponsive && mediumScreen ? (
          " "
        ) : (
          <PrimaryButton className="button" onClick={handleLoginClick}>
            Get in Touch
          </PrimaryButton>
        )}
      </div>
    </header>
  );
}

export default Header;
