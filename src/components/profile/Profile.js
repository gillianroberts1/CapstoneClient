import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Detail from "./Detail";
import Notification from "./Notification";
import { Link } from "react-router-dom";
import "./css/Profile.css";

const Profile = () => {
  const [selectedOption, setSelectedOption] = useState("user")
  return (
    <>
      <div className="profile-container">
        <div className="sidebar">
          <Sidebar setSelectedOption={setSelectedOption} />
        </div>
        <div className="notifications">
          <button>
            <Link to="/notifications">Notifications</Link>
          </button>
        </div>
        <div className="detail">
          <Detail  selectedOption={selectedOption}/>
        </div>
        <div className="dashboard">
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default Profile;
