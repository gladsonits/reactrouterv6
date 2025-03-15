import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <h1>
      Auth layout
      <Outlet />
    </h1>
  );
};

export default AuthLayout;
