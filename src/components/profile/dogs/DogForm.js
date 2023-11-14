import React, { useContext, useState } from "react";
import { AuthContext } from "../../../firebase/context/AuthContext"

import { useNavigate } from "react-router-dom";
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import "./css/DogForm.css"

const DogForm = ({ onCreate }) => {
  const { currentUser } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const [stateUserDog, setStateUserDog] = useState({
    name: "",
    gender: "",
    breed: "",
    neutered: null,
    leash: null,
    vaccinated: null,
    rating: 0,
  });

  const handleInputChange = (e) => {
    let propertyName = e.target.name;
    let copiedUserDog = {...stateUserDog}
    copiedUserDog[propertyName] = e.target.value;
    setStateUserDog(copiedUserDog)
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  };

  const handleRating = function (event) {
    const value = event.target.value
    setStateUserDog((prevState) => ({
      ...prevState,
      rating: parseInt(value),
    }));
  };

  const handleBreed = function (event) {
    // const index = parseInt(event.target.value);
    const selectedBreed = event.target.value;
    // copiedUserDog['breed'] = selectedBreed;
    setStateUserDog((prevState) => ({
      ...prevState,
      breed: selectedBreed,
    }));
    console.log(stateUserDog);
  };

  const handleBoolean = function (event) {
    const propertyName = event.target.name;
    const value = event.target.value;
    setStateUserDog((prevState) => ({
      ...prevState,
      [propertyName]: value === "true" ? true : false,
    }));
  };

  const breeds = [
    "Australian Shepherd",
    "Beagle",
    "Boston Terrier",
    "Boxer",
    "Bulldog",
    "Chihuahua",
    "Dachshund",
    "Doberman",
    "German Shepherd",
    "Golden Retriever",
    "Great Dane",
    "Labrador",
    "Maltese",
    "Papillon",
    "Pomeranian",
    "Poodle",
    "Pug",
    "Rottweiler",
    "Shiba Inu",
    "Shih Tzu",
    "Siberian Husky",
    "Yorkshire Terrier",
  ];
  

  const breedOptions = breeds.map((breed, index) => (
    <option key={index} value={breed}>
      {breed}
    </option>
  ));

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const payload = { ...stateUserDog, user: currentUser };
    console.log(payload);
    try {
      const storageRef = ref(storage, `dogs/${file.name}`);
  
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      uploadTask.on('state_changed', 
        (snapshot) => {
        }, 
        (error) => {
          console.log(error);
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            payload.photoURL = downloadURL;
            onCreate(payload);
            navigate("/profile");
          });
        }
      );
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="dog-form">
      Add New Dog
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>
          {" "}
          Dog Name:
          <input
            type="text"
            name="name"
            value={stateUserDog.name}
            onChange={handleInputChange}
          />
        </label>

        <label>
          {" "}
          Breed:
          <select
            name="breed"
            onChange={handleBreed}
            value={stateUserDog.breed}
            defaultValue="select-breed"
          >
            <option value="select-breed">
              Select a Breed
            </option>
            {breedOptions}
          </select>
        </label>
        <label>
          Gender:
          <select
            name="gender"
            onChange={handleInputChange}
            value={stateUserDog.gender}
            defaultValue="gender"
          >
            <option value="gender">
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <label>
          Requires Leash:
          <select
            name="leash"
            onChange={handleBoolean}
            value={stateUserDog.leash}
            defaultValue="select-leash"
          >
            <option value="select-leash">
              Select Walk off leash
            </option>
            <option value="true"><span>&#10003;</span></option>
            <option value="false"><span>&#10008;</span></option>
          </select>
        </label>
        <label>
          Neutered:
          <select
            name="neutered"
            onChange={handleBoolean}
            value={stateUserDog.neutered}
            defaultValue="neutered"
          >
            <option value="neutered">
              Select Neutered
            </option>
            <option value="true"><span>&#10003;</span></option>
            <option value="false"><span>&#10008;</span></option>
          </select>
        </label>
        <label>
          Vaccinated:
          <select
            name="vaccinated"
            onChange={handleBoolean}
            value={stateUserDog.vaccinated}
            defaultValue="vaccinated"
          >
            <option value="vaccinated">
              Select Vaccinated
            </option>
            <option value="true"><span>&#10003;</span></option>
            <option value="false"><span>&#10008;</span></option>
          </select>
        </label>
        <label>
          Playfulness Rating:
          <select
            name="rating"
            onChange={handleRating}
            value={stateUserDog.rating}
            defaultValue="rating"
          >
            <option value="rating">
              Select Rating
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <input
          type="file"
          id="file"
          onChange={handleFileChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  
  );
};

export default DogForm;
