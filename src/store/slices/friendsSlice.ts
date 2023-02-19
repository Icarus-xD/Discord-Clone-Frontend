import { createSlice } from '@reduxjs/toolkit';
import { getFriendsActions } from '../actions/friendsActions';

const actions = getFriendsActions();

export interface IPendingFriendsInvitation {
  _id: string;
  sender: {
    username: string;
    email: string;
  }
}

export interface FriendsInitialState {
  friends: any[],
  pendingFriendsInvitations: any[],
  onlineUsers: any[],
}

const initialState: FriendsInitialState = {
  friends: [],
  pendingFriendsInvitations: [],
  onlineUsers: [],
};

const FriendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.setFriends, (state, { payload }) => {
        state.friends = payload;
      })
      .addCase(actions.setPendingFriendsInvitations, (state, { payload }) => {
        state.pendingFriendsInvitations = payload;
      })
      .addCase(actions.setOnlineUsers, (state, { payload }) => {
        state.onlineUsers = payload;
      })
  },
});

const friendsReducer = FriendsSlice.reducer;

export default friendsReducer;