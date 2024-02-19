import axios from "axios";

// 회원가입
export const signUp = async (userId, userPw, userNickname) => {
  await axios.post("https://moneyfulpublicpolicy.co.kr/register", {
    id: userId,
    password: userPw,
    nickname: userNickname,
  });
};

// 로그인
export const login = async (userId, userPw) => {
  const response = await axios.post(
    "https://moneyfulpublicpolicy.co.kr/login",
    { id: userId, password: userPw }
  );

  // 로그인시 로컬스토리지에 토큰 저장하기
  const loggedInUserInfo = response.data;
  const loggedInUserToken = loggedInUserInfo.accessToken;
  localStorage.setItem("loggedInUserToken", loggedInUserToken);
};
