import React from "react";
import Member from "./Member";
import { Link } from "react-router-dom";
import './css/MembersList.css'

const MembersList = ({ users }) => {
  const usersNodes = users.map((user, id) => {
    return (
      
      <Link
        key={user.id}
        to={{ pathname: `/members/${user.id}`, state: { user } }}
      >
          <Member user={user} />
      </Link>
    );
  });
  return (
    <>
    <div className="members-list-container">
        {usersNodes}
        </div>
        </>
  );
};

export default MembersList;
