import React, { Component } from 'react';

import Dashboard from './dashboard';
import Tips from './tips';
import Table from './table';
import { Link, Switch, Route } from 'react-router-dom'


class Home extends Component {
  render() {
    return (
      <div className="Home">

        { /* Nav Bar */ }
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand">FootyTips</Link>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><Link to="/tips">Tips</Link></li>
                <li><Link to="/table">Table</Link></li>
                <li><Link to="/comp">Comp</Link></li>
                <li><Link to="/settings">Settings</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/">Welcome, Gareth</Link></li>
                <li><Link to="/logout">Logout</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        { /* Header */ }
        <header id="header">
          <div className="container">
            <div className="row text-left">

              <div className="col-md-12">
                <h1>
                  <i className="fas fa-football-ball"></i> Footy Tips <small>NRL</small>
                </h1>
              </div>
            </div>
          </div>
        </header>

        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/tips" component={Tips}/>
          <Route path="/table" component={Table}/>
        </Switch>

        <footer id="footer">
          <p>Copyright Gareth Hind, &copy; 2018</p>
        </footer>
      </div>
    );
  }
}

export default Home;
