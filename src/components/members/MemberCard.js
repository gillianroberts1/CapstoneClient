import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./css/MemberCard.css";
import { AuthContext } from "../../firebase/context/AuthContext";

const MemberCard = ({ users }) => {
  const { currentUser } = useContext(AuthContext);
  const [favourites, setFavourites] = useState([]);

  const { id } = useParams();
  const selectedUser = users.find((user) => user.id === parseInt(id, 10));

  useEffect(() => {
    if (currentUser && currentUser.favourites) {
      setFavourites(currentUser.favourites);
    }
  }, [currentUser]);

  if (!selectedUser) {
    return <div>User not found</div>;
  }

  // const toTitleCase = (str) => {
  //   return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  // };

  const isUserInFavorites = () => {
    return favourites.some((fav) => fav.id === selectedUser.id);
  };

  const addToFavourites = () => {
    setFavourites((prevFavourites) => {
      if (!prevFavourites.some((fav) => fav.id === selectedUser.id)) {
        const updatedFavourites = [...prevFavourites, selectedUser];
        console.log("Favourites After:", updatedFavourites);

        if (currentUser && currentUser.id) {
          const userId = currentUser.id;
          fetch(`/api/users/${userId}/favourites/${selectedUser.id}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ favourites: updatedFavourites }),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Failed to update user data");
              }
              return response.json();
            })
            .then((data) => {
              console.log("User data updated successfully:", data);
              console.log("Favs after:", data.favourites);
            })
            .catch((error) => {
              console.error("Error updating user data:", error);
            });
        }
        return updatedFavourites;
      }
      return prevFavourites;
    });
    console.log(selectedUser);
  };

  return (
    <div className="member-card-container">
      <div className="member-card-wrapper">
        <div className="member-card-details">
          <img src={selectedUser.photoURL} alt="user" className="image" />
          <p className="name">
            {selectedUser.firstName} {selectedUser.lastName}
          </p>
          <div className="card-details">
            Age: {selectedUser.age}
            <br />
            Gender: {selectedUser.gender}
            <br />
            Area: {selectedUser.area}
            <br />
            Distance walked: {selectedUser.distance} miles
            <br />
            <button className="invite">
              <Link to="/walkies">Send Invitation</Link>
            </button>
            {!isUserInFavorites() && (
              <button className="invite" onClick={addToFavourites}>
                Add to Favourites
              </button>
            )}
          </div>
        </div>
        <div className="dog-details">
          {selectedUser.dogs.map((dog) => (
            <div key={dog.id} className="dog-container">
              <li className="dogs" key={dog.id}>
                <Link to={`/dogs/${dog.id}`} className="dog-link">
                  <b>{dog.name}</b>
                  <br />
                  {dog.breed}
                  <br />
                  Need Leash:{" "}
                  {dog.leash ? <span>&#10003;</span> : <span>&#10008;</span>}
                  <br />
                  Neutered:{" "}
                  {dog.neutered ? <span>&#10003;</span> : <span>&#10008;</span>}
                  <br />
                  Vaccinated:{" "}
                  {dog.vaccinated ? (
                    <span>&#10003;</span>
                  ) : (
                    <span>&#10008;</span>
                  )}
                  <br />
                </Link>
              </li>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
