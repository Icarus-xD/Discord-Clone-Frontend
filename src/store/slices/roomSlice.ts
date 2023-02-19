import { createSlice } from '@reduxjs/toolkit';
import { getRoomActions, IActiveRoom, IRemoteStream, IRoomDetails } from '../actions/roomActions';

const actions = getRoomActions();

interface IRoomInitialState {
  isUserInRoom: boolean;
  isUserRoomCreator: boolean;
  roomDetails: IRoomDetails | null;
  activeRooms: IActiveRoom[];
  localStream: MediaStream | null;
  remoteStreams: IRemoteStream[];
  audioOnly: boolean;
  screenSharingStream: MediaStream | null;
  isScreenSharingActive: boolean;
  isUserJoinedWithoutVideo: boolean;
}

const initialState: IRoomInitialState = {
  isUserInRoom: false,
  isUserRoomCreator: false,
  roomDetails: null,
  activeRooms: [],
  localStream: null,
  remoteStreams: [],
  audioOnly: false,
  screenSharingStream: null,
  isScreenSharingActive: false,
  isUserJoinedWithoutVideo: false,
};

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.setOpenRoom, (state, { payload }) => {
        state.isUserInRoom = payload.isUserInRoom;
        state.isUserRoomCreator = payload.isUserRoomCreator;
      })
      .addCase(actions.setRoomDetails, (state, { payload }) => {
        state.roomDetails = payload;
      })
      .addCase(actions.setActiveRooms, (state, { payload }) => {
        state.activeRooms = payload;
      })
      .addCase(actions.setLocalStream, (state, { payload }) => {
        state.localStream = payload;
      })
      .addCase(actions.setAudioOnly, (state, { payload }) => {
        state.audioOnly = payload;
      })
      .addCase(actions.setRemoteStreams, (state, { payload }) => {
        state.remoteStreams = payload;
      })
      .addCase(actions.setScreenSharingStream, (state, { payload }) => {
        state.screenSharingStream = payload;
        state.isScreenSharingActive = !!payload;
      })
      .addCase(actions.setIsUserJoinedWithoutVideo, (state, { payload }) => {
        state.isUserJoinedWithoutVideo = payload;
      })
  },
});

const roomReducer = roomSlice.reducer;

export default roomReducer;