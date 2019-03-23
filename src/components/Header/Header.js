import React from "react";

const Header = () => {
  return (
    <div>
      {/* Header */}
      <header id="header">
        <div className="container">
          <div className="row text-left">
            <div className="col-md-12">
              <h1>
                <i className="fas fa-football-ball" /> Footy Tips{" "}
                <small>NRL</small>
              </h1>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
