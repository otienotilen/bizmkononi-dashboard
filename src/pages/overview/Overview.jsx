import './overview.scss';

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
,
  BarChart,
  Bar,
  Legend, } from 'recharts';

const data = [
  
    {name: 'January', Total: 1200 },
    {name: 'March', Total: 2100 },
    {name: 'May', Total: 800 },
    {name: 'July', Total: 1600 },
    {name: 'September', Total: 1200 },
    {name: 'Novermber', Total: 900 },
    {name: 'December', Total: 1700 },
   
  
 
];


const Overview = () => {
  
  return (
    <div className="overview">
        <Sidebar/>
      <div className="containerOverview">
        <Navbar/>
        <div className="homeLayout">
           <div className="greeting">
            <h3>Welcome John Doe,</h3>
            <br/>
            <p>Here is your today's insights</p>
          </div>
        
        
        <div className="trial">
            <h5 style={{color: "blue"}}>$4000</h5>
          <h5>Total Revenue</h5>
        </div>
          <div className="chartContainer">
              <div className="chart">
                  <h4>Customer Churn Rate</h4>
                <ResponsiveContainer width="100%" aspect={2 / 1}>
           
                  <AreaChart width={730} height={250} data={data}
                   margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                   <defs>
                   <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                   <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                   </linearGradient>
    
                   </defs>
                   <XAxis dataKey="name" />
                   <YAxis />
                   <CartesianGrid strokeDasharray="3 3" />
                   <Tooltip />
                   <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
  
                  </AreaChart>
                </ResponsiveContainer>
              </div>

               <div className="chart">
                   <h4>Customer Churn Rate</h4>
                  <ResponsiveContainer width="100%" aspect={2 / 1}>
           
                    <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="Total" />
                    <Tooltip />
 
                    <Bar type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
 
                     </BarChart>
                  </ResponsiveContainer>
               </div>

          </div>
          
           <div className="chartContainer">
              <div className="chart">
                  <h4>Customer Churn Rate</h4>
                <ResponsiveContainer width="100%" aspect={2 / 1}>
           
                  <AreaChart width={730} height={250} data={data}
                   margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                   <defs>
                   <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                   <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                   </linearGradient>
    
                   </defs>
                   <XAxis dataKey="name" />
                   <YAxis />
                   <CartesianGrid strokeDasharray="3 3" />
                   <Tooltip />
                   <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
  
                  </AreaChart>
                </ResponsiveContainer>
              </div>

               <div className="chart">
                   <h4>Customer Churn Rate</h4>
                  <ResponsiveContainer width="100%" aspect={2 / 1}>
           
                    <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="Total" />
                    <Tooltip />
 
                    <Bar type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
 
                     </BarChart>
                  </ResponsiveContainer>
               </div>

          </div>
          {/* end of charts */}
        </div>
      </div>
    </div>
  );
};

export default Overview;
