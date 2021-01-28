import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import SideTable from '../../Layout/SideTable/SideTable';
import { SideTable2 } from "../../Layout/SideTable/SideTable2";

// import { Comp2 } from "../../Pages/Comp/Comp2"
import { Comp } from "../../Pages/Comp/Comp"
import Tips from '../../Pages/Tips/Tips';


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
                            <Route exact path="/" component={Tips} />
                            <Route exact path="/comp" component={Comp} />
                        </Switch>
                        </div>
                    </div>
                </section>
            </Router>
        </>
    )
}
