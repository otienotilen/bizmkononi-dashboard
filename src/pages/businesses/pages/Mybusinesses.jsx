import "./mybusinesses.scss";
import { Link } from "react-router-dom";
import React from "react";
import am from "../../../assets/logo.png";
import Navbar from "../../../components/navbar/Navbar";
import Sidebartrial from "../../../components/sidebartrial/Sidebartrial";

function Mybusinesses() {
  return (
    <div className="overview">
      <Sidebartrial />
      <div className="containerOverview">
        <Navbar />
        <div className="homeLayout">
          <div className="top1">
            <div className="left">
              <h4>Businesses</h4>
              <br />
              <h4>List of all my businesses</h4>
            </div>
            <div className="right">Add New</div>
          </div>
          <div className="card">
            <span className="cardimage">
              <img src={am} alt="logo" />
            </span>
            <div>Name</div>
            <div>
              <br />
              <hr />
              Product
            </div>

            <div>
              <br />
              <div className="button">Read More</div>
              <br />
              <div className="button">Manage</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mybusinesses;
