import Login from "components/Login";
import Profile from "components/Profile";
import Layout from "components/layout/Layout";
import Detail from "pages/Detail";
import Home from "pages/Home";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function Router() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      {!isLoggedIn ? (
        // 토큰 있는 경우만 접근 가능
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
        // 토큰 없는 경우 login페이지만 뜨게
        <>
          <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <Routes>
            <Route path="*" element={<Navigate replace to="/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}
