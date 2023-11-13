import React from "react";
import { Link, useParams } from "react-router-dom";
import "./css/GroupCard.css";

const GroupCard = ({ groupWalkies }) => {
  const { id } = useParams();
  const selectedWalk = groupWalkies.find(
    (groupWalkie) => groupWalkie.id === parseInt(id)
  );

  if (!selectedWalk) {
    return <div>Walk not found</div>;
  }
  return (
    <div className="group-card-container">
      <div className="group-card-wrapper">
        <div className="group-card-details">
          <h2>{selectedWalk.name}</h2>
          <p>
            Date: {selectedWalk.date} <br />
            Location: {selectedWalk.location.name}
            <br />
            Area: {selectedWalk.location.area}
            <br />
            Distance: {selectedWalk.distance} miles <br />
            {selectedWalk.duration} minutes <br />
            Difficulty: {selectedWalk.location.difficulty}
            <br />
          </p>
        </div>

        <div className="attendees">
          <button className="join-btn">Join</button>
          {selectedWalk.users.map((user) => (
            <li className="users" key={user.id}>
              <Link to={`/members/${user.id}`}>
                {user.firstName} {user.lastName}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
