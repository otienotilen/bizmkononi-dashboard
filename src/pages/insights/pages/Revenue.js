import "./revenue.scss";
import Featured from "../../../components/featured/Featured";
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
  { name: "January", Total: 1200, Previous: 1000 },
  { name: "March", Total: 2100, Previous: 2250 },
  { name: "May", Total: 800, Previous: 1200 },
  { name: "July", Total: 1600, Previous: 1300 },
  { name: "September", Total: 1200, Previous: 1800 },
  { name: "Novermber", Total: 900, Previous: 1500 },
  { name: "December", Total: 1700, Previous: 1200 },
];

const Revenue = (props) => {
  return (
    <div className="overview">
      <Sidebar />
      <div className="containerOverview">
        <Navbar />
        <div className="homeLayout">
          <div className="greeting1">Date</div>

          <div
            className="a"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <div className="trial">
              <h5 style={{ color: "blue" }}>$4000</h5>
              <h5>Total Revenue</h5>
            </div>
            <div className="trial">
              <h5 style={{ color: "blue" }}>15</h5>
              <h5>New Customers Aquired</h5>
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
              <h4>Revenue</h4>
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
                  <Line type="monotone" dataKey="Previous" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* <div className="chart">
              <h4>Revenue Progress</h4>
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
            </div> */}
            <div className="chart">
              <Featured />
            </div>
          </div>

          {/* end of charts */}
        </div>
      </div>
    </div>
  );
};

export default Revenue;
