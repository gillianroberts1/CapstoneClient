import React from "react";
import Group from "./Group";
import { Link } from "react-router-dom";
import './css/GroupList.css'

const GroupList = ({ groupWalkies, users }) => {
  const groupNodes = groupWalkies.map((groupWalk, id) => {
    return (
      <>
      <Link
        key={groupWalk.id}
        to={{ pathname: `/groupwalkies/${groupWalk.id}`, state: { groupWalk } }}
        className="group-link"
      >
        <li key={id} className="list">
          <Group groupWalk={groupWalk} users={users} />
        </li>
      </Link>
      </>
    );
  });
  return (
    <>
      <div className="group-list-container">
      {groupNodes}
      <button className="group-btn"><Link to={{pathname: "/creategroupwalk"}}>Create Group Walk</Link></button>
      </div>
    </>
  );
};

export default GroupList;
