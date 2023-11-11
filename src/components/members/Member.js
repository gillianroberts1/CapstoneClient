import React from "react";
import './css/Member.css'

const Member = ({ user }) => {
  return (
      <div className="member-wrapper">
        <div>
      <img src={user.photoURL} alt="user" height={20} />
      <p>
        {user.firstName} {user.lastName}
      </p>
    </div>
    </div>
  );
};

export default Member;
