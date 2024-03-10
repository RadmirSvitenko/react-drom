import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTokenFromCookies } from 'cookies';
import { API } from 'requester';

const initialState = {
  images: [],
  isLoading: false,
  error: false,
};

export const getImages = createAsyncThunk('getImages/get', async (params) => {
  console.log('params: ', params);
  const response = await API.get(`image/list/${params.product_id}/`);
  return response.data.results;
});
export const createImage = createAsyncThunk(
  'createImage/get',
  async (params) => {
    const formData = new FormData();
    formData.append('image', params.image);
    formData.append('product', params.product);
    const TOKEN = await getTokenFromCookies();

    const response = await API.post(`image/create/`, formData, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  }
);

const imageSlice = createSlice({
  name: 'imageSlice',
  initialState,

  extraReducers: (builder) => {
    // getImages

    builder.addCase(getImages.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getImages.fulfilled, (state, action) => {
      state.isLoading = false;
      state.images = action.payload;
    });
    builder.addCase(getImages.rejected, (state, action) => {
      state.isLoading = true;
      state.error = action.error;
    });

    // createImage

    builder.addCase(createImage.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createImage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.images = action.payload;
    });
    builder.addCase(createImage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default imageSlice.reducer;
