import React, { useState } from "react";
import styled from "styled-components";

function Login({ isLoggedIn, setIsLoggedIn }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const onIsSignUpHandler = () => {
    setIsSignUp((prevIsSignUP) => !prevIsSignUP);
  };
  const onIsLoggedInHandler = () => {
    setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  };

  return (
    <StContainer>
      {!isSignUp ? (
        // 로그인 창
        <StProfileBox>
          <StH1>로그인</StH1>
          <StInput placeholder="아이디 (4~10글자)" />
          <StInput placeholder="비밀번호 (4~15글자)" />
          <StBtn onClick={onIsLoggedInHandler}>로그인</StBtn>
          <StH2 onClick={onIsSignUpHandler}>회원가입</StH2>
        </StProfileBox>
      ) : (
        // 회원가입 창
        <StProfileBox>
          <StH1>회원가입</StH1>
          <StInput placeholder="아이디 (4~10글자)" />
          <StInput placeholder="비밀번호 (4~15글자)" />
          <StInput placeholder="닉네임 (1~10글자)" />
          <StBtn>회원가입</StBtn>
          <StH2 onClick={onIsSignUpHandler}>로그인</StH2>
        </StProfileBox>
      )}
    </StContainer>
  );
}

export default Login;

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e0dfdf;
`;

const StProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  background-color: white;
  border-radius: 2rem;
  padding: 20px;
  width: 500px;
`;

const StH1 = styled.p`
  font-size: 30px;
`;

const StInput = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px solid black;
  height: 40px;
`;

const StBtn = styled.button`
  width: 100%;
  height: 60px;
  color: white;
  background-color: gray;
  border: 0;
  font-size: 20px;
  border-radius: 12px;
  cursor: pointer;
`;

const StH2 = styled.p`
  cursor: pointer;
`;
