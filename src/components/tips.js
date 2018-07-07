import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Tips extends Component {
  render() {
    return (
      <div className="Tips">


        { /* Breadcrumb */ }
        <section id="breadcrumb">
          <div class="container text-left">
            <ol class="breadcrumb">
              <li><Link to="/">Dashboard</Link></li>
              <li class="active">Tips</li>
            </ol>
          </div>
        </section>

        { /* Main Section */ }
        <section id="main">
          <div class="container">
            <div class="row">
              
              
              <div class="col-md-3">

                <div class="panel panel-default">
                  <div class="panel-heading main-color-bg">
                    <h3 class="panel-title">League Table</h3>
                  </div>

                  { /* League Table */  }
                  <table class="table table-striped">
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
              <div class="col-md-9">
                
                { /* Week One Tips */ }
                <div class="panel panel-default">

                  <div class="panel-heading main-color-bg">
                    <h3 class="panel-title">Week One Tips</h3>
                  </div>

                  <div class="panel-body">

                    { /* Tipping Container */ }
                    <div class="tipping-container">

                      { /* Tipping Row */ }
                      <div class="tipping-row">

                        <div class="squad home-squad">
                          <div class="radio home-radio">
                            
                          </div>                  
                          <div class="home-name">
                            Dragons
                          </div>
                          <div class="home-logo">
                            
                          </div>
                          <div class="home-score">
                            20
                          </div>
                        </div>

                        <div class="game-details text-center">
                          <div class="game-date">
                            Thurs 28th June
                          </div>
                          <div class="game-time">
                            7:50PM
                          </div>
                          <div class="game-venue">
                            WIN Stadium
                          </div>
                        </div>

                        <div class="squad away-squad text-right">
                          <div class="away-score">
                            18
                          </div>
                          <div class="away-logo">

                          </div>
                          <div class="away-name">
                            Eels
                          </div>
                          <div class="radio away-radio">

                          </div>

                        </div>

                      </div>

                      { /* Tipping Row */ }
                      <div class="tipping-row">

                        <div class="squad home-squad">
                          <div class="radio home-radio">
                            
                          </div>                  
                          <div class="home-name">
                            Dragons
                          </div>
                          <div class="home-logo">
                            
                          </div>
                          <div class="home-score">
                            20
                          </div>
                        </div>

                        <div class="game-details text-center">
                          <div class="game-date">
                            Thurs 28th June
                          </div>
                          <div class="game-time">
                            7:50PM
                          </div>
                          <div class="game-venue">
                            WIN Stadium
                          </div>
                        </div>

                        <div class="squad away-squad text-right">
                          <div class="away-score">
                            18
                          </div>
                          <div class="away-logo">

                          </div>
                          <div class="away-name">
                            Eels
                          </div>
                          <div class="radio away-radio">

                          </div>

                        </div>

                      </div>

                      { /* Tipping Row */ }
                      <div class="tipping-row">

                        <div class="squad home-squad">
                          <div class="radio home-radio">
                            
                          </div>                  
                          <div class="home-name">
                            Dragons
                          </div>
                          <div class="home-logo">
                            
                          </div>
                          <div class="home-score">
                            20
                          </div>
                        </div>

                        <div class="game-details text-center">
                          <div class="game-date">
                            Thurs 28th June
                          </div>
                          <div class="game-time">
                            7:50PM
                          </div>
                          <div class="game-venue">
                            WIN Stadium
                          </div>
                        </div>

                        <div class="squad away-squad text-right">
                          <div class="away-score">
                            18
                          </div>
                          <div class="away-logo">

                          </div>
                          <div class="away-name">
                            Eels
                          </div>
                          <div class="radio away-radio">

                          </div>

                        </div>

                      </div>

                      { /* Tipping Row */ }
                      <div class="tipping-row">

                        <div class="squad home-squad">
                          <div class="radio home-radio">
                            
                          </div>                  
                          <div class="home-name">
                            Dragons
                          </div>
                          <div class="home-logo">
                            
                          </div>
                          <div class="home-score">
                            20
                          </div>
                        </div>

                        <div class="game-details text-center">
                          <div class="game-date">
                            Thurs 28th June
                          </div>
                          <div class="game-time">
                            7:50PM
                          </div>
                          <div class="game-venue">
                            WIN Stadium
                          </div>
                        </div>

                        <div class="squad away-squad text-right">
                          <div class="away-score">
                            18
                          </div>
                          <div class="away-logo">

                          </div>
                          <div class="away-name">
                            Eels
                          </div>
                          <div class="radio away-radio">

                          </div>

                        </div>

                      </div>

                      { /* Tipping Row */ }
                      <div class="tipping-row">

                        <div class="squad home-squad">
                          <div class="radio home-radio">
                            
                          </div>                  
                          <div class="home-name">
                            Dragons
                          </div>
                          <div class="home-logo">
                            
                          </div>
                          <div class="home-score">
                            20
                          </div>
                        </div>

                        <div class="game-details text-center">
                          <div class="game-date">
                            Thurs 28th June
                          </div>
                          <div class="game-time">
                            7:50PM
                          </div>
                          <div class="game-venue">
                            WIN Stadium
                          </div>
                        </div>

                        <div class="squad away-squad text-right">
                          <div class="away-score">
                            18
                          </div>
                          <div class="away-logo">

                          </div>
                          <div class="away-name">
                            Eels
                          </div>
                          <div class="radio away-radio">

                          </div>

                        </div>

                      </div>

                      { /* Tipping Row */ }
                      <div class="tipping-row">

                        <div class="squad home-squad">
                          <div class="radio home-radio">
                            
                          </div>                  
                          <div class="home-name">
                            Dragons
                          </div>
                          <div class="home-logo">
                            
                          </div>
                          <div class="home-score">
                            20
                          </div>
                        </div>

                        <div class="game-details text-center">
                          <div class="game-date">
                            Thurs 28th June
                          </div>
                          <div class="game-time">
                            7:50PM
                          </div>
                          <div class="game-venue">
                            WIN Stadium
                          </div>
                        </div>

                        <div class="squad away-squad text-right">
                          <div class="away-score">
                            18
                          </div>
                          <div class="away-logo">

                          </div>
                          <div class="away-name">
                            Eels
                          </div>
                          <div class="radio away-radio">

                          </div>

                        </div>

                      </div>

                      { /* Tipping Row */ }
                      <div class="tipping-row">

                        <div class="squad home-squad">
                          <div class="radio home-radio">
                            
                          </div>                  
                          <div class="home-name">
                            Dragons
                          </div>
                          <div class="home-logo">
                            
                          </div>
                          <div class="home-score">
                            20
                          </div>
                        </div>

                        <div class="game-details text-center">
                          <div class="game-date">
                            Thurs 28th June
                          </div>
                          <div class="game-time">
                            7:50PM
                          </div>
                          <div class="game-venue">
                            WIN Stadium
                          </div>
                        </div>

                        <div class="squad away-squad text-right">
                          <div class="away-score">
                            18
                          </div>
                          <div class="away-logo">

                          </div>
                          <div class="away-name">
                            Eels
                          </div>
                          <div class="radio away-radio">

                          </div>

                        </div>

                      </div>

                      { /* Tipping Row */ }
                      <div class="tipping-row">

                        <div class="squad home-squad">
                          <div class="radio home-radio">
                            
                          </div>                  
                          <div class="home-name">
                            Dragons
                          </div>
                          <div class="home-logo">
                            
                          </div>
                          <div class="home-score">
                            20
                          </div>
                        </div>

                        <div class="game-details text-center">
                          <div class="game-date">
                            Thurs 28th June
                          </div>
                          <div class="game-time">
                            7:50PM
                          </div>
                          <div class="game-venue">
                            WIN Stadium
                          </div>
                        </div>

                        <div class="squad away-squad text-right">
                          <div class="away-score">
                            18
                          </div>
                          <div class="away-logo">

                          </div>
                          <div class="away-name">
                            Eels
                          </div>
                          <div class="radio away-radio">

                          </div>

                        </div>

                      </div>                                            
                     
                    </div>
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

export default Tips;
