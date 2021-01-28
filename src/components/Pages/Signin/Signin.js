import React, { useState } from 'react';
import "./Signin.css";


export const Signin = (props) => {
    const [ signInEmail, setSignInEmail] = useState();
    const [ signInPassword, setSignInPassword] = useState();

    const onEmailChange = event => {
        setSignInEmail(event.target.value)
      };
    
    const onPasswordChange = event => {
        setSignInPassword(event.target.value)
      };
    
    const onSubmitSignIn = () => {
        fetch("https://tipping-app-api.herokuapp.com/signin", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: signInEmail,
            password: signInPassword
          })
        })
          .then(response => response.json())
          .then(user => {
            if (user.id) {
              props.loadUser(user);
              props.onRouteChange("Dashboard");
            }
          });
      };

    return (
        <div className="container">
            <div className="form-signin">
                <h2 className="form-signin-heading">Sign In</h2>

                <div className="form-group">
                    <label htmlFor="inputEmail" className="sr-only">
                    Email address
                    </label>
                    <input
                    onChange={onEmailChange}
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
                    onChange={onPasswordChange}
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required
                    />
                </div>

                <button
                    onClick={onSubmitSignIn}
                    className="btn btn-lg btn-primary btn-block"
                    type="submit"
                >
                    Sign in
                </button>

                <button
                    onClick={() => props.onRouteChange("Register")}
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
    )
}
