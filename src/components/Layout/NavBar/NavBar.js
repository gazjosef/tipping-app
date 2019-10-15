import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ onRouteChange, name, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <Fragment>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-controls="navbar"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link to="/" className="navbar-brand">
                FootyTips
              </Link>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/">Tips</Link>
                </li>
                <li>
                  <Link to="/comp">Comp</Link>
                </li>
                {/* <li>
                  <Link to="/settings">Settings</Link>
                </li> */}
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/">Welcome, {name}</Link>
                </li>
                <li>
                  <Link to="/" onClick={() => onRouteChange("Signout")}>
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-controls="navbar"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link to="/" className="navbar-brand">
                FootyTips
              </Link>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/" onClick={() => onRouteChange("Signin")}>
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={() => onRouteChange("Register")}>
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
};

export default NavBar;
