import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <div className="NavBar">
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
                  <Link to="/tips">Tips</Link>
                </li>
                <li>
                  <Link to="/table">Table</Link>
                </li>
                <li>
                  <Link to="/comp">Comp</Link>
                </li>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/">Welcome, Gareth</Link>
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
      </div>
    );
  } else {
    return (
      <div className="NavBar">
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
              {/* <ul className="nav navbar-nav">
                <li>
                  <Link to="/tips">Tips</Link>
                </li>
                <li>
                  <Link to="/table">Table</Link>
                </li>
                <li>
                  <Link to="/comp">Comp</Link>
                </li>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
              </ul> */}
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
      </div>
    );
  }
};

export default NavBar;