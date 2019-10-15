import React, { Fragment } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import SideTable from "../SideTable/SideTable";
// import Comp from "../Comp/Comp";
import Tips from "../../Pages/Tips/Tips";

const Main = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};
export default Main;
