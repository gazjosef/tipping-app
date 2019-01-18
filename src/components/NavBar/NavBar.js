import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        {/* Nav Bar */}
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
                  <Link to="/login">Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Header */}
        <header id="header">
          <div className="container">
            <div className="row text-left">
              <div className="col-md-12">
                <h1>
                  <i className="fas fa-football-ball" /> Footy Tips{" "}
                  <small>NRL</small>
                </h1>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default NavBar;
