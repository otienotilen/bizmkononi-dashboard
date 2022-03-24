import "./login.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";


const Login = () => {
  return (
     
    <div className="login">
        <Sidebar/>
      <div className="containerLogin">
        <Navbar/>
        <div className="homeLayout">
           <div className="greeting">
            <h3>Welcome John Doe,</h3>
            <br/>
            <p>Here is your today's insights</p>
          </div>
        
        <div className="widgets">
          <Widget type="revenue" />
          <Widget type="orders" />
          <Widget type="ccr" />
          <Widget type="rpr" />

         
        </div>
        <div className="trial">
            <h5 style={{color: "blue"}}>$4000</h5>
          <h5>Total Revenue</h5>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Login