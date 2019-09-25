import React from "react";
import "./Breadcrumb.css";

const Breadcrumb = () => {
  return (
    <div className="Breadcrumb">
      <section id="breadcrumb">
        <div className="container text-left">
          <ol className="breadcrumb">
            <li className="active">Dashboard</li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default Breadcrumb;
