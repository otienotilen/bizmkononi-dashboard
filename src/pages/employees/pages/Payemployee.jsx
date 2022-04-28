import React from "react";
import { Link } from "react-router-dom";

import am from "../../../assets/logo.png";
import Navbar from "../../../components/navbar/Navbar";
import Sidebartrial from "../../../components/sidebartrial/Sidebartrial";

function Payemployee() {
  return (
    <div className="overview">
      <Sidebartrial />
      <div className="containerOverview">
        <Navbar />
        <div className="businessLayout">
          <div className="top2">
            <div className="left">
              <h4>Add Salary</h4>
              <br />
              <h4>Add a new salary to your business</h4>
            </div>
            <div className="right1">
              <div className="r2">Salaries</div>
            </div>
          </div>
          <div className="card2">
            <div className="form">
              <br />
              <br />
              Employee
              <form>
                <button>@</button>
                <input
                  className="sdd"
                  name="name"
                  type="text"
                  placeholder="Search by employee name"
                  style={{ width: "90%" }}
                />
              </form>
            </div>
            <div className="form">
              <br />
              Salary for this Date
              <form>
                <button>@</button>
                <input
                  className="sdd"
                  name="name"
                  type="text"
                  placeholder=""
                  style={{ width: "90%" }}
                />
              </form>
            </div>
            <div className="form">
              <br />
              Amount (Ksh)
              <form>
                <button>@</button>
                <input
                  className="sdd"
                  name="name"
                  type="text"
                  placeholder="Amount e.g 5000"
                  style={{ width: "90%" }}
                />
              </form>
            </div>
            <div className="form">
              <br />
              Salary Details
              <form>
                <button style={{ height: "5rem" }}>@</button>
                <input
                  className="sdd"
                  name="name"
                  type="text"
                  placeholder="Description"
                  style={{ width: "90%", height: "5rem" }}
                />
              </form>
            </div>

            <div style={{ marginTop: "5rem", marginLeft: "20rem" }}>
              <button>Add Salary</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payemployee;
