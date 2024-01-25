import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from 'requester';

const initialState = {
  catalog: [],
  product: null,
  isLoading: false,
  error: false,
};

export const getProducts = createAsyncThunk('getProducts/get', async () => {
  const response = await API.get('/products');
  console.log(response.data);
  return response.data;
});

export const getProduct = createAsyncThunk('getProduct/get', async (params) => {
  const response = await API.get(`/products/${params.id}`);
  console.log(response.data);
  return response.data;
});

const productSlice = createSlice({
  name: 'productSlice',
  initialState,

  extraReducers: (builder) => {
    // getProducts

    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.catalog = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // getProduct

    builder.addCase(getProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default productSlice.reducer;
