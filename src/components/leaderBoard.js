import React, { Component } from 'react';

export default class LeaderBoard extends Component {
  state = {
    results: null
  };
  componentWillMount() {
    this.loadResults();
  }
  setResult(output, team, result)
  {
    if(result === undefined) return;

    if(team in output)
    {
      output[team] += +result;
    }
    else
    {
      output[team] = +result;
    }
  }
  async loadResults()
  {
    var response = await fetch("/results");
    var results = await response.json();
    console.log("results", results);
    this.setState({results: results})
  }

  render()
  {
    var output = [];
    if(this.state.results !== null)
    {
      for(var key in this.state.results)
      {
        var result = this.state.results[key];
        
        output.push((
        <tr key={key}>
          <th scope="row">{+key + 1}</th>
          <td></td>
          <td>{result.TeamName}</td>
          <td>{result.Wins}</td>
          <td>{result.Losses}</td>
          <td>{result.Points}</td>
        </tr>));
      }
    }
    console.log(output);
    return (
      <div className="leader-board">
        <div className="panel panel-default">
          <div className="panel-heading main-color-bg">
            <h3 className="panel-title">League Table</h3>
          </div>

          { /* League Table */ }
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">P</th>
                <th scope="col"></th>
                <th scope="col">Team</th>
                <th scope="col">W</th>
                <th scope="col">L</th>
                <th scope="col">Pts</th>
              </tr>
            </thead>
            <tbody>
              {output}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}