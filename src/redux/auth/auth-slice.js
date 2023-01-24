import { createSlice } from '@reduxjs/toolkit';
import * as authOperations from 'redux/auth/auth-operations';

//import { persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage';

const initialState = {
  user: { name: null, emal: null },
  token: null,
  isLoggedIn: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
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
      })
      .addCase(authOperations.register.rejected, handleRejected)

      .addCase(authOperations.logIn.pending, handlePending)
      .addCase(authOperations.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logIn.rejected, handleRejected)

      .addCase(authOperations.logOut.pending, handlePending)
      .addCase(authOperations.logOut.fulfilled, (state, action) => {
        state.user = { name: null, emal: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.logOut.rejected, handleRejected);
  },
});

//export const authReducer = persistReducer(authPersistConfig, authSlice.reducer);

export default authSlice.reducer;
