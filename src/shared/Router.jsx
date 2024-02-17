import Login from "components/Login";
import Profile from "components/Profile";
import Layout from "components/layout/Layout";
import Detail from "pages/Detail";
import Home from "pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      {/* 토큰이 있는경우만 layout 뜨게 */}
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
