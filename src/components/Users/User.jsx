import React from "react";

const User = ({ user }) => {
  const { name, email, phone } = user;
  const userStyle = {
    border: "1px solid gray",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "2px 2px 12px rgba(0,0,0,0.1)",
  };
  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default User;
