import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from 'requester';

const initialState = {
  categories: [],
};

export const getCategories = createAsyncThunk('getCategories/get', async () => {
  const response = await API.get('categories/');
  return response.data.results;
});

export const createCategory = createAsyncThunk(
  'postCategory/post',
  async (params) => {
    const response = await API.post('categories/', {
      name: params.data,
    });
    return response.data;
  }
);

export const updateCategory = createAsyncThunk(
  'updateCategories/put',
  async (params) => {
    const response = await API.put(`/categories/${params.id}/`, {
      name: params.data,
    });
    return response.data;
  }
);

export const deleteCategory = createAsyncThunk(
  '/categories/{id}/delete',
  async (params) => {
    const response = await API.delete(`/categories/${params.id}/`);
    return response.data;
  }
);

const categorySlice = createSlice({
  name: 'categorySlice',
  initialState,

  extraReducers: (builder) => {
    // getCategories

    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.isLoading = true;
      state.error = action.error;
    });

    // createCategory

    builder.addCase(createCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    });
    builder.addCase(createCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // updateCategory

    builder.addCase(updateCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    });
    builder.addCase(updateCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // deleteCategory

    builder.addCase(deleteCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    });
    builder.addCase(deleteCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default categorySlice.reducer;
