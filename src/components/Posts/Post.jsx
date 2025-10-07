import React from "react";
import { Link } from "react-router";

const Post = ({ post }) => {
  const userStyle = {
    border: "1px solid gray",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "2px 2px 12px rgba(0,0,0,0.1)",
  };
  return (
    <div style={userStyle}>
      <h4>{post.title}</h4>
      <Link to={`/posts/${post.id}`}>View Details</Link>
    </div>
  );
};

export default Post;
