import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Table extends Component {
  render() {
    return (
      <div className="Table">


        { /* Breadcrumb */ }
        <section id="breadcrumb">
          <div className="container text-left">
            <ol className="breadcrumb">
              <li><Link to="/">Dashboard</Link></li>
              <li className="active">Table</li>
            </ol>
          </div>
        </section>

        { /* Main Section */ }
        <section id="main">
          <div className="container">
            <div className="row">
              
              
              <div className="col-md-3">

                <div className="panel panel-default">
                  <div className="panel-heading main-color-bg">
                    <h3 className="panel-title">League Table</h3>
                  </div>

                  { /* League Table */  }
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">P</th>
                        <th scope="col"></th>
                        <th scope="col">Team</th>
                        <th scope="col">W</th>
                        <th scope="col">L</th>
                        <th scope="col">Pts</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td></td>
                        <td>Dragons</td>
                        <td>12</td>
                        <td>4</td>
                        <td>26</td>            
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td></td>
                        <td>Rabbitohs</td>
                        <td>11</td>
                        <td>5</td>
                        <td>24</td>            
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td></td>
                        <td>Storm</td>
                        <td>10</td>
                        <td>6</td>
                        <td>22</td>            
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td></td>
                        <td>Panthers</td>
                        <td>10</td>
                        <td>6</td>
                        <td>22</td>            
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td></td>
                        <td>Warriors</td>
                        <td>10</td>
                        <td>6</td>
                        <td>22</td>            
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td></td>
                        <td>Roosters</td>
                        <td>10</td>
                        <td>6</td>
                        <td>20</td>            
                      </tr>
                      <tr>
                        <th scope="row">7</th>
                        <td></td>
                        <td>Sharks</td>
                        <td>10</td>
                        <td>6</td>
                        <td>20</td>            
                      </tr>
                      <tr>
                        <th scope="row">8 </th>
                        <td></td>
                        <td>Broncos</td>
                        <td>9</td>
                        <td>7</td>
                        <td>18</td>            
                      </tr>                 
                    </tbody>
                  </table>
                </div>

              </div>
              
              { /* Main Section */ }
              <div className="col-md-9">
                
          
                { /* League Table */ }
                <div className="panel panel-default">

                  <div className="panel-heading main-color-bg">
                    <h3 className="panel-title">League Table</h3>
                  </div>

                  <div className="panel-body">

                    { /* Tipping Container */ }
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
                            <td>Riley</td>
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
                    { /* End of League Table */ }
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
