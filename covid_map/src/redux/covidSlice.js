import { createSlice } from "@reduxjs/toolkit";
import { getData } from "./actions";

const initialState = {
  isLoading: true,
  error: null,
  data: null,
};

const covidSlice = createSlice({
  name: "covid",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(getData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    });
  },
});

export default covidSlice.reducer;
