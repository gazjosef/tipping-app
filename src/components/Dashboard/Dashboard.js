import React, { Component } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import SideTable from "../SideTable/SideTable";
// import Comp from "../Comp/Comp";
// import TippingContainer from "../Tips/TippingContainer";
import Tips from "../Tips/Tips";

class Main extends Component {
  render() {
    return (
      <div className="Dashboard">
        {/* Main */}
        <section id="main">
          <div className="container">
            <div className="row">
              <Breadcrumb />
              <SideTable />
              {/* <Comp /> */}
              <Tips />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Main;
