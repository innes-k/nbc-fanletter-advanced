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
      const loggedInUser = action.payload;
      return state.push(loggedInUser);
    },
  },
});

export const userInfo = userInfoSlice.reducer;
export const { addUser } = userInfoSlice.actions;
