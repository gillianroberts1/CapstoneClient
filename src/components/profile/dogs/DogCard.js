import React from "react";
import { useLocation } from "react-router-dom";

const DogCard = () => {
  const location = useLocation();
  const {
    dog: { name, breed, gender, leash, neutered, rating, vaccinated },
  } = location.state;

  const getSymbol = (value) => (value ? "✓" : "✗");
  const capitalizedGender = gender.charAt(0).toUpperCase() + gender.slice(1).toLowerCase();

  

  return (
    <div className="dog-card">
      Dog Details
      <p>Name: {name}</p>
      <p>Breed: {breed}</p>
      <p>Gender: {capitalizedGender}</p>
      <p>Need Leash: {getSymbol(leash)}</p>
      <p>Neutered: {getSymbol(neutered)}</p>
      <p>Vaccinated: {getSymbol(vaccinated)}</p>
      <p>Playfulness Rating: {rating > 0 ? "🐶 ".repeat(rating) : "not rated yet"}</p>
    </div>
  );
};

export default DogCard;
