import { combineReducers } from '@reduxjs/toolkit';
import alertReducer from './slices/alertSlice';
import authReducer from './slices/authSlice';
import chatReducer from './slices/chatSlice';
import friendsReducer from './slices/friendsSlice';
import roomReducer from './slices/roomSlice';


const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  friends: friendsReducer,
  chat: chatReducer,
  room: roomReducer,
});

export default rootReducer;