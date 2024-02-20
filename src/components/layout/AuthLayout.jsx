import React, { useEffect } from "react";
import Layout from "./Layout";
import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout = ({ isLoggedIn, setIsLoggedIn }) => {
  const token = localStorage.getItem("loggedInUserToken");
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     if (!token) {
  //       navigate("/login");
  //     }
  //   }, [token, navigate]);

  return (
    <>
      {token && (
        <>
          <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <Outlet />
        </>
      )}
    </>
  );
};

export default AuthLayout;
