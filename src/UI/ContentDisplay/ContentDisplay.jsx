import React from "react";
import "./contentDisplay.scss";
import { ReactSVG } from "react-svg";

const ContentDisplay = ({ svg, title, description, isSvgFirst = true }) => {
  return (
    <div className="ContentDisplayWrapper">
      <div className="ContentDisplayWrapp">
        {isSvgFirst ? (
          <>
            <div className="imgWrapp">
              <ReactSVG src={svg} />
            </div>
            <div className="textWrapp">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </>
        ) : (
          <>
            <div className="textWrapp">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
            <div className="imgWrapp">
              <ReactSVG src={svg} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContentDisplay;
