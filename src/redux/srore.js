import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cartSlice from "./slices/cartSlice";
import pizzaSlice from "./slices/pizzaSlice";
import infoTooltip from "./slices/infoTooltipSlice";



export const store = configureStore({
  reducer: { filter, cartSlice, pizzaSlice, infoTooltip },
});
