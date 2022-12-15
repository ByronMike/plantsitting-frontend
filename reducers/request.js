import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const requestsSlice = createSlice({
  name: "request",

  initialState,
  reducers: {
    userRequest: (state, action) => {
      state.value = action.payload;
    },
    cleanRequest: (state, action) => {
      state.value = {};
    },
  },
});

export const { userRequest, cleanRequest } = requestsSlice.actions;
export default requestsSlice.reducer;
