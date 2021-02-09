import React, { useEffect, useState } from 'react';
import "./Tips.css";

export const Tips2 = () => {
    const [fixtures, setFixtures] = useState([]);
    const [round, selectRound] = useState("Round 1");

    useEffect(() => {
        fetch("https://tipping-app-api.herokuapp.com/fixtures", {
            method: "get",
            headers: { "Content-Type": "application/json" }
          })
            .then(response => response.json())
            .then(data => {
              // console.log("fixtures: ", fixtures);
              setFixtures(data)
              console.log(fixtures);
            });
            selectRound("Round 1")
    }, [])

    const selectHomeTeam = event => {
      console.log("clicked");
      selectTeam(event.target.value, "home");
    };
    
    const selectAwayTeam = event => {
      console.log("clicked");
      selectTeam(event.target.value, "away");
    };
  
    selectTeam = (index, team) => {
      let fixtures = this.state.fixtures;
      fixtures[index].selection = team;
      this.setState({
        fixtures: fixtures
      });
    };
  
    selectRound = event => {
      console.log("round selected");
      this.setState({
        selectedRound: event.target.value
      });
    };
  
    filterFixtures = () => {
      return this.state.fixtures.filter((fixture, index) => {
        return fixture.round === this.state.selectedRound;
      });
    };
  
    onSubmitTip = () => {
      let fixtures = this.filterFixtures();
      for (let i = 0; i < fixtures.length; ++i) {
        let fixture = fixtures[i];
        let tip = {
          userid: "gazjoseph@gmail.com",
          fixtureid: fixture.fixture_id,
          selection: fixture.selection
        };
        let body = JSON.stringify(tip);
        console.log(fixture);
        console.log(body);
  
        // fetch("https://tipping-app-api.herokuapp.com/tips", {
        fetch("http://localhost:5000/tips", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: body
        })
          .then(response => response.json())
          .then(json => console.log(json));
      }
    };

    return (
        <div>
            
        </div>
    )
}
