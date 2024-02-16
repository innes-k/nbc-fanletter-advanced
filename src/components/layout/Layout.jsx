import React from "react";
import styled from "styled-components";

function Layout() {
  return (
    <NavBar>
      <div>HOME</div>
      <NavRight>
        <p>내 프로필</p>
        <p>로그아웃</p>
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
