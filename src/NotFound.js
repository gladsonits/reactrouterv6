import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="Missing">
      <h2>Page not found</h2>
      <p>Oh!. Sorry you landed nowhere.</p>
      <Link to="/">
        <p>Click here to go Home</p>
      </Link>
    </div>
  );
};

export default NotFound;
