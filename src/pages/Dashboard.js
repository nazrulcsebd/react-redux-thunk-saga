import React from "react";
import UserPage from "./user-details/userPage";
const Dashboard = () => {
  return (
    <div style={{ padding: "50px 50px 0 50px" }}>
      <div>This is a simple dashboard</div>
      <br />
      <UserPage />
    </div>
  );
};

export default Dashboard;
