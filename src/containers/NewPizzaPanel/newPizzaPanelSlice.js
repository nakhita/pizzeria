import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nuevaPizza: false,
  pizza: [],
  ingredientes: [
    { nombre: "Salsa", letra: "S", precio: 0, disable: false },
    { nombre: "Queso", letra: "Q", precio: 0, disable: false },
    { nombre: "Tomate", letra: "T", precio: 100, disable: false },
    { nombre: "Champiñones", letra: "C", precio: 200, disable: false },
    { nombre: "Piña", letra: "P", precio: 200, disable: false },
    { nombre: "Peperoni", letra: "P", precio: 150, disable: false },
  ],
};

export const newPizzaPanelSlice = createSlice({
  name: "newPizzaPanel",
  initialState,
  reducers: {
    crearNuevaPizza: (state, action) => {
      state.nuevaPizza = true;
      state.pizza = [{ nombre: "Pizza", letra: "P", disable: true }];
    },
    agregarIngrediente: (state, action) => {
      const ingredienteEncontrado = state.pizza.find(
        (ingrediente) => ingrediente.nombre === action.payload.nombre
      );
      if (!ingredienteEncontrado) {
        state.pizza.push(action.payload);
      }
    },
    quitarIngrediente: (state, action) => {
      if (action.payload !== "Pizza") {
        const listraFiltrada = state.pizza.filter(
          (ingrediente) => ingrediente.nombre !== action.payload
        );
        state.pizza = listraFiltrada;
      }
    },
  },
});

export const { crearNuevaPizza, agregarIngrediente, quitarIngrediente } =
  newPizzaPanelSlice.actions;

export default newPizzaPanelSlice.reducer;
