import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const lettersSlice = createSlice({
  name: "letters",
  initialState: initialState,
  reducers: {
    addLetter: (state, action) => {
      const newLetter = action.payload;
      return [...state, ...newLetter];
    },
    deleteLetter: (state, action) => {
      const letterId = action.payload;
      return state.filter((letter) => letter.id !== letterId);
    },
    editLetter: (state, action) => {
      const { id, editingText } = action.payload;
      return state.map((letter) => {
        if (letter.id === id) {
          return { ...letter, content: editingText };
        }
        return letter;
      });
    },
  },
});

export const letters = lettersSlice.reducer;
export const { addLetter, deleteLetter, editLetter } = lettersSlice.actions;
