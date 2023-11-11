import React from "react";

const Member = ({ user }) => {
  return (
    <div>
      <img src={user.photoURL} alt="user" height={30}/>
      <p>{user.firstName}{" "}{user.lastName}</p>
      <p></p>
    </div>
  );
};

export default Member;
