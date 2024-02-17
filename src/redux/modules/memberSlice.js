import { createSlice } from "@reduxjs/toolkit";

const membersSlice = createSlice({
  name: "member",
  initialState: "카리나",
  reducer: {
    setMember: (state, action) => {
      const activeMember = action.payload;
      return activeMember;
    },
  },
});

export const member = membersSlice.reducer;
export const { setMember } = membersSlice.actions;
