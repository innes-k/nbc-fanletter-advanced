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

// 로그인된 유저정보 가져오기
export const getLoggedInUserInfo = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(
    "https://moneyfulpublicpolicy.co.kr/user",
    config
  );
  return response.data;
};

// 닉네임, 프로필이미지 수정하기
export const editProfileInfo = async (newNickname, newAvatar, token) => {
  const formData = new FormData();
  formData.append("avatar", newAvatar);
  formData.append("nickname", newNickname);

  const headers = {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
  };
  // const updateData = {
  //   nickname: newNickname,
  //   avatar: newAvatar,
  // };
  await axios.patch("https://moneyfulpublicpolicy.co.kr/profile", formData, {
    headers,
  });
};
