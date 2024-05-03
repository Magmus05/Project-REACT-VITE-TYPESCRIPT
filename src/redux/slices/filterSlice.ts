import {PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISortName, IfilterSlice } from "../../types/Types";


const initialState: IfilterSlice = {
  categoryId: 0,
  sort: {
    name: `популярности ↑`,
    sortProperty: "rating",
  },
};

const filter = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSortType: (state, action: PayloadAction<ISortName>) => {
      state.sort = action.payload;
    },
    setFilters(state, action: PayloadAction<IfilterSlice>) {
      state.sort = action.payload.sort;
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const { setCategoryId, setSortType, setFilters } = filter.actions;

export default filter.reducer;
