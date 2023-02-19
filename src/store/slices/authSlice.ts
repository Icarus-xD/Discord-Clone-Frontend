import { createSlice } from '@reduxjs/toolkit';
import { IUserDetails } from '../../api';
import { getAuthActions } from '../actions/authActions';

const actions = getAuthActions();

export interface AuthInitialState {
  userDetails: null | IUserDetails;
}

const initialState: AuthInitialState = {
  userDetails: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.setUserDetails, (state, { payload }) => {
        state.userDetails = payload;
      })
      .addCase(actions.login.fulfilled, (state, { payload }) => {
        state.userDetails = payload;
      })
      .addCase(actions.register.fulfilled, (state, { payload }) => {
        state.userDetails = payload;
      });
  },
});

const authReducer = authSlice.reducer;

export default authReducer;