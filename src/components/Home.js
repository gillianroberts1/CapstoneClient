import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import dogs from "./images/assets/dogs.jpeg";
import "./css/Home.css";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <div className="home-container">
        <div className="home-wrapper">
          <div className="details">
            <p>
              Welcome to Wiggle Waggle Waddles,{" "}<br/>
              {currentUser && `${currentUser.firstName}`}
            </p>
            {/* {currentUser && <img src={currentUser.photoURL} alt='' style={{ height: '200px', width: '200px', objectFit: 'cover', borderRadius: '50%'}}/>}<br></br>
             */}
          </div>
          <div className="home-image">
            <img src={dogs} alt="dogs" />
          </div>
        </div>
      </div>
      <div className="button">
        <button className="enter">
          <Link to="/login">Get Started</Link>
        </button>
      </div>
    </>
  );
};

export default Home;
