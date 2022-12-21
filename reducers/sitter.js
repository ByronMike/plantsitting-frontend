import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const requestsSlice = createSlice({
  name: "sitter",

  initialState,
  reducers: {
    getToken: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getToken } = requestsSlice.actions;
export default requestsSlice.reducer;
