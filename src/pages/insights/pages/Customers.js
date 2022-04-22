import "./customers.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import Sidebartrial from "../../../components/sidebartrial/Sidebartrial";
import { Map, GoogleApiWrapper } from "google-maps-react";
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
  Cell,
} from "recharts";

const data = [
  { name: "Monday", Total: 10 },
  { name: "Tuesday", Total: 50 },
  { name: "Wednesday", Total: 20 },
  { name: "Thursday", Total: 60 },
  { name: "Friday", Total: 10 },
  { name: "Saturday", Total: 80 },
  { name: "Sunday", Total: 50 },
];
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

const Customers = () => {
  return (
    <div className="overview">
      <Sidebartrial />
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
              <h5 style={{ color: "blue" }}>200</h5>
              <h5>New Users Aquired</h5>
            </div>
            <div className="trial">
              <h5 style={{ color: "blue" }}>8.5%</h5>
              <h5>Repeat Purchase Rate</h5>
            </div>

            <div className="trial">
              <h5 style={{ color: "blue" }}>1.2%</h5>
              <h5>Customer Churn Rate</h5>
            </div>
          </div>
          <div className="chartContainer">
            <div className="chart">
              <h4>Customer Phone Calls</h4>
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
              <h4>Customer Vist and Buying</h4>
              <ResponsiveContainer width="100%" aspect={2 / 1}>
                <PieChart width={400} height={400}>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={130}
                    fill="#8884d8"
                    dataKey="Total"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
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
          </div>
          <div className="chart">
            <h4>Google Maps</h4>
          </div>
          {/* end of charts */}
        </div>
      </div>
    </div>
  );
};

export default Customers;
