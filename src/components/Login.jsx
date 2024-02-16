import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <ProfileBox>
        <H1>로그인</H1>
        <Input placeholder="아이디 (4~10글자)" />
        <Input placeholder="비밀번호 (4~15글자)" />
        <Btn>로그인</Btn>
        <H2>회원가입</H2>
      </ProfileBox>
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
  gap: 20px;
  background-color: white;
  border-radius: 2rem;
  padding: 20px;
  width: 500px;
  height: 350px;
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
