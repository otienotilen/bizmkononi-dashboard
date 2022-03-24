import React, { useState, useEffect} from 'react';
import './Sales.css';
 
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
  LineChart, Line,
  
  Cell,
  
} from "recharts";



const Sales = (props) => {
  const [chart, setChart] =useState([])
var baseUrl = "https://api.coinranking.com/v2/coins/?limit=10"
var proxyUrl = 'https://cors-anywere.herokuapp.com/'
var apiKey = "coinrankingc032026f93e3b94c047c89523ca837327c4dac81e1070686"

useEffect(() => {
const fetchCoins= async () => {
  await fetch(`${proxyUrl}${baseUrl}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': '${apiKey}',
      'Access-Control-Allow-Origin': '*'
    }
  }).then((response) => {
    response.json().then((json) => {
      console.log(json)
      setChart(json.data)
    })
  }).catch(error => {
    console.log(error);
  })
}
  fetchCoins()
},[baseUrl, proxyUrl, apiKey])



    const data = [
     // { name: chart.coins.map(x => x.name), value: chart.coins.map(x => x.price) },
    
      // { name: 'Group B', value: 300 },
      // { name: 'Group C', value: 300 },
      // { name: 'Group D', value: 200 },
        {name: chart?.coins?.map(x => x.name)},
        {datasets: [{
            label: '${chart?.coins?.length} Coins Available',
            value: chart?.coins?.map(x => x.price),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 10000
        }]
      }
     ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  return (
    <div className='home-s'>
      <div className="top-s">
        <div className="top-s-content">
          <h1 style={{color: "blue"}}>$4000</h1><br/>
        
          Total Revenue
          </div>
        <div className="top-s-content">
         <h1 style={{color: "blue"}}>240</h1><br/>
          Total Orders
          </div>
        <div className="top-s-content">
          <h1 style={{color: "blue"}}>1.2%</h1><br/>
          Customer Churn Rate
          </div>
        <div className="top-s-content">
          <h1 style={{color: "blue"}}>8.5%</h1><br/>
          Repeat Purchase Rate
          </div>
      </div>

      <div className="middle-s">
        <div className="middle-s-content">
          <h3>Customer Churn Rate</h3>
          <br/>
          <h4 style={{textAlign: "right"}}> Day of the Week<span class="fa fa-caret-down"></span></h4>
          <PieChart width={200} height={200}>
          <Pie 
           data={data} dataKey="value" 
           cx="50%" cy="50%" outerRadius={60}
           fill="#8884d8" />
          <Tooltip />
          
        </PieChart>
        
        </div>
        <div className="middle-s-content" style={{ textAlign: "center"}}>
          <h3>Most selling product</h3>
          <br/>
          <h4 style={{textAlign: "right"}}>Week<span class="fa fa-caret-down"></span> Month<span class="fa fa-caret-down"></span> Year <span class="fa fa-caret-down"></span></h4>
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
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
        </div>
      </div>
      <div className="middle-s">
        <div className="middle-s-content">
           <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </div>
        <div className="middle-s-content">
           <LineChart
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
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="value" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
        </div>
      </div>
      <div className="middle-s">
        <div className="middle-s-content">
           <div className="chart-wrapper">
            <LineChart
                width={800}
                height={500}
                data={props.data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={props.label_1} stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey={props.label_2} stroke="#87d110" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
          
          </div>

        <div className="middle-s-content">2</div>
      </div>
      <div className="middle-s">
        <div className="middle-s-content">1</div>
        <div className="middle-s-content">2</div>
      </div>
       
    </div>
  );
};

export default Sales;
