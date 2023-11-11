import React from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Detail from "./UserDetail";
import Notification from "./Notification";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div>Profile</div>
      <Dashboard />
      <Sidebar />
      <Detail />
      <button>
        <Link to="/notifications">Notification</Link>
      </button>
    </>
  );
};

export default Profile;
