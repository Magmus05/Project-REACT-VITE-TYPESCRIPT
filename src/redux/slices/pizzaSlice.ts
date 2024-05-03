import {PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {IPizzaBlockProps, IpizzaSlice} from "../../types/Types";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",

	//   , thunkApi  // 
  async (params:  Record <string, string>) => {
    const { category, sortBy, order, searchValue } = params;
    const { data } = await axios.get(
      `https://65c35fe039055e7482c0b7bd.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}&search=${searchValue}`
    );
    // console.log(thunkApi.getState());
    return data;
  }
);

export const fetchPizzaById = createAsyncThunk(
  "pizza/fetchPizzasItemById",

	//   , thunkApi  // 
  async (id) => {
    
    const { data } = await axios.get(
      `https://65c35fe039055e7482c0b7bd.mockapi.io/pizzas/${id}`
    );
    // console.log(thunkApi.getState());
    return data;
  }
);

const initialState: IpizzaSlice = {
  items: [],
  status: "loading",
  searchValue: "",
  item: [],
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<IPizzaBlockProps[]>) => {
      state.items = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      // Add user to the state array
      state.items = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = "error";
      state.items = [];
    });



    builder.addCase(fetchPizzaById.pending, (state) => {
      state.item = [];
    });
    builder.addCase(fetchPizzaById.fulfilled, (state, action) => {
      // Add user to the state array
      state.item = action.payload;
    });
    builder.addCase(fetchPizzaById.rejected, (state) => {
      state.item = [];
    });
  },
});

export const { setItems, setSearchValue } = pizzaSlice.actions;

export default pizzaSlice.reducer;
