import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTokenFromCookies } from 'cookies';
import { setRefreshTokenToCookies } from 'cookies';
import { setTokenFromCookies } from 'cookies';
import { API } from 'requester';

const token = getTokenFromCookies();

const initialState = {
  account: null,
  isLoading: false,
  error: false,
  message: '',
};

export const selectErrorMessage = (errorMessage) => {
  return errorMessage;
};

export const userAuthorization = createAsyncThunk(
  'userAuthorization/post',
  async (params) => {
    try {
      const response = await API.post(
        'login/',
        {
          email: params.data.email,
          password: params.data.password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await setTokenFromCookies(response.data.access_token);
      await setRefreshTokenToCookies(response.data.refresh_token);
      return response.data.message;
    } catch (error) {
      if (!error.response) {
        throw error;
      }

      return error.response.data.message;
    }
  }
);

const authSlice = createSlice({
  name: 'authSlice',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(userAuthorization.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userAuthorization.fulfilled, (state, action) => {
      state.isLoading = false;
      state.account = action.payload;
    });
    builder.addCase(userAuthorization.rejected, (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
      state.error = action.error;
    });
  },
});

export default authSlice.reducer;
