import { createSlice } from '@reduxjs/toolkit';
import * as authOperations from 'redux/auth/auth-operations';

const initialState = {
  user: { name: null, emal: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const handlePending = state => {
  state.isLoading = true;
  state.isFetchingCurrentUser = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.isFetchingCurrentUser = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.pending, handlePending)
      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      })
      .addCase(authOperations.register.rejected, handleRejected)

      .addCase(authOperations.logIn.pending, handlePending)
      .addCase(authOperations.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      })
      .addCase(authOperations.logIn.rejected, handleRejected)

      .addCase(authOperations.logOut.pending, handlePending)
      .addCase(authOperations.logOut.fulfilled, (state, action) => {
        state.user = { name: null, emal: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isFetchingCurrentUser = false;
      })
      .addCase(authOperations.logOut.rejected, handleRejected)

      .addCase(authOperations.fetchCurrentUser.pending, handlePending)
      .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      })
      .addCase(authOperations.fetchCurrentUser.rejected, handleRejected);
  },
});

export default authSlice.reducer;
