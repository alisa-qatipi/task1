import React from "react";
import profile from './images/profile.jpeg'

const Cards = (props) => {
    const {versionDate, buttonName, buttonColor, paragraphContent} = props;
  return (
    <div>
      <div class="card h-100" style={{width:"20rem"}}>
        <div class="card-body">
          <h5 class="card-title d-flex justify-content-start">{versionDate}</h5>
          <div className="buttonAndName d-flex gap-4 mt-4">
            <a className="btn ps-4 pe-4 text-white" style={{backgroundColor: `${buttonColor}`}}>{buttonName}</a>
            <div className="profile d-flex gap-2">
                <img src={profile} alt="profile" className="rounded-pill" style={{width: "30px", height:"30px"}}/>
                <p>Kevin Joe</p>
            </div>
          </div>
          {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
          <p class="card-text text-start mt-4">
            {paragraphContent}
          </p>
          <div className="d-flex justify-content-start mt-5 pt-3">
          <a href="#" class="card-link btn btn-outline-primary rounded-pill ps-5 pe-5">
            Download
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
