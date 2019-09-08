import React, { Component } from "react";
import "./dropdown.css";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixtures: [],
      rounds: [],
      name: "round_id",
      showItems: false,
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
        this.setState({
          fixtures: fixtures,
          rounds: fixtures.round,
          selectedItem: fixtures && fixtures[0]
        });
      });
  }

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }));
  };

  selectItem = item =>
    this.setState({
      selectedItem: item,
      showItems: false
    });

  render() {
    console.log(this.state);

    let allRounds = [];
    let rounds = [
      "Round 1",
      "Round 2",
      "Round 3",
      "Round 4",
      "Round 5",
      "Round 6",
      "Round 7",
      "Round 8",
      "Round 9",
      "Round 10"
    ];

    // Collect all rounds
    // this.state.fixtures.map(fixture => {
    //   return allRounds.push(fixture.round);
    // });

    // console.log(allRounds);
    // Remove dupliates
    // allRounds.forEach(round => {
    //   if (rounds.indexOf(round) === -1) {
    //     rounds.push(round);
    //   }
    // });
    console.log(rounds);
    return (
      <div>
        <div className="select-box--box">
          <div className="select-box--container">
            {/* <div className="select-box--selected-item">
              {this.state.selectedItem.value}
            </div>
            <div className="select-box--arrow" onClick={this.dropDown}>
              <span
                className={`${
                  this.state.showItems
                    ? "select-box--arrow-up"
                    : "select-box--arrow-down"
                }`}
              />
            </div> */}

            {/* Fixture Round */}
            {/* <div
              style={{ display: this.state.showItems ? "block" : "none" }}
              className="select-box--items"
            > */}
            {/* {rounds.map((round, index) => (
                <div
                  key={index}
                  onClick={() => this.selectItem(round)}
                  className={
                    this.state.selectedItem === round ? "selected" : ""
                  }
                >
                  {round}
                </div>
              ))} 
            </div>*/}
          </div>
        </div>
        <input
          type="hidden"
          value={this.state.selectedItem.id}
          name={this.state.name}
        />
        <div className="form-group select-round">
          <label htmlFor="gender">Select Round</label>
          <select className="form-control" id="selectRound">
            {rounds.map((round, index) => (
              <option
                key={index}
                onClick={() => this.selectItem(round)}
                className={this.state.selectedItem === round ? "selected" : ""}
              >
                {round}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default Dropdown;
