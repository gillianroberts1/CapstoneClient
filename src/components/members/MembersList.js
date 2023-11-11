import React from "react";
import Member from "./Member";

const MembersList = ({ users }) => {
  const usersNodes = users.map((user, id) => {
    return (
      <li key={id} className="members-list">
        <Member user={user} />
      </li>
    );
  });
  return (
    <div>
      <h2>Members List</h2>
      <ul>{usersNodes}</ul>
    </div>
  );
};

export default MembersList;
