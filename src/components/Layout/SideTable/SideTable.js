import React, { Component } from "react";

class SideTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixtures: []
    };
  }
  componentDidMount() {
    fetch("https://tipping-app-api.herokuapp.com/table", {
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
  render() {
    // Arrays
    let teams = [];
    let allNames = [];
    let leagueTable = [];

    // Collect all names
    this.state.fixtures.map((fixture, index) => {
      return allNames.push(fixture.home) && allNames.push(fixture.away);
    });

    // Remove duplicates
    allNames.forEach(name => {
      if (teams.indexOf(name) === -1) {
        teams.push(name);
      }
    });

    // Create League Table
    teams.forEach(name => {
      let teamScore = {
        name: name,
        wins: 0,
        losses: 0,
        homePointsScored: 0,
        homePointsConceded: 0,
        awayPointsScored: 0,
        awayPointsConceded: 0,
        points: 0
      };
      leagueTable.push(teamScore);
    });

    this.state.fixtures.forEach(fixture => {
      let homeTeam = leagueTable.find(team => team.name === fixture.home);
      let awayTeam = leagueTable.find(team => team.name === fixture.away);

      homeTeam.homePointsScored += +parseInt(fixture.result_home);
      homeTeam.homePointsConceded += +parseInt(fixture.result_away);
      awayTeam.awayPointsScored += +parseInt(fixture.result_away);
      awayTeam.awayPointsConceded += +parseInt(fixture.result_home);

      if (parseInt(fixture.result_home) > parseInt(fixture.result_away)) {
        homeTeam.wins += 1;
        homeTeam.points += 2;
        awayTeam.losses += 1;
      }
      if (parseInt(fixture.result_away) > parseInt(fixture.result_home)) {
        awayTeam.wins += 1;
        awayTeam.points += 2;
        homeTeam.losses += 1;
      }
    });

    // Sort league table by points
    leagueTable.sort((a, b) => {
      return a.points < b.points ? 1 : -1;
    });

    const leagueRow = leagueTable.map((team, index) => {
      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td />
          <td>{team.name}</td>
          <td>{team.wins}</td>
          <td>{team.losses}</td>
          <td>{team.points}</td>
        </tr>
      );
    });
    return (
      <div className="SideTable">
        {/* Side Table */}
        <div className="col-md-3">
          <div className="panel panel-default">
            {/* Heading */}
            <div className="panel-heading main-color-bg">
              <h3 className="panel-title">League Table</h3>
            </div>

            {/* League Table */}
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">P</th>
                  <th scope="col" />
                  <th scope="col">Team</th>
                  <th scope="col">W</th>
                  <th scope="col">L</th>
                  <th scope="col">Pts</th>
                </tr>
              </thead>
              <tbody>{leagueRow}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default SideTable;
