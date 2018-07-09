import React, { Component } from 'react';

export default class LeaderBoard extends Component {
  state = {
    schedule: null,
    sortedResults: null
  };
  componentWillMount() {
    this._loadScheduleRequest = this.loadSchedule()
                                    .then(schedule => 
    {
      schedule = schedule.schedule;
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
      this.setState({schedule: schedule.schedule, sortedResults: sortedResults});
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
    this.schedule = response.json();
    return this.schedule;
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
              <tr>
                <th scope="row">1</th>
                <td></td>
                <td>Dragons</td>
                <td>12</td>
                <td>4</td>
                <td>26</td>            
              </tr>
              <tr>
                <th scope="row">2</th>
                <td></td>
                <td>Rabbitohs</td>
                <td>11</td>
                <td>5</td>
                <td>24</td>            
              </tr>
              <tr>
                <th scope="row">3</th>
                <td></td>
                <td>Storm</td>
                <td>10</td>
                <td>6</td>
                <td>22</td>            
              </tr>
              <tr>
                <th scope="row">4</th>
                <td></td>
                <td>Panthers</td>
                <td>10</td>
                <td>6</td>
                <td>22</td>            
              </tr>
              <tr>
                <th scope="row">5</th>
                <td></td>
                <td>Warriors</td>
                <td>10</td>
                <td>6</td>
                <td>22</td>            
              </tr>
              <tr>
                <th scope="row">6</th>
                <td></td>
                <td>Roosters</td>
                <td>10</td>
                <td>6</td>
                <td>20</td>            
              </tr>
              <tr>
                <th scope="row">7</th>
                <td></td>
                <td>Sharks</td>
                <td>10</td>
                <td>6</td>
                <td>20</td>            
              </tr>
              <tr>
                <th scope="row">8 </th>
                <td></td>
                <td>Broncos</td>
                <td>9</td>
                <td>7</td>
                <td>18</td>            
              </tr>                 
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}