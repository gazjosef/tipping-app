import React, { Component } from "react";

export default class Comp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tips: [],
      users: []
    };
  }

  componentDidMount() {
    // Get Tips
    fetch("http://localhost:5000/comp", {
      method: "get",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(tips => {
        console.log("tips: ", tips);
        this.setState({
          tips: tips
        });
      });
    // Get Fixtures
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
    // Get Users
    fetch("http://localhost:5000/users", {
      method: "get",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(users => {
        console.log("users: ", users);
        this.setState({
          users: users
        });
      });
  }

  render() {
    console.log(this.state);

    let compTable = [];

    this.state.users.forEach(user => {
      let compScore = {
        name: user.name,
        email: user.email,
        wins: 0,
        losses: 0,
        paid: ""
      };
      compTable.push(compScore);
    });
    console.log(compTable);

    const compRow = compTable.map((user, index) => {
      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.wins}</td>
          <td>{user.losses}</td>
          <td>{user.points}</td>
        </tr>
      );
    });
    return (
      <div className="compTable">
        {/* Comp Results */}
        <div className="col-md-9">
          <div className="panel panel-default">
            {/* Heading */}
            <div className="panel-heading main-color-bg">
              <h3 className="panel-title">Competition Table</h3>
            </div>
            {/* Comp Table */}
            <div className="panel panel-default">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">P</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">W</th>
                    <th scope="col">L</th>
                    <th scope="col">Paid</th>
                  </tr>
                </thead>
                <tbody>{compRow}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
