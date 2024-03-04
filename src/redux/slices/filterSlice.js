import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
		setSortType: (state, action) =>{
			state.sort = action.payload;
		},
		setFilters(state, action){
			state.sort = action.payload.sort;
			state.categoryId = Number(action.payload.categoryId);
		}

  },
});

export const {setCategoryId, setSortType, setFilters} = filter.actions;

export default filter.reducer;