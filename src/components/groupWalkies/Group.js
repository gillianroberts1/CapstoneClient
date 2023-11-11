import React from "react";
import { Link } from "react-router-dom";

const Group = ({ groupWalk }) => {
  return (
    <>
      <h2>{groupWalk.name}</h2>
      <p>{groupWalk.date}</p>
      <p>{groupWalk.location.name}</p>
      <p>
        {groupWalk.users.map((user) => (
          <li className="ingredients" key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </p>

      <button>
        <Link to="/groupCard">More info</Link>
      </button>
    </>
  );
};

export default Group;
