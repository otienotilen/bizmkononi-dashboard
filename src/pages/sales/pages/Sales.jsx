import React from "react";
// import "./newbusiness.scss";

import { Link } from "react-router-dom";

import am from "../../../assets/logo.png";
import Navbar from "../../../components/navbar/Navbar";
import Sidebartrial from "../../../components/sidebartrial/Sidebartrial";

function Sales() {
  return (
    <div className="overview">
      <Sidebartrial />
      <div className="containerOverview">
        <Navbar />
        <div className="businessLayout">
          <div className="top2">
            <div className="left">
              <h4>Sales</h4>
              <br />
              <h4>Sales in Divanis Wear</h4>
            </div>
            <div className="right1">
              {/* <div className="r1">Back</div> */}
              <div className="r2">Add New</div>
            </div>
          </div>
          <div className="card2">
            <div>
              <br />
              <div>alert You do not have any sales yet</div>
              <div>Click the button below to add them.</div>
              <br />
              <div className="button">Add Sale</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sales;