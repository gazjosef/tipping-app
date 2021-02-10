import React, { useEffect, useState } from 'react';
import "./Tips.css";

export const Tips2 = () => {
    const [fixtures, setFixtures] = useState([]);
    const [round, selectRound] = useState("Round 1");

    useEffect(() => {
        async function getFixtures2() {
          const response = await fetch("https://tipping-app-api.herokuapp.com/fixtures", {
                method: "get",
                headers: { "Content-Type": "application/json" }
              })
            
            response.json()
            .then(fixtures => {
              setFixtures(fixtures)
              console.table(fixtures);
          });
        }
        getFixtures2()
    }, [])

    const selectHomeTeam = event => {
      console.log("clicked");
      selectTeam(event.target.value, "home");
    };
    
    const selectAwayTeam = event => {
      console.log("clicked");
      selectTeam(event.target.value, "away");
    };
  
    const selectTeam = (index, team) => {
      let fixtures = fixtures;
      fixtures[index].selection = team;
      this.setState({
        fixtures: fixtures
      });
    };
  
    const selectedRound = event => {
      console.log("round selected");
      selectRound(event.target.value)
      // this.setState({
      //   selectedRound: event.target.value
      // });
    };
  
    const filterFixtures = () => {
      return fixtures.filter((fixture, index) => {
        return fixture.round === round;
      });
    };
  
    const onSubmitTip = () => {
      let fixtures = filterFixtures();
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

    const newFixtures = filterFixtures();
    const fixtureRound = newFixtures.map((fixture, index) => {
      return (
        <div key={index} className="tipping-row">
          <div className="squad home-squad">
            <div className="radio home-radio">
              <label htmlFor="">
                <input
                  type="radio"
                  className="ml-2 mr-2"
                  value={index}
                  checked={fixture.selection === "home"}
                  onChange={selectHomeTeam}
                />
              </label>
            </div>
            <div className="home-name">{fixture.home}</div>
            <div className="home-logo" />
            <div className="home-score"> {fixture.resulthome}</div>
          </div>
          <div className="game-details text-center">
            <div className="game-date">
              {fixture.day}
              {"  "}
              {fixture.date}
            </div>
            <div className="game-time">{fixture.time}</div>
            <div className="game-venue">{fixture.stadium}</div>
          </div>
          <div className="squad away-squad text-right">
            <div className="away-score">{fixture.resultaway}</div>
            <div className="away-logo" />
            <div className="away-name">{fixture.away}</div>
            <div className="radio away-radio">
              <label htmlFor="">
                <input
                  type="radio"
                  className="ml-2 mr-2"
                  value={index}
                  checked={fixture.selection === "away"}
                  onChange={selectAwayTeam}
                />
              </label>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="col-md-9">
        <div className="panel panel-default">
          {/* Heading */}
          <div className="panel-heading main-color-bg">
            <h3 className="panel-title">Latest Tips</h3>
          </div>
          {/* Tipping Container */}
          <div className="panel-body">
            <div className="tipping-container">
              {/* Select Round */}
              <div className="form-group select-round">
                <label htmlFor="selectedRound">Select Round</label>
                <select
                  className="form-control text-right"
                  id="selectedRound"
                  onChange={selectedRound}
                  // value={selectedRound}
                >
                  {/* {rounds.map((round, index) => (
                    <option
                      key={index}
                      className={
                        selectedRound === round ? "selected" : ""
                      }
                    >
                      {round}
                    </option>
                  ))} */}
                </select>
              </div>
              {/* Fixture Round */}
              {fixtureRound}
              {/* Submit Button */}
              <div className="submit-button text-right">
                <button
                  onClick={onSubmitTip}
                  type="submit"
                  className="btn btn-default"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
}
