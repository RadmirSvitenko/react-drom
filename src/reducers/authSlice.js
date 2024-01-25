import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "requester";

const initialState = {
  catalog: [],
  isLoading: false,
  error: false,
};

export const getProducts = createAsyncThunk("getProducts/get", async () => {
  const response = await API.get("products/");
  console.log(response.data);
  return response.data;
});
const mainPageSlice = createSlice({
  name: "mainPageSlice",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.catalog = action.payload.products;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default mainPageSlice.reducer;
