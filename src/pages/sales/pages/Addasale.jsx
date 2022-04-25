import React from "react";
import { Link } from "react-router-dom";
import "./addasale.scss";
import am from "../../../assets/logo.png";
import Navbar from "../../../components/navbar/Navbar";
import Sidebartrial from "../../../components/sidebartrial/Sidebartrial";

function Addasale() {
  return (
    <div className="overview">
      <Sidebartrial />
      <div className="containerOverview">
        <Navbar />
        <div className="businessLayout">
          <div className="top2">
            <div className="left">
              <h4>Make Sale</h4>
              <br />
              <h4>Sale products to your business</h4>
            </div>
            <div className="right1">
              <div className="r2">Sales</div>
            </div>
          </div>
          <div className="card2">
            <div className="form">
              Customer
              <form>
                <button>@</button>
                <input
                  className="sdd"
                  name="name"
                  type="text"
                  placeholder="Search by phone number or name"
                  style={{ width: "90%" }}
                />
              </form>
            </div>
            <div className="details">
              <br />
              <div className="form">
                <br />
                Product
                <form>
                  <button>@</button>
                  <input
                    className="sdd"
                    name="name"
                    type="text"
                    placeholder="Search by name of product"
                    style={{ width: "90%" }}
                  />
                </form>
              </div>
              <div className="a">
                <br />

                <div className="form">
                  Quantity
                  <form>
                    <button>@</button>
                    <input
                      className="sdd"
                      name="name"
                      type="text"
                      placeholder="Quantity e.g 20"
                      style={{ width: "10rem" }}
                    />
                  </form>
                </div>
              </div>

              <br />
              <div className="button">Add Sale</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addasale;
