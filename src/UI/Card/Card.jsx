import React, { lazy } from "react";
import "./card.scss";
import { ReactSVG } from "react-svg";
import { synergy } from "../../assets/Index";
import { Checkbox } from "antd";

const Card = ({ svg, title, description, height = "auto" }) => {
  return (
    <div className="cardWrapper">
      <div style={{ height: height }} className="cardWrapp">
        <ReactSVG src={svg} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
