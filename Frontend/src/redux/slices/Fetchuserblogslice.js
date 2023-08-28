import { Fetchuserblog } from "../actions/Fetchuserblog";
import { createSlice } from "@reduxjs/toolkit";

export const Fetchuserblogslice = createSlice({
  name: "Fetchuserblogslice",
  initialState: {
    isLoading: false,
    item: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase( Fetchuserblog.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase( Fetchuserblog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.item.push(action.payload);
      state.isError = false;
    });
    builder.addCase( Fetchuserblog.rejected, (state, action) => {
      console.log("error", action.error);
      state.isLoading = false;
      state.isError = true;
    });
  },
});
export const Fetchuserblogactions = Fetchuserblogslice.actions;
