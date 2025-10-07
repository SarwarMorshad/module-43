import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  return (
    <div>
      <h3>User Details</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default UserDetails;
