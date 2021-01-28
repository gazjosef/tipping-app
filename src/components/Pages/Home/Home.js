import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import SideTable from '../../Layout/SideTable/SideTable';
import { SideTable2 } from "../../Layout/SideTable/SideTable2";

import Tips from '../../Pages/Tips/Tips';
import { Comp } from "../../Pages/Comp/Comp"
import { Settings } from "../../Pages/Settings/Settings"

export const Home = () => {
    return (
        <>
            <Router>
                <section id="main">
                    <div className="container">
                        <div className="row">
                        {/* <SideTable /> */}
                        <SideTable2 />
                        <Switch>
                            <Route exact path="/tips">
                                <Tips />
                            </Route>
                            {/* <Route exact path="/tips" component={Tips} /> */}
                            <Route exact path="/comp">
                                <Comp />
                            </Route>
                            {/* <Route exact path="/comp" component={Comp} /> */}
                            <Route exact path="/settings">
                                <Settings />
                            </Route>
                            {/* <Route exact path="/settings" component={Settings} /> */}
                        </Switch>
                        </div>
                    </div>
                </section>
            </Router>
        </>
    )
}
