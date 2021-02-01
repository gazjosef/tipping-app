import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { SideTable } from "../../Layout/SideTable/SideTable";

import Tips from '../../Pages/Tips/Tips';
// import { Comp } from "../../Pages/Comp/Comp"
// import { Settings } from "../../Pages/Settings/Settings"

export const Home = () => {
    return (
        <>
            <Router>    
                <section id="main">
                    <div className="container">
                        <div className="row">
                        <SideTable />
                        <Switch>
                            <Route exact path="/" component={Tips} />
                            {/* <Route exact path="/comp" component={Comp} />
                            <Route exact path="/settings" component={Settings} /> */}
                        </Switch>
                        </div>
                    </div>
                </section>
            </Router>
        </>
    )
}
