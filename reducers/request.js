import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    arrosage: false,
    entretien: false,
    traitement: false,
    autre: false,
    plantQty1: false,
    plantQty5: false,
    plantQty15: false,
    garde: false,
    depot: false,
    startday: false,
    endday: false,
  },
};

export const requestsSlice = createSlice({
  name: "request",

  initialState,
  reducers: {
    userRequest: (state, action) => {
      state.value.arrosage = action.payload.arrosage;
      state.value.entretien = action.payload.arrosage;
      state.value.traitement = action.payload.arrosage;
      state.value.autre = action.payload.arrosage;
      state.value.plantQty1 = action.payload.plantQty1;
      state.value.plantQty5 = action.payload.plantQty5;
      state.value.plantQty15 = action.payload.plantQty15;
      state.value.garde = action.payload.garde;
      state.value.depot = action.payload.depot;
      state.value.startday = action.payload.startday;
      state.value.endday = action.payload.endday;
    },
    // TODO (si on a le temps) Créer un reducer pour se désinscrire
  },
});

export const { userRequest } = requestsSlice.actions;
export default requestsSlice.reducer;
