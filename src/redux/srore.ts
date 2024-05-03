import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cartSlice from "./slices/cartSlice";
import pizzaSlice from "./slices/pizzaSlice";
import infoTooltip from "./slices/infoTooltipSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: { filter, cartSlice, pizzaSlice, infoTooltip },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
