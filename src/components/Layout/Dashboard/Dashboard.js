import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SideTable from "../SideTable/SideTable";
import Comp from "../../Pages/Comp/Comp";
import Tips from "../../Pages/Tips/Tips";

const Main = () => {
  return (
    <Fragment>
      <Router>
        <section id="main">
          <div className="container">
            <div className="row">
              <SideTable />
              {/* <Tips />
              <Comp /> */}
              <Switch>
                <Route exact path="/" component={Tips} />
                <Route exact path="/comp" component={Comp} />
              </Switch>
            </div>
          </div>
        </section>
      </Router>
    </Fragment>
  );
};
export default Main;
