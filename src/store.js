import { configureStore } from "@reduxjs/toolkit";
import newPizzaReducer from "./containers/NewPizzaPanel/newPizzaPanelSlice";
import pedidoReducer from "./containers/PedidosPanel/pedidoPanelSlice";

export const store = configureStore({
  reducer: {
    newPizza: newPizzaReducer,
    pedidos: pedidoReducer,
  },
});
