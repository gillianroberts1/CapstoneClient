import React from "react";
import { useLocation } from "react-router-dom";

const DogCard = () => {
  const location = useLocation();
  const {
    dog: { name, breed, gender, leash, neutered, rating, vaccinated },
  } = location.state;
  return (
    <div className="dog-card">
      DogCard
      <p>Name: {name}</p>
      <p>Breed: {breed}</p>
      <p>Gender: {gender}</p>
      <p>Leash: {leash.toString()}</p>
      <p>Neutered: {neutered.toString()}</p>
      <p>Vaccinated: {vaccinated.toString()}</p>
      {/* <p>Rating: {rating > 0 ? "⭐️".repeat(rating) : "not rated yet"}</p> */}
      <p>Rating: {"⭐️".repeat(5)}</p>
    </div>
  );
};

export default DogCard;
