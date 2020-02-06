import React from "react";
import "./style.css";

import Logout from "../Logout";

import { Link } from "react-router-dom";


function NavBar(props) {
  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand" id="navbar-brand">
        <Link className="navbar-item" to="/">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.lpVib3nwr4YfMvR31Yzn7gHaFj&pid=Api&P=0&w=270&h=204"
            alt="dog"
            width="40"
          />
        </Link>

        <label
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          htmlFor="nav-toggle-state"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </label>
      </div>
      <input type="checkbox" id="nav-toggle-state" />

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" id="navbar-item" to="/members">
            My Homepage
          </Link>

          <Link className="navbar-item" href="/events" id="navbar-item" to="/events">Meet Up</Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link" id="navbar-item" to={props.location.pathname}>More</Link>

            <div className="navbar-dropdown" id="navbar-item">
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <hr className="navbar-divider" />
              <Link className="navbar-item" to="/landing">
                Members
              </Link>

            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <div className="button is-dark" id="signButton">
                <Link to="/login">
                    <button id="sign-up">
                      <div className="c1" id="c1"></div>
                      <div className="c2" id="c2"></div>
                      <div className="c3" id="c3"></div>
                      <div className="c4" id="c4"></div>
                      <div className="b1" id="b1">
                        <div className="b2" id="b2">
                          Sign Up/Login
                        </div>
                      </div>
                    </button>
                </Link>

                  <Logout />

                

              </div>
            </div>
          </div>
        </div>
      </div>
    </nav >
  );
}

export default NavBar;
