import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Login extends Component {
  render() {
    return (
      <div className="Login">

        { /* Main Section */ }
        <section id="main">
          <div className="container">
            <div className="row">
              { /* col-md-4 */ }
              <div className="col-md-4 col-md-offset-4">
                <form action="index.html" id="login" className="well">
                  <div className="form-group">
                    <label>Email Address</label>
                    
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    
                  </div>
                  <button type="submit" className="btn btn-default btn-block">Login</button>
                </form>
              </div>{ /* End of col-md-4 */ }
            </div>{ /* End of Row */ }
          </div>{ /* End of Container */ }
        </section>        

      </div>
    );
  }
}

export default Login;
