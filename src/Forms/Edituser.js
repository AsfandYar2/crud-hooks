import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Edituser({ currentuser, updateUser, setediting }) {
  const [user, setUser] = useState(currentuser);

  const handleInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => setUser(currentuser), [currentuser]);

  const handleSubmit = () => {
    if (!user.name || !user.username) return alert("enter value");
    updateUser(user.id, user);
    setUser({ username: "" });
    alert("User Updated");
  };

  return (
    <div id="box">
      <h1>Edit User</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <label>Name</label>
        <div>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>
        <label>UserName</label>
        <div>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
          />
        </div>

        <input
          type="radio"
          name="gender"
          value="Male"
          checked={user.gender === "Male"}
          onChange={handleInputChange}
        />
        <label>Male</label>
        <input
          type="radio"
          name="gender"
          value="FeMale"
          checked={user.gender === "FeMale"}
          onChange={handleInputChange}
        />
        <label>Female</label>
        <br />

        <select name="city" value={user.city} onChange={handleInputChange}>
          <option disable>Select City</option>
          <option>Lahore</option>
          <option>kasur </option>
          <option>Faisalabad </option>
        </select>
        <br />
        <label>Comment</label>
        <br />
        <textarea
          rows="5"
          cols="40"
          name="comment"
          value={user.comment}
          onChange={handleInputChange}
        />
        <br />
        <Link to="/">
          <button onClick={handleSubmit}>UpdateUser</button>
        </Link>
        <Link to="/">
          <button onClick={() => setediting(false)}>Cancel</button>
        </Link>
      </form>
    </div>
  );
}

export default Edituser;
