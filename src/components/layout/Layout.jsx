import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Layout() {
  return (
    <NavBar>
      <LinkStyle to="/">HOME</LinkStyle>
      <NavRight>
        <LinkStyle to="/profile">내 프로필</LinkStyle>
        <LinkStyle to="/login">로그아웃</LinkStyle>
      </NavRight>
    </NavBar>
  );
}

export default Layout;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #888585;
  padding: 0 20px;
  width: 100%;
  height: 40px;
`;

const NavRight = styled.div`
  display: flex;
  gap: 20px;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
`;
