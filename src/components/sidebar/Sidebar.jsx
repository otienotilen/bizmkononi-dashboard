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
         <br/>
      <div className="center">
        <ul>
          {/* dropdown  */}
         
         {/* officially starts here */}
           <li>
             <br/>
          <div className="dropdown">
          <div className="dropdown-btn" onClick={e => checkStatus()}>
              <DashboardIcon className="icon" />
              <span>Insights</span> 
            <span className="fa fa-caret-down"></span>
            </div>
            {isActive && (
            
             <div className="dropdown-content">
               <Link to="/" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. Overview</p>
            </div>
              </Link>
              <Link to="/overview" style={{ textDecoration: "none" }}>
             <div className="dropdown-item">
              <p>. Sales Insights</p>
            </div>
              </Link>
               <Link to="/overview" style={{ textDecoration: "none" }}>
             <div className="dropdown-item">
              <p>. Customers Insights</p>
            </div>
            </Link>
            <Link to="/overview" style={{ textDecoration: "none" }}>
             <div className="dropdown-item">
              <p>. Chum Rate Insights</p>
            </div>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
             <div className="dropdown-item">
              <p>. Revenue Insights</p>
            </div>
               </Link>
          </div>
           )}
         </div>
         </li>
          <li>
            <DashboardIcon className="icon" />
            <span>Businesses</span>
          </li>
          <hr/>
          <p className="title">Section</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Sales</span>
            </li>
          </Link>
          <Link to="/overview" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Supplies</span>
            </li>
          </Link>
           <Link to="/products" style={{ textDecoration: "none" }}>
          <li>
            <CreditCardIcon className="icon" />
            <span>Customers</span>
          </li>
          </Link>
           <Link to="/overview" style={{ textDecoration: "none" }}>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Suppliers</span>
          </li>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
          <li>
            <InsertChartIcon className="icon" />
            <span>Products</span>
          </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Employees</span>
          </li>
         </Link>
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;