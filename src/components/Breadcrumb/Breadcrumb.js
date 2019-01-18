import React, { Component } from "react";

class Breadcrumb extends Component {
  render() {
    return (
      <div className="Breadcrumb">
        {/* Breadcrumb */}
        <section id="breadcrumb">
          <div className="container text-left">
            <ol className="breadcrumb">
              <li className="active">Dashboard</li>
            </ol>
          </div>
        </section>
      </div>
    );
  }
}

export default Breadcrumb;
