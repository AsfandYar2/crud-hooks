import React from "react";
import { Link, NavLink } from "react-router-dom";

function Table({ users, onDelete, onEdit }) {
  return (
    <div>
      <h2>Users View:)</h2>
      <table className="table">
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Gender</th>
            <th>City</th>
            <th>Comment</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map(user => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.gender}</td>
                  <td>{user.city}</td>
                  <td>{user.comment}</td>
                  <td>
                    <Link to="/EditForm">
                      <button
                        className="btn btn-secondary"
                        onClick={() => onEdit(user)}
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-dark"
                      onClick={() => onDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>No Users Please Add New User</td>
            </tr>
          )}
        </tbody>
      </table>
      Click Here to:
      <NavLink id="NavLink" to="/Adduser">
        Add New User
      </NavLink>
    </div>
  );
}

export default Table;
