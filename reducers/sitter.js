import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const sittersSlice = createSlice({
  name: "addPhoto",

  initialState,
  reducers: {
    addphoto: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addphoto } = sittersSlice.actions;
export default sittersSlice.reducer;
