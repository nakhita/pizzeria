import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nuevaPizza: false,
  pizza: [],
};

export const newPizzaPanelSlice = createSlice({
  name: "newPizzaPanel",
  initialState,
  reducers: {
    crearNuevaPizza: (state, action) => {
      state.nuevaPizza = true;
      state.pizza = [{ nombre: "Pizza", letra: "P" }];
    },
    agregarIngrediente: (state, action) => {
      state.pizza.push(action.payload);
    },
  },
});

export const { crearNuevaPizza, agregarIngrediente } =
  newPizzaPanelSlice.actions;

export default newPizzaPanelSlice.reducer;
