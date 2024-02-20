import { createSlice } from "@reduxjs/toolkit";
import defaultUser from "../../assets/defaultUser.png";

const initialState = {
  accessToken: "",
  userId: "",
  success: "",
  avatar: defaultUser,
  nickname: "",
};
const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { loggedInUserInfo, accessToken } = action.payload;
      return { ...loggedInUserInfo, avatar: defaultUser, accessToken };
    },
    editUser: (state, action) => {
      const { newNickname, newAvatar } = action.payload;
      return { ...state, nickname: newNickname, avatar: newAvatar };
    },
    deleteUser: (state, action) => {
      return initialState;
    },
  },
});

export const userInfoReducer = userInfoSlice.reducer;
export const { addUser, editUser, deleteUser } = userInfoSlice.actions;
