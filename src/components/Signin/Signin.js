import React, { Component } from "react";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: ""
    };
  }

  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    console.log("test submit signin");
    fetch("https://tipping-app-api.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("Dashboard");
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <div className="container">
        <div className="form-signin">
          <h2 className="form-signin-heading">Sign In</h2>

          <div className="form-group">
            <label htmlFor="inputEmail" className="sr-only">
              Email address
            </label>
            <input
              onChange={this.onEmailChange}
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required
              autoFocus
            />
          </div>

          <div className="form-group">
            <label htmlFor="inputPassword" className="sr-only">
              Password
            </label>
            <input
              onChange={this.onPasswordChange}
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>

          <button
            onClick={this.onSubmitSignIn}
            className="btn btn-lg btn-primary btn-block"
            type="submit"
          >
            Sign in
          </button>

          <button
            onClick={() => onRouteChange("Register")}
            className="btn btn-lg btn-danger btn-block"
            type="submit"
          >
            Register
          </button>

          {/*  
          <div>
            <p onClick={() => onRouteChange("Register")}>Register</p>
          </div>
          */}
        </div>
      </div>
    );
  }
}

export default Signin;
