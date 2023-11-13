import React, { useState, useEffect, useContext } from "react";
import DogDetail from "./dogs/DogDetail";
import Request from "../../Helpers/Request";
import { AuthContext } from "../../context/AuthContext";
import CurrentUserDetail from "./currentUser/CurrentUserDetail";


const Detail = ({ selectedOption }) => {
  const { currentUser } = useContext(AuthContext);

  //   const { currentUser } = useContext(AuthContext); currentUser.uid
  // const userId = 12; //logged in user
  const [user, setUser] = useState();


  useEffect(() => {
    if (currentUser) {
      const userId = currentUser.id; 
      const request = new Request();
      request.get(`/api/users/${userId}`).then((data) => setUser(data));
    }
  }, [currentUser]);

  return (
    <>
      <div>
        {selectedOption === "user" ? <CurrentUserDetail user={user} /> : null}
        {selectedOption === "dog" ? <DogDetail dogs={user ? user.dogs: []} /> : null}
      </div>
    </>
  );
};

export default Detail;
