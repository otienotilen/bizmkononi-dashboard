import "./customers.scss";

import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Sector,
} from "recharts";

const data = [
  { name: "January", Total: 1200 },
  { name: "March", Total: 2100 },
  { name: "May", Total: 800 },
  { name: "July", Total: 1600 },
  { name: "September", Total: 1200 },
  { name: "Novermber", Total: 900 },
  { name: "December", Total: 1700 },
];

const Customers = () => {
  return (
    <div className="overview">
      <Sidebar />
      <div className="containerOverview">
        <Navbar />
        <div className="homeLayout">
          <div className="greeting">
            <h3>Welcome John Doe,</h3>
            <br />
            <p>Here is your today's insights</p>
          </div>

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div className="trial">
              <h5 style={{ color: "blue" }}>$4000</h5>
              <h5>Total Revenue</h5>
            </div>
            <div className="trial">
              <h5 style={{ color: "blue" }}>240</h5>
              <h5>Total Orders</h5>
            </div>
            <div className="trial">
              <h5 style={{ color: "blue" }}>1.2%</h5>
              <h5>Customer Churn Rate</h5>
            </div>
            <div className="trial">
              <h5 style={{ color: "blue" }}>8.5%</h5>
              <h5>Repeat Purchase Rate</h5>
            </div>
          </div>
          <div className="chartContainer">
            <div className="chart">
              <h4>Customer Churn Rate</h4>
              <ResponsiveContainer width="100%" aspect={2 / 1}>
                <LineChart
                  width={730}
                  height={250}
                  data={data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Total" stroke="#3283B8" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="chart">
              <h4>Customer Most Buying Day</h4>
              <ResponsiveContainer width="100%" aspect={2 / 1}>
                <BarChart width={730} height={250} data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis dataKey="Total" />
                  <Tooltip />

                  <Bar
                    type="monotone"
                    dataKey="Total"
                    stroke="#3282B8"
                    fillOpacity={1}
                    fill="#3283B8"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="chartContainer">
            <div className="chart">
              <h4>Most Selling Product</h4>
              <ResponsiveContainer width="100%" aspect={2 / 1}>
                <PieChart width={400} height={400}>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    type="monotone"
                    dataKey="Total"
                    stroke="#ffffff"
                    fillOpacity={1}
                    fill="#3283B8"
                  />
                </PieChart>
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

                  <Bar
                    type="monotone"
                    dataKey="Total"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="#3283B8"
                  />
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

export default Customers;
