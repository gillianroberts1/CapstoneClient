import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MembersList from "../components/members/MembersList";
import Request from "../Helpers/Request";
import Register from "../firebase/Register";
import Home from "../components/Home";
import Login from "../firebase/Login";
import Profile from "../components/profile/Profile";
import MemberCard from "../components/members/MemberCard";
import WalkieForm from "../components/walkies/WalkieForm";
import Notification from "../components/profile/Notification";
import GroupCard from "../components/groupWalkies/GroupCard";
import GroupList from "../components/groupWalkies/GroupList";
import { AuthContext } from "../context/AuthContext";
import DogForm from "../components/profile/dogs/DogForm";
import DogDetail from "../components/profile/dogs/DogDetail";

const MainContainer = () => {
  const [users, setUsers] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [walkies, setWalkies] = useState([]);
  const [groupWalkies, setGroupWalkies] = useState([]);

  useEffect(() => {
    const request = new Request();

    const userPromise = request.get("/api/users");
    const dogPromise = request.get("/api/dogs");
    const walkiesPromise = request.get("/api/walkies");
    const groupWalkiesPromise = request.get("/api/groupwalkies");

    Promise.all([
      userPromise,
      dogPromise,
      walkiesPromise,
      groupWalkiesPromise,
    ]).then((data) => {
      setUsers(data[0]);
      setDogs(data[1]);
      setWalkies(data[2]);
      setGroupWalkies(data[3]);
    });

    
    
  }, []);

  



  const handlePost = (user) => {
    console.log("Posting user:", user); // Log the user data
    const request = new Request();
    request.post("/api/users", user).then(() => {
      // window.location = '/'
    });
  };

  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register onCreate={handlePost} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/members" element={<ProtectedRoute><MembersList users={users} /></ProtectedRoute>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/walkies" element={<WalkieForm/>}/>
        <Route path="/memberCard" element={<MemberCard/>}/>
        <Route path="/notifications" element={<Notification/>}/>
        <Route path="/groupCard" element={<GroupCard/>}/>
        <Route path="/groups" element={<GroupList groupWalkies={groupWalkies} users={users}/>}/>
        <Route path="/newDog" element={<DogForm/>}/>
        <Route path="/dogs" element={<DogDetail/>}/>
        {/* <MembersList users={users}/> */}
      </Routes>
    </BrowserRouter>
  );
};

export default MainContainer;
