import Layout from "./Layout";
import { Outlet } from "react-router-dom";

const AuthLayout = ({ isLoggedIn, setIsLoggedIn }) => {
  const token = localStorage.getItem("loggedInUserToken");

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
