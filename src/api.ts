import axios, { AxiosRequestConfig } from 'axios';
import { logout } from './components/shared/utils/auth';

export interface IUserDetails {
  _id: string;
  email: string;
  token: string;
  username: string;
}

const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api',
  timeout: 1000,
});

apiClient.interceptors.request.use((config: AxiosRequestConfig) => {
  const userDetails = localStorage.getItem('user');

  if (userDetails && config.headers) {
    const token = (JSON.parse(userDetails) as { userDetails: IUserDetails }).userDetails.token;

    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, (error) => Promise.reject(error));

export interface LoginModel {
  email: string;
  password: string;
}

export const login = async (data: LoginModel) => {
  return await apiClient.post<IUserDetails>('/auth/login', data);
};

export interface RegisterModel {
  email: string;
  username: string;
  password: string;
}

export const register = async (data: RegisterModel) => {
  return await apiClient.post<IUserDetails>('/auth/register', data);
};

// secure routes

export interface FriendInvitation {
  targetEmail: string;
}

export const sendFriendInvitation = async (data: FriendInvitation) => {
  return await apiClient.post('/friend-invitation/invite', data);
};

export const acceptFriendInvitation = async (data: any) => {
  return await apiClient.post('/friend-invitation/accept', data);
};

export const rejectFriendInvitation = async (data: any) => {
  return await apiClient.post('/friend-invitation/reject', data);
};

export const checkResponseCode = (exception: any) => {
  const responseCode = exception?.response?.status;

  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};