import React, { useState, useEffect, useContext } from "react";
import DogDetail from "./dogs/DogDetail";
import UserDetail from "./UserDetail";
import Request from "../../Helpers/Request";

const Detail = ({ selectedOption }) => {
  //   const { currentUser } = useContext(AuthContext); currentUser.uid
  const userId = 1; //logged in user
  const [user, setUser] = useState();

  useEffect(() => {
    const request = new Request();
    request.get(`/api/users/${userId}`).then((data) => setUser(data));
  }, [userId]);

  return (
    <>
      <div>
        {selectedOption === "user" ? <UserDetail /> : null}
        {selectedOption === "dog" ? <DogDetail dogs={user.dogs} /> : null}
      </div>
    </>
  );
};

export default Detail;
