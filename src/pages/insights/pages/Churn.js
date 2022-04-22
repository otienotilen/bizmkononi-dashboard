import "./churn.scss";
import Sidebartrial from "../../../components/sidebartrial/Sidebartrial";
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

const Churn = () => {
  return (
    <div className="overview">
      <Sidebartrial />
      <div className="containerOverview">
        <Navbar />
        <div className="homeLayout">
          <div className="greeting">
            <br />
            <p>Churn</p>
          </div>

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div className="trial">
              <h5 style={{ color: "blue" }}>-14</h5>
              <h5>Customer Loss</h5>
            </div>
            <div className="trial">
              <h5 style={{ color: "blue" }}>5</h5>
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
          <div className="chartcontainerC">
            <div className="chart">
              <h4>Customer Churn Rate</h4>
              <ResponsiveContainer width="70%" aspect={2 / 1}>
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

export default Churn;
