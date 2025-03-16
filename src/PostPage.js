import React from "react";
import { useParams, Link } from "react-router";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((x) => x.id == id);

  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <button onClick={() => handleDelete(id)}>Delete Post</button>
          </>
        )}{" "}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that is disappointing.</p>
            <Link to="/">
              <p>Visit our home page.</p>
            </Link>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
