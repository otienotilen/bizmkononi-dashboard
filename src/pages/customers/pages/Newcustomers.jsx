import React from "react";
import { Link } from "react-router-dom";

import am from "../../../assets/logo.png";
import Navbar from "../../../components/navbar/Navbar";
import Sidebartrial from "../../../components/sidebartrial/Sidebartrial";

function Newcustomers() {
  return (
    <div className="overview">
      <Sidebartrial />
      <div className="containerOverview">
        <Navbar />
        <div className="businessLayout">
          <div className="top2">
            <div className="left">
              <h4>Add Customer</h4>
              <br />
              <h4>Add a new customer to your business</h4>
            </div>
            <div className="right1">
              <div className="r2">Customers</div>
            </div>
          </div>
          <div className="card2">
            <div className="form">
              <br />
              <br />
              Name
              <form>
                <button>@</button>
                <input
                  className="sdd"
                  name="name"
                  type="text"
                  placeholder="Name"
                  style={{ width: "90%" }}
                />
              </form>
            </div>
            <div className="form">
              <br />
              Estimate age
              <form>
                <button>@</button>
                <input
                  className="sdd"
                  name="name"
                  type="text"
                  placeholder="Age"
                  style={{ width: "90%" }}
                />
              </form>
            </div>
            <div className="form">
              <br />
              Gender
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
              Email
              <form>
                <button>@</button>
                <input
                  className="sdd"
                  name="name"
                  type="text"
                  placeholder="Email"
                  style={{ width: "90%" }}
                />
              </form>
            </div>
            <div className="form">
              <br />
              Phone
              <form>
                <button>@</button>
                <input
                  className="sdd"
                  name="name"
                  type="text"
                  placeholder="Phone"
                  style={{ width: "90%" }}
                />
              </form>
            </div>
            <div className="form">
              <br />
              Description
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
              <br />
            </div>
            Image. Click on the image below to set customer image
            <hr />
            <div
              style={{
                backgroundColor: "gray",
                width: "20rem",
                height: "30rem",
                marginTop: "1rem",
              }}
            >
              image
            </div>
            <div style={{ marginTop: "5rem", marginLeft: "20rem" }}>
              <button>Add Customer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newcustomers;
