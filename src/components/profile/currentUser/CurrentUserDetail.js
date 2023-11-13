import React, { useContext } from "react";
import { AuthContext } from "../../../firebase/context/AuthContext"


const CurrentUserDetail = () => {
  const { currentUser } = useContext(AuthContext);

  //   const location = useLocation();
  //   const {
  //     user: { first_name, last_name },
  //   } = location.state;

  return (
    <div className="current_user">
      Current User Detail
      <p>
        {currentUser && (
          <img
            src={currentUser.photoURL}
            alt=""
            style={{
              height: "200px",
              width: "200px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        )}
        <br></br>
      </p>
      <p>First Name: {currentUser.firstName}</p>
      <p>Last Name: {currentUser.lastName}</p>
      <p>Age: {currentUser.age}</p>
      <p>Login Details: {currentUser.email}</p>
      <p>Gender: {currentUser.gender}</p>
      <p>Home Area: {currentUser.area}</p>
      <p></p>
    </div>
  );
};

export default CurrentUserDetail;
