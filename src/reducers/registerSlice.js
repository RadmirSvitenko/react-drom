import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTokenFromCookies } from 'cookies';
import { setRefreshTokenToCookies } from 'cookies';
import { API } from 'requester';

const token = getTokenFromCookies();

const initialState = {
  user: null,
};

export const userRegister = createAsyncThunk(
  'registerUser/post',
  async (params) => {
    const response = await API.post('signup/', {
      email: params.data.email,
      password: params.data.password,
      password2: params.data.passwordRepeat,
    });

    setRefreshTokenToCookies(response.data.token);
    console.log(response.data);
    return response.data.regUser;
  }
);

const registerSlice = createSlice({
  name: 'registerSlice',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(userRegister.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default registerSlice.reducer;
