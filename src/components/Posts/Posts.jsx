import React from "react";
import { useLoaderData } from "react-router";
import Post from "./Post";

const Posts = () => {
  const posts = useLoaderData();
  console.log(posts);
  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  };
  return (
    <div>
      <h3>Posts</h3>
      <div style={userStyle}>
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
