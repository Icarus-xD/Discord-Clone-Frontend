import io, { Socket } from 'socket.io-client';
import { IUserDetails } from '../api';
import { updateDirectChatHistoryIfActive } from '../components/shared/utils/chat';
import { setFriends, setOnlineUsers, setPendingFriendsInvitations } from '../store/actions/friendsActions';
import { IRoomDetails } from '../store/actions/roomActions';
import store from '../store/store';
import { newRoomCreated, updateActiveRooms } from './roomHandler';
import { handleParticipantLeftRoom, handleSignalingData, ISignalData, prepareNewPeerConnection } from './webRTCHandler';

// let socket: Socket;
export interface IUser {
  socketId: string;
  userId: string;
}

interface IOnlineUsers {
  onlineUsers: IUser[];
}

export interface ActiveRoomDetails {
  roomDetails: IRoomDetails;
}

export interface ActiveRooms {
  activeRooms: IRoomDetails[];
}

interface IDirectMessage {
  receiverId: string;
  content: string;
}

interface RoomData {
  roomId: string;
}

interface ConnData {
  connUserSocketId: string;
}

let socket: Socket;

export const connectWithSocketServer = (userDetails: IUserDetails) => {

  const jwtToken = userDetails.token;

  socket = io('http://localhost:3001', {
    auth: {
      token: jwtToken,
    },
  });

  socket.on('connect', () => {
    console.log('Successfully connected with socket.io server');
    console.log(socket.id);
  });

  socket.on('friends-invitations', (data: any) => {
    const { pendingInvitations } = data;

    store.dispatch(setPendingFriendsInvitations(pendingInvitations));
  });

  socket.on('friends-list', (data: any) => {
    const { friends } = data;

    store.dispatch(setFriends(friends));
  });

  socket.on('online-users', (data: IOnlineUsers) => {
    const { onlineUsers } = data;

    store.dispatch(setOnlineUsers(onlineUsers));
  });

  socket.on('direct-chat-history', (data: any) => {
    updateDirectChatHistoryIfActive(data);
  });

  socket.on('room-create', (data: ActiveRoomDetails) => {
    newRoomCreated(data);
  });

  socket.on('active-rooms', (data: ActiveRooms) => {
    updateActiveRooms(data);
  });

  socket.on('conn-prepare', (data: ConnData) => {
    const { connUserSocketId } = data;
    prepareNewPeerConnection(connUserSocketId, false);

    socket.emit('conn-init', { connUserSocketId });
  })

  socket.on('conn-init', (data: ConnData) => {
    const { connUserSocketId } = data;

    prepareNewPeerConnection(connUserSocketId, true);
  });

  socket.on('conn-signal', (data: ISignalData) => {
    handleSignalingData(data);
  });

  socket.on('room-participant-left', (data: ConnData) => {
    handleParticipantLeftRoom(data.connUserSocketId);
  });
};

export const sendDirectMessage = (data: IDirectMessage) => {
  socket.emit('direct-message', data);
};

export const getDirectChatHistory = (data: any) => {
  socket.emit('direct-chat-history', data);
};

export const createNewRoom = () => {
  socket.emit('room-create');
};

export const joinRoom = (data: RoomData) => {
  socket.emit('room-join', data);
};

export const leaveRoom = (data: RoomData) => {
  socket.emit('room-leave', data);
};

export const signalPeerData = (data: ISignalData) => {
  socket.emit('conn-signal', data);
};