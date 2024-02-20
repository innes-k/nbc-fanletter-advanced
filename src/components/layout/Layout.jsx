import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "redux/modules/authSlice";
import styled from "styled-components";

function Layout({ isLoggedIn, setIsLoggedIn }) {
  const dispatch = useDispatch();
  const onIsLoggedOutHandler = () => {
    localStorage.clear();
    dispatch(deleteUser());
  };

  return (
    <StNavBar>
      <StLink to="/">HOME</StLink>
      <StNavRight>
        <StLink to="/profile">내 프로필</StLink>
        <StLink to="/login" onClick={onIsLoggedOutHandler}>
          로그아웃
        </StLink>
      </StNavRight>
    </StNavBar>
  );
}

export default Layout;

const StNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #888585;
  padding: 0 20px;
  width: 100%;
  height: 40px;
`;

const StNavRight = styled.div`
  display: flex;
  gap: 20px;
`;

const StLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
