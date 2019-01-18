import React, { Component } from "react";
import SideTable from "../SideTable/SideTable";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="Comp">
        {/* Breadcrumb */}
        <section id="breadcrumb">
          <div className="container text-left">
            <ol className="breadcrumb">
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li className="active">Comp</li>
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
                {/* Comp Table */}
                <div className="panel panel-default">
                  <div className="panel-heading main-color-bg">
                    <h3 className="panel-title">Comp Table</h3>
                  </div>

                  <div className="panel-body">
                    {/* Tipping Container */}
                    <div className="leagueTable">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>P</th>
                            <th>First</th>
                            <th>Last</th>
                            <th>Email</th>
                            <th>Paid?</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>1</th>
                            <td>Tom</td>
                            <td>Parson</td>
                            <td>tom.parson@nielsen.com</td>
                            <td>
                              <span
                                className="glyphicon glyphicon-ok"
                                aria-hidden="true"
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>2</th>
                            <td>Kain</td>
                            <td>Owen</td>
                            <td>kain.owen@nielsen.com</td>
                            <td>
                              <span
                                className="glyphicon glyphicon-remove"
                                aria-hidden="false"
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>3</th>
                            <td>Sam</td>
                            <td>Turner</td>
                            <td>sam.turner@nielsen.com</td>
                            <td>
                              <span
                                className="glyphicon glyphicon-ok"
                                aria-hidden="true"
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>4</th>
                            <td>Chris</td>
                            <td>Riley</td>
                            <td>chris.riley@nielsen.com</td>
                            <td>
                              <span
                                className="glyphicon glyphicon-ok"
                                aria-hidden="true"
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>5</th>
                            <td>Matt</td>
                            <td>Whiteford</td>
                            <td>matt.whiteford@nielsen.com</td>
                            <td>
                              <span
                                className="glyphicon glyphicon-ok"
                                aria-hidden="true"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* End of League Table */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Footer;
