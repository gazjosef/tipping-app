import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("http://localhost:5000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user) {
          this.props.loadUser(user);
          this.props.onRouteChange("Dashboard");
        }
      });
  };

  render() {
    return (
      <div className="container">
        <div className="form-signin">
          <h2 className="form-signin-heading">Register</h2>

          <div className="form-group">
            <label htmlFor="inputName">Name</label>
            <input
              onChange={this.onNameChange}
              type="text"
              id="inputName"
              name="name"
              className="form-control"
              placeholder="Enter name"
              required
              autoFocus
            />
          </div>

          <div className="form-group">
            <label htmlFor="inputEmail">Email address</label>
            <input
              onChange={this.onEmailChange}
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Enter email address"
              required
              autoFocus
            />
          </div>

          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input
              onChange={this.onPasswordChange}
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Enter password"
              required
            />
          </div>
          {/* 
          <div className="form-group">
            <label htmlFor="inputFavTeam">Select Team</label>
            <select className="form-control" id="favTeam">
              <option>Brisbane Broncos</option>
              <option>Canberra Raiders</option>
              <option>Canterbury Bulldogs</option>
              <option>Cronulla Sharks</option>
              <option>Gold Coast Titans</option>
              <option>Manly Sea Eagles</option>
              <option>Melbourne Storm</option>
              <option>Newcastle Knights</option>
              <option>New Zealand Warriors</option>
              <option>North Queensland Cowboys</option>
              <option>Parramatta Eels</option>
              <option>Penrith Panthers</option>
              <option>South Sydney Rabbitohs</option>
              <option>St George Illawarra Dragons</option>
              <option>Sydney Roosters</option>
              <option>West Tigers</option>
            </select>
          </div> */}

          <button
            onClick={this.onSubmitSignIn}
            className="btn btn-lg btn-primary btn-block pointer"
            type="submit"
            value="register"
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Register;
