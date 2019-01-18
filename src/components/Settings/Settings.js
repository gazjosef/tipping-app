import React, { Component } from "react";
import SideTable from "../SideTable/SideTable";
import { Link } from "react-router-dom";

class Settings extends Component {
  render() {
    return (
      <div className="Settings">
        <div className="Settings">
          {/* Breadcrumb */}
          <section id="breadcrumb">
            <div className="container text-left">
              <ol className="breadcrumb">
                <li>
                  <Link to="/">Dashboard</Link>
                </li>
                <li className="active">Settings</li>
              </ol>
            </div>
          </section>

          {/* Main Section */}
          <section id="main">
            <div className="container">
              <div className="row">
                <SideTable />
                {/* Main Section */}
                <div className="col-md-9">
                  {/* League Table */}
                  <div className="panel panel-default">
                    <div className="panel-heading main-color-bg">
                      <h3 className="panel-title">Settings</h3>
                    </div>

                    <div className="panel-body">
                      {/* Tipping Container */}

                      {/* End of League Table */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default Settings;
