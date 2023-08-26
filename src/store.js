import { configureStore } from "@reduxjs/toolkit";
import newPizzaReducer from "./containers/NewPizzaPanel/newPizzaPanelSlice";

export const store = configureStore({
  reducer: {
    newPizza: newPizzaReducer,
  },
});
