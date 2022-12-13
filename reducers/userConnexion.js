import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { token: null, firstName: null },
};

export const userconnexionSlice = createSlice({
  name: "userconnexion",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.firstName = action.payload.firstName;
    },
    logout: (state) => {
      state.value.token = null;
      state.value.firstName = null;
    },
  },
});

export const { login, logout } = userconnexionSlice.actions;
export default userconnexionSlice.reducer;
