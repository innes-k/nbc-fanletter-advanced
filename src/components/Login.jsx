import React, { useState } from "react";
import styled from "styled-components";

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const onIsSignUpHandler = () => {
    setIsSignUp((prevIsSignUP) => !prevIsSignUP);
  };

  return (
    <Container>
      {!isSignUp ? (
        // 로그인 창
        <ProfileBox>
          <H1>로그인</H1>
          <Input placeholder="아이디 (4~10글자)" />
          <Input placeholder="비밀번호 (4~15글자)" />
          <Btn>로그인</Btn>
          <H2 onClick={onIsSignUpHandler}>회원가입</H2>
        </ProfileBox>
      ) : (
        // 회원가입 창
        <ProfileBox>
          <H1>회원가입</H1>
          <Input placeholder="아이디 (4~10글자)" />
          <Input placeholder="비밀번호 (4~15글자)" />
          <Input placeholder="닉네임 (1~10글자)" />
          <Btn>회원가입</Btn>
          <H2 onClick={onIsSignUpHandler}>로그인</H2>
        </ProfileBox>
      )}
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e0dfdf;
`;

const ProfileBox = styled.div`
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

const H1 = styled.p`
  font-size: 30px;
`;

const Input = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px solid black;
  height: 40px;
`;

const Btn = styled.button`
  width: 100%;
  height: 60px;
  color: white;
  background-color: gray;
  border: 0;
  font-size: 20px;
  border-radius: 12px;
  cursor: pointer;
`;

const H2 = styled.p`
  cursor: pointer;
`;
