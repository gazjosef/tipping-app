import React, { Fragment } from "react";
import "./Breadcrumb.css";

const Breadcrumb = () => {
  return (
    <Fragment>
      <section id="breadcrumb">
        <div className="container text-left">
          <ol className="breadcrumb">
            <li className="active">Dashboard</li>
          </ol>
        </div>
      </section>
    </Fragment>
  );
};

export default Breadcrumb;
