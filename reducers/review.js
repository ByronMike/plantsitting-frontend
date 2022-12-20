import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const reviewsSlice = createSlice({
  name: "review",

  initialState,
  reducers: {
    reviewSitter: (state, action) => {
        state.value = action.payload
    },

  },
});

export const { reviewSitter } = reviewsSlice.actions;
export default reviewsSlice.reducer;