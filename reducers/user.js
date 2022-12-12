import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

// 3)a On donne un nom au reducer (ex: friends)
export const usersSlice = createSlice({
  name: "user",

  // 3)b on utilise le tableau
  initialState,
  // 3)c On créé les actions addBookmark et removeBookmark
  reducers: {
    testUser: (state, action) => {
        state.value.push(action.payload)
    },
// TODO (si on a le temps) Créer un reducer pour se désinscrire
  },
});

export const { testUser } = usersSlice.actions;
export default usersSlice.reducer;