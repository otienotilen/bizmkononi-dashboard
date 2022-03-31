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
import Overview from './pages/overview/Overview';

// import Products from './pages/overview/Overview';
import Apphome from './pages/insights/pages/Team';
import Sales from './pages/insights/pages/Sales';
import Team from './pages/insights/pages/Team';

const App =() => {
  const { darkMode } = useContext(DarkModeContext);

  // const [sidebarOpen, setsidebarOpen] = useState(false);
  // const openSidebar = () => {
  //   setsidebarOpen(true);
  // };
  // const closeSidebar = () => {
  //   setsidebarOpen(false);
  // };

  return (
    <div className={darkMode ? "app dark" : "app"}>

      {/* <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} /> */}

      <BrowserRouter>
        <Routes>  
          <Route path="/">
            <Route index element={<Home />} /> 
            <Route path="login" element={<Login />} /> 
            <Route path="overview" element={<Overview />} />
            <Route exact path="sales" element={<Sales />} />
            <Route exact path="t" element={<Team />} />
            
            {/* <Route exact path="/signin" component={Overview} /> */}
            <Route exact path="a" element={<Apphome />} />
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

        {/* <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} /> */}
    </div>
  );
}

export default App;
