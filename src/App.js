import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Overview from "./pages/overview/Overview";

import Revenue from "./pages/insights/pages/Revenue";
import Apphome from "./pages/insights/pages/Team";
import Sales from "./pages/insights/pages/Sales";
import Team from "./pages/insights/pages/Team";
import Churn from "./pages/insights/pages/Churn";
import Customers from "./pages/insights/pages/Customers";
import Mybusinesses from "./pages/businesses/pages/Mybusinesses";
import Newbusiness from "./pages/businesses/pages/Newbusiness";
import Sales1 from "./pages/sales/pages/Sales";
import Addasale from "./pages/sales/pages/Addasale";
import Addsupply from "./pages/supplies/pages/Addsupply";
import Analytics from "./pages/supplies/pages/Analytics";
import Supplies from "./pages/supplies/pages/Supplies";
import Payemployee from "./pages/employees/pages/Payemployee";
import Employees from "./pages/employees/pages/Employees";
import Addemployee from "./pages/employees/pages/Addemployee";
import Employeesalaries from "./pages/employees/pages/Employeesalaries";
import Newcustomer from "./pages/customers/pages/Newcustomers";
import Customers1 from "./pages/customers/pages/Customers";
import Profitsanalytics from "./pages/finance/pages/Profitsanalytics";
import Expenses from "./pages/finance/pages/Expenses";
import Addexpense from "./pages/finance/pages/Addexpenses";
import Otherincome from "./pages/finance/pages/Otherincome";
import Addextraincome from "./pages/finance/pages/Addextraincome";
import Suppliers from "./pages/suppliers/pages/Suppliers";
import Newsupplier from "./pages/suppliers/pages/Newsupplier";
import Products from "./pages/products/pages/Products";
import Newproduct from "./pages/products/pages/Newproduct";
import Productcategories from "./pages/products/pages/Productcategories";
import Newcategory from "./pages/products/pages/Newcategory";

const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Overview />} />
            <Route path="login" element={<Login />} />
            <Route path="overview" element={<Overview />} />
            <Route exact path="sales" element={<Sales />} />
            <Route exact path="t" element={<Team />} />
            <Route exact path="churn" element={<Churn />} />
            <Route exact path="revenue" element={<Revenue />} />
            <Route exact path="customers" element={<Customers />} />
            <Route exact path="a" element={<Apphome />} />
            <Route exact path="mybusinesses" element={<Mybusinesses />} />
            <Route exact path="newbusiness" element={<Newbusiness />} />
            <Route exact path="sales1" element={<Sales1 />} />
            <Route exact path="addasale" element={<Addasale />} />
            <Route exact path="addsupply" element={<Addsupply />} />
            <Route exact path="supplies" element={<Supplies />} />
            <Route exact path="analytics" element={<Analytics />} />
            <Route exact path="employees" element={<Employees />} />
            <Route exact path="addemployee" element={<Addemployee />} />
            <Route exact path="payemployee" element={<Payemployee />} />
            <Route
              exact
              path="employeesalaries"
              element={<Employeesalaries />}
            />

            <Route exact path="newcustomer" element={<Newcustomer />} />
            <Route exact path="customers1" element={<Customers1 />} />
            <Route exact path="expenses" element={<Expenses />} />
            <Route exact path="addexpense" element={<Addexpense />} />
            <Route exact path="otherincome" element={<Otherincome />} />
            <Route exact path="addextraincome" element={<Addextraincome />} />
            <Route
              exact
              path="profitsanalytics"
              element={<Profitsanalytics />}
            />
            <Route exact path="suppliers" element={<Suppliers />} />
            <Route exact path="newsupplier" element={<Newsupplier />} />

            <Route exact path="products" element={<Products />} />
            <Route exact path="newproduct" element={<Newproduct />} />
            <Route
              exact
              path="productcategories"
              element={<Productcategories />}
            />
            <Route exact path="newcategory" element={<Newcategory />} />

            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
