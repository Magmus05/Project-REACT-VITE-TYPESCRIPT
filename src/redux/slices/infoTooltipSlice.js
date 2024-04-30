import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  title: "",
  name: "",
};

const infoTooltip = createSlice({
  name: "infoTooltip",
  initialState,
  reducers: {
    setInfoTooltip: (state, action) => {
      state.isOpen = action.payload.isOpen;
      state.title = action.payload.title;
      state.name = action.payload.name;
    },


  },
});

export const {setInfoTooltip} = infoTooltip.actions;

export default infoTooltip.reducer;