import React from "react";
import Layout from "./Layout";
import { Outlet } from "react-router-dom";

const AuthLayout = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <>
      <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Outlet />
    </>
  );
};

export default AuthLayout;
