import React from "react";
import "./sidebaritem.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebaritem({ item }) {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);

  return (
    <div>
      <div className={open ? "sidebarItem open" : "sidebarItem"}>
        <div className="sidebarTitle" onClick={() => setOpen(!open)}>
          <span>
            <i className="bi-graph-up-arrow"></i>
            Insights
          </span>
          <i className="bi-chevron-down toggle-btn"></i>
        </div>

        <div className="sidebarContent">
          {" "}
          <Link to="/overview" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. Overview</p>
            </div>
          </Link>
          <Link to="/sales" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. Sales Insights</p>
            </div>
          </Link>
          <Link to="/customers" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. Customers Insights</p>
            </div>
          </Link>
          <Link to="/churn" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. Churm Rate Insights</p>
            </div>
          </Link>
          <Link to="/revenue" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. Revenue Insights</p>
            </div>
          </Link>
        </div>
      </div>
      <div className={open1 ? "sidebarItem open" : "sidebarItem"}>
        <div className="sidebarTitle" onClick={() => setOpen1(!open1)}>
          <span>
            <i className="bi-briefcase-fill"></i>
            Businesses
          </span>
          <i className="bi-chevron-down toggle-btn"></i>
        </div>

        <div className="sidebarContent">
          {" "}
          <Link to="/mybusinesses" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. My Businesses</p>
            </div>
          </Link>
          <Link to="/newbusiness" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. New Business</p>
            </div>
          </Link>
        </div>
      </div>
      <hr />
      SECTIONS
      <div className={open2 ? "sidebarItem open" : "sidebarItem"}>
        <div className="sidebarTitle" onClick={() => setOpen2(!open2)}>
          <span>
            <i className="bi-cart-fill"></i>
            Sales
          </span>
          <i className="bi-chevron-down toggle-btn"></i>
        </div>

        <div className="sidebarContent">
          {" "}
          <Link to="/sales1" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. Sales</p>
            </div>
          </Link>
          <Link to="/addasale" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. Add Sales</p>
            </div>
          </Link>
        </div>
      </div>
      <div className={open3 ? "sidebarItem open" : "sidebarItem"}>
        <div className="sidebarTitle" onClick={() => setOpen3(!open3)}>
          <span>
            <i className="bi-arrow-down-left-circle-fill"></i>
            Supplies
          </span>
          <i className="bi-chevron-down toggle-btn"></i>
        </div>

        <div className="sidebarContent">
          {" "}
          <Link to="/analytics" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. Analytics</p>
            </div>
          </Link>
          <Link to="/supplies" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. Supplies</p>
            </div>
          </Link>
          <Link to="/addsupply" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. Add Supply</p>
            </div>
          </Link>
        </div>
      </div>
      <div className={open4 ? "sidebarItem open" : "sidebarItem"}>
        <div className="sidebarTitle" onClick={() => setOpen4(!open4)}>
          <span>
            <i className="bi-currency-dollar"></i>
            Finance
          </span>
          <i className="bi-chevron-down toggle-btn"></i>
        </div>

        <div className="sidebarContent">
          {" "}
          <Link to="/profitsanalytics" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. Profits Analytics</p>
            </div>
          </Link>
          <Link to="/expenses" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. Expenses</p>
            </div>
          </Link>
          <Link to="/addexpense" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. Add Expenses</p>
            </div>
          </Link>
          <Link to="/otherincome" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. Other income</p>
            </div>
          </Link>
          <Link to="/addextraincome" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. Add extra income</p>
            </div>
          </Link>
        </div>
      </div>
      <div className={open5 ? "sidebarItem open" : "sidebarItem"}>
        <div className="sidebarTitle" onClick={() => setOpen5(!open5)}>
          <span>
            <i className="bi-people-fill"></i>
            Customers
          </span>
          <i className="bi-chevron-down toggle-btn"></i>
        </div>

        <div className="sidebarContent">
          {" "}
          <Link to="/customers" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. Customers</p>
            </div>
          </Link>
          <Link to="/newcustomer" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. New Customer</p>
            </div>
          </Link>
        </div>
      </div>
      <div className={open6 ? "sidebarItem open" : "sidebarItem"}>
        <div className="sidebarTitle" onClick={() => setOpen6(!open6)}>
          <span>
            <i className="bi-arrow-up-right-circle-fill"></i>
            Suppliers
          </span>
          <i className="bi-chevron-down toggle-btn"></i>
        </div>

        <div className="sidebarContent">
          {" "}
          <Link to="/suppliers" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. Suppliers</p>
            </div>
          </Link>
          <Link to="/newsupplier" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. New Supplier</p>
            </div>
          </Link>
        </div>
      </div>
      <div className={open7 ? "sidebarItem open" : "sidebarItem"}>
        <div className="sidebarTitle" onClick={() => setOpen7(!open7)}>
          <span>
            <i className="bi-basket2-fill"></i>
            Products
          </span>
          <i className="bi-chevron-down toggle-btn"></i>
        </div>

        <div className="sidebarContent">
          {" "}
          <Link to="/products" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. Products</p>
            </div>
          </Link>
          <Link to="/newproduct" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. New Product</p>
            </div>
          </Link>
          <Link to="/productcategories" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. Product Categories</p>
            </div>
          </Link>
          <Link to="/newcategory" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. New Category</p>
            </div>
          </Link>
        </div>
      </div>
      <div className={open8 ? "sidebarItem open" : "sidebarItem"}>
        <div className="sidebarTitle" onClick={() => setOpen8(!open8)}>
          <span>
            <i className="bi-lock-fill"></i>
            Employees
          </span>
          <i className="bi-chevron-down toggle-btn"></i>
        </div>

        <div className="sidebarContent">
          {" "}
          <Link to="/employees" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. Employees</p>
            </div>
          </Link>
          <Link to="/addemployee" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. Add Employee</p>
            </div>
          </Link>
          <Link to="/payemployee" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. Pay Employee</p>
            </div>
          </Link>
          <Link to="/employeesalaries" style={{ textDecoration: "none" }}>
            <div className="dropdown-item">
              <p>. Employee Salaries</p>
            </div>
          </Link>
        </div>
      </div>
      <div className={open9 ? "sidebarItem open" : "sidebarItem"}>
        <div className="sidebarTitle">
          <i className="bi-bar-chart-fill">
            <span>Farmers choice</span>
          </i>
        </div>
      </div>
    </div>
  );
}

export default Sidebaritem;
