import React, { Component } from 'react';

export default class LeaderBoard extends Component {
  state = {
    schedule: null,
    sortedResults: null
  };
  componentWillMount() {
    this._loadScheduleRequest = this.loadSchedule()
                                    .then(schedule  => 
    {
      console.log(schedule);
      //create a dictionary of schedule based on teams as key
      var teamResults = {};
      for(var i = 0; i < schedule.length; ++i)
      {
        var item = schedule[i];
        this.setResult(teamResults, item.HomeTeam, item.HomeResult);
        this.setResult(teamResults, item.AwayTeam, item.AwayResult);
      }
      console.log(teamResults);
      var sortedResults = [];
      for(var key in teamResults)
      {
        sortedResults.push({name: key, result: teamResults[key] });
      }
      this.setState({sortedResults: sortedResults});
    });
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
  async loadSchedule()
  {
    var response = await fetch("/schedule");
    var decodedResponse = await response.json();
    console.log("schedule", decodedResponse);
    this.setState({schedule: decodedResponse.result})
    return decodedResponse.result;
  }
  componentWillUnmount() {
    if (this._loadScheduleRequest) {
      this._loadScheduleRequest.cancel();
    }
  }

  render()
  {
    var output = [];
    for(var key in this.state.sortedResults)
    {
      var result = this.state.sortedResults[key];
      
      output.push((
      <tr key={key}>
        <th scope="row">1</th>
        <td></td>
        <td>{result.name}</td>
        <td></td>
        <td></td>
        <td>{result.result}</td>            
      </tr>));
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