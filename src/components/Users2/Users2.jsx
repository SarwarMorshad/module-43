import React, { use } from "react";

const Users2 = ({ users2Promise }) => {
  const users = use(users2Promise);
  console.log(users);
  return (
    <div>
      <h1>Users2 Component</h1>
    </div>
  );
};

export default Users2;
