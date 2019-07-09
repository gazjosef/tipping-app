import React, { Component } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import SideTable from "../SideTable/SideTable";
import Overview from "../Overview/Overview";
import Tips from "../Tips/Tips";
import TippingContainer from "../Tips/TippingContainer";

class Footer extends Component {
  render() {
    return (
      <div className="Dashboard">
        {/* Main */}
        <section id="main">
          <div className="container">
            <div className="row">
              <Breadcrumb />
              <SideTable />

              {/* Main Section */}
              <div className="col-md-9">
                <Overview />

                {/* Latest Tips */}
                <div className="panel panel-default">
                  <div className="panel-heading main-color-bg">
                    <h3 className="panel-title">Latest Tips</h3>
                  </div>

                  <div className="panel-body">
                    <TippingContainer />
                  </div>
                </div>
              </div>
              {/* End of Main Section */}
            </div>
            {/* End of Row */}
          </div>
          {/* End of Container */}
        </section>
      </div>
    );
  }
}
export default Footer;
