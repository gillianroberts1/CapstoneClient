import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Detail from "./Detail";
import { Link } from "react-router-dom";
import "./css/Profile.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Profile = () => {
  const [selectedOption, setSelectedOption] = useState("user");
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
          <Detail selectedOption={selectedOption} />
          <button className="logout" onClick={() => signOut(auth)}>
            Logout
          </button>
        </div>
        <div className="dashboard">
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default Profile;
