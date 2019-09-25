import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import SideTable from "../SideTable/SideTable";
// import Comp from "../Comp/Comp";
import Tips from "../../Pages/Tips/Tips";

const Main = () => {
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
};
export default Main;
