import React, { useState, useEffect } from "react";
// import dummy from "../../dummy.json";
import Cloudinary from "../Cloudinary";
import "./style.css";
import axios from "axios";

function MemberPortfolio() {
  const [user, setUser] = useState({
    name: "",
    dogName: "",
    description: ""
  });

  useEffect(() => {
    axios.get("/api/account/member").then(response => {
      const { name, dogName, description } = response.data;
      setUser({ name, dogName, description });
    });
  }, [user]);

  return (
    <section className="section">
      <div className="container">
        <h1 className="title" id="myPage">
          MyPage
        </h1>
        <div className="tile is-ancestor">
          <div className="tile is-4 is-vertical is-parent">
            <div className="tile is-child box">
              <h2 className="title">Hello, I'm {user.name}</h2>
              <figure className="image is-4by3">
                <Cloudinary />
              </figure>
            </div>
            <div className="tile is-child box">
              <h2 className="title">And, this is {user.dogName}</h2>
              <figure className="image is-4by3">
                <Cloudinary />
              </figure>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box">
              <h2 className="title">About us</h2>
              <p>{user.description}</p>
              <div className="tile is-ancestor">
                <div className="tile">
                  <figure className="image is-4by3">
                    <img
                      src="https://bulma.io/images/placeholders/640x480.png"
                      alt="image icon"
                    />
                  </figure>
                </div>
                <div className="tile">
                  <figure className="image is-4by3">
                    <img
                      src="https://bulma.io/images/placeholders/640x480.png"
                      alt="image icon"
                    />
                  </figure>
                </div>
                <div className="tile">
                  <figure className="image is-4by3">
                    <img
                      src="https://bulma.io/images/placeholders/640x480.png"
                      alt="image icon"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MemberPortfolio;
