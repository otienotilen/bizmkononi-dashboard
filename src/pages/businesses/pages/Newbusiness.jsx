import "./newbusiness.scss";

import { Link } from "react-router-dom";
import React from "react";
import am from "../../../assets/logo.png";
import Navbar from "../../../components/navbar/Navbar";
import Sidebartrial from "../../../components/sidebartrial/Sidebartrial";

const Newbusiness = () => {
  return (
    <div className="overview">
      <Sidebartrial />
      <div className="containerOverview">
        <Navbar />
        <div className="homeLayout">
          <div className="businessLayout">
            <div className="top2">
              <div className="left">
                <h4>Add Business</h4>
                <br />
                <h4>Add a new business to start managing it now </h4>
              </div>
              <div className="right1">
                <div className="r1">Back</div>
                <div className="r2">Businesses</div>
              </div>
            </div>
            <div className="card2">
              <div className="form">
                Business Name
                <form>
                  <button>@</button>
                  <input
                    className="sdd"
                    name="name"
                    type="text"
                    placeholder="Business Name"
                    style={{ width: "90%" }}
                  />
                </form>
              </div>

              <div className="form">
                <br />
                Business Email
                <form>
                  <button>@</button>
                  <input
                    className="sdd"
                    name="name"
                    type="email"
                    placeholder="Business Email"
                    style={{ width: "90%" }}
                  />
                </form>
              </div>
              <div className="form">
                <br />
                Business Name
                <form>
                  <button>@</button>
                  <input
                    className="sdd"
                    name="name"
                    type="text"
                    placeholder="Business Name"
                    style={{ width: "90%" }}
                  />
                </form>
              </div>
              <div className="form">
                <br />
                Business Phone
                <form>
                  <button>@</button>
                  <input
                    className="sdd"
                    name="name"
                    type="text"
                    placeholder="Business Phone"
                    style={{ width: "90%" }}
                  />
                </form>
              </div>
              <div className="form">
                <br />
                Business Name
                <form>
                  <button>@</button>
                  <input
                    className="sdd"
                    name="name"
                    type="text"
                    placeholder="Business Name"
                    style={{ width: "90%" }}
                  />
                </form>
              </div>
              <div className="form">
                <br />
                Location
                <form>
                  <button>@</button>
                  <input
                    className="sdd"
                    name="name"
                    type="text"
                    placeholder="Location"
                    style={{ width: "90%" }}
                  />
                </form>
              </div>
              <div className="form">
                <br />
                Location Details
                <form>
                  <button>@</button>
                  <input
                    className="sdd"
                    name="name"
                    type="text"
                    placeholder="Location Details"
                    style={{ width: "90%" }}
                  />
                </form>
              </div>

              <div>
                <br />
                <br />
                Image. Click on the image below to set business image
                <br />
                <br />
              </div>

              <hr></hr>
              <div className="image1">Image</div>
              <div>
                <br />
                <button className="button1">Create Business</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newbusiness;
