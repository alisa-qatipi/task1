import React from "react";
import profile from './images/profile.jpeg'
import './Cards.css'

const Cards = (props) => {
    const {versionDate, buttonName, buttonColor, paragraphContent} = props;
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{versionDate}</h5>
          <div className="buttonAndName">
            <a className="userButton" style={{backgroundColor: `${buttonColor}`}}>{buttonName}</a>
            <div className="profile">
                <img src={profile} alt="profile" />
                <p>Kevin Joe</p>
            </div>
          </div>
          {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
          <p class="card-text">
            {paragraphContent}
          </p>
          <div >
          <a href="#" class="card-link">
            Download
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
