import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const sitterSlice = createSlice({
  name: "sitter",

  initialState,
  reducers: {
    getToken: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getToken } = sitterSlice.actions;
export default sitterSlice.reducer;
