import React from "react";
import "./footer.scss";
import { ReactSVG } from "react-svg";
import {
  fbVector,
  footerLogo,
  instaVector,
  linkedInVector,
  logo,
} from "../../assets/Index";
import { Col, Row } from "antd";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  //   const navigate = useNavigate();   onClick={() => navigate("/")}

  const mobileResponsive = useMediaQuery({
    query: "(max-width: 800px)",
  });
  const mediumScreen = useMediaQuery({
    query: "(max-width: 992px)",
  });

  return (
    <div className="footerWrapper">
      <div className="footerWrap">
        <Row className="mainColWrapper">
          <Col
            span={mobileResponsive ? 24 : mediumScreen ? 24 : 9}
            className="colWrapper"
          >
            <div className="colWrap">
              <div className="logoWrapper">
                <ReactSVG src={footerLogo} />
              </div>
              <p>
                As the premier truck dispatching service in the
                United Arab Emirates, we excel in delivering top-notch logistics
                solutions. Our commitment to reliability and efficiency makes us
                the trusted partner for businesses nationwide
              </p>
              <div className="iconsWrapp">
                <ReactSVG src={instaVector} />
                <ReactSVG src={fbVector} />
                <ReactSVG src={linkedInVector} />
              </div>
            </div>
          </Col>
          <Col
            span={mobileResponsive ? 24 : mediumScreen ? 8 : 5}
            className="colWrapper"
          >
            <div className="colWrap">
              <ul>
                <li>Blogs</li>
                <li>Sitemap</li>
                <li>Privacy Policy</li>
                <li>Term & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </Col>
          <Col
            span={mobileResponsive ? 12 : mediumScreen ? 8 : 5}
            className="colWrapper"
          >
            <div className="colWrap">
              <ul>
                <Link to="/">Home</Link>
                <Link>Services</Link>
                <Link to="/about">About us</Link>
                <Link to="/FQAs">FAQs</Link>

                <Link to="/contact">Contact Us </Link>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
