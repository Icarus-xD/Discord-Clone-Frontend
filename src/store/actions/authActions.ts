import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import * as api from '../../api';
import { openAlertMessage } from './alertActions';

export const setUserDetails = createAction<api.IUserDetails>('auth/userDetails');

export const login = createAsyncThunk(
  'auth/login',
  async (loginData: api.LoginModel, thunkAPI) => {
    try {
      const response = await api.login(loginData);

      localStorage.setItem('user', JSON.stringify(response.data));

      return response.data;
    } catch (err) {
      const error = err as AxiosError;

      api.checkResponseCode(error);
      // @ts-ignore
      thunkAPI.dispatch(openAlertMessage(error?.response?.data));
      return null;
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (registerData: api.RegisterModel, thunkAPI) => {
    try {
      const response = await api.register(registerData);

      localStorage.setItem('user', JSON.stringify(response.data));

      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      // @ts-ignore
      thunkAPI.dispatch(openAlertMessage(error.response?.data));
      return null;
    }
  }
);

export const getAuthActions = () => {
  return {
    setUserDetails,
    login,
    register,
  };
};