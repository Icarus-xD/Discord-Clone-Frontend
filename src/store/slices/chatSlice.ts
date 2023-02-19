import { createSlice } from '@reduxjs/toolkit';
import { getChatActions } from '../actions/chatActions';

const actions = getChatActions();

export interface IChatDetails {
  id: string;
  name: string;
}

export interface IMessage {
  _id: number;
  content: string;
  type: ChatType;
  author: { 
    _id: string,
    username: string,
  },
  date: string;
}

export type ChatType = 'DIRECT' | 'GROUP';

export interface ChatInitialState {
  chosenChatDetails: IChatDetails | null;
  chatType: ChatType | null;
  messages: IMessage[];
}

const initialState: ChatInitialState = {
  chosenChatDetails: null,
  chatType: null,
  messages: [],
};

const ChatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.setChosenChatDetails, (state, { payload }) => {
        state.chosenChatDetails = payload.chatDetails;
        state.chatType = payload.chatType;
        state.messages = [];
      })
      .addCase(actions.setMessages, (state, { payload }) => {
        state.messages = payload
      })
  },
});

const chatReducer = ChatSlice.reducer;

export default chatReducer;