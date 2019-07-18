import React, { Component } from "react";
import SideTable from "../SideTable/SideTable";
import { Link } from "react-router-dom";

class Tips extends Component {
  render() {
    return (
      <div className="Tips">
        {/* Breadcrumb */}
        <section id="breadcrumb">
          <div className="container text-left">
            <ol className="breadcrumb">
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li className="active">Tips</li>
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
                {/* Week One Tips */}
                <div className="panel panel-default">
                  <div className="panel-heading main-color-bg">
                    <h3 className="panel-title">Week One Tips</h3>
                  </div>

                  <div className="panel-body">
                    {/* Tipping Container */}
                    <div className="tipping-container">
                      {/* Select Round Form */}
                      <div className="form-group">
                        {/* Select Label */}
                        <div className="select-round-label text-right">
                          <label>Select Round: </label>
                        </div>
                        {/* Drop-Down Menu*/}
                        <div className="select-form-control">
                          <select className="form-control">
                            <option value="round 1">Round 1</option>
                            <option value="round 2">Round 2</option>
                            <option value="round 3">Round 3</option>
                            <option value="round 4">Round 4</option>
                            <option value="round 5">Round 5</option>
                            <option value="round 6">Round 6</option>
                            <option value="round 7">Round 7</option>
                            <option value="round 8">Round 8</option>
                            <option value="round 9">Round 9</option>
                            <option value="round 10">Round 10</option>
                            <option value="round 11">Round 11</option>
                            <option value="round 11">Round 11</option>
                            <option value="round 12">Round 12</option>
                            <option value="round 13">Round 13</option>
                            <option value="round 14">Round 14</option>
                            <option value="round 15">Round 15</option>
                            <option value="round 16">Round 16</option>
                            <option value="round 17">Round 17</option>
                            <option value="round 18">Round 18</option>
                            <option value="round 19">Round 19</option>
                            <option value="round 20">Round 20</option>
                            <option value="round 21">Round 21</option>
                            <option value="round 22">Round 22</option>
                            <option value="round 23">Round 23</option>
                            <option value="round 24">Round 24</option>
                            <option value="round 25">Round 25</option>
                            <option value="round 26">Round 26</option>
                            <option value="finals week 1">Finals Week 1</option>
                            <option value="finals week 2">Finals Week 2</option>
                            <option value="finals week 3">Finals Week 3</option>
                            <option value="grand final">Grand Final</option>
                          </select>
                        </div>
                      </div>

                      {/* Tipping Row */}
                      <div className="tipping-row">
                        <div className="squad home-squad">
                          <div className="radio home-radio" />
                          <div className="home-name">Dragons</div>
                          <div className="home-logo" />
                          <div className="home-score">20</div>
                        </div>

                        <div className="game-details text-center">
                          <div className="game-date">Thurs 28th June</div>
                          <div className="game-time">7:50PM</div>
                          <div className="game-venue">WIN Stadium</div>
                        </div>

                        <div className="squad away-squad text-right">
                          <div className="away-score">18</div>
                          <div className="away-logo" />
                          <div className="away-name">Eels</div>
                          <div className="radio away-radio" />
                        </div>
                      </div>

                      {/* Tipping Row */}
                      <div className="tipping-row">
                        <div className="squad home-squad">
                          <div className="radio home-radio" />
                          <div className="home-name">Dragons</div>
                          <div className="home-logo" />
                          <div className="home-score">20</div>
                        </div>

                        <div className="game-details text-center">
                          <div className="game-date">Thurs 28th June</div>
                          <div className="game-time">7:50PM</div>
                          <div className="game-venue">WIN Stadium</div>
                        </div>

                        <div className="squad away-squad text-right">
                          <div className="away-score">18</div>
                          <div className="away-logo" />
                          <div className="away-name">Eels</div>
                          <div className="radio away-radio" />
                        </div>
                      </div>

                      {/* Tipping Row */}
                      <div className="tipping-row">
                        <div className="squad home-squad">
                          <div className="radio home-radio" />
                          <div className="home-name">Dragons</div>
                          <div className="home-logo" />
                          <div className="home-score">20</div>
                        </div>

                        <div className="game-details text-center">
                          <div className="game-date">Thurs 28th June</div>
                          <div className="game-time">7:50PM</div>
                          <div className="game-venue">WIN Stadium</div>
                        </div>

                        <div className="squad away-squad text-right">
                          <div className="away-score">18</div>
                          <div className="away-logo" />
                          <div className="away-name">Eels</div>
                          <div className="radio away-radio" />
                        </div>
                      </div>

                      {/* Tipping Row */}
                      <div className="tipping-row">
                        <div className="squad home-squad">
                          <div className="radio home-radio" />
                          <div className="home-name">Dragons</div>
                          <div className="home-logo" />
                          <div className="home-score">20</div>
                        </div>

                        <div className="game-details text-center">
                          <div className="game-date">Thurs 28th June</div>
                          <div className="game-time">7:50PM</div>
                          <div className="game-venue">WIN Stadium</div>
                        </div>

                        <div className="squad away-squad text-right">
                          <div className="away-score">18</div>
                          <div className="away-logo" />
                          <div className="away-name">Eels</div>
                          <div className="radio away-radio" />
                        </div>
                      </div>

                      {/* Tipping Row */}
                      <div className="tipping-row">
                        <div className="squad home-squad">
                          <div className="radio home-radio" />
                          <div className="home-name">Dragons</div>
                          <div className="home-logo" />
                          <div className="home-score">20</div>
                        </div>

                        <div className="game-details text-center">
                          <div className="game-date">Thurs 28th June</div>
                          <div className="game-time">7:50PM</div>
                          <div className="game-venue">WIN Stadium</div>
                        </div>

                        <div className="squad away-squad text-right">
                          <div className="away-score">18</div>
                          <div className="away-logo" />
                          <div className="away-name">Eels</div>
                          <div className="radio away-radio" />
                        </div>
                      </div>

                      {/* Tipping Row */}
                      <div className="tipping-row">
                        <div className="squad home-squad">
                          <div className="radio home-radio" />
                          <div className="home-name">Dragons</div>
                          <div className="home-logo" />
                          <div className="home-score">20</div>
                        </div>

                        <div className="game-details text-center">
                          <div className="game-date">Thurs 28th June</div>
                          <div className="game-time">7:50PM</div>
                          <div className="game-venue">WIN Stadium</div>
                        </div>

                        <div className="squad away-squad text-right">
                          <div className="away-score">18</div>
                          <div className="away-logo" />
                          <div className="away-name">Eels</div>
                          <div className="radio away-radio" />
                        </div>
                      </div>

                      {/* Tipping Row */}
                      <div className="tipping-row">
                        <div className="squad home-squad">
                          <div className="radio home-radio" />
                          <div className="home-name">Dragons</div>
                          <div className="home-logo" />
                          <div className="home-score">20</div>
                        </div>

                        <div className="game-details text-center">
                          <div className="game-date">Thurs 28th June</div>
                          <div className="game-time">7:50PM</div>
                          <div className="game-venue">WIN Stadium</div>
                        </div>

                        <div className="squad away-squad text-right">
                          <div className="away-score">18</div>
                          <div className="away-logo" />
                          <div className="away-name">Eels</div>
                          <div className="radio away-radio" />
                        </div>
                      </div>

                      {/* Tipping Row */}
                      <div className="tipping-row">
                        <div className="squad home-squad">
                          <div className="radio home-radio" />
                          <div className="home-name">Dragons</div>
                          <div className="home-logo" />
                          <div className="home-score">20</div>
                        </div>

                        <div className="game-details text-center">
                          <div className="game-date">Thurs 28th June</div>
                          <div className="game-time">7:50PM</div>
                          <div className="game-venue">WIN Stadium</div>
                        </div>

                        <div className="squad away-squad text-right">
                          <div className="away-score">18</div>
                          <div className="away-logo" />
                          <div className="away-name">Eels</div>
                          <div className="radio away-radio" />
                        </div>
                      </div>
                      {/* End of Tipping Row */}

                      {/* Submit Button */}
                      <div className="submit-button text-right">
                        <button type="submit" className="btn btn-default">
                          Submit
                        </button>
                      </div>
                    </div>
                    {/* End of Tipping Container */}
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