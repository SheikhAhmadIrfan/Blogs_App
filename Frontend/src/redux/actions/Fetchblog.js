import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const Fetchblog = createAsyncThunk("Fetchblog", async () => {
  try {
    const response = await axios.get("http://localhost:8000/post", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
});
