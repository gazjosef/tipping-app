import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export const NavBar = ({ onRouteChange, name, isSignedIn }) => {
  console.log(name);
  if (isSignedIn) {
    return (
      <Fragment>
        <nav className="navbar navbar-default">
          <div className="container">
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/">Welcome, {name}</Link>
                </li>
                <li>
                  <Link 
                    to="/" 
                    onClick={() => onRouteChange('Signout')}>
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
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/" onClick={() => onRouteChange('Signin')}>
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={() => onRouteChange('Register')}>
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

// export default NavBar;
