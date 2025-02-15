import React from "react";
import { Link } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import "../styles.css";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

// Battery Status (Doughnut Chart)
const batteryData = {
  labels: ["Remaining", "Consumed"],
  datasets: [
    {
      label: "Battery Status",
      data: [65, 35],
      backgroundColor: ["#36A2EB", "#FFCE56"],
      borderWidth: 2,
    },
  ],
};

// Sales Data (Bar Chart) with More Months
const salesData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Sales (in USD)",
      data: [400, 600, 800, 700, 900, 1000, 1200, 1100, 1300, 1400, 1500, 1600],
      backgroundColor: "#4CAF50",
      borderRadius: 5,
    },
  ],
};

// Chart Options
const salesChartOptions = {
  responsive: true,
  maintainAspectRatio: false, // Allows custom height
  scales: {
    y: {
      beginAtZero: true,
      grid: { color: "rgba(255,255,255,0.2)" },
      ticks: { color: "white", font: { size: 14 } },
    },
    x: {
      grid: { color: "rgba(255,255,255,0.2)" },
      ticks: { color: "white", font: { size: 14 } },
    },
  },
};

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">📊 Analytics Dashboard</h2>

      <div className="dashboard-grid">
        {/* Battery Status */}
        <div className="dashboard-card">
          <Doughnut data={batteryData} />
          <p className="chart-label">Battery Status</p>
        </div>

        {/* Sales Data */}
        <div className="dashboard-card">
          <div className="sales-chart">
            <Bar data={salesData} options={salesChartOptions} />
          </div>
          <p className="chart-label">Monthly Sales</p>
        </div>
      </div>

      <Link to="/" className="logout-btn">🚪 Logout</Link>
    </div>
  );
};

export default Dashboard;
