import { Fetchblog } from "../actions/Fetchblog";
import { createSlice } from "@reduxjs/toolkit";

export const Fetchblogslice = createSlice({
  name: "Fetchblogslice",
  initialState: {
    isLoading: false,
    item: [],
    value: '',
    isError: false,
    image:null,
  },
  reducers:{
    addValue(state,action){
      state.value=action.payload;
    },
    addimage(state,action){
      state.image=action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase( Fetchblog.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase( Fetchblog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.item.push(action.payload);
      state.isError = false;
    });
    builder.addCase( Fetchblog.rejected, (state, action) => {
      console.log("error", action.error);
      state.isLoading = false;
      state.isError = true;
    });
  },
});
export const Fetchblogsactions = Fetchblogslice.actions;
