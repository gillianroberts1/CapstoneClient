import React from "react";
import { Link } from "react-router-dom";

const Dog = ({ dog }) => {
  return (
    <div className="dog-list">
    <div className="dog-name">
      <Link to={`/dogs/${dog.id}`} state={{dog:dog}}>{dog.name}</Link>
    </div>
    </div>
  );
};

export default Dog;
