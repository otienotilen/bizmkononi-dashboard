import React from "react";
import "./sidebartrial.scss";
import Sidebaritem from "./Sidebaritem";
import items from "../../data/sidebar.json";

import am from "../../assets/logo.png";
import { Link } from "react-router-dom";
function Sidebartrial() {
  return (
    <div className="sidebartrial">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">
            <img src={am} alt="logo" />
            BizMkononi
          </span>
        </Link>
      </div>
      <br />
      <Sidebaritem />
    </div>
  );
}

export default Sidebartrial;
