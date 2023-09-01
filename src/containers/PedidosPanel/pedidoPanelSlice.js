import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listaPedidos: [],
  nombrePedido: "",
  direccionPedido: "",
};

export const pedidoPanelSlice = createSlice({
  name: "pedidoPanelSlice",
  initialState,
  reducers: {
    crearNuevoPedido: (state, action) => {
      state.listaPedidos.push(action.payload);
      console.log(action.payload);
      state.nombrePedido = "";
      state.direccionPedido = "";
    },
    eliminarPedido: (state, action) => {
      const nuevosPedidos = state.listaPedidos.filter(
        (pedido) => pedido.id !== action.payload
      );
      state.listaPedidos = nuevosPedidos;
    },
    estadoEntregado: (state, action) => {
      const respuesta = state.listaPedidos.filter((pedido) =>
        pedido.id === action.payload ? (pedido.entregado = true) : ""
      );
      console.log(respuesta);
    },
    actualizarNombrePedido: (state, action) => {
      state.nombrePedido = action.payload;
    },
    actualizarDireccionPedido: (state, action) => {
      state.direccionPedido = action.payload;
    },
  },
});

export const {
  eliminarPedido,
  crearNuevoPedido,
  actualizarNombrePedido,
  actualizarDireccionPedido,
  estadoEntregado,
} = pedidoPanelSlice.actions;

export default pedidoPanelSlice.reducer;
