import React, { useState } from 'react'

export const Register = (props) => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ sport, setSport ] = useState('');
    const [ password, setPassword ] = useState('');

    const onNameChange = (event) => {
        setName(event.target.value)
    };
    
    const onEmailChange = (event) => {
        setEmail(event.target.value)
    };
    
    const onSportChange = (event) => {
        setSport(event.target.value)
    };
    
    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    };

    const onSubmitSignIn = () => {
        fetch('https://tipping-app-api.herokuapp.com/register', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: name,
            email: email,
            sport: sport,
            password: password,
          }),
        })
          .then((response) => response.json())
          .then((user) => {
            if (user) {
              props.loadUser(user);
              props.onRouteChange('Dashboard');
            }
          });
    };

    return (
        <div className="container">
        <div className="form-signin">
          <h2 className="form-signin-heading">Register</h2>

          <div className="form-group">
            <label htmlFor="inputName">Name</label>
            <input
              onChange={onNameChange}
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
              onChange={onEmailChange}
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Enter email address"
              required
              autoFocus
            />
          </div>

          <div className="form-group">
            <label htmlFor="inputSport">Sport</label>
            <input
              onChange={onSportChange}
              type="text"
              id="inputSport"
              className="form-control"
              placeholder="Enter sport"
              required
              autoFocus
            />
          </div>

          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input
              onChange={onPasswordChange}
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
            onClick={onSubmitSignIn}
            className="btn btn-lg btn-primary btn-block pointer"
            type="submit"
            value="register"
          >
            Register
          </button>
        </div>
      </div>
    )
}
