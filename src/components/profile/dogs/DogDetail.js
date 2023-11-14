import React from "react";
import { Link } from "react-router-dom";
import Dog from "./Dog";
import "./css/DogDetail.css";

const DogDetail = ({ dogs }) => {
  const dogNodes = dogs.map((dog) => {
    return (
      <li key={dog.id} className="dog-detail-item">
        <Dog dog={dog} />
      </li>
    );
  });
  return (
    <>
      <div className="dog-detail-header">My Dogs</div>
      <ul className="dog-list">{dogNodes}</ul>

      <Link to="/newDog" className="mem-btn">
        Add Dog
      </Link>
    </>
  );
};

export default DogDetail;
