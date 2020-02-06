import React, { Component } from "react";
import NavBar from "../components/NavBar";
import LandingForm from "../components/LandingPage/index.js";
import dummy from "../dummy.json";

class Landing extends Component {

  state = {
    dummy
  };

  render() {
    return (
      <div>
        <NavBar {...this.props} />
        <div className="columns is-multiline">
        {this.state.dummy.map(o => 
        (<LandingForm 
        id={o.id}
        name={o.userName}
        pet={o.petName}
        description={o.description}
        dogImage={o.dogImage}
        profileImage={o.profileImage}
        />))}
        </div>
      </div>
    );
  }
}

export default Landing;
