import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DogCard = ( {onDelete} ) => {
  const { id } = useParams();
  const [dog, setDog] = useState(null);

  useEffect(() => {
    fetch(`/api/dogs/${id}`)
      .then(response => response.json())
      .then(data => setDog(data))
      .catch(error => console.error('Error:', error));
  }, [id]);

  if (!dog) {
    return <div>No dog data available at the moment!</div>
  }
  
  const {
    name, breed, gender, leash, neutered, rating, vaccinated
  } = dog;

  const getSymbol = (value) => (value ? "✓" : "✗");
  const capitalizedGender = gender.charAt(0).toUpperCase() + gender.slice(1).toLowerCase();

  return (
    <div className="dog-card">
      Dog Details
      <img src={dog.photoURL} style={{height: '100px', width: '100px', borderRadius: '50%', objectFit: 'cover'}}></img>
      <p>Name: {name}</p>
      <p>Breed: {breed}</p>
      <p>Gender: {capitalizedGender}</p>
      <p>Need Leash: {getSymbol(leash)}</p>
      <p>Neutered: {getSymbol(neutered)}</p>
      <p>Vaccinated: {getSymbol(vaccinated)}</p>
      <p>Playfulness Rating: {rating > 0 ? "🐶 ".repeat(rating) : "not rated yet"}</p>
      <button onClick={() => onDelete(dog.id)}>Remove dog</button>
    </div>
  );
};

export default DogCard;
