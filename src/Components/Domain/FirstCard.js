import React from "react";
import "./FirstCard.css";

const FirstCard = (props) => {
  const {icon, title, description} = props;
  return (
    <div>
      <div className="my-card">
        <div className="my-card-icon">
          {icon}
        </div>
        <div className="my-card-content">
          <h5>{title}</h5>
          <p className="my-card-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FirstCard;
