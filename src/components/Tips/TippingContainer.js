import React, { Component } from "react";
import "./TippingContainer.css";

class TippingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixtures: []
    };
  }

  componentDidMount() {
    fetch("https://tipping-app-api.herokuapp.com/fixtures", {
      method: "get",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(fixtures => {
        this.setState({
          fixtures: fixtures
        });
      });
  }

  handleChange = event => {
    console.log(event.target.value);
    this.setState({
      selections: event.target.value
    });
  };

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

  onSubmitTip = () => {
    fetch("https://tipping-app-api.herokuapp.com/fixtures", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fixtures: this.state.fixtures
      })
    })
      .then(response => response.json())
      .then(fixtures => {
        this.setState({
          fixtures: fixtures
        });
      });
  };

  render() {
    const fixtureRound = this.state.fixtures.map((fixture, index) => {
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

    return (
      <div className="TippingContainer">
        {/* Tipping Container */}
        <div className="tipping-container">
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
        {/* End of Tipping Container */}
      </div>
    );
  }
}

export default TippingContainer;
