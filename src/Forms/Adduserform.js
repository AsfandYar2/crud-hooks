import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/form.css";
import uuid from "uuid";

function Adduserform({ addUser }) {
  const initialstate = {
    id: uuid(),
    name: "",
    username: "",
    gender: "",
    city: "",
    comment: ""
  };
  const [user, setUser] = useState(initialstate);

  const handleInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div id="box">
      <h1>Add User</h1>
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!user.name || !user.username) return alert("enter value");
            addUser(user);
            setUser(initialstate);
          }}
        >
          <label>Name:</label>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={user.name}
              onChange={handleInputChange}
            />
          </div>
          <label>UserName:</label>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Enter UserName"
              value={user.username}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={user.gender === "Male"}
              onChange={handleInputChange}
            />
            Male
            <input
              type="radio"
              name="gender"
              value="FeMale"
              checked={user.gender === "FeMale"}
              onChange={handleInputChange}
            />
            Female
          </div>
          <div>
            Select City:
            <select name="city" value={user.city} onChange={handleInputChange}>
              <option>Not Selected</option>
              <option>Lahore</option>
              <option>kasur </option>
              <option>Faisalabad </option>
            </select>
          </div>
          <div>
            <label>Comment:</label>
            <br />
            <textarea
              rows="5"
              cols="40"
              name="comment"
              placeholder="Enter Comment"
              value={user.comment}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button>Add new user</button>

            <NavLink id="NavLink" to="/">
              View User
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Adduserform;
