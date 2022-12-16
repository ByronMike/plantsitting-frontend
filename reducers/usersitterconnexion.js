import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { token: null, firstName: null },
};

export const usersitterconnexionSlice = createSlice({
  name: "usersitterconnexion",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.firstName = action.payload.firstName;
    },
    logout2: (state) => {
      state.value.token = null;
      state.value.firstName = null;
    },
  },
});

export const { login, logout2 } = usersitterconnexionSlice.actions;
export default usersitterconnexionSlice.reducer;
