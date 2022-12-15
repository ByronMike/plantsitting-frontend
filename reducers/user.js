import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const usersSlice = createSlice({
  name: "user",

  initialState,
  reducers: {
    testUser: (state, action) => {
        state.value.push(action.payload)
    },
// TODO (si on a le temps) Créer un reducer pour se désinscrire
  },
});

export const { testUser } = usersSlice.actions;
export default usersSlice.reducer;