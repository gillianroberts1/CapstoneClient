import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./css/DogCard.css";

const DogCard = ({ onDelete }) => {
  const { id } = useParams();
  const [dog, setDog] = useState(null);

  useEffect(() => {
    fetch(`/api/dogs/${id}`)
      .then((response) => response.json())
      .then((data) => setDog(data))
      .catch((error) => console.error("Error:", error));
  }, [id]);

  if (!dog) {
    return <div>No dog data available at the moment!</div>;
  }

  const { name, breed, gender, leash, neutered, rating, vaccinated } = dog;

  const getSymbol = (value) => (value ? "✓" : "✗");
  const capitalizedGender =
    gender.charAt(0).toUpperCase() + gender.slice(1).toLowerCase();

  return (
    <div className="dog-card-container">
      <div className="dog-card-wrapper">
        <img className="dog-img" src={dog.photoURL} alt="image of dog"></img>
        <div className="dog-card-details">
          <p>Name: {name}</p>
          <p>Breed: {breed}</p>
          <p>Gender: {capitalizedGender}</p>
          <p>Need Leash: {getSymbol(leash)}</p>
          <p>Neutered: {getSymbol(neutered)}</p>
          <p>Vaccinated: {getSymbol(vaccinated)}</p>
          <p>
            Playfulness Rating:{" "}
            {rating > 0 ? "🐶 ".repeat(rating) : "not rated yet"}
          </p>
          <div className="mem-btn">
            <button onClick={() => onDelete(dog.id)}>Remove dog</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogCard;
