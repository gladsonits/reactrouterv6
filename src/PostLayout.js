import React from "react";
import { Outlet } from "react-router";

const PostLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PostLayout;
