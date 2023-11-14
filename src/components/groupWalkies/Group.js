import React from "react";
import "./css/Group.css";

const Group = ({ groupWalk }) => {
  return (
    <>
      <div className="group-wrapper">
        <h2>{groupWalk.name}</h2>
        
          {groupWalk.date}{" "}&#9900;{" "}
          {groupWalk.location}
        
      </div>
    </>
  );
};

export default Group;
