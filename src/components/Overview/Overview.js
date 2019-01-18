import React, { Component } from "react";

class Overview extends Component {
  render() {
    return (
      <div className="Overview">
        {/* Website Overview */}
        <div className="panel panel-default">
          <div className="panel-heading main-color-bg">
            <h3 className="panel-title">Website Overview</h3>
          </div>
          <div className="panel-body">
            <div className="col-md-3">
              <div className="well dash-box">
                <h2>
                  <i className="fas fa-check" /> 6/8
                </h2>
                <h4>Tips</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="well dash-box">
                <h2>
                  <i className="fas fa-list-ol" /> 2/10
                </h2>
                <h4>Table</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="well dash-box">
                <h2>
                  <i className="fas fa-dollar-sign" /> 220
                </h2>
                <h4>Comp</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="well dash-box">
                <h2>
                  <i className="fas fa-user-cog" />{" "}
                </h2>
                <h4>Settings</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Overview;
