import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    // arrosage: false,
    // entretien: false,
    // traitement: false,
    // autre: false,
    // plantQty1: false,
    // plantQty5: false,
    // plantQty15: false,
    // garde: false,
    // depot: false,
    // startday: null,
    // endday: null,
  },
};

export const requestsSlice = createSlice({
  name: "request",

  initialState,
  reducers: {
    userRequest: (state, action) => {
        state.value = action.payload
    //   state.value.arrosage = action.payload.arrosage;
    //   state.value.entretien = action.payload.entretien;
    //   state.value.traitement = action.payload.traitement;
    //   state.value.autre = action.payload.autre;
    //   state.value.plantQty1 = action.payload.plantQty1;
    //   state.value.plantQty5 = action.payload.plantQty5;
    //   state.value.plantQty15 = action.payload.plantQty15;
    //   state.value.garde = action.payload.garde;
    //   state.value.depot = action.payload.depot;
    //   state.value.startday = action.payload.startday;
    //   state.value.endday = action.payload.endday;
    },
    cleanRequest: (state, action) => {
    //   state.value.arrosage = false;
    //   state.value.entretien = false;
    //   state.value.traitement = false;
    //   state.value.autre = false;
    //   state.value.plantQty1 = false;
    //   state.value.plantQty5 = false;
    //   state.value.plantQty15 = false;
    //   state.value.garde = false;
    //   state.value.depot = false;
    //   state.value.startday = false;
    //   state.value.endday = false;
    state.value = {}
    },
  },
});

export const { userRequest, cleanRequest } = requestsSlice.actions;
export default requestsSlice.reducer;
