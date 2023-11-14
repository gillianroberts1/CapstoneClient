import React from "react";
import { Link } from "react-router-dom";

const Dog = ({ dog }) => {
  return (
    <div>
      <Link to={`/dogs/${dog.id}`} state={{dog:dog}}>{dog.name}</Link>
    </div>
  );
};

export default Dog;
