import Login from "components/Login";
import Profile from "components/Profile";
import AuthLayout from "components/layout/AuthLayout";
import Detail from "pages/Detail";
import Home from "pages/Home";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function Router() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("loggedInUserToken");

  return (
    <BrowserRouter>
      {!token ? (
        //  토큰 없는 경우 login페이지만 뜨게
        <Routes>
          <Route path="*" element={<Navigate replace to="/login" />} />
          <Route
            path="/login"
            element={
              <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
        </Routes>
      ) : (
        // 토큰 있는 경우만 접근 가능
        <>
          <Routes>
            <Route path="*" element={<Navigate replace to="/" />} />
            <Route
              element={
                <AuthLayout
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}
