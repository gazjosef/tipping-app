import React, { Component } from "react";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Dashboard from "./components/Dashboard/Dashboard";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";

/*
import Tips from "./components/Tips/Tips";
import Table from "./components/Table/Table";
import Comp from "./components/Comp/Comp";
import Settings from "./components/Settings/Settings";
import { Switch, Route } from "react-router-dom";
*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "Signin",
      isSignedIn: false,
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: ""
      }
    };
  }

  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    });
  };

  onRouteChange = route => {
    console.log("clicked");
    if (route === "Signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "Dashboard") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, route } = this.state;
    return (
      <div className="App">
        <NavBar isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        <Header />

        {route === "Dashboard" ? (
          <Dashboard />
        ) : route === "Signin" ? (
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
        {/* <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/tips" component={Tips} />
              <Route path="/table" component={Table} />
              <Route path="/comp" component={Comp} />
              <Route path="/settings" component={Settings} />
              <Route path="/login" component={Login} />
            </Switch>*/}
        <Footer />
      </div>
    );
  }
}

export default App;
