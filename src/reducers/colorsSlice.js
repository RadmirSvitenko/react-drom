import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTokenFromCookies } from 'cookies';
import { API } from 'requester';

const TOKEN = getTokenFromCookies();

const initialState = {
  colors: [],
  isLoading: false,
  error: false,
};

export const getColors = createAsyncThunk('getColors/get', async () => {
  const response = await API.get('colors/');
  return response.data.results;
});

export const createColor = createAsyncThunk(
  'createColor/post',
  async (params) => {
    const formData = new FormData();
    formData.append('image', params.image);
    formData.append('name', params.name);
    const response = await API.post('colors/', formData, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  }
);

export const updateColor = createAsyncThunk(
  'updateColor/put',
  async (params) => {
    const response = await API.put(`/colors/${params.id}/`, {
      name: params.name,
      id: params.id,
    });
    return response.data;
  }
);

export const deleteColor = createAsyncThunk(
  'deleteColor/delete',
  async (params) => {
    const response = await API.delete(`/categories/${params.id}/`);
    return response.data;
  }
);

const colorSlice = createSlice({
  name: 'colorSlice',
  initialState,

  extraReducers: (builder) => {
    // getColors

    builder.addCase(getColors.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getColors.fulfilled, (state, action) => {
      state.isLoading = false;
      state.colors = action.payload;
    });
    builder.addCase(getColors.rejected, (state, action) => {
      state.isLoading = true;
      state.error = action.error;
    });

    // createColor

    builder.addCase(createColor.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createColor.fulfilled, (state, action) => {
      state.isLoading = false;
      state.colors = action.payload;
    });
    builder.addCase(createColor.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // updateColor

    builder.addCase(updateColor.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateColor.fulfilled, (state, action) => {
      state.isLoading = false;
      state.colors = action.payload;
    });
    builder.addCase(updateColor.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // deleteColor

    builder.addCase(deleteColor.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteColor.fulfilled, (state, action) => {
      state.isLoading = false;
      state.colors = action.payload;
    });
    builder.addCase(deleteColor.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default colorSlice.reducer;
