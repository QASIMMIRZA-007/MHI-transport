import React, { lazy } from "react";
import "./card.scss";
import { ReactSVG } from "react-svg";
import { synergy } from "../../assets/Index";

const Card = ({ svg, title, description }) => {
  return (
    <div className="cardWrapper">
      <div className="cardWrapp">
        <ReactSVG src={svg} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
