import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "requester";

const initialState = {
  reviews: [],
  isLoading: false,
  error: false,
};

export const getReviews = createAsyncThunk("getReviews/get", async () => {
  const response = await API.get("comments");
  console.log(response.data);
  return response.data;
});

const reviewsPageSlice = createSlice({
  name: "reviewsPageSlice",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getReviews.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getReviews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.reviews = action.payload.comments;
    });
    builder.addCase(getReviews.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default reviewsPageSlice.reducer;
