import React from "react";
import "./sidebaritem.scss";
import { useState } from "react";

function Sidebaritem({ item }) {
  const [open, setOpen] = useState(false);
  if (item.childrens) {
    return (
      <div className={open ? "sidebarItem open" : "sidebarItem"}>
        <div className="sidebarTitle">
          <span>
            {item.icon && <i className={item.icon}></i>}
            {item.title}
          </span>
          <i
            className="bi-chevron-down toggle-btn"
            onClick={() => setOpen(!open)}
          ></i>
        </div>

        <div className="sidebarContent">
          {item.childrens.map((child, index) => (
            <Sidebaritem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <a href={item.path || "#"} className="sidebar-item plain">
        {item.icon && <i className={item.icon}></i>}
        {item.title}
      </a>
    );
  }
}

export default Sidebaritem;
