import React, { Component } from 'react';
import './TippingRow.css';

class TippingRow extends Component {
  render() {
    return (
      <div className="TippingRow">
        <div className="HomeTeam">
          <input type="radio"
                 name={this.props.name} 
                 value="home"
                 onChange={this.props.onSelectionChange}/>
        </div>
        <div className="AwayTeam">
          <input type="radio"
                 name={this.props.name} 
                 value="away"
                 onChange={this.props.onSelectionChange}/>
        </div>
      </div>
    );
  }
}

export default TippingRow;
