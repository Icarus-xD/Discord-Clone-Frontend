import { IActiveRoom, setActiveRooms, setIsUserJoinedWithoutVideo, setLocalStream, setOpenRoom, setRemoteStreams, setRoomDetails, setScreenSharingStream } from '../store/actions/roomActions';
import store from '../store/store';
import * as socketConnection from './socketConnection';
import * as webRTCHandler from './webRTCHandler';

export const createNewRoom = () => {
  const successCallbackFunc = () => {
    store.dispatch(setOpenRoom({
      isUserInRoom: true,
      isUserRoomCreator: true,
    }));
  
    const audioOnly = store.getState().room.audioOnly;
    store.dispatch(setIsUserJoinedWithoutVideo(audioOnly));
    socketConnection.createNewRoom();
  };

  const audioOnly = store.getState().room.audioOnly;

  webRTCHandler.getLocalStreamPreview(audioOnly, successCallbackFunc);
};

export const newRoomCreated = (data: socketConnection.ActiveRoomDetails) => {
  const { roomDetails } = data;

  store.dispatch(setRoomDetails(roomDetails));
};

export const updateActiveRooms = (data: socketConnection.ActiveRooms) => {
  const { activeRooms } = data;

  const friends = store.getState().friends.friends;

  const rooms: IActiveRoom[] = [];

  const userId = store.getState().auth.userDetails?._id;
  const username = store.getState().auth.userDetails?.username as string;

  activeRooms.forEach((room) => {
    const isRoomCreatedByUser = room.roomCreator?.userId === userId;

    if (isRoomCreatedByUser) {
      rooms.push({ 
        ...room, 
        creatorUsername: username,
      });
    }

    friends.forEach(friend => {
      if (friend.id === room.roomCreator?.userId) {
        rooms.push({ 
          ...room, 
          creatorUsername: friend.username,
        });
      }
    });
  });
  
  store.dispatch(setActiveRooms(rooms));
};

export const joinRoom = (roomId: string) => {
  const successCallbackFunc = () => {
    store.dispatch(setRoomDetails({ roomId }));
    store.dispatch(setOpenRoom({
      isUserRoomCreator: false,
      isUserInRoom: true,
    }));

    const audioOnly = store.getState().room.audioOnly;
    store.dispatch(setIsUserJoinedWithoutVideo(audioOnly));

    socketConnection.joinRoom({ roomId });
  };

  const audioOnly = store.getState().room.audioOnly;

  webRTCHandler.getLocalStreamPreview(audioOnly, successCallbackFunc);
};

export const leaveRoom = () => {
  const roomId = store.getState().room.roomDetails?.roomId as string;

  const localStream = store.getState().room.localStream;

  if (localStream) {
    localStream.getTracks().forEach(track => track.stop());
    store.dispatch(setLocalStream(null));
  }

  const screenSharingStream = store.getState().room.screenSharingStream;
  if (screenSharingStream) {
    screenSharingStream.getTracks().forEach(track => track.stop());
    store.dispatch(setScreenSharingStream(null));
  }

  store.dispatch(setRemoteStreams([]));

  webRTCHandler.closeAllConnections();

  socketConnection.leaveRoom({ roomId });

  store.dispatch(setRoomDetails(null));
  store.dispatch(setOpenRoom({
    isUserRoomCreator: false,
    isUserInRoom: false,
  }));
};