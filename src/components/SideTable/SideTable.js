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
    const leagueTable = this.state.fixtures.map((fixture, index) => {
      // Arrays
      let allNames = [];
      let teamNames = [];
      let table = [];

      // Collect all team names
      allNames.push(fixture.home);
      allNames.push(fixture.away);

      // Remove duplicate names
      for (let i = 0; i < allNames.length; i++) {
        if (teamNames.indexOf(allNames[i]) === -1) {
          teamNames.push(allNames[i]);
        }
      }
      console.log(teamNames);

      // Create League Table
      teamNames.forEach(name => {
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
        table.push(teamScore);
      });

      fixture.forEach(fixture => {
        let homeTeam = table.find(team => team.name === fixture.home);
        let awayTeam = table.find(team => team.name === fixture.away);

        homeTeam.homePointsScored += +fixture.resulthome;
        homeTeam.homePointsConceded += +fixture.resultaway;
        awayTeam.awayPointsScored += +fixture.resultaway;
        awayTeam.awayPointsConceded += +fixture.resulthome;

        if (parseInt(fixture.resulthome) > parseInt(fixture.resultaway)) {
          homeTeam.wins += 1;
          homeTeam.points += 2;
          awayTeam.losses += 1;
        }
        if (parseInt(fixture.resultaway) > parseInt(fixture.resulthome)) {
          awayTeam.wins += 1;
          awayTeam.points += 2;
          homeTeam.losses += 1;
        }
      });

      // Sort league table by points
      table.sort((a, b) => {
        let x = a.points;
        let y = b.points;
        if (x < y) {
          return 1;
        }
        if (y < x) {
          return -1;
        }
      });
      console.log(table);

      //console.log(fixture);
      return (
        <div className="tipping-row">
          <div className="squad away-squad text-right">
            <h1>Hello World</h1>
          </div>
        </div>
      );
    });
    return (
      <div className="SideTable">
        {/* Side Table */}
        <div className="col-md-3">
          <div className="panel panel-default">
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
              <tbody>
                {leagueTable}
                <tr>
                  <th scope="row">1</th>
                  <td />
                  <td>Dragons</td>
                  <td>12</td>
                  <td>4</td>
                  <td>26</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td />
                  <td>Rabbitohs</td>
                  <td>11</td>
                  <td>5</td>
                  <td>24</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td />
                  <td>Storm</td>
                  <td>10</td>
                  <td>6</td>
                  <td>22</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td />
                  <td>Panthers</td>
                  <td>10</td>
                  <td>6</td>
                  <td>22</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td />
                  <td>Warriors</td>
                  <td>10</td>
                  <td>6</td>
                  <td>22</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td />
                  <td>Roosters</td>
                  <td>10</td>
                  <td>6</td>
                  <td>20</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td />
                  <td>Sharks</td>
                  <td>10</td>
                  <td>6</td>
                  <td>20</td>
                </tr>
                <tr>
                  <th scope="row">8 </th>
                  <td />
                  <td>Broncos</td>
                  <td>9</td>
                  <td>7</td>
                  <td>18</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default SideTable;
