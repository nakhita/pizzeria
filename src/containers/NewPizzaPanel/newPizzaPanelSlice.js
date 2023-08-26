import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nuevaPizza: false,
};

export const newPizzaPanelSlice = createSlice({
  name: "newPizzaPanel",
  initialState,
  reducers: {
    crearNuevaPizza: (state, action) => {
      state.nuevaPizza = true;
    },
  },
});

export const { crearNuevaPizza } = newPizzaPanelSlice.actions;

export default newPizzaPanelSlice.reducer;
