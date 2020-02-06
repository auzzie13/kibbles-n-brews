import React from "react";
import "./style.css";

function LandingPage(props) {

  return (
      <div className="column is-one-quarter" id="collumOneQuarter">
        <div className="card" id="cardStyle">
          <div className="card-image" id="cardImage">
            <figure className="image is-4by3" id="cardImage">
              <img
                src={props.profileImage}
                alt="Profile"
                id="cardImage"
              />
            </figure>
          </div>
          <div className="card-content" id="card-content">
            <div className="media" id="cardMedia">
              <div className="media-left">
                <figure className="image is-28x10" id="dogImage">
                  <img
                    src={props.dogImage}
                    alt="Dog"
                    id="dogImage"
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{props.name}</p>
                <p className="subtitle is-6">{props.pet}</p>
              </div>
            </div>

            <div className="content">
              {props.description}
              <br />
            </div>
          </div>
        </div>
      </div>
  );
}

export default LandingPage;
