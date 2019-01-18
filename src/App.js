import React, { Component } from "react";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import Dashboard from "./components/Dashboard/Dashboard";
import Tips from "./components/Tips/Tips";
import Table from "./components/Table/Table";
import Comp from "./components/Comp/Comp";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/tips" component={Tips} />
          <Route path="/table" component={Table} />
          <Route path="/comp" component={Comp} />
          <Route path="/settings" component={Settings} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
