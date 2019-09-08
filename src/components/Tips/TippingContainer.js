import React, { Component } from "react";
import "./TippingContainer.css";

// import Dropdown from "../Dropdown/Dropdown";

class TippingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixtures: [],
      tips: [],
      selectedItem: ""
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
  }

  // handleChange = event => {
  //   console.log(event.target.value);
  //   this.setState({
  //     selections: event.target.value
  //   });
  // };

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

  selectItem = item =>
    this.setState({
      selectedItem: item
    });

  onSubmitTip = () => {
    for (let i = 0; i < this.state.fixtures.length; ++i) {
      let fixture = this.state.fixtures[i];
      let tip = {
        userid: "",
        fixtureid: fixture.id,
        selection: fixture.selection
      };
      let body = JSON.stringify(tip);
      console.log(body);

      fetch("https://tipping-app-api.herokuapp.com/tips", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: body
      })
        .then(response => response.json())
        .then(json => console.log(json));
    }

    // fetch("https://tipping-app-api.herokuapp.com/tips", {
    //   method: "post",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(
    //     {
    //       fixture_id: this.state.fixtureOne,
    //       selection: this.state.tipOne
    //     },
    //     {
    //       fixture_id: this.state.fixtureTwo,
    //       selection: this.state.tipTwo
    //     },
    //     {
    //       fixture_id: this.state.fixtureThree,
    //       selection: this.state.tipThree
    //     },
    //     {
    //       fixture_id: this.state.fixtureFour,
    //       selection: this.state.tipFour
    //     },
    //     {
    //       fixture_id: this.state.fixtureFive,
    //       selection: this.state.tipFive
    //     },
    //     {
    //       fixture_id: this.state.fixtureSix,
    //       selection: this.state.tipSix
    //     },
    //     {
    //       fixture_id: this.state.fixtureSeven,
    //       selection: this.state.tipSeven
    //     },
    //     {
    //       fixture_id: this.state.fixtureEight,
    //       selection: this.state.tipEight
    //     }
    //   )
    // }).then(response => response.json());
    // .then(fixtures => console.log("12345", fixtures));
  };

  render() {
    console.log(this.state);
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

    const rounds = [
      "Round 1",
      "Round 2",
      "Round 3",
      "Round 4",
      "Round 5",
      "Round 6",
      "Round 7",
      "Round 8",
      "Round 9",
      "Round 10",
      "Round 11",
      "Round 12",
      "Round 13",
      "Round 14",
      "Round 15",
      "Round 16",
      "Round 17",
      "Round 18",
      "Round 19",
      "Round 20",
      "Round 21",
      "Round 22",
      "Round 23",
      "Round 24",
      "Round 25"
    ];
    return (
      <div className="TippingContainer">
        {/* Tipping Container */}
        <div className="tipping-container">
          {/* Select Round */}
          <div className="form-group select-round">
            <label htmlFor="gender">Select Round</label>
            <select className="form-control" id="selectRound">
              {rounds.map((round, index) => (
                <option
                  key={index}
                  onClick={() => this.selectItem(round)}
                  className={
                    this.state.selectedItem === round ? "selected" : ""
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
