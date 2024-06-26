import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {IcartSlice, ICartItemProps} from '../../types/Types'
import { RootState } from "../srore";

const initialState: IcartSlice = {
  totalCount: 0,
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ICartItemProps>) {
      // ищем пиццу, которую добавили несколько раз
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      // смотрим есть ли уже такой Item в корзине, если есть то count увеличиваем
      if (findItem) {
        findItem.count++;
        state.totalCount++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
        state.totalCount++;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusItem(state, action: PayloadAction<{id: string, price: number;}>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count--;
        state.totalCount--;
        state.totalPrice = state.totalPrice - action.payload.price;
      }
    },
    removeItem(state, action: PayloadAction<{id: string; price: number; count: number;}>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      state.totalCount = state.totalCount - action.payload.count;
      state.totalPrice =
        state.totalPrice - action.payload.count * action.payload.price;
      // state.totalPrice = state.totalPrice - (state.items.price * state.items.count);
    },
    clearItems(state) {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const cartSelector = (state: RootState) => state.cartSlice;
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cartSlice.items.find((obj) => obj.id === id);

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
