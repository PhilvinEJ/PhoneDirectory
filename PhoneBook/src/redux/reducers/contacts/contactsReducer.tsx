import { createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    isDataPresent: false,
    data: [],
  },
  reducers: {
    dataPresent: (state, action) => {
      state.isDataPresent = true;
      state.data = action.payload;
    },
    dataEmpty: (state, action) => {
      state.isDataPresent = false;
      state.data = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { dataPresent, dataEmpty } = contactsSlice.actions;

export default contactsSlice.reducer;
