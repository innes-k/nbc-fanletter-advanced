import { createSlice } from "@reduxjs/toolkit";
import defaultUser from "../../assets/defaultUser.png";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    accessToken: "",
    userId: "",
    success: "",
    avatar: defaultUser,
    nickname: "",
  },
  reducers: {
    addUser: (state, action) => {
      const { loggedInUserInfo, accessToken } = action.payload;
      return { ...loggedInUserInfo, avatar: defaultUser, accessToken };
    },
    editUser: (state, action) => {
      const { newNickname, newAvatar } = action.payload;
      return { ...state, nickname: newNickname, avatar: newAvatar };
    },
  },
});

export const userInfoReducer = userInfoSlice.reducer;
export const { addUser, editUser } = userInfoSlice.actions;
