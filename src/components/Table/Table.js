import React, { Component } from "react";
import SideTable from "../SideTable/SideTable";
import { Link } from "react-router-dom";

class Table extends Component {
  render() {
    return (
      <div className="Table">
        {/* Breadcrumb */}
        <section id="breadcrumb">
          <div className="container text-left">
            <ol className="breadcrumb">
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li className="active">Table</li>
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
                    <h3 className="panel-title">League Table</h3>
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
                            <th>Team Name</th>
                            <th>Fav Team</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>1</th>
                            <td>Tom</td>
                            <td>Parsons</td>
                            <td>Tom's Sea Eagles</td>
                            <td>Manly</td>
                          </tr>
                          <tr>
                            <th>2</th>
                            <td>Kain</td>
                            <td>Owen</td>
                            <td>Kain's Knights</td>
                            <td>Newcastle</td>
                          </tr>
                          <tr>
                            <th>3</th>
                            <td>Sam</td>
                            <td>Turner</td>
                            <td>Sammy's Jets</td>
                            <td>No Team</td>
                          </tr>
                          <tr>
                            <th>4</th>
                            <td>Chris</td>
                            <td>Riley</td>
                            <td>Chris FC</td>
                            <td>Manly</td>
                          </tr>
                          <tr>
                            <th>5</th>
                            <td>Matt</td>
                            <td>Whiteford</td>
                            <td>Matt's Panthers</td>
                            <td>Penrith</td>
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
export default Table;
