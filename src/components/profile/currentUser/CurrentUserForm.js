import React, { useContext, useState } from "react";
import { AuthContext } from "../../../firebase/context/AuthContext";

const CurrentUserForm = ({ onUpdateUser }) => {
  const { currentUser } = useContext(AuthContext);

  const [user, setUser] = useState({
    firstName: currentUser.firstName || "",
    lastName: currentUser.lastName || "",
    age: currentUser.age || null,
    gender: currentUser.gender || null,
    area: currentUser.area || null,
  });

  const handleInputChange = (e) => {
    let propertyName = e.target.name;
    let copiedUser = { ...user };
    copiedUser[propertyName] = e.target.value;
    copiedUser.id = currentUser.id;
    setUser(copiedUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting user data:', user);
    onUpdateUser(user);
  };

  return (
    <div>
      <h2>User Update Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Gender:
          <select
            name="gender"
            value={user.gender}
            onChange={handleInputChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>
          Area:
          <input
            type="text"
            name="area"
            value={user.area}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default CurrentUserForm;