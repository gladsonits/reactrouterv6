import React from "react";
import Post from "./Post";

const Feed = ({ posts }) => {
  return (
    <>
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <p>No posts found</p>
      )}
    </>
  );
};

export default Feed;
