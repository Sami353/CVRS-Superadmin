import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/sidebar"; // Import Sidebar component
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Dashboard Content */}
      <div className="dashboard-content">
        <h1>Superadmin Dashboard</h1>
        <div className="dashboard-options">
          <Link to="/create-hospital" className="dashboard-link">
            Create Hospital
          </Link>
          <Link to="/view-hospitals" className="dashboard-link">
            View Hospital Records
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
