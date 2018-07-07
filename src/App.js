import React, { Component } from 'react';
import './App.css';

import Home from './components/home';
import { Link } from 'react-router-dom';

class App extends Component {
  // componentDidMount()
  // {
  //   this.loadTeams();
  // }
  // loadTeams()
  // {
  //   fetch("/teams")
  //       .then(function (response) {
  //         console.log(response);
  //       });
  // }
  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;
