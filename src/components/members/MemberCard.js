import React from "react";
import { Link, useParams } from "react-router-dom";
import "./css/MemberCard.css";

const MemberCard = ({ users }) => {
  const { id } = useParams();
  const selectedUser = users.find((user) => user.id === parseInt(id, 10));

  if (!selectedUser) {
    return <div>User not found</div>;
  }

  // const toTitleCase = (str) => {
  //   return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  // };

  return (
    <div className="member-card-container">
      <div className="member-card-wrapper">
        <div className="member-card-details">
          <img src={selectedUser.photoURL} alt="user" className="image" />
          <p className="name">
            {selectedUser.firstName} {selectedUser.lastName}
          </p>
          <div className="card-details">
            Age: {selectedUser.age}
            <br />
            Gender: {selectedUser.gender}
            <br />
            Area: {selectedUser.area}
            <br />
            Distance walked: {selectedUser.distance} miles
            <br />
            <button className="invite">
          <Link to="/walkies">Send Invitation</Link>
        </button>
          </div>
          </div>
          <div className="dog-details">
          {selectedUser.dogs.map((dog) => (
            <div className="dog-container">
            <li className="dogs" key={dog.id}>
              <Link to={`/dogs/${dog.id}`} className="dog-link">
                <b>{dog.name}</b><br/>
                {dog.breed}<br/>
                Need Leash:{" "}{dog.leash ? (
              <span>&#10003;</span>
            ) : (
              <span>&#10008;</span>
            )}<br/>

                Neutered:{" "}{dog.neutered ? (
              <span>&#10003;</span>
            ) : (
              <span>&#10008;</span>
            )}<br/>
            Vaccinated:{" "}{dog.vaccinated ? (
              <span>&#10003;</span>
            ) : (
              <span>&#10008;</span>
            )}<br/>



              </Link>
            </li>
            </div>
          ))}
          </div>
          
        
        
        </div>
      </div>
  );
};

export default MemberCard;
