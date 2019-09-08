import React, { Component } from "react";
import "./TippingContainer.css";

class TippingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixtures: [],
      selectedRound: ""
    };
  }

  componentDidMount() {
    fetch("https://tipping-app-api.herokuapp.com/fixtures", {
      method: "get",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(fixtures => {
        console.log("fixtures: ", fixtures);
        this.setState({
          fixtures: fixtures
        });
      });
    this.setState({ selectedRound: "Round 1" });
  }

  selectHomeTeam = event => {
    this.selectTeam(event.target.value, "home");
  };

  selectAwayTeam = event => {
    this.selectTeam(event.target.value, "away");
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
    // console.log(event.target.value);
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

      fetch("https://tipping-app-api.herokuapp.com/tips", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: body
      })
        .then(response => response.json())
        .then(json => console.log(json));
    }
  };

  render() {
    console.log(this.state);
    const fixtures = this.filterFixtures();
    const fixtureRound = fixtures.map((fixture, index) => {
      //console.log(fixture);
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
                  onChange={this.selectHomeTeam}
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
                  onChange={this.selectAwayTeam}
                />
              </label>
            </div>
          </div>
        </div>
      );
    });

    let rounds = [];

    const allRounds = this.state.fixtures.map(fixture => {
      return fixture.round;
    });
    console.log(allRounds);

    // Remove duplicates
    allRounds.forEach(round => {
      if (rounds.indexOf(round) === -1) {
        rounds.push(round);
      }
    });
    console.log(rounds);

    return (
      <div className="TippingContainer">
        {/* Tipping Container */}
        <div className="tipping-container">
          {/* Select Round */}
          <div className="form-group select-round">
            <label htmlFor="gender">Select Round</label>
            <select
              className="form-control"
              id="select-Round"
              onChange={this.selectRound}
              value={this.state.selectedRound}
            >
              {rounds.map((round, index) => (
                <option
                  key={index}
                  className={
                    this.state.selectedRound === round ? "selected" : ""
                  }
                >
                  {round}
                </option>
              ))}
            </select>
          </div>
          {/* Fixture Round */}
          {fixtureRound}
          {/* Submit Button */}
          <div className="submit-button text-right">
            <button
              onClick={this.onSubmitTip}
              type="submit"
              className="btn btn-default"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TippingContainer;
