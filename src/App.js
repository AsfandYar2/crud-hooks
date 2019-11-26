import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import uuid from "uuid";
import "./styles/navbar.css";
import Table from "./tables/Table";
import Adduserform from "./Forms/Adduserform";
import Edituser from "./Forms/Edituser";

const App = () => {
  const data = [
    {
      id: 1,
      name: "Asfand",
      username: "Yar",
      gender: "Male",
      city: "Kasur",
      comment: "Welcome"
    },
    {
      id: 2,
      name: "Zain",
      username: "Ali",
      gender: "Male",
      city: "Gujranwala",
      comment: "Welcome"
    },
    {
      id: 3,
      name: "Usman",
      username: "Aslam",
      gender: "Male",
      city: "Lahore",
      comment: "Welcome"
    }
  ];

  const [users, setUsers] = useState(data);

  const addUser = user => {
    setUsers([...users, user]);
  };

  const onDelete = id => {
    setediting(false);
    setUsers(users.filter(user => user.id !== id));
  };

  const [editing, setediting] = useState(false);

  const initialstate = {
    id: uuid(),
    name: "",
    username: "",
    gender: "",
    city: "",
    comment: ""
  };
  const [currentuser, setCurrentUser] = useState(initialstate);

  const onEdit = user => {
    setediting(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
      gender: user.gender,
      city: user.city,
      comment: user.comment
    });
  };

  const updateUser = (id, updatedUser) => {
    setediting(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <div id="header">
        <h1>CRUD App With React-Hooks</h1>
      </div>
      <Switch>
        <Route path="/EditForm">
          <Edituser
            currentuser={currentuser}
            updateUser={updateUser}
            setediting={setediting}
          />
        </Route>
        <Route path="/Adduser">
          <Adduserform addUser={addUser} />
        </Route>
        <Route path="/" exact>
          <Table users={users} onDelete={onDelete} onEdit={onEdit} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
