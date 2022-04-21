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

const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
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
