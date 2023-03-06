import React from "react";

const FirstCard = (props) => {
    const {icon, title, description} = props;
  return (
    <div>
      <div className="left-side d-flex gap-3" style={{width: "18rem"}}>
        <div className="icon mt-3">
          {icon}
        </div>
        <div className="contenti mt-2 text-start">
          <h5>{title}</h5>
          <p className="text-mute">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FirstCard;
