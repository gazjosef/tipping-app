import React, { Component } from 'react';
import TippingRow from './components/TippingRow';
import logo from './logo.svg';
import update from 'react-addons-update';
import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props);

      //make backend call to fetch this rounds matches
    var upcomingMatches = [
      { HomeTeam: "a", AwayTeam: "b", IsHomeTeamSelected: null },
      { HomeTeam: "c", AwayTeam: "d", IsHomeTeamSelected: null },
      { HomeTeam: "e", AwayTeam: "f", IsHomeTeamSelected: null },
      { HomeTeam: "g", AwayTeam: "h", IsHomeTeamSelected: null },
      { HomeTeam: "i", AwayTeam: "j", IsHomeTeamSelected: null },
      { HomeTeam: "k", AwayTeam: "l", IsHomeTeamSelected: null }
    ];
    this.state = {
      UpcomingMatches: upcomingMatches
    };
  }
  render() {
    var output = [];
    
    for(var key in this.state.UpcomingMatches)
    {
      var match = this.state.UpcomingMatches[key];

      output.push((<div key={key} >
          <TippingRow name={key.toString()}
                      onSelectionChange={this.onSelectionChange}/>

          <div>
            {match.IsHomeTeamSelected === null ? 'No Selection' : null}
            {match.IsHomeTeamSelected === true ? 'Home Selected' : null}
            {match.IsHomeTeamSelected === false ? 'Away Selected' : null}
          </div>
        </div>));
    }

    return (
      <div className="App">
        {output}
      </div>
    );
  }

  onSelectionChange = (event) => {
    console.log("Selection Changed", event);
    console.log(event.target.name);
    console.log(event.target.value);
    
    var newlist = [];
    for(var key in this.state.UpcomingMatches)
    {
      var match = this.state.UpcomingMatches[key];
      if(key === event.target.name)
      {
        newlist.push(
          {
            HomeTeam: match.HomeTeam,
            AwayTeam: match.AwayTeam,
            IsHomeTeamSelected: event.target.value === 'home' ? true : false
          });
      }
      else
      {
        newlist.push(match);
      }
      console.log(key, event.target.name, key === event.target.name);
    }
    console.log(newlist);
    this.setState({UpcomingMatches: newlist});
  }
}

export default App;
