import React from "react";
import { useLoaderData } from "react-router";

const PostDetails = () => {
  const userStyle = {
    border: "1px solid gray",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "2px 2px 12px rgba(0,0,0,0.1)",
  };

  const postDetail = useLoaderData();
  console.log(postDetail);
  return (
    <div style={userStyle}>
      <h2>Post Details</h2>
      <h3>{postDetail.title}</h3>
      <p>{postDetail.body}</p>
    </div>
  );
};

export default PostDetails;
