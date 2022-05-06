import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../assets/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
// import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  console.log(window.innerWidth);
  return (
    <>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        <div
          className="bars"
          style={expanded ? { left: "45%" } : { left: "5%" }}
          onClick={() => setExpaned(!expanded)}
        >
          <UilBars />
        </div>

        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            Biz<span>M</span>kononi
          </span>
        </div>

        <div className="menu">
          hello
          {/* {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })} */}
          {/* signoutIcon */}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
