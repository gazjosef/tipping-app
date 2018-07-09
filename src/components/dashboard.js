import React, { Component } from 'react';
import LeaderBoard from './leaderBoard';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">


        { /* Breadcrumb */ }
        <section id="breadcrumb">
          <div className="container text-left">
            <ol className="breadcrumb">
              <li className="active">Dashboard</li>
            </ol>
          </div>
        </section>

        { /* Main */ }
        <section id="main">
          <div className="container">
            <div className="row">
              
              { /* Side Table */ }
              <div className="col-md-3">
                <LeaderBoard/>
              </div>
              
              { /* Main Section */}
              <div className="col-md-9">

                { /* Website Overview */}
                <div className="panel panel-default">
                  <div className="panel-heading main-color-bg">
                    <h3 className="panel-title">Website Overview</h3>
                  </div>
                  <div className="panel-body">
                    <div className="col-md-3">
                      <div className="well dash-box">
                        <h2><i className="fas fa-check"></i> 6/8</h2>
                        <h4>Tips</h4>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="well dash-box">
                        <h2><i className="fas fa-list-ol"></i> 2/10</h2>
                        <h4>Table</h4>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="well dash-box">
                        <h2><i className="fas fa-dollar-sign"></i> 220</h2>
                        <h4>Comp</h4>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="well dash-box">
                        <h2><i className="fas fa-user-cog"></i> </h2>
                        <h4>Settings</h4>
                      </div>
                    </div>
                  </div>
                </div>
                
                { /* Latest Tips */}
                <div className="panel panel-default">

                  <div className="panel-heading main-color-bg">
                    <h3 className="panel-title">Latest Tips</h3>
                  </div>

                  <div className="panel-body">

                    { /* Tipping Container */ }
                    <div className="tipping-container">

                      { /* Tipping Row */ }
                      <div className="tipping-row">

                        <div className="squad home-squad">
                          <div className="radio home-radio">
                            
                          </div>                  
                          <div className="home-name">
                            Dragons
                          </div>
                          <div className="home-logo">
                            
                          </div>
                          <div className="home-score">
                            20
                          </div>
                        </div>

                        <div className="game-details text-center">
                          <div className="game-date">
                            Thurs 28th June
                          </div>
                          <div className="game-time">
                            7:50PM
                          </div>
                          <div className="game-venue">
                            WIN Stadium
                          </div>
                        </div>

                        <div className="squad away-squad text-right">
                          <div className="away-score">
                            18
                          </div>
                          <div className="away-logo">

                          </div>
                          <div className="away-name">
                            Eels
                          </div>
                          <div className="radio away-radio">

                          </div>

                        </div>

                      </div>

                      { /* Tipping Row */ }
                      <div className="tipping-row">

                        <div className="squad home-squad">
                          <div className="radio home-radio">
                            
                          </div>                  
                          <div className="home-name">
                            Dragons
                          </div>
                          <div className="home-logo">
                            
                          </div>
                          <div className="home-score">
                            20
                          </div>
                        </div>

                        <div className="game-details text-center">
                          <div className="game-date">
                            Thurs 28th June
                          </div>
                          <div className="game-time">
                            7:50PM
                          </div>
                          <div className="game-venue">
                            WIN Stadium
                          </div>
                        </div>

                        <div className="squad away-squad text-right">
                          <div className="away-score">
                            18
                          </div>
                          <div className="away-logo">

                          </div>
                          <div className="away-name">
                            Eels
                          </div>
                          <div className="radio away-radio">

                          </div>

                        </div>

                      </div>

                      { /* Tipping Row */ }
                      <div className="tipping-row">

                        <div className="squad home-squad">
                          <div className="radio home-radio">
                            
                          </div>                  
                          <div className="home-name">
                            Dragons
                          </div>
                          <div className="home-logo">
                            
                          </div>
                          <div className="home-score">
                            20
                          </div>
                        </div>

                        <div className="game-details text-center">
                          <div className="game-date">
                            Thurs 28th June
                          </div>
                          <div className="game-time">
                            7:50PM
                          </div>
                          <div className="game-venue">
                            WIN Stadium
                          </div>
                        </div>

                        <div className="squad away-squad text-right">
                          <div className="away-score">
                            18
                          </div>
                          <div className="away-logo">

                          </div>
                          <div className="away-name">
                            Eels
                          </div>
                          <div className="radio away-radio">

                          </div>

                        </div>

                      </div>

                      { /* Tipping Row */ }
                      <div className="tipping-row">

                        <div className="squad home-squad">
                          <div className="radio home-radio">
                            
                          </div>                  
                          <div className="home-name">
                            Dragons
                          </div>
                          <div className="home-logo">
                            
                          </div>
                          <div className="home-score">
                            20
                          </div>
                        </div>

                        <div className="game-details text-center">
                          <div className="game-date">
                            Thurs 28th June
                          </div>
                          <div className="game-time">
                            7:50PM
                          </div>
                          <div className="game-venue">
                            WIN Stadium
                          </div>
                        </div>

                        <div className="squad away-squad text-right">
                          <div className="away-score">
                            18
                          </div>
                          <div className="away-logo">

                          </div>
                          <div className="away-name">
                            Eels
                          </div>
                          <div className="radio away-radio">

                          </div>

                        </div>

                      </div>

                      { /* Tipping Row */ }
                      <div className="tipping-row">

                        <div className="squad home-squad">
                          <div className="radio home-radio">
                            
                          </div>                  
                          <div className="home-name">
                            Dragons
                          </div>
                          <div className="home-logo">
                            
                          </div>
                          <div className="home-score">
                            20
                          </div>
                        </div>

                        <div className="game-details text-center">
                          <div className="game-date">
                            Thurs 28th June
                          </div>
                          <div className="game-time">
                            7:50PM
                          </div>
                          <div className="game-venue">
                            WIN Stadium
                          </div>
                        </div>

                        <div className="squad away-squad text-right">
                          <div className="away-score">
                            18
                          </div>
                          <div className="away-logo">

                          </div>
                          <div className="away-name">
                            Eels
                          </div>
                          <div className="radio away-radio">

                          </div>

                        </div>

                      </div>

                      { /* Tipping Row */ }
                      <div className="tipping-row">

                        <div className="squad home-squad">
                          <div className="radio home-radio">
                            
                          </div>                  
                          <div className="home-name">
                            Dragons
                          </div>
                          <div className="home-logo">
                            
                          </div>
                          <div className="home-score">
                            20
                          </div>
                        </div>

                        <div className="game-details text-center">
                          <div className="game-date">
                            Thurs 28th June
                          </div>
                          <div className="game-time">
                            7:50PM
                          </div>
                          <div className="game-venue">
                            WIN Stadium
                          </div>
                        </div>

                        <div className="squad away-squad text-right">
                          <div className="away-score">
                            18
                          </div>
                          <div className="away-logo">

                          </div>
                          <div className="away-name">
                            Eels
                          </div>
                          <div className="radio away-radio">

                          </div>

                        </div>

                      </div>

                      { /* Tipping Row */ }
                      <div className="tipping-row">

                        <div className="squad home-squad">
                          <div className="radio home-radio">
                            
                          </div>                  
                          <div className="home-name">
                            Dragons
                          </div>
                          <div className="home-logo">
                            
                          </div>
                          <div className="home-score">
                            20
                          </div>
                        </div>

                        <div className="game-details text-center">
                          <div className="game-date">
                            Thurs 28th June
                          </div>
                          <div className="game-time">
                            7:50PM
                          </div>
                          <div className="game-venue">
                            WIN Stadium
                          </div>
                        </div>

                        <div className="squad away-squad text-right">
                          <div className="away-score">
                            18
                          </div>
                          <div className="away-logo">

                          </div>
                          <div className="away-name">
                            Eels
                          </div>
                          <div className="radio away-radio">

                          </div>

                        </div>

                      </div>

                      { /* Tipping Row */ }
                      <div className="tipping-row">

                        <div className="squad home-squad">
                          <div className="radio home-radio">
                            
                          </div>                  
                          <div className="home-name">
                            Dragons
                          </div>
                          <div className="home-logo">
                            
                          </div>
                          <div className="home-score">
                            20
                          </div>
                        </div>

                        <div className="game-details text-center">
                          <div className="game-date">
                            Thurs 28th June
                          </div>
                          <div className="game-time">
                            7:50PM
                          </div>
                          <div className="game-venue">
                            WIN Stadium
                          </div>
                        </div>

                        <div className="squad away-squad text-right">
                          <div className="away-score">
                            18
                          </div>
                          <div className="away-logo">

                          </div>
                          <div className="away-name">
                            Eels
                          </div>
                          <div className="radio away-radio">

                          </div>

                        </div>

                      </div>                                            
                     
                    </div>{ /* End of Tipping Container */}


                  </div>
                </div>
              </div>{ /* End of Main Section */}
            </div>{ /* End of Row */}
          </div>{ /* End of Container */}
        </section>

      </div>
    );
  }
}

export default Dashboard;
