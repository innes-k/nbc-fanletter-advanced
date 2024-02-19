import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    accessToken: "",
    userId: "",
    success: "",
    avatar: null,
    nickname: "",
  },
  reducers: {
    addUser: (state, action) => {
      const { loggedInUserInfo, accessToken } = action.payload;
      return { ...loggedInUserInfo, accessToken };
    },
  },
});

export const userInfoReducer = userInfoSlice.reducer;
export const { addUser } = userInfoSlice.actions;
