import "./sales.scss";
import Sidebartrial from "../../../components/sidebartrial/Sidebartrial";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import Featured from "../../../components/featured/Featured";
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
  { name: "January", Total: 1200, Previous: 1000 },
  { name: "March", Total: 2100, Previous: 200 },
  { name: "May", Total: 800, Previous: 200 },
  { name: "July", Total: 1600, Previous: 200 },
  { name: "September", Total: 1200, Previous: 200 },
  { name: "Novermber", Total: 900, Previous: 200 },
  { name: "December", Total: 1700, Previous: 200 },
];

const Sales = () => {
  return (
    <div className="overview">
      <Sidebartrial />
      <div className="containerOverview">
        <Navbar />
        <div className="homeLayout">
          <div className="greeting">
            <br />
            <p>Date</p>
          </div>

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div className="trial">
              <h5 style={{ color: "blue" }}>200</h5>
              <h5>Total Orders</h5>
            </div>
            <div className="trial">
              <h5 style={{ color: "blue" }}>8.5%</h5>
              <h5>Repeat Purchase Rate</h5>
            </div>
            <div className="trial">
              <h5 style={{ color: "blue" }}>5000</h5>
              <h5>Total Sales</h5>
            </div>
            <div className="trial">
              <h5 style={{ color: "blue" }}>Ksh 4000</h5>
              <h5>Average Revenue</h5>
            </div>
          </div>
          <div className="chartContainer">
            <div className="chart">
              <h4>Customer most buying day</h4>
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

            <div className="chart">
              <h4>Most Selling Product</h4>
              <Featured />
            </div>
          </div>

          <div className="chartContainer">
            <div className="chart">
              <h4>Sales</h4>
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
              <h4>Customer Visit vs Buy</h4>
              <ResponsiveContainer width="100%" aspect={2 / 1}>
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Total" fill="#8884d8" />
                  <Bar dataKey="Previous" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="chartContainer">
            <div className="chart">
              <h4>Orders</h4>
              <ResponsiveContainer width="100%" aspect={2 / 1}>
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Total" fill="#8884d8" />
                  <Bar dataKey="Previous" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="chart">
              <h4>Most Selling Time of the Day</h4>
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
          </div>
          {/* end of charts */}
        </div>
      </div>
    </div>
  );
};

export default Sales;
