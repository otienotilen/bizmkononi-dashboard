import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";
import am from "../../assets/logo.png";


const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const [isActive, setIsActive] = useState(false)
  const checkStatus = () =>{
    if(isActive){
      setIsActive(false)
    }else{
      setIsActive(true)
    }
  }
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">
            <img src={am} alt="logo" />
            BizMkononi</span>
        </Link>
      </div>
    
      <div className="center">
        <ul>
          {/* dropdown trial */}
         
         {/* officially starts here */}
          <p className="title">MAIN</p>
           <li>
          <div className="dropdown">
          <div className="dropdown-btn" onClick={e => checkStatus()}>
              <DashboardIcon className="icon" />
              <span>Insights</span> 
            <span className="fa fa-caret-down"></span>
            </div>
            {isActive && (
            
             <div className="dropdown-content">
               <Link to="/">
            <div className="dropdown-item">
              <p>. Overview</p>
            </div>
              </Link>
             <div className="dropdown-item">
              <a href="/users"><p>. Sales Insights</p></a>
            </div>

             <div className="dropdown-item">
              <a href="overview"><p>. Customers Insights</p></a>
            </div>
             <div className="dropdown-item">
              <a href="/products"><p>. Chum Rate Insights</p></a>
            </div>
             <div className="dropdown-item">
              <a href="/login"><p>. Revenue Insights</p></a>
            </div>
               
          </div>
           )}
         </div>
         </li>
          <li>
            <DashboardIcon className="icon" />
            <span>Businesses</span>
          </li>
          <hr/>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;