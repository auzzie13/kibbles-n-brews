import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

function Logout() {
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log(user);
    setUser(user);
  }, [user]);

  const onLogout = () => {
    console.log("button clicked");
    console.log(user);
    axios.delete("/api/account/logout").then(res => {
      setUser({
        name: "",
        dogName: "",
        description: ""
      });
    });
  };

  return (
    <div className="button is-dark" id="signButton">
      <button id="sign-up" onClick={onLogout}>
        <div className="c1" id="c1"></div>
        <div className="c2" id="c2"></div>
        <div className="c3" id="c3"></div>
        <div className="c4" id="c4"></div>
        <div className="b1" id="b1">
          <div className="b2" id="b2">
            Logout
          </div>
        </div>
      </button>
    </div>
  );
}

export default Logout;
