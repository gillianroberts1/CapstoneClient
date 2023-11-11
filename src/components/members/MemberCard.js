import React from "react";
import { Link, useParams } from "react-router-dom";
import "./css/MemberCard.css";

const MemberCard = ({ users }) => {
  const { id } = useParams();
  const selectedUser = users.find((user) => user.id === parseInt(id, 10));

  if (!selectedUser) {
    return <div>User not found</div>;
  }

  return (
    <div className="member-card-container">
      <div className="member-card-wrapper">
        <div>
          <img src={selectedUser.photoURL} alt="user" className="image" />
          <p className="name">
            {selectedUser.firstName} {selectedUser.lastName}
          </p>
          <div className="details">
            {selectedUser.age}
            <br />
            {selectedUser.gender}
            <br />
            {selectedUser.area}
            <br />
            Distance walked: {selectedUser.distance} miles
            <br />
          </div>
        
        <button className="invite">
          <Link to="/walkies">Send Invitation</Link>
        </button>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
