import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from 'requester';

const initialState = {
  subcategories: [],
};

export const getSubcategories = createAsyncThunk(
  'getSubcategories/get',
  async () => {
    const response = await API.get('subcategories/');
    return response.data.results;
  }
);

export const createSubcategory = createAsyncThunk(
  'createSubcategories/post',
  async (params) => {
    const response = await API.post('subcategories/', {
      name: params.data,
      category: params.category,
    });
    return response.data;
  }
);

export const updateSubcategory = createAsyncThunk(
  'updateCategories/put',
  async (params) => {
    const response = await API.put(`subcategories/${params.id}/`, {
      name: params.data,
      category: params.categoryId,
    });
    return response.data;
  }
);

export const deleteSubcategory = createAsyncThunk(
  'deleteSubcategories/delete',
  async (params) => {
    const response = await API.delete(`subcategories/${params.id}/`);
    return response.data;
  }
);

const subcategorySlice = createSlice({
  name: 'subcategorySlice',
  initialState,

  extraReducers: (builder) => {
    // getSubcategories

    builder.addCase(getSubcategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSubcategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.subcategories = action.payload;
    });
    builder.addCase(getSubcategories.rejected, (state, action) => {
      state.isLoading = true;
      state.error = action.error;
    });

    // createSubcategory

    builder.addCase(createSubcategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createSubcategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.subcategories = action.payload;
    });
    builder.addCase(createSubcategory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // updateSubcategory

    builder.addCase(updateSubcategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateSubcategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.subcategories = action.payload;
    });
    builder.addCase(updateSubcategory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // deleteSubcategory

    builder.addCase(deleteSubcategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteSubcategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.subcategories = action.payload;
    });
    builder.addCase(deleteSubcategory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default subcategorySlice.reducer;
