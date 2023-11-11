import React from "react";
import { Link } from "react-router-dom";

const Member = ({ user }) => {
  return (
    <div>
      <Link to="/memberCard">
        <p>{user.firstName}</p>
      </Link>
      <p>{user.lastName}</p>
    </div>
  );
};

export default Member;
