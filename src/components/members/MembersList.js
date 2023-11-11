import React from "react";
import Member from "./Member";
import { Link } from "react-router-dom";

const MembersList = ({ users }) => {
  const usersNodes = users.map((user, id) => {
    return (
      <>
        <Link to={`/members/${user.id}`}>
          <li key={id} className="members-list">
            <Member user={user} />
          </li>
        </Link>
      </>
    );
  });
  return (
    <div>
      <h2>Members List</h2>
      <ul>
        {usersNodes}
      </ul>
    </div>
  );
};

export default MembersList;
