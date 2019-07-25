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
    fetch("http://localhost:5000/fixtures", {
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
    fetch("http://localhost:5000/tips", {
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
        <div className="tipping-row">
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
              {}
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

          {/* Tipping Row */}
          {/* {
          <div className="tipping-row">
            <div className="squad home-squad">
              <div className="radio home-radio">
                <label>
                  <input
                    type="radio"
                    value="small"
                    checked={this.state.tipOne === "small"}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="home-name">Dragons</div>
              <div className="home-logo" />
              <div className="home-score">20</div>
            </div>

            <div className="game-details text-center">
              <div className="game-date">Thurs 28th June</div>
              <div className="game-time">7:50PM</div>
              <div className="game-venue">WIN Stadium</div>
            </div>

            <div className="squad away-squad text-right">
              <div className="away-score">18</div>
              <div className="away-logo" />
              <div className="away-name">Eels</div>
              <div className="radio away-radio">
                <label>
                  <input
                    type="radio"
                    value="small"
                    checked={this.state.tipOne === "small"}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Tipping Row */}
          {/* {
          <div className="tipping-row">
            <div className="squad home-squad">
              <div className="radio home-radio">
                <label>
                  <input
                    type="radio"
                    value="small"
                    checked={this.state.tipTwo === "small"}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="home-name">Dragons</div>
              <div className="home-logo" />
              <div className="home-score">20</div>
            </div>

            <div className="game-details text-center">
              <div className="game-date">Thurs 28th June</div>
              <div className="game-time">7:50PM</div>
              <div className="game-venue">WIN Stadium</div>
            </div>

            <div className="squad away-squad text-right">
              <div className="away-score">18</div>
              <div className="away-logo" />
              <div className="away-name">Eels</div>
              <div className="radio away-radio">
                <label>
                  <input
                    type="radio"
                    value="small"
                    checked={this.state.tipTwo === "small"}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
            </div>
          </div>
} */}

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
