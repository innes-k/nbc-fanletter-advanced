import Login from "components/Login";
import Profile from "components/Profile";
import AuthLayout from "components/layout/AuthLayout";
import Layout from "components/layout/Layout";
import Detail from "pages/Detail";
import Home from "pages/Home";
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

export default function Router() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("accessToken");

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
        // 1. home, detail, profile의 부모컴포넌트에서 로그인상태 체크
        // -> outlet
        // 2.
        <>
          {/* <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> */}
          <Routes>
            <Route path="*" element={<Navigate replace to="/" />} />
            <Route
              element={
                <AuthLayout
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
                // <>
                //   <Layout
                //     isLoggedIn={isLoggedIn}
                //     setIsLoggedIn={setIsLoggedIn}
                //   />
                //   <Outlet />
                // </>
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
