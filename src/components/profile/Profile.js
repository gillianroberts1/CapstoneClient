import React from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Detail from "./UserDetail";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

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
      <button onClick={()=>signOut(auth)}>Logout</button>
    </>
  );
};

export default Profile;
