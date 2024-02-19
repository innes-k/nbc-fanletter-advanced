import { login, signUp } from "apis/users";
import React, { useState } from "react";
import styled from "styled-components";

function Login({ isLoggedIn, setIsLoggedIn }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userNickname, setUserNickname] = useState("");

  // 회원가입창으로 전환 핸들러
  const onIsSignUpHandler = () => {
    setUserId("");
    setUserPw("");
    setUserNickname("");
    setIsSignUp((prevIsSignUP) => !prevIsSignUP);
  };

  // 로그인버튼 클릭 핸들러
  const onIsLoggedInHandler = () => {
    if (isValidId && isValidPw) {
      login(userId, userPw);
      setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
    } else {
      alert("입력하신 값을 확인해주세요.");
    }
  };

  // 회원가입버튼 클릭 핸들러
  const onSignUpHandler = () => {
    if (isValidId && isValidPw && isValidNickname) {
      signUp(userId, userPw, userNickname);
      onIsSignUpHandler();
    } else {
      alert("입력하신 값을 확인해주세요.");
    }
  };

  // 아이디 onChange
  const inputId = (e) => {
    setUserId(e.target.value);
  };

  // 아이디 형식 제한
  const idRegex = /^[a-zA-Z0-9]{4,10}$/;
  const isValidId = idRegex.test(userId);

  // 비밀번호 onChange
  const inputPw = (e) => {
    setUserPw(e.target.value);
  };

  // 비밀번호 형식 제한
  const passwordRegex = /^.{4,15}$/;
  const isValidPw = passwordRegex.test(userPw);

  // 닉네임 onChange
  const inputNickname = (e) => {
    setUserNickname(e.target.value);
  };

  // 닉네임 형식 제한
  const nicknameRegex = /^.{1,10}$/;
  const isValidNickname = nicknameRegex.test(userNickname);

  return (
    <StContainer>
      {!isSignUp ? (
        // 로그인 창
        <StProfileBox>
          <StH1>로그인</StH1>
          <StInput
            placeholder="아이디 (4~10글자)"
            value={userId}
            onChange={inputId}
          />
          <StInput
            placeholder="비밀번호 (4~15글자)"
            value={userPw}
            onChange={inputPw}
          />
          <StBtn onClick={onIsLoggedInHandler}>로그인</StBtn>
          <StH2 onClick={onIsSignUpHandler}>회원가입</StH2>
        </StProfileBox>
      ) : (
        // 회원가입 창
        <StProfileBox>
          <StH1>회원가입</StH1>
          <StInput
            placeholder="아이디 (4~10글자)"
            value={userId}
            onChange={inputId}
          />
          <StInput
            placeholder="비밀번호 (4~15글자)"
            value={userPw}
            onChange={inputPw}
          />
          <StInput
            placeholder="닉네임 (1~10글자)"
            value={userNickname}
            onChange={inputNickname}
          />
          <StBtn onClick={onSignUpHandler}>회원가입</StBtn>
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
