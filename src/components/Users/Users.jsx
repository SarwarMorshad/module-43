import React from "react";
import { useLoaderData } from "react-router";
import User from "./User";

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  };
  return (
    <div>
      <h1>Users Component</h1>
      <div style={userStyle}>
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
