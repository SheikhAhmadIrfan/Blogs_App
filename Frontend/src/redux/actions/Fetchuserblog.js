import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const Fetchuserblog = createAsyncThunk("Fetchuserblog", async (idd) => {
  try {
    const response = await axios.get(`http://localhost:8000/user/${idd}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});
