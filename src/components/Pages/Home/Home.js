import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { SideTable } from "../../Layout/SideTable/SideTable";

import Tips from '../../Pages/Tips/Tips';
// import { Tips2 } from '../../Pages/Tips/Tips2';
import { Results } from '../../Pages/Results/Results';

import { Comp } from "../../Pages/Comp/Comp"
import { Settings } from "../../Pages/Settings/Settings"

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
                            {/* <Route exact path="/" component={Tips2} /> */}
                            {/* <Route exact path="/" component={Comp} /> */}
                            {/* // <Route exact path="/" component={Results} /> */}
                            {/* <Route exact path="/" component={Settings} /> */}
                        </Switch>
                        </div>
                    </div>
                </section>
            </Router>
        </>
    )
}
