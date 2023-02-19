import { createAction } from '@reduxjs/toolkit';

export const chatTypes = {
  DIRECT: 'DIRECT',
  GROUP: 'GROUP',
};

export const setChosenChatDetails = createAction<any>('chat/chosenChatDetails');

export const setMessages = createAction<any>('chat/messages');

export const setChatType = createAction<any>('chat/chatType');

export const getChatActions = () => {
  return {
    setChosenChatDetails,
    setMessages,
    setChatType,
  };
};