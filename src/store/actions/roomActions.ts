import { createAction } from '@reduxjs/toolkit';
import { IUser } from '../../realtimeCommunication/socketConnection';

export interface IOpenedRoom {
  isUserRoomCreator: boolean;
  isUserInRoom: boolean;
}

export interface IRoomDetails {
  roomId: string;
  roomCreator?: IUser;
  participants?: IUser[];
}

export interface IActiveRoom extends IRoomDetails {
  creatorUsername: string;
}

export interface IRemoteStream {
  remoteStream: MediaStream;
  connUserSocketId: string;
}

export const setOpenRoom = createAction<IOpenedRoom>('room/openRoom');

export const setRoomDetails = createAction<IRoomDetails | null>('room/roomDetails');

export const setActiveRooms = createAction<IActiveRoom[]>('room/activeRooms');

export const setLocalStream = createAction<MediaStream | null>('room/localStream');

export const setAudioOnly = createAction<boolean>('room/audioOnly');

export const setRemoteStreams = createAction<IRemoteStream[]>('room/remoteStreams');

export const setScreenSharingStream = createAction<MediaStream | null>('room/screenSharingStream');

export const setIsUserJoinedWithoutVideo = createAction<boolean>('room/isUserJoinedWithoutVideo');

export const getRoomActions = () => {
  return {
    setOpenRoom,
    setRoomDetails,
    setActiveRooms,
    setLocalStream,
    setAudioOnly,
    setRemoteStreams,
    setScreenSharingStream,
    setIsUserJoinedWithoutVideo,
  };
};