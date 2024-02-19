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
  },
});

export const userInfoReducer = userInfoSlice.reducer;
export const { addUser } = userInfoSlice.actions;
