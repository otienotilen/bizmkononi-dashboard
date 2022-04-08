import React from "react";
import "./sidebaritem.scss";
import { useState } from "react";

function Sidebaritem() {
  const [open, setOpen] = useState(false);
  return (
    <div className={open ? "sidebarItem open" : "sidebarItem"}>
      <div className="sidebarTitle">
        <span>
          <i className="bi-list"></i>
          Insights
        </span>
        <i
          className="bi-chevron-down toggle-btn"
          onClick={() => setOpen(!open)}
        ></i>
      </div>

      <div className="sidebarContent">Hello</div>
    </div>
  );
}

export default Sidebaritem;
