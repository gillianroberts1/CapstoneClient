import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  redirect,
} from "react-router-dom";
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
import DogForm from "../components/profile/dogs/DogForm";
import DogDetail from "../components/profile/dogs/DogDetail";
import UserDetail from "../components/profile/UserDetail";
import DogCard from "../components/profile/dogs/DogCard";
import CurrentUserDetail from "../components/profile/currentUser/CurrentUserDetail";
import WalkieTalkie from "../firebase/WalkieTalkie";
import { AuthContext } from "../firebase/context/AuthContext";
import GroupWalkieForm from "../components/groupWalkies/GroupWalkieForm";



const MainContainer = () => {
  const [users, setUsers] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [walkies, setWalkies] = useState([]);
  const [groupWalkies, setGroupWalkies] = useState([]);
  const [userDogs, setUserDogs] = useState([]);
  const [location, setLocation] = useState([])


  useEffect(() => {
    const request = new Request();

    const userPromise = request.get("/api/users");
    const dogPromise = request.get("/api/dogs");
    const walkiesPromise = request.get("/api/walkies");
    const groupWalkiesPromise = request.get("/api/groupwalkies");
    const locationPromise = request.get("/api/locations");


    Promise.all([
      userPromise,
      dogPromise,
      walkiesPromise,
      groupWalkiesPromise,
      locationPromise

    ]).then((data) => {
      setUsers(data[0]);
      setDogs(data[1]);
      setWalkies(data[2]);
      setGroupWalkies(data[3]);
      setLocation(data[4]);

    });
  }, []);

  const handlePost = (user) => {
    console.log("Posting user:", user); // Log the user data
    const request = new Request();
    request.post("/api/users", user).then(() => {
      // window.location = '/'
    });
  };

  const handleAddDog = (dog) => {
    console.log("Updating Dogs:", dog);
    const request = new Request();
    request.post("/api/dogs", dog).then(() => {});
  };

  const handleGroupWalk = (groupWalkies)=> {
    const request = new Request();
    request.post("/api/groupwalkies", groupWalkies).then(() => {});
  }

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

        <Route path="/dog/:id" element={<DogCard />} />

        <Route
          path="/members"
          element={
            <ProtectedRoute>
              <MembersList users={users} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/walkies"
          element={
            <ProtectedRoute>
              <WalkieForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/members/:id"
          element={
            <ProtectedRoute>
              <MemberCard users={users} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <Notification />
            </ProtectedRoute>
          }
        />
        <Route
          path="/groups/:id"
          element={
            <ProtectedRoute>
              <GroupCard groupWalkies={groupWalkies} users={users} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/groups"
          element={
            <ProtectedRoute>
              <GroupList groupWalkies={groupWalkies} users={users} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/newDog" 
          element={
            <ProtectedRoute>
              <DogForm onCreate={handleAddDog} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dogs"
          element={
            <ProtectedRoute>
              <DogDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <CurrentUserDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/walkietalkie"
          element={
            <ProtectedRoute>
              <WalkieTalkie />
            </ProtectedRoute>
          }
        />


      <Route
          path="/creategroupwalk"
          element={
            <ProtectedRoute>
              <GroupWalkieForm groupWalkies={groupWalkies} locations={location} onCreate={handleGroupWalk}/>
            </ProtectedRoute>
          }
        />

        {/* <MembersList users={users}/> */}
      </Routes>
    </BrowserRouter>
  );
};

export default MainContainer;
