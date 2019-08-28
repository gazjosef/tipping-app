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
        <NavBar
          isSignedIn={isSignedIn}
          name={this.state.user.name}
          onRouteChange={this.onRouteChange}
        />
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
        <Footer />
      </div>
    );
  }
}

export default App;
