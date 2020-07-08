import React, { Component } from 'react';
import './App.css';

// LAYOUT
import { NavBar } from './components/Layout/NavBar/NavBar';
import { Header } from './components/Layout/Header/Header';
import { Footer } from './components/Layout/Footer/Footer';
import Dashboard from './components/Layout/Dashboard/Dashboard';

// PAGES
import Signin from './components/Pages/Signin/Signin';
import Register from './components/Pages/Register/Register';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'Signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: '',
      },
    };
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  onRouteChange = (route) => {
    if (route === 'Signout') {
      this.setState({ isSignedIn: false });
    } else if (route === 'Dashboard') {
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

        {route === 'Dashboard' ? (
          <Dashboard />
        ) : route === 'Signin' ? (
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
