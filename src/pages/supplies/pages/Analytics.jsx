import React from "react";

import { Link } from "react-router-dom";

import am from "../../../assets/logo.png";
import Navbar from "../../../components/navbar/Navbar";
import Sidebartrial from "../../../components/sidebartrial/Sidebartrial";

function Analytics() {
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
              <div className="saleDetails">
                <div>alert You do not have any sales yet</div>
                <div>Click the button below to add them.</div>
              </div>
              <br />
              <button className="button1">Add Sale</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
