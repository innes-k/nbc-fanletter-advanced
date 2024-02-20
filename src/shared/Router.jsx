import { getLoggedInUserInfo } from "apis/users";
import Login from "components/Login";
import Profile from "components/Profile";
import AuthLayout from "components/layout/AuthLayout";
import Detail from "pages/Detail";
import Home from "pages/Home";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { addUser } from "redux/modules/authSlice";

export default function Router() {
  // 토큰값 가져오기
  const token = useSelector((state) => state.userInfoReducer.accessToken);

  // 새로고침시 토큰, 유저정보를 다시 dispatch로 전달
  const dispatch = useDispatch();
  useEffect(() => {
    const fetch = async () => {
      const accessToken = localStorage.getItem("loggedInUserToken");
      if (!accessToken) {
        return;
      }
      const loggedInUserInfo = await getLoggedInUserInfo(accessToken);

      dispatch(addUser({ loggedInUserInfo, accessToken }));
    };
    fetch();
  }, [dispatch]);

  return (
    <BrowserRouter>
      {!token ? (
        //  토큰 없는 경우 login페이지만 뜨게
        <Routes>
          <Route path="*" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      ) : (
        // 토큰 있는 경우만 접근 가능
        <>
          <Routes>
            <Route path="*" element={<Navigate replace to="/" />} />
            <Route element={<AuthLayout />}>
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
