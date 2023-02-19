import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { openAlertError, openAlertMessage } from './alertActions';
import * as api from '../../api';

export type IOnlineUsers = {
  socketId: string;
  userId: string;
}[];

export const setFriends = createAction<any>('friends/friends');

export const setPendingFriendsInvitations = createAction<any>('friends/pendingInvitations');

export const setOnlineUsers = createAction<IOnlineUsers>('friends/onlineUsers');

export const sendFriendInvitation = createAsyncThunk(
  'friends/sendFriendInvitation',
  async (data: any, thunkAPI) => {
    try {
      const response = await api.sendFriendInvitation(data);

      thunkAPI.dispatch(openAlertMessage('Invitation has been sent!'))
    } catch (err) {
      const error = err as Error;
      // @ts-ignore
      const message = error?.response?.data
      thunkAPI.dispatch(openAlertError(message));
    }
  }
);

export const acceptFriendInvitation = createAsyncThunk(
  'friends/acceptFriendInvitation',
  async (data: any, thunkAPI) => {
    try {
      const response = await api.acceptFriendInvitation(data);

      thunkAPI.dispatch(openAlertMessage('Invitation accepted!'));
    } catch (err) {
      const error = err as Error;
      api.checkResponseCode(error);
      // @ts-ignore
      const message = error?.response?.data;
      thunkAPI.dispatch(openAlertError(message));
    }
  }
);

export const rejectFriendInvitation = createAsyncThunk(
  'friends/acceptFriendInvitation',
  async (data: any, thunkAPI) => {
    try {
      const response = await api.rejectFriendInvitation(data);

      thunkAPI.dispatch(openAlertMessage('Invitation rejected!'));
    } catch (err) {
      const error = err as Error;
      api.checkResponseCode(error);
      // @ts-ignore
      const message = error?.response?.data
      thunkAPI.dispatch(openAlertError(message));
    }
  }
);

export const getFriendsActions = () => {
  return {
    setFriends,
    setPendingFriendsInvitations,
    setOnlineUsers,
    sendFriendInvitation,
    acceptFriendInvitation,
    rejectFriendInvitation,
  };
};